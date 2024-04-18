import { FoodModel } from '@/lib/types';
import { SingleItemModal } from '../item-modal';
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
        >
            <CarouselContent>
                {data?.map((item: FoodModel) => (
                    <CarouselItem
                        key={item.id}
                        className='no-select h-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4'
                    >
                        <SingleItemModal {...item}>
                            <NewItemCard {...item} />
                        </SingleItemModal>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};
