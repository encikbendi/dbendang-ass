export const CTA = () => {
  return (
    <section className="bg-white my-10">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
            Sertai kami sebagai <span className="text-yellow-700">peniaga</span>
        </h2>

        <p className="max-w-4xl mt-6 text-center text-gray-500 text-lg">
          Di Karnival D&apos;Bendang, tapak-tapak untuk peniaga ada disediakan! Hubungi petugas kami untuk pertanyaan selanjutnya.
        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto">
          <a href="#" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-[#695849] rounded-lg hover:bg-[#7f6e5f] focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Daftar di sini
          </a>
        </div>
      </div>
    </section>
  )
}
