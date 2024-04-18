import { Skeleton } from '../../ui/skeleton';

export const MenuItemsSkeleton = () => {
    return (
        <div className='grid min-h-[500px] grid-cols-1 gap-2 sm:grid-cols-2'>
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    className='flex h-40 w-full items-center justify-center rounded-lg border px-6 py-6'
                >
                    <div className='flex w-full items-center justify-between gap-4'>
                        <Skeleton className='h-[70px] w-[70px] rounded-full bg-border' />
                        <div className='w-[80%] space-y-2'>
                            <Skeleton className='h-6  rounded-3xl bg-border' />
                            <Skeleton className='h-6 rounded-3xl bg-border' />
                            <Skeleton className='h-6 w-3/4 rounded-3xl bg-border' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
