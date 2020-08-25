import { Callback, DriverOptions, Iteratee } from './types'
import {
  clear,
  getItem,
  iterate,
  key,
  keys,
  length,
  removeItem,
  setItem
} from './api'

async function executeCallbackAfter<T> (
  promise: Promise<T>,
  cb: Callback<T>
): Promise<T> {
  let ret: T | undefined
  let error: Error | undefined
  try {
    ret = await promise
  } catch (e) {
    error = e
  }
  cb(error, ret)
  return ret
}

export const NAME = 'userscript-values'

export default {
  _driver: NAME,
  _support () {
    return typeof GM_getValue !== 'undefined' &&
      typeof GM_setValue !== 'undefined' &&
      typeof GM_deleteValue !== 'undefined' &&
      typeof GM_listValues !== 'undefined'
  },
  _initStorage (options: DriverOptions) {
    let keyPrefix = options.keyPrefix ?? ''
    if (keyPrefix.length === 0) {
      if (typeof options.name === 'string' && options.name.length > 0) {
        keyPrefix += options.name + '/'
      }
      if (typeof options.storeName === 'string' && options.name.length > 0) {
        keyPrefix += options.storeName + '/'
      }
    }
    this._dbInfo = Object.assign({}, options, {
      keyPrefix
    })
  },
  async clear (callback: Callback<void>) {
    return await executeCallbackAfter(clear(this._dbInfo), callback)
  },
  async getItem<T> (key: string, callback: Callback<T>) {
    return await executeCallbackAfter(getItem<T>(key, this._dbInfo), callback)
  },
  async iterate<T, U> (
    iteratee: Iteratee<T, U>,
    callback: Callback<U>
  ) {
    return await executeCallbackAfter(
      iterate<T, U>(iteratee, this._dbInfo),
      callback
    )
  },
  async key (n: number, callback: Callback<string>) {
    return await executeCallbackAfter(key(this._dbInfo), callback)
  },
  async keys (callback: Callback<string[]>) {
    return await executeCallbackAfter(keys(this._dbInfo), callback)
  },
  async length (callback: Callback<number>) {
    return await executeCallbackAfter(length(this._dbInfo), callback)
  },
  async removeItem (key: string, callback: Callback<void>) {
    return await executeCallbackAfter(removeItem(key, this._dbInfo), callback)
  },
  async setItem (key: string, value: any, callback: Callback<void>) {
    return await executeCallbackAfter(setItem(key, value, this._dbInfo), callback)
  }
}
