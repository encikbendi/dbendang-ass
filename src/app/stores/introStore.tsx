import { create } from 'zustand'

interface IntroState {
  introDone: boolean
  setIntroDone: (introDone: boolean) => void
}

const useIntroStore = create<IntroState>()((set) => ({
  introDone: false,
  setIntroDone: (introDone) => { set(() => ({ introDone })) }
}))

export default useIntroStore
