import { MenuCart } from '@/components/menu/menu-cart';

export default function MenuLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='container relative grid min-h-screen grid-cols-12 gap-3 pt-5'>
            <main className='col-span-9'>{children}</main>
            <MenuCart />
        </div>
    );
}
