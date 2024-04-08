import { Benefits } from '@/components/benefits';
import { MenuNavNew } from '@/components/new-items/menu-nav-new';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import burgerImg from '/public/burger.png';

export default function Home() {
    return (
        <main className='min-h-screen'>
            <div className='flex container justify-between mb-44'>
                <div className='max-w-[500px] flex mt-48 flex-col gap-3'>
                    <h1 className='font-black text-[36px] leading-8'>
                        Доставка вкусной еды до 30 минут + напиток в подарок!
                    </h1>
                    <h4 className='text-base leading-5'>
                        Доставим заказ вовремя и можете рассчитывать, что еда
                        будет доставлен всегда горячим и ароматным.
                    </h4>
                    <Button className='rounded-full w-max px-10 gap-1 flex items-center uppercase hover:bg-primary hover:bg-opacity-90'>
                        Перейти в меню
                        <ArrowRight />
                    </Button>
                </div>

                <Image
                    src={burgerImg}
                    alt='burger'
                    priority
                    className='mt-20 img-no-select no-select'
                    loading='eager'
                />
            </div>

            <MenuNavNew />
            <Benefits />
        </main>
    );
}
