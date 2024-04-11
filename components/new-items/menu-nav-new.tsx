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
        <div className='relative border-t pb-6 pt-3'>
            <div className='container'>
                <h2 className='absolute z-30 ml-4 text-[30px] font-black'>
                    Новинки
                </h2>
                <nav className='z-20 flex justify-center gap-6 pb-6 pt-2'>
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

                <div>
                    {!data || error?.status === 404 || isLoading ? (
                        <NewItemSkeleton />
                    ) : (
                        <NewItemsCarousel data={data} />
                    )}
                </div>

                <Button
                    variant='outline'
                    className='mx-auto mt-5 block rounded-full border border-primary px-4 text-base text-primary'
                >
                    Перейти в меню
                </Button>
            </div>
        </div>
    );
};
