import { Pages } from 'app/types/enums'
import { capitalize } from 'lodash'
import { useLocation, useNavigate } from 'react-router-dom'

const MobileNavMenu = () => {
  const navigate = useNavigate()
  const path = useLocation().pathname.replace('/', '')
  const menuItems = Object.values(Pages).map((page: Pages, index) => {
    return <li key={index} className={`cursor-pointer ${
      (path && path === page) || (!path && page === Pages.HOME)
        ? 'border-b-2 border-slate-400'
        : ''
    }`} onClick={() => { page !== Pages.HOME ? navigate(`/${page}`) : navigate('/') } }>{capitalize(page).replace('-', ' ')}</li>
  })

  return (
    <ul className="flex flex-col items-center gap-1 py-4">
      <div className='w-full flex flex-col gap-2 items-center'>
        {menuItems}
      </div>
    </ul>
  )
}

export default MobileNavMenu
