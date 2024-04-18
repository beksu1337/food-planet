import { CartItem } from '@/lib/store/store';
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
        <div className='no-select flex w-full flex-col gap-2 pr-4'>
            {cart?.map((item) => (
                <div
                    key={item.id}
                    className='relative flex w-full flex-col flex-wrap items-start gap-2 rounded-sm bg-zinc-100 p-2 dark:bg-gray-800'
                >
                    <div className='w-full pr-14'>
                        <Image
                            src={item.img_src}
                            alt='item'
                            width={50}
                            height={50}
                            className='absolute right-[6px] top-[6px] rounded-md'
                        />
                        <p>
                            <span className='mr-2 font-black'>
                                {item.count}x
                            </span>{' '}
                            <span className='leading-4'>{item.title}</span>
                        </p>
                        <p className='border-t border-foreground'>
                            {item.price * item.count} сом
                        </p>
                    </div>
                    <div className='flex w-full justify-between'>
                        <Minus
                            size={32}
                            onClick={() => decrease(item.id)}
                            className='cursor-pointer rounded-md border border-red-500 text-red-500'
                        />
                        <Plus
                            size={32}
                            onClick={() => increase(item)}
                            className='cursor-pointer rounded-md border border-green-500 text-green-500'
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
