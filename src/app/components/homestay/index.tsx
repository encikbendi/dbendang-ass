import { Carousel, Modal } from 'antd'
import HomestayCard from 'app/components/homestay/HomestayCard'
import useHomestayStore from 'app/stores/homestayStore'
import HomestaySmallCard from 'app/components/homestay/HomestaySmallCard'

const Homestay = () => {
  const { homestay, setHomestay } = useHomestayStore()
  const CONTACTNO: any = {
    'A@A_HOMESTAY': '+60166097531',
    "D'RIMBUN_DAMAI": '+601120515124',
    "HOMESTAY_K'MIDON": '+60126966995',
    "HOMESTAY_LEN_D'VILLAGE": '+60136185824',
    HOMESTAY_SERI_MUTIARA: '+60125394943',
    MAK_WAN_NINA: '+60166643703',
    MY_HOMESTAY: '+60126436903',
    KEM_MODAL_INSAN: '+60196442380',
    HALAMAN_CIKGU_BIDAH: '+60137785534',
    ZAINAL_BINTI_BESAH: '+60162209244',
    HOMESTAY_PAK_ABU: '+60196479971',
    "HOMESTAY_D'_AL-AMIN": '+60197852714',
    PARIT_PERAWAS: '+60193920862'
  }

  return (
    <div className="">
      <Modal open={ !!homestay } okButtonProps={{ hidden: true }} cancelText='Tutup' onCancel={() => { setHomestay('') }}>
        <div className='flex flex-col items-center gap-4 lg:hidden'>
          <div className='w-full bg-white p-4 rounded-lg shadow-md'>
            <Carousel className='lg-hidden' slidesToShow={1} infinite pauseOnHover dots={true}>
              <img className='object-contain h-96 w-full' src={`/${homestay}-cover.jpg`} alt="Homestay"/>
              <img className='object-contain h-96 w-full' src={`/${homestay}-1.jpg`} alt="Homestay"/>
              <img className='object-contain h-96 w-full' src={`/${homestay}-2.jpg`} alt="Homestay"/>
              <img className='object-contain h-96 w-full' src={`/${homestay}-3.jpg`} alt="Homestay"/>
            </Carousel>
            <div className='flex flex-col items-center'>
              <h2 className='text-2xl font-semibold text-gray-600 capitalize my-5'>{homestay.replaceAll('D_', "D'").replaceAll('_', ' ')}</h2>
              <button className='border rounded-lg py-2 px-4 bg-green-700 text-gray-200 font-lg' >
                <a href={`https://wa.me/${CONTACTNO[homestay]}`} target={'whatsappTab'} onClick={() => { setHomestay('') }}>
                    Hubungi
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center gap-4 lg:block hidden'>
          <div className='w-full bg-white p-4 rounded-lg shadow-md'>
            <Carousel className='lg-hidden' slidesToShow={2} autoplay autoplaySpeed={1500} infinite pauseOnHover dots={true}>
              <img className='object-cover h-96 w-full' src={`/${homestay}-cover.jpg`} alt="Homestay"/>
              <img className='object-cover h-96 w-full' src={`/${homestay}-1.jpg`} alt="Homestay"/>
              <img className='object-cover h-96 w-full' src={`/${homestay}-2.jpg`} alt="Homestay"/>
              <img className='object-cover h-96 w-full' src={`/${homestay}-3.jpg`} alt="Homestay"/>
            </Carousel>
            <div className='flex flex-col items-center'>
              <h2 className='text-2xl font-semibold text-gray-600 capitalize my-5'>{homestay.replaceAll('D_', "D'").replaceAll('_', ' ')}</h2>
              <button className='border rounded-lg py-2 px-4 bg-green-700 text-gray-200 font-lg' >
                <a href={`https://wa.me/${CONTACTNO[homestay]}`} target={'whatsappTab'} onClick={() => { setHomestay('') }}>
                  Hubungi
                </a>
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
            <HomestayCard name='A@A_HOMESTAY' />
            <HomestayCard name="D'RIMBUN_DAMAI"/>
            <HomestayCard name="HOMESTAY_K'MIDON"/>
            <HomestayCard name="HOMESTAY_LEN_D'VILLAGE"/>
            <HomestayCard name='HOMESTAY_SERI_MUTIARA'/>
            <HomestayCard name='MAK_WAN_NINA'/>
          </div>
          <div className='grid lg:grid-cols-4 gap-x-10 gap-y-4 mt-4'>
            <HomestaySmallCard name='MY_HOMESTAY' no={CONTACTNO.MY_HOMESTAY}/>
            <HomestaySmallCard name='KEM_MODAL_INSAN' no={CONTACTNO.KEM_MODAL_INSAN}/>
            <HomestaySmallCard name='HALAMAN_CIKGU_BIDAH' no={CONTACTNO.HALAMAN_CIKGU_BIDAH}/>
            <HomestaySmallCard name='ZAINAL_BINTI_BESAH' no={CONTACTNO.ZAINAL_BINTI_BESAH}/>
            <HomestaySmallCard name='HOMESTAY_PAK_ABU' no={CONTACTNO.HOMESTAY_PAK_ABU}/>
            <HomestaySmallCard name="HOMESTAY_D'_AL-AMIN" no={CONTACTNO["HOMESTAY_D'_AL-AMIN"]}/>
            <HomestaySmallCard name='PARIT_PERAWAS' no={CONTACTNO.PARIT_PERAWAS}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homestay
