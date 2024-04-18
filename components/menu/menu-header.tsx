'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Sort, useFetchStore } from '@/lib/store/store';
import { useEffect, useState } from 'react';

export const MenuHeader = () => {
    const [mount, setMount] = useState(false);
    const { changeSortParams, queryParams } = useFetchStore();

    useEffect(() => {
        setMount(true);
    }, []);

    if (mount) {
        return (
            <div className='flex flex-col items-center justify-between gap-1 sm:flex-row sm:gap-3'>
                <p className='text-nowrap text-sm'>Сортировать по</p>

                <Select
                    onValueChange={changeSortParams}
                    value={queryParams.sort}
                >
                    <SelectTrigger className='w-[260px] border-border'>
                        <SelectValue placeholder='Theme' />
                    </SelectTrigger>
                    <SelectContent align='center' className='bg-background'>
                        <SelectItem value='title'>{Sort.title}</SelectItem>
                        <SelectItem value='priceLower'>
                            {Sort.priceLower}
                        </SelectItem>
                        <SelectItem value='priceHigher'>
                            {Sort.priceHigher}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        );
    }
};
