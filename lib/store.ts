import { FoodModel, FoodType } from '@/lib/types';
import { create } from 'zustand';

// --------------------
export enum Sort {
    title = 'Названию',
    priceLower = 'Цене (по возрастанию)',
    priceHigher = 'Цене (по убыванию)',
}

type SortType = 'title' | 'priceLower' | 'priceHigher';

type QueryParams = {
    search: string;
    sort: SortType;
};

type FetchStore = {
    currentNavTab: FoodType;
    queryParams: QueryParams;
    changeCurrentTab: (newCurrent: FoodType) => void;
    changeSortParams: (params: SortType) => void;
    changeSearchParams: (params: string) => void;
};

export const useFetchStore = create<FetchStore>((set, get) => ({
    currentNavTab: FoodType.pizza,
    queryParams: {
        search: '',
        sort: 'title',
    },
    changeSortParams: (params) =>
        set(() => ({ queryParams: { ...get().queryParams, sort: params } })),

    changeSearchParams: (params: string) =>
        set(() => ({ queryParams: { ...get().queryParams, search: params } })),

    changeCurrentTab: (newTab: FoodType) =>
        set(() => ({ currentNavTab: newTab })),
}));

// --------------------
export interface CartItem extends FoodModel {
    count: number;
}

type CartStore = {
    cart: CartItem[];
    getCartItems: () => void;
    increase: (newFood: FoodModel, count?: number) => void;
    decrease: (foodId: string) => void;
    removeAll: () => void;
};

const getInitialCart = () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('cart') as string) || [];
    }
};

const increaseFromCount = (
    food: FoodModel,
    cart: CartItem[],
    count?: number
) => {
    const cartItem = { ...food, count: count || 1 };
    const isProductInCart = cart?.map((elem) => elem.id).includes(food.id);

    if (!isProductInCart) {
        return [...cart, cartItem];
    } else {
        return cart?.map((elem) => {
            if (elem.id === food.id)
                return { ...elem, count: elem.count + (count || 1) };
            return elem;
        });
    }
};

const decreaseFromCount = (id: string, cart: CartItem[]) => {
    return cart
        ?.map((elem) => {
            if (elem.id === id) return { ...elem, count: elem.count - 1 };
            return elem;
        })
        .filter((elem) => {
            if (elem.count <= 0) return false;
            return true;
        });
};

export const useCartStore = create<CartStore>((set, get) => ({
    cart: getInitialCart(),

    getCartItems: () => set((state) => ({ cart: state.cart })),
    increase: (newFood: FoodModel, count?: number) => {
        const { cart } = get();
        const updated = increaseFromCount(newFood, cart, count);
        localStorage.setItem('cart', JSON.stringify(updated));
        set({ cart: updated });
    },
    decrease: (id) => {
        const { cart } = get();
        const updated = decreaseFromCount(id, cart);
        localStorage.setItem('cart', JSON.stringify(updated));
        set({ cart: updated });
    },
    removeAll: () => {
        localStorage.removeItem('cart');
        set({ cart: [] });
    },
}));
