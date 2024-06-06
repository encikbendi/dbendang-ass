import { CTA } from 'app/components/home/CTA'
import { Disokong } from 'app/components/home/Disokong'
import FAQ from 'app/components/home/FAQ'
import Hero from 'app/components/home/Hero'
import Map from 'app/components/home/Map'
import Promo from 'app/components/home/Promo'
import { Footer } from 'app/components/shared/Footer'
import Navbar from 'app/components/shared/Navbar'
import { useDebounce } from 'app/hooks/useDebounce'
import useIntroStore from 'app/stores/introStore'
import { useEffect, useState } from 'react'

const Index = () => {
  const { introDone, setIntroDone } = useIntroStore()
  const fullName = "D'Bendang"
  const [currentName, setCurrentName] = useState<string>('')
  const debouncedCurrentName = useDebounce(currentName, 100)

  useEffect(() => {
    if (debouncedCurrentName === fullName) return
    const letter = fullName[debouncedCurrentName.length]
    setCurrentName(`${currentName}${letter}`)
  }, [debouncedCurrentName])

  const isFullname = useDebounce(currentName === fullName, 500)

  useEffect(() => {
    if (isFullname) {
      setIntroDone(true)
    }
  }, [isFullname])

  return (
    isFullname || introDone
      ? (
        <div className="min-w-screen min-h-screen">
          <img src="/batik.jpg" className="w-full h-full object-cover fixed top-0 left-0 z-0" />
          <Navbar />
          <div className='w-4/5 mx-auto bg-white relative'>
            <Hero />
            <CTA />
            <Promo />
            <Disokong/>
            <FAQ />
            <Map />
            <Footer />
          </div>
        </div>)
      : (
        <div className='bg-gray-600 flex justify-center items-center h-screen w-full text-white font-bold font-serif text-4xl lg:text-6xl pt-10'>
          <p className={`transition-scale duration-500 ${currentName === fullName ? 'scale-0' : 'scale-100'}`}>{currentName}</p>
          <p className='scale-100 bg-white text-black'>{fullName[currentName.length]}</p>
        </div>)
  )
}

export default Index
