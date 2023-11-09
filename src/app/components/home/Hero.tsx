import HeroImage from 'app/assets/heroImage.png'
import Headline from 'app/assets/headline.png'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isRendered, setIsRendered] = useState(false)
  useEffect(() => { setIsRendered(true) }, [])

  return (
    <div className="bg-slate-100 min-w-screen pt-24 -mt-20">
      <div className="bg-white relative w-full h-[400px] lg:h-[500px] mx-auto shadow-md rounded-lg">
        <img src={HeroImage} className='blur-sm h-full w-full m-auto object-cover'/>
        <div className='md:relative -top-[750px]  -mt-[280px]'>
          <img src={Headline} className={`absolute top-0 object-contain transition-scale duration-500 delay-500 ${isRendered ? 'scale-75 lg:scale-50 ' : 'scale-0 '}`} alt="D'bendang title" />
        </div>
      </div>
    </div>

  )
}

export default Hero
