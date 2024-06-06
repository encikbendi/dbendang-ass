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
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
        <img width={120} height={120} className='hover:opacity-70 cursor-pointer rounded-full mb-2 p-6 object-contain' src={'/dummyLogo.jpg'} alt="Logo D'bendang"/>
      </Carousel>
    </section>
  )
}
