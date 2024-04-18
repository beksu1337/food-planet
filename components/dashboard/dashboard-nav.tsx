'use client';

import { MENU_LIST } from '@/lib/const';
import { useFetchStore } from '@/lib/store/store';
import { cn, fetcher } from '@/lib/utils';
import { Blocks } from 'lucide-react';
import useSWR from 'swr';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
import { DashboardForm } from './dashboard-form';

export const DashboardNav = () => {
    const state = useFetchStore((state) => state);

    const { data, error, isLoading, mutate } = useSWR(
        `${process.env.NEXT_PUBLIC_BASE_URL}?type=${state.currentNavTab}`,
        fetcher
    );

    if (isLoading || error) {
        return (
            <nav className='sticky top-0 z-20 mt-3 flex justify-start gap-6 border-b bg-background p-5 pb-3 pt-3 font-medium'>
                <Skeleton className='h-8 w-1/2 rounded-full bg-slate-200 dark:bg-slate-800' />
            </nav>
        );
    }

    return (
        <nav className='static top-0 z-20 mt-3 flex flex-col items-center justify-between border-b bg-background p-5 pb-3 pt-3 md:sticky md:flex-row'>
            <div className='flex flex-col gap-1 md:flex-row md:gap-6'>
                {MENU_LIST.map((item) => (
                    <div
                        className={cn(
                            'no-select cursor-pointer font-medium text-gray-400 hover:text-blue-400',
                            {
                                'text-blue-400 underline underline-offset-8':
                                    item.url === state.currentNavTab,
                            }
                        )}
                        onClick={() => state.changeCurrentTab(item.url)}
                        key={item.id}
                    >
                        {item.title}
                    </div>
                ))}
            </div>

            <DashboardForm data={data} mutate={mutate}>
                <Button className='h-full gap-2 bg-green-500 p-1 px-3 text-base hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700'>
                    <Blocks size={24} />
                    Создать
                </Button>
            </DashboardForm>
        </nav>
    );
};
