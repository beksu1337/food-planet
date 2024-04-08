import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCartStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SheetCart } from './sheet-cart';

export const CartSwitcher = () => {
    const { cart, removeAll, decrease, increase } = useCartStore(
        (state) => state
    );
    const [mounted, setMounted] = useState<boolean>(false);
    const [finalCost, setFinalCost] = useState<number>(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const total = cart.reduce(
            (acc, item) => acc + item.price * item.count,
            0
        );
        setFinalCost(total);
    }, [cart]);

    return (
        <div className='flex h-max w-max items-center duration-200 p-2 transition-all hover:bg-primary hover:text-primary-foreground rounded-full cursor-pointer'>
            <Sheet>
                <SheetTrigger className='outline-none relative'>
                    <ShoppingCart size={28} className='peer' />
                    {cart?.length && mounted ? (
                        <span className='absolute peer-hover:hidden -top-0 -right-1 bg-primary w-3 h-3 rounded-full'></span>
                    ) : null}
                </SheetTrigger>
                {mounted ? (
                    <SheetContent
                        className={cn('flex items-center justify-center', {
                            'items-start justify-start': mounted && cart.length,
                        })}
                    >
                        <SheetCart
                            cart={cart}
                            removeAll={removeAll}
                            finalCost={finalCost}
                            increase={increase}
                            decrease={decrease}
                        />
                    </SheetContent>
                ) : (
                    <SheetContent className='flex justify-center items-center'>
                        Loading...
                    </SheetContent>
                )}
            </Sheet>
        </div>
    );
};
