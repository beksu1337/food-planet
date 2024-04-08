import { CartItem } from '@/lib/store';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';

export const CartList = ({
    cart,
    increase,
    decrease,
}: {
    cart: CartItem[];
    increase: (newFood: CartItem) => void;
    decrease: (id: string) => void;
}) => {
    return (
        <div className='flex flex-col gap-3 w-full pr-4 no-select'>
            {cart?.map((item) => (
                <div
                    key={item.id}
                    className='flex flex-col relative rounded-sm dark:bg-neutral-800 bg-slate-300 items-start gap-2 flex-wrap p-2 w-full'
                >
                    <div className='pr-14 w-full'>
                        <Image
                            src={item.img_src}
                            alt='item'
                            width={50}
                            height={50}
                            className='rounded-md absolute right-[6px] top-[6px]'
                        />
                        <p>
                            <span className='font-black mr-2'>
                                {item.count}x
                            </span>{' '}
                            <span className='leading-4'>{item.title}</span>
                        </p>
                        <p className='border-t border-foreground'>
                            {item.price * item.count} сом
                        </p>
                    </div>
                    <div className='w-full flex justify-between'>
                        <Minus
                            size={32}
                            onClick={() => decrease(item.id)}
                            className='cursor-pointer border-red-500 border rounded-sm text-red-500'
                        />
                        <Plus
                            size={32}
                            onClick={() => increase(item)}
                            className='cursor-pointer border rounded-sm text-green-500 border-green-500'
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
