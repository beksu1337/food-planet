import { Benefits } from '@/components/benefits';
import { InitialSection } from '@/components/initial-section';
import { MenuNavNew } from '@/components/new-items/menu-nav-new';
import Image from 'next/image';
import burgerImg from '/public/burger.png';

export default async function Home() {
    return (
        <main className='min-h-screen'>
            <div className='container mb-44 flex justify-between'>
                <InitialSection />
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
