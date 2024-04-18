'use client';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { LogoIcon } from '@/lib/icons/logo-icon';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
        name: 'Редактировать',
        href: '/dashboard',
    },
];

export const Header = async () => {
    const path = usePathname();

    return (
        <NavigationMenu className='absolute mx-auto w-full bg-gray-200  dark:bg-slate-800'>
            <NavigationMenuList className='items-center justify-between rounded-full px-3 py-2 sm:px-6'>
                <NavigationMenuItem>
                    <Link href='/' className='flex items-center gap-[8px]'>
                        <LogoIcon />
                        <div className='hidden md:block'>
                            <p className='text-[20px] font-bold uppercase leading-5'>
                                food planet
                            </p>
                            <p className='text-[16px] leading-4 '>
                                Планета вкусной еды
                            </p>
                        </div>
                    </Link>
                </NavigationMenuItem>
                <div className='no-select mr-10 flex flex-col gap-0 font-medium md:flex-row md:gap-6'>
                    {links.map((link) => (
                        <NavigationMenuItem
                            key={link.name}
                            className='flex items-center gap-1'
                        >
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
                <div className='flex'>
                    <CartSwitcher />
                    <ThemeSwitcher />
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    );
};
