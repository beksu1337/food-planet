import Image from 'next/image';
import Cart from '/public/cart2.png';

export const MenuCartEmpty = () => {
    return (
        <div className='no-select flex h-full flex-col items-center justify-center p-8 pr-11'>
            <Image
                src={Cart}
                alt='empty cart'
                quality={60}
                width={200}
                className='img-no-select grayscale'
                priority
            />
            <p className='text-center text-sm leading-4'>
                Пока что корзина пуста. Добавленные вами продукты будут
                отображаться здесь!
            </p>
        </div>
    );
};
