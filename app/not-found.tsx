import Image from 'next/image';
import Link from 'next/link';
import NotFoundImage from '/public/404.png';

export default function NotFound() {
    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2 className='no-select text-lg font-bold'>
                    Страница не найдена
                </h2>
                <Link
                    href='/'
                    className='rounded-lg bg-green-600 px-4 py-1 text-background  transition-colors hover:bg-green-700'
                >
                    Вернуться на главную
                </Link>
            </div>
            <Image
                src={NotFoundImage}
                alt='Page not found'
                width={350}
                className='img-no-select no-select dark:invert'
            />
        </div>
    );
}
