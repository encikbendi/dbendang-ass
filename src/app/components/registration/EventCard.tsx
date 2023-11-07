import { EVENT_SUMMARY, POSTER_URLS } from 'app/components/registration/contents'
import { type EventTypes } from 'app/types/enums'
import { useNavigate } from 'react-router'

interface Props {
  event: EventTypes
}

const EventCard = ({ event }: Props) => {
  const navigate = useNavigate()
  const handleClick = (event: EventTypes) => {
    navigate(`/daftar/${event.replaceAll(' ', '-')}`)
  }
  return (

    <div key={event} className='border bg-white shadow-md rounded-xl p-4 flex flex-col items-center overflow-hidden'>
      <img src={POSTER_URLS[event]} className='h-[200px] m-auto object-cover rounded-full'/>
      <span className='font-semibold my-2'>{event}</span>
      <p className='whitespace-pre-wrap text-center'>
        {EVENT_SUMMARY[event]}
      </p>
      <button className='border rounded-xl px-4 py-2 my-2 shadow-md border-slate-100' onClick={() => { handleClick(event) }}>Daftar</button>
    </div>
  )
}

export default EventCard
