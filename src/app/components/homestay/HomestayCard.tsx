import { Button } from 'antd'
import useHomestayStore from 'app/stores/homestayStore'

const HomestayCard = ({ name }: any) => {
  const { setHomestay } = useHomestayStore()

  if (!name) {
    return <></>
  }

  return (
    <div
      className="flex items-end overflow-hidden bg-cover rounded-lg h-[400px]"
      style={{
        backgroundImage: `url("/${name}-cover.jpg")`
      }}
    >
      <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60">
        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">
          { name.replaceAll('_', ' ') }
        </h2>
        <Button style={{ backgroundColor: 'white', marginTop: 16 }} size='large' type='default' onClick={() => { setHomestay(name) }}>Lihat</Button>
      </div>
    </div>
  )
}

export default HomestayCard
