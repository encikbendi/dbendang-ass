import { type EventNames, type EventType } from 'app/types/enums'

export interface User {
  username: string
}

export interface Event {
  _id: any
  name: EventNames
  pic: string
  phone: string
  type: EventType
  members: number
  playerLimit: number
  fee: number
  category: string
  gender: string
}
