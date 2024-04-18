import { CategoryType, FoodModel, FoodType } from '@/lib/types';
import Image from 'next/image';
import { MenuItem } from './menu-item';
import { MenuSkeleton } from './menu-skeleton';
import Error from '/public/error.png';
import notFound from '/public/planet.png';

export const MenuItemList = ({
    data,
    isLoading,
    error,
    totalProducts,
}: {
    data: Record<FoodType, FoodModel[]> | undefined;
    isLoading: boolean;
    // @ts-ignore
    error: any;
    totalProducts: number | undefined;
}) => {
    const orderedKeys = Object.keys(CategoryType);

    if (!totalProducts && !isLoading) {
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
                                <div
                                    key={key}
                                    className='mb-5 rounded-md bg-slate-100 px-2 py-2 dark:bg-gray-800'
                                    id={key}
                                >
                                    <h2 className='my-6 mt-4 pl-2 text-2xl font-bold'>
                                        {
                                            CategoryType[
                                                key as keyof typeof CategoryType
                                            ]
                                        }
                                    </h2>
                                    <div className='grid grid-cols-2 gap-2'>
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
