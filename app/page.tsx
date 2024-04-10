import { Benefits } from '@/components/benefits';
import { MenuNavNew } from '@/components/new-items/menu-nav-new';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import burgerImg from '/public/burger.png';

export default function Home() {
    return (
        <main className='min-h-screen'>
            <div className='container mb-44 flex justify-between'>
                <div className='mt-48 flex max-w-[500px] flex-col gap-3'>
                    <h1 className='text-[36px] font-black leading-8'>
                        Доставка вкусной еды до 30 минут + напиток в подарок!
                    </h1>
                    <h4 className='text-base leading-5'>
                        Доставим заказ вовремя и можете рассчитывать, что еда
                        будет доставлен всегда горячим и ароматным.
                    </h4>
                    <Button className='flex w-max items-center gap-1 rounded-full px-10 uppercase hover:bg-primary hover:bg-opacity-90'>
                        Перейти в меню
                        <ArrowRight />
                    </Button>
                </div>

                <Image
                    src={burgerImg}
                    alt='burger'
                    priority
                    className='img-no-select no-select mt-20'
                    loading='eager'
                />
            </div>

            <MenuNavNew />
            <Benefits />
        </main>
    );
}
