import { CategoryType, FoodModel, FoodType } from '@/lib/types';
import Image from 'next/image';
import { MenuItem } from './menu-item';
import { MenuSkeleton } from './menu-skeleton';
import notFound from '/public/planet.png';

export const MenuItemList = ({
    data,
    isLoading,
    error,
}: {
    data: Record<FoodType, FoodModel[]> | undefined;
    isLoading: boolean;
    // @ts-ignore
    error: any;
}) => {
    const orderedKeys = Object.keys(CategoryType);

    if (error && error.status === 404) {
        return (
            <div className='col-span-10 col-start-3 h-full w-full'>
                <div className='col-span-10 flex h-full flex-col items-center justify-center gap-2 rounded-sm pb-6'>
                    <Image
                        src={notFound}
                        alt='nothing found'
                        quality={60}
                        width={250}
                        className='no-select img-no-select'
                    />
                    <p className='no-select text-center text-sm'>
                        Ничего не найдено
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className='col-span-10 col-start-3 w-full'>
            <div className='col-span-10 rounded-sm pb-6'>
                {isLoading || !data ? (
                    <MenuSkeleton />
                ) : (
                    <div>
                        {orderedKeys.map((key) => {
                            // Получение продуктов для данной категории, если они есть
                            const products = data[key as keyof typeof data];
                            // Если продуктов нет, не отображаем категорию
                            if (!products) return null;

                            return (
                                <div key={key} className='' id={key}>
                                    <h2 className='my-6 pl-2 text-2xl font-bold'>
                                        {
                                            CategoryType[
                                                key as keyof typeof CategoryType
                                            ]
                                        }
                                    </h2>
                                    <div className='grid grid-cols-2 gap-4'>
                                        {products.map((product) => (
                                            <MenuItem
                                                key={product.id}
                                                {...product}
                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};
