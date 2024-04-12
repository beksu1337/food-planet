import Image from 'next/image';
import shopping from '/public/shopping.png';

export const CartEmpty = () => {
    return (
        <div className='no-select flex flex-col items-center justify-center'>
            <Image
                src={shopping}
                alt='shopping'
                className='img-no-select w-[200px] dark:invert'
            />
            <p className='text-base'>Здесь пока что пусто</p>
        </div>
    );
};
