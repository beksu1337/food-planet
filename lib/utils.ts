import { type ClassValue, clsx } from 'clsx';
import { Fetcher } from 'swr';
import { twMerge } from 'tailwind-merge';
import { FoodModel } from './types';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const fetcher: Fetcher<FoodModel[], string> = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
        const error = new Error('Ошибка при отправке запроса') as Error;
        // @ts-ignore
        error.info = await res.json();
        // @ts-ignore
        error.status = res.status;
        throw error;
    }

    return res.json();
};

export const debounce = (func: Function, timeout = 1500) => {
    let timer: NodeJS.Timeout | undefined;

    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
};
