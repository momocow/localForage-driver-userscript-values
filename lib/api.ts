import { Iteratee } from './types'

function _listRawKeys (keyPrefix = ''): string[] {
  return GM_listValues()
    .filter(k => k.startsWith(keyPrefix))
}

function _listKeys (keyPrefix = ''): string[] {
  return _listRawKeys(keyPrefix)
    .map(rawKey => rawKey.substring(keyPrefix.length))
}

function _getRawKey (key: string, keyPrefix = ''): string {
  return keyPrefix + key
}

export async function clear ({ keyPrefix = '' } = {}): Promise<void> {
  for (const rawKey of _listRawKeys(keyPrefix)) {
    GM_deleteValue(rawKey)
  }
}

export async function getItem<T> (
  name: string,
  { keyPrefix = '' } = {}
): Promise<T> {
  return GM_getValue(_getRawKey(name, keyPrefix), null)
}

export async function removeItem (
  name: string,
  { keyPrefix = '' } = {}
): Promise<void> {
  GM_deleteValue(_getRawKey(name, keyPrefix))
}

export async function setItem (
  name: string,
  value: any,
  { keyPrefix = '' } = {}
): Promise<void> {
  GM_setValue(_getRawKey(name, keyPrefix), value)
}

export async function iterate<T, U> (
  iteratee: Iteratee<T, U>,
  { keyPrefix = '' } = {}
): Promise<U> {
  const keys = _listKeys(keyPrefix)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const ret = iteratee(GM_getValue(_getRawKey(key)), key, i)
    if (typeof ret !== 'undefined') {
      return ret
    }
  }
}

export async function key (n: number, { keyPrefix = '' } = {}): Promise<string> {
  const keys = _listKeys(keyPrefix)
  return n < keys.length ? keys[n] : null
}

export async function keys ({ keyPrefix = '' } = {}): Promise<string[]> {
  return _listKeys(keyPrefix)
}

export async function length ({ keyPrefix = '' } = {}): Promise<number> {
  return _listRawKeys(keyPrefix).length
}
