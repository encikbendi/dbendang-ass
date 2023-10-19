import MenuOutlined from '@ant-design/icons/lib/icons/MenuOutlined'
import NavMenu from 'app/components/shared/NavMenu'

const Navbar = () => {
  return (
    <nav className="w-screen bg-white border">
      <div className="mx-auto justify-between w-4/5 py-4 px-10 md:flex hidden">
        Logo here
        <NavMenu/>
      </div>

      <div className="md:hidden block h-10 text-slate-700 flex items-center justify-between p-4">
        Logo here
        <MenuOutlined/>
      </div>
    </nav>
  )
}

export default Navbar
