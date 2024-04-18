'use client';

import { MENU_LIST } from '@/lib/const';
import { useFetchStore } from '@/lib/store/store';
import { FoodModel } from '@/lib/types';
import { cn, fetcher } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Button } from '../../ui/button';
import { MenuListSkeleton } from './menu-list-skeleton';
import { MenuNewCarousel } from './menu-new-carousel';

export const MenuNewList = () => {
    const state = useFetchStore((state) => state);
    const [newData, setNewData] = useState<FoodModel[]>([]);
    const { push } = useRouter();

    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_BASE_URL}?type=${state.currentNavTab}`,
        fetcher
    );

    useEffect(() => {
        if (data) {
            const sortedData = [...data].sort(
                (a, b) => parseInt(a.id) - parseInt(b.id)
            );
            const filteredData = sortedData.reverse().slice(0, 8);

            setNewData(filteredData);
        }
    }, [data]);

    return (
        <div className='relative border-t pb-6 pt-3'>
            <div className='container rounded-2xl p-4'>
                <div className='flex items-center justify-between pb-6 lg:px-12'>
                    <h2 className='text-[30px] font-black'>Новинки</h2>
                    <nav className='z-20 flex flex-col justify-center gap-1 md:flex-row md:gap-4 xl:gap-6'>
                        {MENU_LIST.map((item) => (
                            <div
                                className={cn(
                                    'cursor-pointer hover:text-primary',
                                    {
                                        'text-primary underline underline-offset-[6px]':
                                            item.url === state.currentNavTab,
                                    }
                                )}
                                onClick={() => state.changeCurrentTab(item.url)}
                                key={item.id}
                            >
                                {item.title}
                            </div>
                        ))}
                    </nav>
                </div>

                <div className=' md:px-12'>
                    {!data || error?.status === 404 || isLoading ? (
                        <MenuListSkeleton />
                    ) : (
                        <MenuNewCarousel data={newData} />
                    )}
                </div>

                <Button
                    onClick={() => push('/menu')}
                    variant='outline'
                    className='mx-auto mt-5 block rounded-full border border-primary px-4 text-base text-primary'
                >
                    Перейти в меню
                </Button>
            </div>
        </div>
    );
};
