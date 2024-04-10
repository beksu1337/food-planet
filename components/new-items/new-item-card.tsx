import { useCartStore } from '@/lib/store';
import { FoodModel } from '@/lib/types';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '../ui/use-toast';

interface NewItemCardProps extends FoodModel {}

export const NewItemCard = (p: NewItemCardProps) => {
    const { cart, increase } = useCartStore((state) => state);
    const { toast } = useToast();

    return (
        <div className='text-background-foreground relative flex h-[450px] w-full cursor-pointer flex-col justify-start gap-1 rounded-[50px] bg-gray-300 px-3 py-2 dark:border dark:bg-background dark:text-foreground'>
            <Image
                src={p.img_src}
                alt='item'
                width={200}
                height={200}
                loading='eager'
                priority
                className='mx-auto rounded-3xl'
            />
            <h5 className='mb-2 mt-2 text-center text-lg font-bold leading-5'>
                {p.title}
            </h5>
            <p className='max-h-16 overflow-hidden text-center text-[18px] font-normal'>
                {p.title_desc}
            </p>
            <p className='absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-lg font-bold'>
                {p.price} сом
            </p>
            <Plus
                className='text-background-foreground absolute bottom-3 right-3 rounded-full border-[0.5px] border-secondary transition-all duration-200 hover:border-green-400 hover:text-green-400 dark:border-border dark:hover:border-green-400'
                size={36}
                onClick={(e) => {
                    e.stopPropagation();
                    increase(p);
                    toast({
                        title: 'Продукт добавлен в корзину',
                        description: (
                            <div className='text-[18px]'>
                                <p>{p.title}</p>
                            </div>
                        ),
                    });
                }}
            />
        </div>
    );
};
