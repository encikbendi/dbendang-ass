import Search from 'antd/es/input/Search'
import EventCard from 'app/components/registration/EventCard'
import Navbar from 'app/components/shared/Navbar'
import config from 'app/config'
import { type Event } from 'app/types/types'
import { useEffect, useState } from 'react'

const Registration = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [data, setData] = useState<Event[]>([])
  const [search, setSearch] = useState<string>('')

  const getEvents = async () => {
    const res = await fetch(`${config.gateway.baseUrl}/get-events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: config.gateway.token })
    })
    const e = await res.json()
    setData(e)
  }

  useEffect(() => {
    getEvents()
  }, [])

  useEffect(() => {
    if (search === '') {
      setEvents(data)
    } else {
      setEvents(data.filter((event) => event.name.toLowerCase().includes(search.toLowerCase())))
    }
  }, [search, data])

  console.log('events ====>', JSON.stringify(events, undefined, 2))

  return (
    <div className='bg-slate-200 min-h-screen py-20'>
      <Navbar />
      <div className='w-1/3 m-auto mb-4'>
        <Search placeholder='Cari acara' onChange={(e) => { setSearch(e.target.value) }}/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 flex-wrap justify-around w-4/5 m-auto'>
        {
          events?.map((event: Event) => {
            return (
              <EventCard key={event.name} event={event.name}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Registration
