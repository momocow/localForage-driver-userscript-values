export interface LocalForageOptions {
    name?: string;
    storeName?: string;
}
export interface DriverOptions extends LocalForageOptions {
    keyPrefix?: string;
}
export declare type Callback<T> = (error?: Error, value?: T) => void;
export declare type Iteratee<T, U> = (value: T, key: string, index: number) => U;
