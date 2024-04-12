'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Sort, useFetchStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export const MenuHeaderSort = () => {
    const [mount, setMount] = useState(false);
    const { changeSortParams, queryParams } = useFetchStore();

    useEffect(() => {
        setMount(true);
    }, []);

    if (mount) {
        return (
            <div className='flex items-center justify-between gap-3'>
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
