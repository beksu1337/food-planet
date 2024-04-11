'use client';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { LogoIcon } from '@/lib/logo-icon';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AccountSwitcher } from './account-switcher';
import { CartSwitcher } from './cart-switcher';
import { ThemeSwitcher } from './theme-switcher';

export const links = [
    {
        name: 'Главная',
        href: '/',
    },
    {
        name: 'Меню',
        href: '/menu',
    },
    {
        name: 'О нас',
        href: '/about',
    },
];

export const Header = () => {
    const path = usePathname();

    return (
        <NavigationMenu className='container relative w-full pt-4'>
            <NavigationMenuList className='items-center justify-between rounded-full border px-6 py-2'>
                <NavigationMenuItem>
                    <Link href='/' className='flex items-center gap-[8px]'>
                        <LogoIcon />
                        <div>
                            <p className='text-[20px] font-bold uppercase leading-5'>
                                food planet
                            </p>
                            <p className='text-[16px] leading-4 '>
                                Планета вкусной еды
                            </p>
                        </div>
                    </Link>
                </NavigationMenuItem>
                <div className='no-select mr-10 flex gap-6 font-medium'>
                    {links.map((link) => (
                        <NavigationMenuItem key={link.name}>
                            <Link
                                className={cn('hover:text-primary', {
                                    'text-primary': path === link.href,
                                })}
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </div>
                <div className='flex gap-1'>
                    <CartSwitcher />
                    <ThemeSwitcher />
                    <AccountSwitcher />
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    );
};
