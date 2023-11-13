import { type EventNames } from 'app/types/enums'
import { create } from 'zustand'
import { type MutableRefObject } from 'react'
import { type Event } from 'app/types/types'

interface EventState {
  type: EventNames | null
  setType: (newType: EventNames) => void
  formRef: MutableRefObject<any>
  setFormRef: (ref: any) => void
  event: Event | null
  setEvent: (e: Event | null) => void
}

const useEventStore = create<EventState>()((set) => ({
  type: null,
  setType: (newType) => { set(() => ({ type: newType })) },
  formRef: { current: null },
  setFormRef: (newRef) => { set(() => ({ formRef: newRef })) },
  event: null,
  setEvent: (e) => { set(() => ({ event: e })) }
}))

export default useEventStore
