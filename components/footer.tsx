'use client';

import { LogoFooter } from '@/lib/icons/logo-footer';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { links } from './header/header';

export const Footer = () => {
    return (
        <footer className='mt-auto h-max rounded-tl-3xl rounded-tr-3xl bg-secondary p-2 text-secondary-foreground dark:bg-slate-800 md:p-8'>
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

                <nav className='no-select flex flex-col gap-2 text-right md:mr-10 md:flex-row md:gap-6 md:text-start'>
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
        </footer>
    );
};
