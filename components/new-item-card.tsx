import { FoodModel } from '@/lib/types';
import { CircleMinus, CirclePlus } from 'lucide-react';
import Image from 'next/image';

interface NewItemCardProps extends FoodModel {}

export const NewItemCard = (p: NewItemCardProps) => {
    return (
        <div className='rounded-[50px] relative px-3 h-[450px] gap-1 py-2 flex flex-col justify-start bg-secondary dark:border dark:bg-background dark:text-foreground text-secondary-foreground cursor-pointer'>
            <Image
                src={p.img_src}
                alt='item'
                width={200}
                height={200}
                loading='lazy'
                className='rounded-3xl mx-auto'
            />
            <h5 className='text-center mt-2 leading-5 mb-2 font-bold text-lg'>
                {p.title}
            </h5>
            <p className='text-[18px] font-normal text-center max-h-16 overflow-hidden'>
                {p.title_desc}
            </p>
            <p className='text-center font-bold text-lg absolute bottom-3 left-1/2 -translate-x-1/2'>
                {p.price} сом
            </p>
            <CirclePlus className='absolute bottom-3 right-3' size={44} />
        </div>
    );
};
