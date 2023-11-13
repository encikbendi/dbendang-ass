import EventCTA from 'app/components/registration/EventCTA'
import EventForm from 'app/components/registration/EventForm'
import Navbar from 'app/components/shared/Navbar'
import config from 'app/config'
import useEventStore from 'app/stores/eventStore'
import { type EventNames } from 'app/types/enums'
import { useEffect } from 'react'
import { useParams } from 'react-router'

const EventPage = () => {
  const { type: paramType } = useParams()
  const { type, setType, setEvent, event } = useEventStore()

  useEffect(() => {
    setEvent(null)
    const eventType = paramType?.replace('-', ' ')
    if (!eventType || eventType === type?.toString()) {
      return
    }
    setType(eventType as EventNames)
  }, [paramType])

  const getEvent = async () => {
    const res = await fetch(`${config.gateway.baseUrl}/get-event`, {
      method: 'POST',
      body: JSON.stringify({
        name: type
      })
    })
    setEvent(await res.json())
  }

  useEffect(() => {
    if (!type) {
      return
    }
    getEvent()
  }, [type])

  if (!event) {
    return <></>
  }

  return (
    <div className='py-10 flex flex-col gap-10'>
      <Navbar />
      <EventCTA />
      {event?.category !== 'jbsn' && <EventForm />}
    </div>
  )
}

export default EventPage
