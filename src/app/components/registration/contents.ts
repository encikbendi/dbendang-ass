import { EventTypes } from 'app/types/enums'
import BirdPoster from 'app/assets/meracikBurung.png'
import CartPoster from 'app/assets/keretaLembu.png'
import RunPoster from 'app/assets/funRun.png'
import FishingPoster from 'app/assets/memancing.png'
import VendorPoster from 'app/assets/vendor.png'

export const EVENT_SUMMARY: any = {
  [EventTypes.BIRD]: 'Tarikh: 24 November (Sabtu) 8.00 pagi\nYuran: Percuma',
  [EventTypes.CART]: 'Tarikh: 24 November (Sabtu) 8.00 pagi\nYuran: Percuma',
  [EventTypes.RUN]: 'Tarikh: 24 November (Sabtu) 8.00 pagi\nYuran: Percuma',
  [EventTypes.FISHING]: 'Tarikh: 24 November (Sabtu) 8.00 pagi\nYuran: Percuma',
  [EventTypes.VENDOR]: 'Tarikh: 24 November (Sabtu) 8.00 pagi\nYuran: Percuma'
}

export const POSTER_URLS: any = {
  [EventTypes.BIRD]: BirdPoster,
  [EventTypes.CART]: CartPoster,
  [EventTypes.RUN]: RunPoster,
  [EventTypes.FISHING]: FishingPoster,
  [EventTypes.VENDOR]: VendorPoster
}

export const EVENT_DESCRIPTION: any = {
  [EventTypes.BIRD]: 'Lorem ipsum meracik burung Lorem ipsum meracik burung Lorem ipsum meracik burung Lorem ipsum meracik burung Lorem ipsum meracik burung Lorem ipsum meracik burung Lorem ipsum meracik burung Lorem ipsum meracik burung Lorem ipsum meracik burung ',
  [EventTypes.CART]: 'Lorem ipsum kereta lembu Lorem ipsum kereta lembu Lorem ipsum kereta lembu Lorem ipsum kereta lembu Lorem ipsum kereta lembu Lorem ipsum kereta lembu Lorem ipsum kereta lembu ',
  [EventTypes.RUN]: 'Lorem ipsum fun run Lorem ipsum fun run Lorem ipsum fun run Lorem ipsum fun run Lorem ipsum fun run Lorem ipsum fun run Lorem ipsum fun run ',
  [EventTypes.FISHING]: 'Lorem ipsum memancing Lorem ipsum memancing Lorem ipsum memancing Lorem ipsum memancing Lorem ipsum memancing Lorem ipsum memancing Lorem ipsum memancing Lorem ipsum memancing Lorem ipsum memancing Lorem ipsum memancing Lorem ipsum memancing Lorem ipsum memancing',
  [EventTypes.VENDOR]: 'Lorem ipsum peniaga Lorem ipsum peniaga Lorem ipsum peniaga Lorem ipsum peniaga Lorem ipsum peniaga Lorem ipsum peniaga Lorem ipsum peniaga '
}
