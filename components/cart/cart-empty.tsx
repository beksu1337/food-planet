import Image from 'next/image';
import shopping from '/public/shopping.png';

export const CartEmpty = () => {
    return (
        <div className='flex no-select flex-col justify-center items-center'>
            <Image
                src={shopping}
                alt='shopping'
                className='w-[200px] dark:invert'
            />
            <p className='font-bold text-base'>Ваша корзина пуста</p>
        </div>
    );
};
