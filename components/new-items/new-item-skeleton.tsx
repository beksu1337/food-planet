import { Skeleton } from '../ui/skeleton';

export const NewItemSkeleton = () => {
    return (
        <div className='h-[450px] w-full grid grid-cols-4 gap-4'>
            {[...Array(4)].map((_, i) => (
                <div key={i} className='rounded-[50px] border px-6 py-4'>
                    <div className='flex flex-col gap-10 items-center justify-between'>
                        <Skeleton className='bg-border rounded-3xl h-[150px] w-[150px]' />
                        <div className='space-y-2 w-full'>
                            <Skeleton className='h-6 bg-border w-full' />
                            <Skeleton className='h-6 bg-border w-full' />
                            <Skeleton className='h-6 bg-border w-[220px]' />
                        </div>
                        <Skeleton className='h-10 rounded-3xl bg-border w-full' />
                    </div>
                </div>
            ))}
        </div>
    );
};
