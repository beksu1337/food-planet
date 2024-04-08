import { CartItem } from '@/lib/store';
import { CartEmpty } from '../cart/cart-empty';
import { CartList } from '../cart/cart-list';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';

export const SheetCart = ({
    cart,
    removeAll,
    finalCost,
    increase,
    decrease,
}: {
    cart: CartItem[];
    removeAll: () => void;
    finalCost: number;
    increase: (newFood: CartItem) => void;
    decrease: (id: string) => void;
}) => {
    if (!cart.length) return <CartEmpty />;

    return (
        <div className='w-full p-0'>
            <div className='flex gap-2'>
                <Button
                    onClick={removeAll}
                    className='hover:bg-primary mb-2 text-base'
                >
                    Очистить корзину
                </Button>
                <Button
                    onClick={removeAll}
                    className='hover:bg-primary mb-2 text-base bg-blue-500 hover:bg-blue-600'
                >
                    К оплате
                </Button>
            </div>
            <div className='border-b'>Общая сумма: {finalCost} сом</div>
            <ScrollArea className='max-h-screen h-[600px] xl:h-[700px] 2xl:h-[800px] mt-2 rounded-sm w-full'>
                <CartList cart={cart} increase={increase} decrease={decrease} />
            </ScrollArea>
        </div>
    );
};
