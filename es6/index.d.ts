import { Callback, DriverOptions, Iteratee } from './types';
export declare const NAME = "userscript-values";
declare const _default: {
    _driver: string;
    _support(): boolean;
    _initStorage(options: DriverOptions): void;
    clear(callback: Callback<void>): Promise<void>;
    getItem<T>(key: string, callback: Callback<T>): Promise<T>;
    iterate<T_1, U>(iteratee: Iteratee<T_1, U>, callback: Callback<U>): Promise<U>;
    key(n: number, callback: Callback<string>): Promise<string>;
    keys(callback: Callback<string[]>): Promise<string[]>;
    length(callback: Callback<number>): Promise<number>;
    removeItem(key: string, callback: Callback<void>): Promise<void>;
    setItem(key: string, value: any, callback: Callback<void>): Promise<void>;
};
export default _default;
