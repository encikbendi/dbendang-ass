import ArrowLeftOutlined from '@ant-design/icons/lib/icons/ArrowLeftOutlined'
import { Spin } from 'antd'
import lazyLoad from 'app/utils/retryLazyLoad'
import { Suspense, memo } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

const Fallback = () => {
  const navigate = useNavigate()
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <p className='text-4xl text-slate-500'>404</p>
      <p className='text-xl text-slate-500'>Tidak dijumpai</p>
      <button onClick={() => { navigate(-1) }} className='text-base buttony-3 px-6 py-2 rounded-xl border flex items-center gap-2 shadow-lg mt-10 text-slate-500 cursor-pointer hover:bg-slate-50'>
        <ArrowLeftOutlined /> Kembali ke halaman sebelumnya
      </button>
    </div>
  )
}

const Index = lazyLoad(async () => await import('app/pages/index'))
const Registration = lazyLoad(async () => await import ('app/pages/registration'))
const ContactUs = lazyLoad(async () => await import ('app/pages/contact'))
const EventPage = lazyLoad(async () => await import ('app/pages/events/index'))

const Router = memo(function routes (): any {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route index element={<Index />} />
          <Route path='/daftar' element={<Registration />}/>
          <Route path='/daftar/:type' element={<EventPage/>}/>
          <Route path='/hubungi-kami' element={<ContactUs />} />
          <Route path='*' element={<Fallback />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
})

export default Router
