import { DownCircleOutlined } from '@ant-design/icons'
import Modal from 'antd/es/modal/Modal'
import { EVENT_DESCRIPTION, EVENT_SUMMARY, POSTER_URLS } from 'app/components/registration/contents'
import useEventStore from 'app/stores/eventStore'
import { useState } from 'react'

const EventCTA = () => {
  const { type, formRef } = useEventStore()
  const [openModal, setOpenModal] = useState(false)
  if (!type) {
    return <>Not Found..</>
  }
  const [content, summary, photo] = [EVENT_DESCRIPTION[type], EVENT_SUMMARY[type], POSTER_URLS[type]]

  const handleClick = () => {
    setOpenModal(true)
    if (formRef?.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="lg:py-12 lg:flex bg-slate-200 lg:justify-center">
      <Modal title='Notis' open={openModal} onOk={() => { setOpenModal(false) }} closeIcon={null} cancelButtonProps={{ hidden: true }} okButtonProps={{ type: 'default' }}>
        Harap maaf, pendaftaran akan dibuka pada Selasa 14 November 2023, jam 9.00 pagi.
      </Modal>
      <div
        className="overflow-hidden  bg-white lg:mx-8 lg:flex lg:max-w-6xl lg:w-full  lg:rounded-xl">
        <div className="lg:w-1/2">
          <div className="h-64 lg:h-full">
            <img className='object-cover m-auto h-64 lg:h-full' src={photo} />
          </div>
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
                Acara <span className="text-green-700">{type}</span>
          </h2>

          <p className="mt-4 text-gray-500 ">
            {content}
          </p>

          <p className="whitespace-pre-wrap mt-4 text-gray-500 ">
            {summary}
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <button
              onClick={handleClick}
              className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              <span className='text-lg flex gap-4 items-center'>Daftar sekarang <DownCircleOutlined /></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventCTA
