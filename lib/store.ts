import { FoodModel, FoodType } from '@/lib/types';
import { create } from 'zustand';

// --------------------
type NewTabStore = {
    currentNavTab: string;
    changeCurrentTab: (newCurrent: string) => void;
};

export const useNewTabStore = create<NewTabStore>((set, get) => ({
    currentNavTab: FoodType.Pizza,
    changeCurrentTab: (newTab) => set(() => ({ currentNavTab: newTab })),
}));

// --------------------
export interface CartItem extends FoodModel {
    count: number;
}

type CartStore = {
    cart: CartItem[];
    getCartItems: () => void;
    increase: (newFood: FoodModel) => void;
    decrease: (foodId: string) => void;
    removeAll: () => void;
};

const getInitialCart = () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('cart') as string) || [];
    }
};

const increaseFromCount = (food: FoodModel, cart: CartItem[]) => {
    const cartItem = { ...food, count: 1 };
    const isProductInCart = cart?.map((elem) => elem.id).includes(food.id);

    if (!isProductInCart) {
        return [...cart, cartItem];
    } else {
        return cart?.map((elem) => {
            if (elem.id === food.id) return { ...elem, count: elem.count + 1 };
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

    increase: (newFood: FoodModel) => {
        const { cart } = get();
        const updated = increaseFromCount(newFood, cart);
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
