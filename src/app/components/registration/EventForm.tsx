import { Modal, Select, message } from 'antd'
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined'
import Button from 'antd/es/button'
import Form from 'antd/es/form'
import Input from 'antd/es/input/Input'
import useEventStore from 'app/stores/eventStore'
import { isEmpty } from 'lodash'
import { useEffect, useRef, useState } from 'react'
import config from 'app/config'
import { useNavigate } from 'react-router-dom'

const EventForm = () => {
  const [form] = Form.useForm()
  const fRef = useRef<any>(null)
  const addRef = useRef<any>(null)
  const values = form.getFieldsValue()
  const { formRef, setFormRef, event } = useEventStore()
  const navigate = useNavigate()
  const [openFinishDialog, setOpenFinishDialog] = useState(false)
  const [waLink, setWaLink] = useState('')

  useEffect(() => {
    if (!fRef || fRef.current === formRef?.current) {
      return
    }

    setFormRef(fRef)
  }, [fRef])

  useEffect(() => {
    if (isEmpty(values) && addRef.current) {
      addRef.current.click()
    }
  }, [values])

  const onClick = () => {
    const values = form.getFieldsValue()
    if (values.participants.length < (event?.members || 1)) {
      message.error(`Acara ini memerlukan ${event?.members} peserta.`)
      return
    }

    for (const i in values.participants) {
      const participant = values.participants[i]
      if (!participant) {
        message.error(`Sila isikan maklumat peserta ${Number(i) + 1}`)
        return
      }
      if (!participant.name) {
        message.error(`Sila isikan nama peserta ${Number(i) + 1}`)
        return
      }
      if (!participant.kp) {
        message.error(`Sila isikan No. KP peserta ${Number(i) + 1}`)
        return
      }
      if (!participant.phone) {
        message.error(`Sila isikan No. Telefon peserta ${Number(i) + 1}`)
        return
      }
      if (!participant.dun) {
        message.error(`Sila isikan kawasan DUN peserta ${Number(i) + 1}`)
        return
      }
    }

    try {
      fetch(`${config.gateway.baseUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...values, event: event?.name })
      })
      const params = encodeURIComponent(`Pendaftaran bagi ${values.participants[0].name}, untuk acara ${event?.name}.\nNo KP: ${values.participants[0].kp}`)
      setWaLink(`https://wa.me/${event?.phone}/?text=${params || ''}`)
      setOpenFinishDialog(true)
    } catch {
      message.error('Gagal menghantar')
    }
  }

  return (
    <div ref={fRef} className='bg-white w-4/5 max-w-[600px] m-auto p-4 flex flex-col rounded-lg border border-slate-200 shadow-md'>
      <Modal title='Pendaftaran berjaya' destroyOnClose onOk={() => { navigate(-1) }} open={openFinishDialog} onCancel={() => { setOpenFinishDialog(false) }}
        cancelButtonProps={{ hidden: true }} okButtonProps={{ type: 'default' }}
      >
        {
          event?.link?.url
            ? (
              <a href={event?.link?.url} target='outlinkTab' className='text-blue-600'>
                {event?.link?.text || 'Klik di sini'}
                <br />
                <br />
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${event?.link?.url}`} alt='QR Code' />
              </a>)
            : (
              <a href={waLink} target='whatsappTab' className='text-blue-600'>
                Klik di sini untuk ke Whatsapp petugas.
              </a>)}
      </Modal>
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 40 }} form={form}>
        <Form.List name="participants">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <div key={key} className='flex flex-col gap-2 items-baseline'>
                  <div className='flex justify-between w-full items-center'>
                    Peserta {index + 1}
                    <Button onClick={() => { fields.length > 1 && remove(index) }} type='text' className='text-red-600'>
                        Buang
                    </Button>
                  </div>
                  <div className='flex flex-col w-full'>
                    <Form.Item
                      {...restField}
                      name={[name, 'name']}
                      rules={[{ required: true, message: 'Sila isikan nama peserta' }]}
                    >
                      <Input placeholder="Nama" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'kp']}
                      className='grow'
                      rules={[{ required: true, message: 'Sila isikan No. KP peserta' }]}
                    >
                      <Input placeholder="No. KP" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'phone']}
                      className='grow'
                      rules={[{ required: true, message: 'Sila isikan No. Telefon peserta' }]}
                    >
                      <Input placeholder="No. Tel" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'dun']}
                      className='grow'
                      rules={[{ required: true, message: 'Sila isikan kawasan DUN anda' }]}
                    >
                      <Select placeholder="DUN" options={[
                        {
                          label: 'Sg. Rambai',
                          value: 'rambai'
                        },
                        {
                          label: 'Bemban',
                          value: 'bemban'
                        },
                        {
                          label: 'Rim',
                          value: 'rim'
                        },
                        {
                          label: 'Serkam',
                          value: 'serkam'
                        },
                        {
                          label: 'Merlimau',
                          value: 'merlimau'
                        },
                        {
                          label: 'Lain-lain',
                          value: 'lain'
                        }
                      ]}/>
                    </Form.Item>
                  </div>
                </div>
              ))}
              {(fields.length < (event?.members || 1)) &&
              <Form.Item>
                <Button ref={addRef} type="dashed" onClick={() => { add() }} block icon={<PlusOutlined />}>
                    Tambah peserta
                </Button>
              </Form.Item>}
            </>
          )}
        </Form.List>
      </Form>
      <Button className='m-auto' type="default" onClick={onClick}>
        Daftar
      </Button>
    </div>
  )
}

export default EventForm
