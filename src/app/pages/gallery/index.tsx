import Gallery from 'app/components/home/Gallery'
import { Footer } from 'app/components/shared/Footer'
import Navbar from 'app/components/shared/Navbar'

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <div className='mt-14' />
      <Gallery />
      <Footer />
    </>
  )
}

export default GalleryPage
