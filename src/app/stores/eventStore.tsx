import { type EventTypes } from 'app/types/enums'
import { create } from 'zustand'
import { type MutableRefObject } from 'react'

interface EventState {
  type: EventTypes | null
  setType: (newType: EventTypes) => void
  formRef: MutableRefObject<any>
  setFormRef: (ref: any) => void
}

const useEventStore = create<EventState>()((set) => ({
  type: null,
  setType: (newType) => { set(() => ({ type: newType })) },
  formRef: { current: null },
  setFormRef: (newRef) => { set(() => ({ formRef: newRef })) }
}))

export default useEventStore
