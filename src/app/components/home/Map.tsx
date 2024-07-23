import { GoogleOutlined } from '@ant-design/icons'
import { WazeOutlined } from 'app/icons/Waze'

const Map = () => {
  const gmapslink = 'https://www.google.com/maps/place/2%C2%B010\'05.5%22N+102%C2%B030\'12.6%22E/@2.1679793,102.5007187,16.62z/data=!4m4!3m3!8m2!3d2.1681872!4d102.5034989?entry=ttu'
  const wazelink = 'https://waze.com/ul/hw22ukd8tu'

  return (
    <section className='py-20'>
      <div className='lg:h-[500px] flex flex-col-reverse lg:flex-row justify-center gap-4 px-8'>
        <img src='/map.jpg' className='object-cover rounded-lg' />
        <div className='flex flex-col items-center lg:items-start'>
          <h2 className="min-w-full flex justify-center md:text-4xl text-2xl font-semibold text-yellow-900 p-3">
          Jumpa di sana!
          </h2>
          <a className='text-lg font-semibold items-center mx-2 px-2 py-2 rounded-lg cursor-pointer' href={gmapslink} target='_blank' rel="noreferrer">
            <GoogleOutlined />
            <span className='ml-2 rounded-lg'>
              Google Maps
            </span>
          </a>
          <a className='flex text-lg font-semibold items-center mx-2 px-2 py-2 rounded-lg cursor-pointer' href={wazelink} target='_blank' rel="noreferrer">
            <WazeOutlined className='w-5'/>
            <span className='ml-2 rounded-lg'>
              Waze
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Map
