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
                <div key={el.id}>
                    <Link
                        className='text-sm'
                        href={`/menu/#${el.url}`}
                        scroll={true}
                    >
                        {el.title}
                    </Link>
                    <Separator orientation='horizontal' className='my-2' />
                </div>
            ))}
        </div>
    );
};
