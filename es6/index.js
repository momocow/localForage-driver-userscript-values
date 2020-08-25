var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { clear, getItem, iterate, key, keys, length, removeItem, setItem } from './api';
function executeCallbackAfter(promise, cb) {
    return __awaiter(this, void 0, void 0, function* () {
        let ret;
        let error;
        try {
            ret = yield promise;
        }
        catch (e) {
            error = e;
        }
        cb(error, ret);
        return ret;
    });
}
export const NAME = 'userscript-values';
export default {
    _driver: NAME,
    _support() {
        return typeof GM_getValue !== 'undefined' &&
            typeof GM_setValue !== 'undefined' &&
            typeof GM_deleteValue !== 'undefined' &&
            typeof GM_listValues !== 'undefined';
    },
    _initStorage(options) {
        var _a;
        let keyPrefix = (_a = options.keyPrefix) !== null && _a !== void 0 ? _a : '';
        if (keyPrefix.length === 0) {
            if (typeof options.name === 'string' && options.name.length > 0) {
                keyPrefix += options.name + '/';
            }
            if (typeof options.storeName === 'string' && options.name.length > 0) {
                keyPrefix += options.storeName + '/';
            }
        }
        this._dbInfo = Object.assign({}, options, {
            keyPrefix
        });
    },
    clear(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield executeCallbackAfter(clear(this._dbInfo), callback);
        });
    },
    getItem(key, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield executeCallbackAfter(getItem(key, this._dbInfo), callback);
        });
    },
    iterate(iteratee, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield executeCallbackAfter(iterate(iteratee, this._dbInfo), callback);
        });
    },
    key(n, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield executeCallbackAfter(key(this._dbInfo), callback);
        });
    },
    keys(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield executeCallbackAfter(keys(this._dbInfo), callback);
        });
    },
    length(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield executeCallbackAfter(length(this._dbInfo), callback);
        });
    },
    removeItem(key, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield executeCallbackAfter(removeItem(key, this._dbInfo), callback);
        });
    },
    setItem(key, value, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield executeCallbackAfter(setItem(key, value, this._dbInfo), callback);
        });
    }
};
