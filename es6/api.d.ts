import { Iteratee } from './types';
export declare function clear({ keyPrefix }?: {
    keyPrefix?: string;
}): Promise<void>;
export declare function getItem<T>(name: string, { keyPrefix }?: {
    keyPrefix?: string;
}): Promise<T>;
export declare function removeItem(name: string, { keyPrefix }?: {
    keyPrefix?: string;
}): Promise<void>;
export declare function setItem(name: string, value: any, { keyPrefix }?: {
    keyPrefix?: string;
}): Promise<void>;
export declare function iterate<T, U>(iteratee: Iteratee<T, U>, { keyPrefix }?: {
    keyPrefix?: string;
}): Promise<U>;
export declare function key(n: number, { keyPrefix }?: {
    keyPrefix?: string;
}): Promise<string>;
export declare function keys({ keyPrefix }?: {
    keyPrefix?: string;
}): Promise<string[]>;
export declare function length({ keyPrefix }?: {
    keyPrefix?: string;
}): Promise<number>;
