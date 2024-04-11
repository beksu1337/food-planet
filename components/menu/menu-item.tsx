import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { useCartStore } from '@/lib/store';
import { FoodModel } from '@/lib/types';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { SingleItemModal } from '../item-modal';
import { useToast } from '../ui/use-toast';

interface MenuItemProps extends FoodModel {
    id: string;
}

export const MenuItem = (food: MenuItemProps) => {
    const { increase } = useCartStore((state) => state);
    const { toast } = useToast();

    const addToCart = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.stopPropagation();
        increase(food);
        toast({
            title: 'Продукт добавлен в корзину',
            description: (
                <div className='text-[18px]'>
                    <p>{food.title}</p>
                </div>
            ),
        });
    };

    return (
        <SingleItemModal {...food}>
            <div className='flex h-40 flex-col justify-between rounded-md border p-2 pt-3 transition-all duration-200 hover:scale-[102%]'>
                <div className='flex items-start gap-2 overflow-hidden '>
                    <Image
                        src={food.img_src}
                        alt={food.title}
                        quality={60}
                        width={100}
                        height={100}
                        className='rounded-lg'
                    />
                    <div>
                        <h4 className='mb-1 max-h-[42px] overflow-hidden pb-1 text-left font-bold leading-4'>
                            {food.title}
                        </h4>
                        <p className='max-h-[80px] overflow-hidden text-left text-sm'>
                            {food.title_desc}
                        </p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className='rounded-full bg-slate-200 px-2  text-slate-700 dark:bg-slate-700 dark:text-slate-300'>
                        {food.price} сом
                    </p>
                    <TooltipProvider delayDuration={50}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Plus
                                    onClick={addToCart}
                                    size={32}
                                    className='rounded-full bg-green-300 text-green-700 dark:bg-slate-700 dark:text-slate-400'
                                />
                            </TooltipTrigger>
                            <TooltipContent
                                align='end'
                                alignOffset={-5}
                                className='z-auto bg-background opacity-100'
                            >
                                <p className='z-auto'>В корзину</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </SingleItemModal>
    );
};
