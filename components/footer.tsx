'use client';

import { LogoFooter } from '@/lib/logo-footer';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { links } from './header/header';

export const Footer = () => {
    return (
        <div className='w-full rounded-tl-3xl rounded-tr-3xl bg-secondary p-8 text-secondary-foreground dark:bg-gray-800'>
            <div className='container flex items-center justify-between'>
                <div className='flex items-center gap-[8px]'>
                    <LogoFooter />
                    <div>
                        <p className='text-[20px] font-bold uppercase leading-5'>
                            food planet
                        </p>
                        <p className='text-[16px] leading-4 '>
                            Планета вкусной еды
                        </p>
                    </div>
                </div>

                <nav className='no-select mr-10 flex gap-6'>
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            className={cn('hover:text-primary')}
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};
