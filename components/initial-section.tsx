'use client';

import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export const InitialSection = () => {
    const { push } = useRouter();

    return (
        <div className='mt-48 flex max-w-[500px] flex-col gap-3'>
            <h1 className='text-[36px] font-black leading-8'>
                Доставка вкусной еды до 30 минут + напиток в подарок!
            </h1>
            <h4 className='text-base leading-5'>
                Доставим заказ вовремя и можете рассчитывать, что еда будет
                доставлен всегда горячим и ароматным.
            </h4>
            <Button
                onClick={() => push('/menu')}
                className='flex w-max items-center gap-1 rounded-full px-10 uppercase hover:bg-primary hover:bg-opacity-90'
            >
                Перейти в меню
                <ArrowRight />
            </Button>
        </div>
    );
};
