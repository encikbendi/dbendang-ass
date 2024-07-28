import { create } from 'zustand'

interface homestayState {
  homestay: string
  setHomestay: (homestay: string) => void
}

const useHomestayStore = create<homestayState>()((set) => ({
  homestay: '',
  setHomestay: (homestay) => { set(() => ({ homestay })) }
}))

export default useHomestayStore
