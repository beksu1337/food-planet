import { MENU_LIST } from '@/lib/const';
import { LayoutTemplate } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '../ui/separator';

export const MenuNavAside = () => {
    return (
        <div className='flex flex-col px-2 pt-2'>
            <h4 className='mb-4 flex items-center gap-1 text-sm font-bold text-green-700'>
                <LayoutTemplate size={20} />
                Разделы
            </h4>
            {MENU_LIST.map((el) => (
                <div
                    key={el.id}
                    className='cursor-pointer transition-all hover:text-primary'
                >
                    <Link
                        className='block h-full w-full text-sm'
                        href={`#${el.url}`}
                    >
                        {el.title}
                    </Link>
                    <Separator orientation='horizontal' className='my-2' />
                </div>
            ))}
        </div>
    );
};
