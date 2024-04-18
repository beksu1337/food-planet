import { BenefitsSection } from '@/components/main/benefits-section';
import { MainSection } from '@/components/main/main';
import { MenuNewList } from '@/components/main/new-items/menu-new-list';
import Image from 'next/image';
import burgerImg from '/public/burger.png';

export default async function Home() {
    return (
        <main>
            <div className='container flex h-screen items-center justify-center pt-10 md:justify-between md:pt-16'>
                <MainSection />
                <Image
                    src={burgerImg}
                    alt='burger'
                    priority
                    width={600}
                    quality={60}
                    className='img-no-select no-select hidden lg:block'
                />
            </div>

            <MenuNewList />
            <BenefitsSection />
        </main>
    );
}
