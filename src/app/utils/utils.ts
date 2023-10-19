import format from 'date-fns/esm/format'
import isSameDay from 'date-fns/esm/isSameDay'
import isSameMonth from 'date-fns/esm/isSameMonth'
import isSameYear from 'date-fns/esm/isSameYear'
import isArray from 'lodash/isArray'
import { customAlphabet } from 'nanoid'
import parse from 'date-fns/esm/parse'
import isValid from 'date-fns/isValid'

export const nanoIdRegex = /^[0-9a-zA-Z]{10}$/
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 10)

export const isNanoId = (input: any) => {
  return nanoIdRegex.test(input)
}

export const genNanoId = () => {
  return nanoid()
}

export const toLetters = (num: number): string => {
  const mod = num % 26
  let pow = (num / 26) | 0
  const out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z')

  return pow ? toLetters(pow) + out : out
}

export const enumToArr = (enumObj: any) => {
  return Object.keys(enumObj).map((key) => enumObj[key])
}

export const isISODateString = (s: string) => {
  try {
    const date = new Date(s)
    return isValid(date) && s === date.toISOString()
  } catch (err) {
    return false
  }
}

export const getActTime = (time: string | Date, isDetail: boolean = false) => {
  if (!time) return '-'

  if (typeof time === 'string') {
    time = new Date(time)
  }
  if (isDetail) {
    return format(time, 'dd/MM/yyyy HH:mm')
  }

  if (isSameDay(time, new Date())) {
    return format(time, 'HH:mm')
  } else if (isSameMonth(time, new Date())) {
    return format(time, 'd MMM HH:mm')
  } else if (isSameYear(time, new Date())) {
    return format(time, 'd MMM HH:mm')
  } else {
    return format(time, 'd MMM yy HH:mm')
  }
}

export const getTimeFromActTime = (timeStr: string) => {
  const splitString = timeStr.split(' ')
  let timeFormat = 'HH:mm'
  if (splitString.length === 2) {
    timeFormat = 'do HH:mm'
  } else if (splitString.length === 3) {
    timeFormat = 'do MMM HH:mm'
  } else if (splitString.length === 4) {
    timeFormat = 'do MMM yy HH:mm'
  }
  return parse(timeStr, timeFormat, new Date())
}

export const getActDate = (time: string | Date, isDetail: boolean = false) => {
  if (!time) return '-'

  if (typeof time === 'string') {
    time = new Date(time)
  }
  if (isDetail) {
    return format(time, 'dd/MM/yyyy')
  }

  if (isSameDay(time, new Date())) {
    return format(time, 'do')
  } else if (isSameMonth(time, new Date())) {
    return format(time, 'do')
  } else if (isSameYear(time, new Date())) {
    return format(time, 'do MMM')
  } else {
    return format(time, 'do MMM yy')
  }
}

export const unifyTag = (tag: string) => {
  return tag.replace(/[\s/]/g, '').toUpperCase()
}

export const parseGqlErrors = (err: any) => {
  if (!err) return ''

  if (err.graphQLErrors && err.graphQLErrors.length > 0) {
    const arr = err.graphQLErrors.map((error: any) => {
      return `${error.message}${error.path ? ` ${error.path.join('.')}` : ''}`
    })

    return arr.join(', ')
  } else if (isArray(err) && err.length > 0) {
    const arr = err.map((error: any) => {
      return `${error.message}${error.path ? ` ${error.path.join('.')}` : ''}`
    })
    return arr.join(', ')
  } else if (err.message) {
    return err.message
  } else {
    return err.toString()
  }
}

