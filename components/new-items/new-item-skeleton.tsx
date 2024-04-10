import { Skeleton } from '../ui/skeleton';

export const NewItemSkeleton = () => {
    return (
        <div className='grid h-[450px] w-full grid-cols-4 gap-4'>
            {[...Array(4)].map((_, i) => (
                <div key={i} className='rounded-[50px] border px-6 py-4'>
                    <div className='flex flex-col items-center justify-between gap-10'>
                        <Skeleton className='h-[150px] w-[150px] rounded-3xl bg-border' />
                        <div className='w-full space-y-2'>
                            <Skeleton className='h-6 w-full bg-border' />
                            <Skeleton className='h-6 w-full bg-border' />
                            <Skeleton className='h-6 w-[220px] bg-border' />
                        </div>
                        <Skeleton className='h-10 w-full rounded-3xl bg-border' />
                    </div>
                </div>
            ))}
        </div>
    );
};
