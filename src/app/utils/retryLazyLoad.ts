import { lazy } from 'react'

const retry = async (fn: any, retriesLeft = 5, interval = 1000): Promise<any> => {
  return await new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error: Error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error)
            return
          }
          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject)
        }, interval)
      })
  })
}

const lazyLoad = (fn: any): any => lazy(async () => await retry(fn))
export default lazyLoad
