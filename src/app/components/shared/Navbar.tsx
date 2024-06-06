import MenuOutlined from '@ant-design/icons/lib/icons/MenuOutlined'
import Button from 'antd/es/button'
import MobileNavMenu from 'app/components/shared/MobileNavMenu'
import NavMenu from 'app/components/shared/NavMenu'
import { useState } from 'react'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [isTop, setIsTop] = useState(true)

  window.onscroll = () => {
    if (window.scrollY > 50) {
      setIsTop(false)
    } else {
      setIsTop(true)
    }
  }

  return (
    <nav className={`w-screen transition-all ${isTop ? 'text-lg bg-white opacity-100' : 'text-sm'} py-2 fixed top-0 z-[100]`}>
      <div className="mx-auto justify-between w-4/5 px-10 md:flex hidden h-14">
        <div className='h-full flex justify-around gap-2'>
          <img className={`object-contain ${isTop ? 'p-0.5' : 'p-2'}`} src={'/logo.png'} alt="Logo D'bendang"/>
          <span className='self-center text-gray-500 font-sans'>{"D'Bendang Melaka"}</span>
        </div>
        <div className='py-4'>
          <NavMenu/>
        </div>
      </div>

      <div className="md:hidden flex flex-col">
        <div className='flex justify-between h-10 text-slate-700 items-center justify-between px-4 py-1'>
          <div className='h-full flex gap-1'>
            <img className="object-contain" src={'/logo.png'} alt="Logo D'bendang"/>
            <span className='text-sm self-center text-gray-500 font-sans'>{"D'Bendang Melaka"}</span>
          </div>
          <Button type='text' onClick={() => { setOpenMenu(!openMenu) }}>
            <MenuOutlined/>
          </Button>
        </div>
        <div className={`${openMenu ? 'block' : 'hidden'}`}>
          <MobileNavMenu/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
