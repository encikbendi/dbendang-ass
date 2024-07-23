import { Collapse } from 'antd'

const FAQ = () => {
  return (
    <section className='mt-10 p-4 lg:px-16'>
      <h2 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl mb-4'>Soalan Lazim</h2>
      <Collapse defaultActiveKey={[]}>
        <Collapse.Panel header="Apa itu D'Bendang?" key="1">
          D&apos;Bendang ialah festival rakyat yang mana dalam menyatukan semua
          rakyat yang berbilang kaum dalam menyertai dan menonton sukan
          tradisional Malaysia dan juga terdapat banyak jualan serta pameran di
          dalam festival ini.
        </Collapse.Panel>
        <Collapse.Panel header="Di mana D'Bendang akan berlangsung?" key="2">
          Festival D&apos;Bendang Melaka akan mungkin menjadi festival tahunan
          dan diadakan di Kem Benteng Negara, Sungai Rambai, Melaka.
        </Collapse.Panel>
        <Collapse.Panel header="Bagaimana cara mendaftar sebagai peserta acara-acara D'Bendang?" key="3">
          Caranya mudah sahaja. anda perlu tekan butan &#39;Daftar&#39; dan pilih acara
          yang anda hendak sertai kemudian isi tempat kosong untuk keperluan
          pendaftar dan terus tekan &#39;Hantar&#39;.
        </Collapse.Panel>
      </Collapse>
    </section>
  )
}

export default FAQ
