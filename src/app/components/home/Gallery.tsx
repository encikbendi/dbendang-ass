const Gallery = () => {
  const imageCount = 12
  const images = Array.from({ length: imageCount }, (_, i) => i + 1)
  return (
    <section className="bg-white">
      <div className="container px-8 lg:px-16 py-10 mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Galeri D&apos;Bendang</h2>
        <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-12 xl:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {
            images.map((image) => (
              <div key={image} className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-gallery-1">
                <img src={`/gallery-${image}.jpeg`} className='object-cover w-full h-96 rounded-lg' alt='gallery' />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Gallery
