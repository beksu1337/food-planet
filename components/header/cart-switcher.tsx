import { ShoppingCart } from 'lucide-react';

export const CartSwitcher = () => {
    return (
        <div className='flex h-max w-max items-center duration-200 p-2 transition-all hover:bg-primary hover:text-primary-foreground rounded-full cursor-pointer'>
            <ShoppingCart size={28} />
        </div>
    );
};
