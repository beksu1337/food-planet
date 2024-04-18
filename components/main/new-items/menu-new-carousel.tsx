import { FoodModel } from '@/lib/types';
import { SingleItemModal } from '../../hoc/single-item-modal';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../../ui/carousel';
import { MenuNewItem } from './menu-new-item';

export const MenuNewCarousel = ({ data }: { data: FoodModel[] }) => {
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
                            <MenuNewItem {...item} />
                        </SingleItemModal>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className='max-md:hidden' />
            <CarouselNext className='max-md:hidden' />
        </Carousel>
    );
};