export const isValidContainerNumber = (num: string) => {
  if (!num) return true // empty is valid container for imports

  let t
  let sum = 0
  const containerCharLookup: any = {
    A: 10,
    B: 12,
    C: 13,
    D: 14,
    E: 15,
    F: 16,
    G: 17,
    H: 18,
    I: 19,
    J: 20,
    K: 21,
    L: 23,
    M: 24,
    N: 25,
    O: 26,
    P: 27,
    Q: 28,
    R: 29,
    S: 30,
    T: 31,
    U: 32,
    V: 34,
    W: 35,
    X: 36,
    Y: 37,
    Z: 38
  }

  const newNum = num.replace(' ', '').toUpperCase()

  if (newNum.length !== 11) return false

  for (let i = 0; i < 10; i++) {
    if (/[A-Z]/.test(newNum[i])) {
      t = containerCharLookup[newNum[i]]
    } else if (/[0-9]/.test(newNum[i])) {
      t = newNum[i]
    }
    sum += t * Math.pow(2, i)
  }

  return Number((sum % 11) % 10) === Number(newNum[10])
}

export const isValidPhoneNumber = (phoneNumber: string) => {
  return /^01[0123456789]\d{7,9}$/.test(phoneNumber)
}

export const convertToShortHumanizeDate = (str: string) => {
  str = str.replace('a few seconds', ' secs.')

  str = str.replace(' minutes', 'min')
  str = str.replace('1 minute', ' 1min')
  str = str.replace('a minute', ' 1min')

  str = str.replace(' hours', 'h')
  str = str.replace('1 hour', ' 1h')
  str = str.replace('an hour', ' 1h')

  str = str.replace(' days', 'd')
  str = str.replace('1 day', ' 1d')
  str = str.replace('a day', ' 1d')

  str = str.replace(' months', 'm')
  str = str.replace('1 month', ' 1m')
  str = str.replace('a month', ' 1m')

  str = str.replace(' years', 'y')
  str = str.replace('1 year', ' 1y')
  str = str.replace('a year', ' 1y')

  str = str.replace('less than', '')
  str = str.replace('over', '')
  str = str.replace('about', '')
  str = str.replace('almost', '')
  str = str.replace('ago', '')

  return str
}

export const capitalizeFirstWord = (str: string) => {
  if (typeof str !== 'string') {
    return '' // Return an empty string if input is not a string
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}
export enum UrgentDateType {
  PAST = 'PAST',
  ALMOST = 'ALMOST',
  BEFORE = 'BEFORE'
}
export const getUrgentDateType = (dateString: string) => {
  const date = new Date(dateString)
  const diff = date.getTime() - Date.now()
  const diffInDays = diff / (1000 * 3600 * 24)

  if (diffInDays < 0) {
    return UrgentDateType.PAST
  } else if (diffInDays < 2) {
    return UrgentDateType.ALMOST
  } else {
    return UrgentDateType.BEFORE
  }
}

export const extractCapitalLetters = (str: string) => {
  return str.replace(/[^A-Z]+/g, '')
}

export const removeNullUndefined = (obj: any) =>
  Object.entries(obj).reduce((a: any, [k, v]: any) => {
    if (v !== null && v !== undefined) {
      a[k] = v
    }
    return a
  }, {})

export const convertStringToBoolean = (str: any) => {
  if (str === 'true') {
    return true
  } else if (str === 'false') {
    return false
  } else {
    return null
  }
}

export const isNullOrUndefined = (val: any) => {
  return val === null || val === undefined
}

export const getPeriod = (date: Date) => {
  if (!date) {
    return 'NA'
  }

  const startDate = new Date(date.getFullYear(), 0, 1) // January 1st of the same year
  // @ts-expect-error arithmetic
  const daysSinceStart = Math.floor((date - startDate) / (24 * 60 * 60 * 1000)) // Convert milliseconds to days

  const periodLength = 28
  const period = Math.floor(daysSinceStart / periodLength) + 1

  return `P${period}`
}

export const findShortestString = (string1: string, string2: string) => {
  if (!string1 && !string2) return ''
  if (!string1) return string2
  if (!string2) return string1

  return string1.length < string2.length ? string1 : string2
}

export const limitMaxCharactersWithEllipsis = (text: string, maxLength: number) => {
  if (!text) return ''

  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...'
  }

  return text
}

export const getFileExtension = (fileName: string) => {
  const dotIndex = fileName.lastIndexOf('.')

  return fileName.substring(dotIndex + 1)
}
