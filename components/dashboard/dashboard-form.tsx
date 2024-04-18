'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { useFetchStore } from '@/lib/store';
import { FoodModel, FoodType } from '@/lib/types';
import { CategoryType } from '@/lib/types';
import { createProduct, editProduct, removeProduct } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { KeyedMutator } from 'swr';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useToast } from '../ui/use-toast';

export const DashboardForm = ({
    data,
    mutate,
    singleData,
    children,
    method = 'POST',
}: {
    data: FoodModel[] | undefined;
    mutate: KeyedMutator<FoodModel[]>;
    singleData?: FoodModel;
    children: React.ReactNode;
    method?: 'POST' | 'PATCH' | 'DELETE';
}) => {
    const [open, setOpen] = useState(false);
    const state = useFetchStore((state) => state);
    const { toast } = useToast();

    const formSchema = z.object({
        title: z
            .string()
            .min(2, { message: 'Название должно быть длиннее 2 символов' })
            .max(50, { message: 'Не больше 50 символов' }),
        description: z
            .string()
            .min(5, { message: 'Описание должно быть длиннее 5 символов' })
            .max(250, { message: 'Не больше 250 символов' }),
        image: z.string().url({ message: 'Введите корректную ссылку' }),
        price: z.coerce.number().gte(1, 'Цена должна быть больше 0'),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: singleData?.title || '',
            description: singleData?.title_desc || '',
            image: singleData?.img_src || '',
            price: singleData?.price || 1,
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const newProduct = {
            img_src: values.image,
            price: values.price,
            title: values.title,
            type: FoodType[state.currentNavTab as keyof typeof FoodType],
            title_desc: values.description,
        };

        if (method === 'POST') {
            createProduct(newProduct, data, mutate);
            toast({
                title: 'Новый продукт успешно создан',
                description: (
                    <div className='text-[18px]'>
                        <p>Категория: {CategoryType[state.currentNavTab]}</p>
                        <p>Название: {values.title}</p>
                    </div>
                ),
            });
        } else if (method === 'PATCH' && singleData) {
            editProduct(newProduct, data, mutate, singleData.id);
            toast({
                title: 'Продукт успешно изменен',
                description: (
                    <div className='text-[18px]'>
                        <p>Категория: {CategoryType[state.currentNavTab]}</p>
                        <p>Название: {values.title}</p>
                    </div>
                ),
            });
        } else if (method === 'DELETE' && singleData) {
            removeProduct(data, mutate, singleData.id);
            toast({
                title: 'Продукт успешно удален',
                description: (
                    <div className='text-[18px]'>
                        <p>Категория: {CategoryType[state.currentNavTab]}</p>
                        <p>Название: {values.title}</p>
                    </div>
                ),
            });
        }

        form.reset();
        setOpen((prev) => !prev);
    };

    if (method === 'DELETE') {
        return (
            <Dialog
                open={open}
                onOpenChange={() => {
                    setOpen((prev) => !prev);
                    form.reset();
                }}
            >
                <DialogTrigger asChild>{children}</DialogTrigger>
                <DialogContent className=''>
                    <DialogHeader>
                        <DialogDescription className='mb-4 text-base font-medium'>
                            Этот продукт будет удален безвозвратно. Вы уверены?
                        </DialogDescription>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <Button
                                type='submit'
                                className='bg-red-600 hover:bg-red-500'
                            >
                                Да, Удалить
                            </Button>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Dialog
            open={open}
            onOpenChange={() => {
                setOpen((prev) => !prev);
                form.reset();
            }}
        >
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className='py-5 pl-5 pr-14 pt-4'>
                <DialogHeader>
                    <h4 className='mb-6 text-xl font-bold'>
                        {method === 'PATCH'
                            ? 'Редактирование:'
                            : 'Новый продукт:'}{' '}
                        {
                            CategoryType[
                                state.currentNavTab as keyof typeof CategoryType
                            ]
                        }
                    </h4>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='mt-0 space-y-5'
                        >
                            <FormField
                                control={form.control}
                                name='title'
                                render={({ field }) => (
                                    <FormItem className='space-y-1'>
                                        <FormLabel className='text-base'>
                                            Название
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Введите название продукта...'
                                                className='border-none bg-slate-200 dark:bg-slate-800'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className='text-red-500' />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='description'
                                render={({ field }) => (
                                    <FormItem className='space-y-1'>
                                        <FormLabel className='text-base'>
                                            Описание продукта
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Введите описание продукта...'
                                                className='border-none bg-slate-200 dark:bg-slate-800'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className='text-red-500' />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='image'
                                render={({ field }) => (
                                    <FormItem className='space-y-1'>
                                        <FormLabel className='text-base'>
                                            Ссылка на изображение
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Введите ссылку на изображение...'
                                                className='border-none bg-slate-200 dark:bg-slate-800'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className='text-red-500' />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='price'
                                render={({ field }) => (
                                    <FormItem className='space-y-1'>
                                        <FormLabel className='text-base'>
                                            Цена
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type='number'
                                                placeholder='Введите цену продукта...'
                                                className='border-none bg-slate-200 dark:bg-slate-800'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className='text-red-500' />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type='submit'
                                className='h-10 bg-blue-600 hover:bg-blue-700'
                            >
                                {method === 'POST' ? 'Создать' : 'Изменить'}
                            </Button>
                        </form>
                    </Form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
