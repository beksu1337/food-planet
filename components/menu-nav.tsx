'use client';

import { MENU_LIST } from '@/lib/const';
import { FoodType } from '@/lib/types';
import { cn, fetcher } from '@/lib/utils';
import useSWR from 'swr';
import { create } from 'zustand';
import { NewItemSkeleton } from './new-item-skeleton';
import { NewItemsCarousel } from './new-items-carousel';

type Store = {
    currentNewNav: string;
    changeCurrent: (newCurrent: string) => void;
};

const useStore = create<Store>()((set) => ({
    currentNewNav: FoodType.Pizza,
    changeCurrent: (newCurrent) => set(() => ({ currentNewNav: newCurrent })),
}));

export const MenuNavNew = () => {
    const state = useStore((state) => state);

    const { data, error, isLoading } = useSWR(
        `${process.env.PUBLIC_NEXT_BASE_URL}?type=${state.currentNewNav}`,
        fetcher
    );

    return (
        <div className='border-t pt-3 pb-6 relative'>
            <div className='container'>
                <h2 className='ml-4 font-black text-[30px] absolute'>
                    Новинки
                </h2>
                <nav className='flex pb-6 gap-6 justify-center pt-2'>
                    {MENU_LIST.map((item) => (
                        <div
                            className={cn('cursor-pointer hover:text-primary', {
                                'text-primary':
                                    item.url === state.currentNewNav,
                            })}
                            onClick={() => state.changeCurrent(item.url)}
                            key={item.id}
                        >
                            {item.title}
                        </div>
                    ))}
                </nav>

                {!isLoading ? (
                    <NewItemsCarousel data={data} />
                ) : (
                    <NewItemSkeleton />
                )}
            </div>
        </div>
    );
};
