var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function _listRawKeys(keyPrefix = '') {
    return GM_listValues()
        .filter(k => k.startsWith(keyPrefix));
}
function _listKeys(keyPrefix = '') {
    return _listRawKeys(keyPrefix)
        .map(rawKey => rawKey.substring(keyPrefix.length));
}
function _getRawKey(key, keyPrefix = '') {
    return keyPrefix + key;
}
export function clear({ keyPrefix = '' } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const rawKey of _listRawKeys(keyPrefix)) {
            GM_deleteValue(rawKey);
        }
    });
}
export function getItem(name, { keyPrefix = '' } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return GM_getValue(_getRawKey(name, keyPrefix), null);
    });
}
export function removeItem(name, { keyPrefix = '' } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        GM_deleteValue(_getRawKey(name, keyPrefix));
    });
}
export function setItem(name, value, { keyPrefix = '' } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        GM_setValue(_getRawKey(name, keyPrefix), value);
    });
}
export function iterate(iteratee, { keyPrefix = '' } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const keys = _listKeys(keyPrefix);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const ret = iteratee(GM_getValue(_getRawKey(key)), key, i);
            if (typeof ret !== 'undefined') {
                return ret;
            }
        }
    });
}
export function key(n, { keyPrefix = '' } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const keys = _listKeys(keyPrefix);
        return n < keys.length ? keys[n] : null;
    });
}
export function keys({ keyPrefix = '' } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return _listKeys(keyPrefix);
    });
}
export function length({ keyPrefix = '' } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return _listRawKeys(keyPrefix).length;
    });
}
