import { DownCircleOutlined } from '@ant-design/icons'
import { POSTER_URLS } from 'app/components/registration/contents'
import useEventStore from 'app/stores/eventStore'
import { EventType } from 'app/types/enums'

const EventCTA = () => {
  const { type, formRef, event } = useEventStore()
  if (!type) {
    return <>Not Found..</>
  }
  const [photo] = [POSTER_URLS[type]]

  const handleClick = () => {
    if (formRef?.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="lg:py-12 lg:flex bg-slate-200 lg:justify-center">
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

          {
            event?.fee && (
              <p className="whitespace-pre-wrap mt-4 text-gray-500 ">
                Yuran: {event?.fee}
              </p>
            )
          }
          {
            event?.pic && (
              <p className="whitespace-pre-wrap mt-4 text-gray-500 ">
                Petugas: {event?.pic}
              </p>
            )
          }
          {
            event?.phone && (
              <p className="whitespace-pre-wrap mt-4 text-gray-500 ">
                Whatsapp: <a className='text-green-700' target='whatsappTab' href={`https://wa.me/${event?.phone}`}>{event?.phone} {'<- Klik di sini'}</a>
              </p>
            )
          }
          {
            event?.type && (
              <p className="whitespace-pre-wrap mt-4 text-gray-500 ">
                Jenis Penyertaan: {event?.type === EventType.IND ? 'Individu' : event?.type === EventType.GRP ? `Berkumpulan ${event.members ? `${event.members} orang` : ''}` : '' }
              </p>
            )
          }
          {
            event?.playerLimit && (
              <p className="whitespace-pre-wrap mt-4 text-gray-500 ">
                Had peserta: {event?.playerLimit} orang
              </p>
            )
          }
          {
            event?.gender && (
              <p className="whitespace-pre-wrap mt-4 text-gray-500 ">
                Hanya untuk peserta {event?.gender} sahaja
              </p>
            )
          }
          {
            event?.category && event?.category === 'jbsn'
              ? <p className="whitespace-pre-wrap mt-4 text-gray-500 ">
                Sila ke laman web JBSN
              </p>
              : <div className="inline-flex w-full mt-6 sm:w-auto">
                <button
                  onClick={handleClick}
                  className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  <span className='text-lg flex gap-4 items-center'>Daftar sekarang <DownCircleOutlined /></span>
                </button>
              </div>
          }
        </div>
      </div>
    </section>
  )
}

export default EventCTA
