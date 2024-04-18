'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { useFetchStore } from '@/lib/store/store';
import { fetcher } from '@/lib/utils';
import { Loader2, Pencil, Trash } from 'lucide-react';
import Image from 'next/image';
import useSWR from 'swr';
import { Button } from '../ui/button';
import { DashboardForm } from './dashboard-form';
import Error from '/public/error.png';

export function DashboardList() {
    const state = useFetchStore((state) => state);

    const { data, error, isLoading, mutate, isValidating } = useSWR(
        `${process.env.NEXT_PUBLIC_BASE_URL}?type=${state.currentNavTab}`,
        fetcher
    );

    if (isValidating || isLoading) {
        return (
            <div className='flex min-h-[650px] items-center justify-center'>
                <Loader2 className='animate-spin text-blue-400' size={48} />
            </div>
        );
    }

    if (error)
        return (
            <div className='no-select flex min-h-[650px] items-center justify-center'>
                <Image
                    src={Error}
                    alt='some error'
                    width={100}
                    quality={60}
                    className='img-no-select dark:invert'
                />
                <p className='leading-4'>
                    Что-то пошло не так, <br /> попробуйте позже
                </p>
            </div>
        );

    return (
        <div className='rounded-bl-xl rounded-br-xl bg-slate-100 p-5 py-2 dark:bg-gray-800'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[80px]'>№</TableHead>
                        <TableHead className='w-[400px] md:w-1/2'>
                            Название
                        </TableHead>
                        <TableHead>Цена</TableHead>
                        <TableHead className='w-[400px] text-end'>
                            Управление
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((product, i) => (
                        <TableRow key={product.id}>
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>
                                <div className='flex h-full items-center gap-2 font-medium leading-4'>
                                    <Image
                                        src={product.img_src}
                                        alt={product.title}
                                        width={50}
                                        height={50}
                                        className='img-no-select h-[50px] w-[50px] rounded-md object-cover'
                                    />
                                    {product.title}
                                </div>
                            </TableCell>
                            <TableCell>{product.price} сом</TableCell>
                            <TableCell>
                                <div className='flex h-full items-center justify-end gap-x-3'>
                                    <DashboardForm
                                        data={data}
                                        mutate={mutate}
                                        singleData={product}
                                        method='PATCH'
                                    >
                                        <Button className='h-full gap-2 bg-slate-500 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-700'>
                                            <Pencil
                                                size={20}
                                                className='mb-[2px]'
                                            />
                                            Редактировать
                                        </Button>
                                    </DashboardForm>
                                    <DashboardForm
                                        data={data}
                                        mutate={mutate}
                                        singleData={product}
                                        method='DELETE'
                                    >
                                        <Button className='h-full items-center gap-2 bg-red-600 hover:bg-orange-600'>
                                            <Trash
                                                size={20}
                                                className='mb-[2px]'
                                            />
                                            Удалить
                                        </Button>
                                    </DashboardForm>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
