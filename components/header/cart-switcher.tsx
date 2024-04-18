import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
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
        <TooltipProvider delayDuration={50} disableHoverableContent>
            <Sheet>
                <Tooltip>
                    <TooltipTrigger>
                        <SheetTrigger asChild className='relative outline-none'>
                            <div className='group flex h-max w-max cursor-pointer items-center rounded-full p-2 transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-700 dark:hover:text-primary-foreground'>
                                <ShoppingCart size={28} />
                                {cart?.length && mounted ? (
                                    <span className='absolute right-1 top-2 h-3 w-3 rounded-full bg-primary' />
                                ) : null}
                            </div>
                        </SheetTrigger>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={12}>
                        <p>Открыть корзину</p>
                    </TooltipContent>
                </Tooltip>

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
                    <SheetContent className='flex items-center justify-center'>
                        Загрузка...
                    </SheetContent>
                )}
            </Sheet>
        </TooltipProvider>
    );
};
