const HomestaySmallCard = ({ name, no }: any) => {
  return (
    <a className="w-full font-semibold text-gray-800" href={`https://wa.me/${no}`} target={'whatsappTab'} >
      <button className="border shadow-md p-2 w-full mt-4 rounded-lg hover:bg-gray-100">
        {name.replaceAll('_', ' ')}
      </button>
    </a>
  )
}

export default HomestaySmallCard
