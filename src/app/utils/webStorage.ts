import { type WebStorageKeys } from 'app/types/enums'

const setStorageItem = (key: WebStorageKeys, val: any, ttl = 86400000) => {
  const item = {
    val,
    exp: new Date().getTime() + ttl
  }

  localStorage.setItem(key, JSON.stringify(item))
}

const removeStorageItem = (key: string) => {
  localStorage.removeItem(key)
}

const getStorageItem = (key: string) => {
  const itemStr = localStorage.getItem(key)

  if (!itemStr) {
    return null
  }

  try {
    const item = JSON.parse(itemStr)

    if (new Date().getTime() > item.exp) {
      localStorage.removeItem(key)
      return null
    }

    return item.val ?? item
  } catch (e) {
    console.log('--------failed to parse', key, e)
  }
}

export { setStorageItem, removeStorageItem, getStorageItem }
