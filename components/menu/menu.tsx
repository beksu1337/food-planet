'use client';

import { MenuItemList } from '@/components/menu/menu-list/menu-item-list';
import { MenuNavAside } from '@/components/menu/menu-nav-aside';
import { MenuSearch } from '@/components/menu/menu-search';
import { useFetchStore } from '@/lib/store/store';
import { FoodModel, FoodType } from '@/lib/types';
import { fetcher } from '@/lib/utils';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { MenuHeader } from './menu-header';

type GroupedProducts = Record<FoodType, FoodModel[]>;

export const MenuLayout = () => {
    const [filteredData, setFilteredData] = useState<
        Record<FoodType, FoodModel[]> | undefined
    >();
    const {
        queryParams: { sort, search },
    } = useFetchStore((store) => store);

    const { data, isLoading, error } = useSWR(
        `${process.env.NEXT_PUBLIC_BASE_URL}?sortBy=${sort === 'priceHigher' || sort === 'priceLower' ? 'price' : 'title'}&${sort === 'priceHigher' ? 'order=desc' : 'order=asc'}${search ? `&search=${search}` : ''}`,
        fetcher
    );

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
    }, []);

    useEffect(() => {
        if (data) {
            const groupedProducts: GroupedProducts = data.reduce(
                (acc: GroupedProducts, product) => {
                    const type = product.type;
                    acc[type] = acc[type] || [];
                    acc[type].push(product);
                    return acc;
                },
                {} as GroupedProducts
            );

            setFilteredData(groupedProducts);
        }
    }, [data]);

    return (
        <>
            <div className='col-span-12 flex h-[150px] flex-col items-end justify-between gap-1 overflow-hidden rounded-xl rounded-tr-[50px] border p-3 px-6 shadow-md md:flex-row'>
                <h1 className='h-full text-3xl font-bold'>Меню</h1>
                <MenuHeader />
            </div>

            <aside className='static top-3 col-span-12 h-[500px] rounded-sm border-[0.5px] border-slate-200 shadow-lg dark:border-[0.5px] md:sticky md:col-span-2'>
                <MenuNavAside />
            </aside>
            <div className='col-span-12 md:col-span-10'>
                <MenuSearch isLoading={isLoading} />
                <MenuItemList
                    totalProducts={data?.length}
                    error={error}
                    data={filteredData}
                    isLoading={isLoading}
                />
            </div>
        </>
    );
};
