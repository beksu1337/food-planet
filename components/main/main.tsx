'use client';

import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export const MainSection = () => {
    const { push } = useRouter();

    return (
        <div className='flex max-w-[600px] flex-col justify-center gap-2 md:justify-start'>
            <h1 className='mb-1 text-center text-[36px] font-black leading-8 md:text-start'>
                Доставка вкусной еды до 30 минут + напиток в подарок!
            </h1>
            <h4 className='mb-6 text-base leading-5'>
                Доставим заказ вовремя и можете рассчитывать, что еда будет
                доставлена всегда горячим и ароматным.
            </h4>

            <Button
                onClick={() => push('/menu')}
                className='flex h-full w-full gap-1 rounded-full px-10 hover:bg-red-500 hover:bg-opacity-90 md:w-max'
            >
                ПЕРЕЙТИ В МЕНЮ
                <ArrowRight />
            </Button>
            <Button
                onClick={() => push('/dashboard')}
                className='flex h-full w-full gap-1 rounded-full bg-blue-600 px-10 hover:bg-blue-700 hover:bg-opacity-90 md:w-max'
            >
                ПЕРЕЙТИ В АДМИН ПАНЕЛЬ
                <ArrowRight />
            </Button>
        </div>
    );
};
