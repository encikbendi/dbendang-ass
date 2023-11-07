import { FacebookFilled, InstagramFilled } from '@ant-design/icons'

export const Footer = () => {
  return (
    <footer className="bg-white mt-10">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                {/* <img className="w-auto h-7" src="" alt=""/> */}
                <p >Logo di sini</p>
              </a>

              <p className="max-w-sm mt-2 text-gray-500">Ikuti kami di laman sosial berikut untuk perkembangan semasa.</p>

              <div className="flex -mx-2 mt-2">
                <a href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  aria-label="Instagram">
                  <InstagramFilled />
                </a>

                <a href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 "
                  aria-label="Facebook">
                  <FacebookFilled />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase">Acara</h3>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Senarai</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Jadual</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Cara mendaftar</a>
              </div>
              <div>
                <h3 className="text-gray-700 uppercase">Artikel</h3>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">{"D'Bendang"}</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Japerun</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none"/>

        <div>
          <p className="text-center text-gray-500">© Realisasi Sdn. Bhd.</p>
        </div>
      </div>
    </footer>
  )
}
