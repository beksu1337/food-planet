'use client';

import { MENU_LIST } from '@/lib/const';
import { useNewTabStore } from '@/lib/store';
import { cn, fetcher } from '@/lib/utils';
import useSWR from 'swr';
import { Button } from '../ui/button';
import { NewItemSkeleton } from './new-item-skeleton';
import { NewItemsCarousel } from './new-items-carousel';

export const MenuNavNew = () => {
    const state = useNewTabStore((state) => state);

    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_BASE_URL}?type=${state.currentNavTab}`,
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
                                    item.url === state.currentNavTab,
                            })}
                            onClick={() => state.changeCurrentTab(item.url)}
                            key={item.id}
                        >
                            {item.title}
                        </div>
                    ))}
                </nav>

                {error?.status === 404 || isLoading ? (
                    <NewItemSkeleton />
                ) : (
                    <NewItemsCarousel data={data} />
                )}

                <Button
                    variant='outline'
                    className='block mt-5 text-base px-4 mx-auto border border-primary text-primary rounded-full'
                >
                    Перейти в меню
                </Button>
            </div>
        </div>
    );
};
