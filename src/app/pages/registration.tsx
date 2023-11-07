import EventCard from 'app/components/registration/EventCard'
import Navbar from 'app/components/shared/Navbar'
import { EventTypes } from 'app/types/enums'

const Registration = () => {
  return (
    <div className='bg-slate-200 min-h-screen py-20'>
      <Navbar />
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 flex-wrap justify-around w-4/5 m-auto'>
        {
          Object.values(EventTypes).map((event: EventTypes) => {
            return (
              <EventCard key={event} event={event}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Registration
