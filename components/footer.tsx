'use client';

import { LogoFooter } from '@/lib/logo-footer';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { links } from './header/header';

export const Footer = () => {
    return (
        <div className='bg-secondary dark:bg-neutral-800 w-full text-secondary-foreground p-8'>
            <div className='container flex justify-between items-center'>
                <div className='flex items-center gap-[8px]'>
                    <LogoFooter />
                    <div>
                        <p className='font-bold uppercase leading-5 text-[20px]'>
                            food planet
                        </p>
                        <p className='text-[16px] leading-4 '>
                            Планета вкусной еды
                        </p>
                    </div>
                </div>

                <nav className='flex gap-6 mr-10 no-select'>
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
