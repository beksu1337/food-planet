'use client';

import { useCartStore } from '@/lib/store';
import { LoaderCircle, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { MenuCartEmpty } from './menu-cart-empty';

export const MenuCart = () => {
    const { cart, increase, decrease } = useCartStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <aside className='sticky top-3 col-span-3 flex h-[500px] items-center justify-center rounded-md border-[0.5px] p-1 shadow-[0_3px_10px_rgba(0,0,0,.1)]'>
                <LoaderCircle className='animate-spin text-primary' size={44} />
            </aside>
        );
    }

    return (
        <aside className='sticky top-3 col-span-3 h-[500px] rounded-md border-[0.5px] py-2 pb-3 pl-3 shadow-[0_3px_10px_rgba(0,0,0,.1)]'>
            {cart?.length && mounted ? (
                <div className='h-full'>
                    <div className='mb-2 flex max-h-[40px] items-start justify-between pr-3'>
                        <h4 className='pl-2 text-center text-lg font-bold'>
                            Ваш заказ
                        </h4>
                        <Button className='block h-7 rounded-full p-1 px-3 hover:bg-primary'>
                            Оформить заказ
                        </Button>
                    </div>
                    <ScrollArea className='h-[calc(100%-45px)] w-full rounded-md pr-3'>
                        <div className='flex flex-col gap-2'>
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className='no-select relative flex w-full flex-col flex-wrap items-start gap-2 rounded-sm bg-gray-200 p-2 dark:bg-gray-800'
                                >
                                    <div className='w-full pr-14'>
                                        <Image
                                            src={item.img_src}
                                            alt='item'
                                            width={50}
                                            height={50}
                                            className='img-no-select absolute right-[6px] top-[6px] rounded-md'
                                        />
                                        <p className='min-h-[50px] pb-1 leading-4'>
                                            <span className='mr-2 font-black'>
                                                {item.count}x
                                            </span>
                                            <span className='text-[17px]'>
                                                {item.title}
                                            </span>
                                        </p>
                                    </div>
                                    <div className='flex w-full items-center justify-between'>
                                        <Minus
                                            size={32}
                                            onClick={() => decrease(item.id)}
                                            className='cursor-pointer rounded-md border border-red-500 text-red-500'
                                        />
                                        <p className='text-sm'>
                                            {item.price * item.count} сом
                                        </p>
                                        <Plus
                                            size={32}
                                            onClick={() => increase(item)}
                                            className='cursor-pointer rounded-md border border-green-500 text-green-500'
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            ) : (
                <MenuCartEmpty />
            )}
        </aside>
    );
};
