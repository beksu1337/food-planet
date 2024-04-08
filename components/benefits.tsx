import Image from 'next/image';
import icon1 from '/public/delivery.png';
import icon4 from '/public/location.png';
import icon3 from '/public/menu.png';
import icon2 from '/public/salad.png';

export const Benefits = () => {
    return (
        <div className='container grid grid-cols-4 gap-3 justify-between mb-10 mt-4'>
            <div className='flex flex-col items-center gap-2 border border-secondary p-2 rounded-md'>
                <div className='p-3 dark:bg-foreground border-2 border-secondary w-max rounded-full'>
                    <Image
                        src={icon1}
                        alt='icon'
                        className='w-[48px] h-[48px]'
                    />
                </div>

                <h5 className='font-bold text-lg'>Мгновенная доставка</h5>
                <p className='leading-5 text-center'>
                    Доставим заказанную вами еду за 30 минут + напиток в подарок
                </p>
            </div>

            <div className='flex flex-col items-center gap-2 border border-secondary p-2 rounded-md'>
                <div className='p-3 border-2 dark:bg-foreground border-secondary w-max rounded-full'>
                    <Image
                        src={icon2}
                        alt='icon'
                        className='w-[48px] h-[48px]'
                    />
                </div>

                <h5 className='font-bold text-lg'>Свежие продукты</h5>
                <p className='leading-5 text-center'>
                    Вся продукция хранится в хороших условиях тем самым
                    продливая срок хранения
                </p>
            </div>

            <div className='flex flex-col items-center gap-2 border border-secondary p-2 rounded-md'>
                <div className='p-3 border-2 dark:bg-foreground border-secondary w-max rounded-full'>
                    <Image src={icon3} alt='icon' />
                </div>

                <h5 className='font-bold text-lg'>Уникальное меню</h5>
                <p className='leading-5 text-center'>
                    Ежедневно мы обновляем наше меню и том числе коктейльное
                </p>
            </div>

            <div className='flex flex-col items-center gap-2 border border-secondary p-2 rounded-md'>
                <div className='p-3 border-2 dark:bg-foreground border-secondary w-max rounded-full'>
                    <Image
                        src={icon4}
                        alt='icon'
                        className='w-[48px] h-[48px]'
                    />
                </div>

                <h5 className='font-bold text-lg'>Доставка</h5>
                <p className='leading-5 text-center'>
                    Мы быстро доставляем вашу еду по указанному адресу
                </p>
            </div>
        </div>
    );
};
