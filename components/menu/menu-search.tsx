import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const MenuSearch = ({ isLoading }: { isLoading: boolean }) => {
    if (!isLoading) {
        return (
            <div className='sticky top-0 z-50 col-span-10 mb-2 w-full auto-rows-min bg-background pb-2 pt-3'>
                <Search className='absolute left-4 top-[25px] text-gray-400' />
                <Input
                    className='rounded-full border-none bg-gray-200 py-2 pl-11 text-[19px] focus-visible:ring-0 dark:bg-gray-800'
                    placeholder='Поиск...'
                />
            </div>
        );
    }
};
