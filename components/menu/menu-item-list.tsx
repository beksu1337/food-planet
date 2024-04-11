import { CategoryType, FoodModel, FoodType } from '@/lib/types';
import { MenuItem } from './menu-item';
import { MenuSkeleton } from './menu-skeleton';

export const MenuItemList = ({
    data,
    isLoading,
}: {
    data: Record<FoodType, FoodModel[]> | undefined;
    isLoading: boolean;
}) => {
    return (
        <div className='col-span-10 col-start-3 w-full'>
            <div className='col-span-10 rounded-sm pb-6'>
                {!data ? (
                    <MenuSkeleton />
                ) : (
                    Object.entries(data).map(([category, products]) => (
                        <div key={category} className='' id={category}>
                            <h2 className='my-6 pl-2 text-2xl font-bold'>
                                {
                                    CategoryType[
                                        category as keyof typeof CategoryType
                                    ]
                                }
                            </h2>
                            <div className='grid grid-cols-2 gap-4'>
                                {products.map((product) => (
                                    <MenuItem key={product.id} {...product} />
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

// <div className='grid grid-cols-2 gap-4'>
//     {data?.map((elem) => (
//         <MenuItem key={elem.id} {...elem} />
//     ))}
// </div>
