import { type ClassValue, clsx } from 'clsx';
import { Fetcher, KeyedMutator, mutate } from 'swr';
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

export const createProduct = async (
    productData: Omit<FoodModel, 'id'>,
    data: FoodModel[] | undefined,
    mutate: KeyedMutator<FoodModel[]>
) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });
        const newProduct = await response.json();

        if (data) {
            mutate([...data, newProduct]);
        }
    } catch (error) {
        throw new Error('При создании продукта произошла ошибка');
    }
};

export const editProduct = async (
    productData: Omit<FoodModel, 'id'>,
    data: FoodModel[] | undefined,
    mutate: KeyedMutator<FoodModel[]>,
    id: string
) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            }
        );

        const updatedProduct = await response.json();

        if (data) {
            mutate([...data, updatedProduct]);
        }
    } catch (error) {
        throw new Error('При обновлении продукта произошла ошибка');
    }
};

export const removeProduct = async (
    data: FoodModel[] | undefined,
    mutate: KeyedMutator<FoodModel[]>,
    id: string
) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/${id}`,
            {
                method: 'DELETE',
            }
        );

        const deletedProduct = await response.json();

        if (data) {
            mutate([...data, deletedProduct]);
        }
    } catch (error) {
        throw new Error('При удалении продукта произошла ошибка');
    }
};

export const debounce = (func: Function, timeout = 1000) => {
    let timer: NodeJS.Timeout | undefined;

    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
};
