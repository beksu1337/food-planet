import { MenuCartAside } from '@/components/menu/menu-cart-aside/menu-cart';

export default async function MenuLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='container relative grid min-h-screen grid-cols-12 gap-3 pt-24'>
            <main className='col-span-12 md:col-span-9'>{children}</main>
            <MenuCartAside />
        </div>
    );
}
