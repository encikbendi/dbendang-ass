import { message } from 'antd'
import Button from 'antd/es/button'
import Form from 'antd/es/form'
import Input from 'antd/es/input/Input'
import TextArea from 'antd/es/input/TextArea'

const ContactForm = () => {
  const [form] = Form.useForm()

  const onClick = () => {
    try {
      const values = form.getFieldsValue()
      console.log('val => ', values)
      message.success('Terima kasih kerana menghubungi kami')
    } catch {
      message.error('Gagal menghantar')
    }
  }

  return (
    <div className='bg-white w-4/5 max-w-[450px] p-4 flex flex-col rounded-lg border border-slate-200 shadow-md'>
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 40 }} form={form}>
        <Form.Item name='name' label='Nama'>
          <Input placeholder="Nama penuh seperti di dalam K/P"/>
        </Form.Item>
        <Form.Item name='kp' label='No K/P'>
          <Input placeholder="Contoh: 010101040101"/>
        </Form.Item>
        <Form.Item name='phone' label='No. Telefon'>
          <Input placeholder="Contoh: 0123456789"/>
        </Form.Item>
        <Form.Item name='query' label='Pertanyaan'>
          <TextArea />
        </Form.Item>
        <div className='flex justify-center'>
          <Button onClick={onClick} className='self-center' type='default' >Hantar</Button>
        </div>
      </Form>
    </div>
  )
}

export default ContactForm
