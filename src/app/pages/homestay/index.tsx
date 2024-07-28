import Homestay from 'app/components/homestay'
import { Footer } from 'app/components/shared/Footer'
import Navbar from 'app/components/shared/Navbar'

const HomestayPage = () => {
  return (
    <>
      <Navbar />
      <Homestay />
      <div className='mt-14' />
      <Footer />
    </>
  )
}

export default HomestayPage
