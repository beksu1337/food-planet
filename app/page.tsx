import { Benefits } from '@/components/benefits';
import { InitialSection } from '@/components/initial-section';
import { MenuNavNew } from '@/components/new-items/menu-nav-new';
import Image from 'next/image';
import burgerImg from '/public/burger.png';

export default async function Home() {
    return (
        <main>
            <div className='container flex h-screen items-center justify-between pt-16'>
                <InitialSection />
                <Image
                    src={burgerImg}
                    alt='burger'
                    priority
                    width={600}
                    quality={60}
                    className='img-no-select no-select'
                    loading='eager'
                />
            </div>

            <MenuNavNew />
            <Benefits />
        </main>
    );
}
