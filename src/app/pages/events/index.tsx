import EventCTA from 'app/components/registration/EventCTA'
// import EventForm from 'app/components/registration/EventForm'
import Navbar from 'app/components/shared/Navbar'
import useEventStore from 'app/stores/eventStore'
import { type EventTypes } from 'app/types/enums'
import { useEffect } from 'react'
import { useParams } from 'react-router'

const EventPage = () => {
  const { type: paramType } = useParams()
  const { type, setType } = useEventStore()

  if (!paramType) return <></>

  useEffect(() => {
    const eventType = paramType?.replace('-', ' ')
    if (!eventType || eventType === type?.toString()) {
      return
    }
    setType(eventType as EventTypes)
  }, [paramType])

  return (
    <div className='py-10 flex flex-col gap-10'>
      <Navbar />
      <EventCTA />
      {/* <EventForm /> */}
    </div>
  )
}

export default EventPage
