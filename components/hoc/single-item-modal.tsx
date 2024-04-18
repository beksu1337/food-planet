'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useCartStore } from '@/lib/store/store';
import { FoodModel } from '@/lib/types';
import { MinusIcon, PlusIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

interface SingleItemModalProps extends FoodModel {
    children: React.ReactNode;
}

export const SingleItemModal = ({
    children,
    ...rest
}: SingleItemModalProps) => {
    const [count, setCount] = useState<number>(1);
    const { increase } = useCartStore();
    const [open, setOpen] = useState<boolean>(false);
    const { toast } = useToast();

    const handleCount = (variant: 'plus' | 'minus') => {
        if (count >= 1 && variant === 'plus') {
            setCount((prev) => prev + 1);
        } else if (count > 1 && variant === 'minus') {
            setCount((prev) => prev - 1);
        }
    };

    const handleSubmit = () => {
        increase(rest, count);
        setOpen(false);
        setCount(1);
        toast({
            title: 'Продукт добавлен в корзину',
            description: (
                <div className='text-[18px]'>
                    <p>{rest.title}</p>
                    <p>Количество: {count}</p>
                </div>
            ),
        });
    };

    return (
        <Dialog onOpenChange={setOpen} open={open}>
            <DialogTrigger className='w-full'>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader className='px-2'>
                    <DialogTitle className='border-b text-xl '>
                        {rest.title}
                    </DialogTitle>
                    <DialogDescription className='text-base'>
                        {rest.title_desc}
                    </DialogDescription>
                </DialogHeader>
                <Image
                    src={rest.img_src}
                    alt='Food'
                    quality={60}
                    className='img-no-select no-select mx-auto h-[300px] w-[300px] rounded-xl object-cover'
                    width={300}
                    height={300}
                />

                <div className='no-select px-24'>
                    <div className='mb-3 flex items-center justify-between rounded-sm border p-1 px-2'>
                        <MinusIcon
                            size={32}
                            className='cursor-pointer'
                            onClick={() => handleCount('minus')}
                        />
                        <div className='rounded-sm bg-gray-400 px-4 text-2xl font-bold text-background'>
                            {count}
                        </div>
                        <PlusIcon
                            size={32}
                            className='cursor-pointer'
                            onClick={() => handleCount('plus')}
                        />
                    </div>

                    <Button
                        onClick={handleSubmit}
                        className='w-full rounded-full text-base hover:bg-primary'
                    >
                        Добавить в корзину
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
