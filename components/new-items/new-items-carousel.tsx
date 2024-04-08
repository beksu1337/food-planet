import { FoodModel } from '@/lib/types';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel';
import { NewItemCard } from './new-item-card';

export const NewItemsCarousel = ({ data }: { data: FoodModel[] }) => {
    return (
        <Carousel
            opts={{
                align: 'start',
            }}
            className='w-full'
        >
            <CarouselContent>
                {data?.map((item: FoodModel) => (
                    <CarouselItem
                        key={item.id}
                        className='md:basis-1/2 lg:basis-1/4 h-full no-select'
                    >
                        <NewItemCard {...item} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};
