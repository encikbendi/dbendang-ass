import { Carousel } from 'antd'

export const Disokong = () => {
  const show = window.innerWidth <= 768
    ? 1
    : window.innerWidth <= 1024
      ? 3
      : 5

  return (
    <section className="pt-10" >
      <h2 className="min-w-full flex justify-center text-4xl font-semibold text-yellow-900 p-3">
            Disokong oleh
      </h2>
      <Carousel autoplay slidesToShow={show} className='gap-2' infinite pauseOnHover autoplaySpeed={1200} dots={false}>
        {

        }
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-1.jpeg'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-2.jpg'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-3.svg'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-4.png'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-5.png'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-6.png'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-7.png'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-8.jpg'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-9.jpeg'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-10.png'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-11.png'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-12.webp'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-13.png'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-14.png'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-15.jpeg'} alt="Logo Partner"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer mb-2 p-6 object-contain' src={'/partners-16.png'} alt="Logo Partner"/>
      </Carousel>
    </section>
  )
}
