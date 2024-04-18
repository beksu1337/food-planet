import { Input } from '@/components/ui/input';
import { useFetchStore } from '@/lib/store/store';
import { debounce } from '@/lib/utils';
import { Loader2, Search } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface IFormInputs {
    TextField: string;
}

export const MenuSearch = ({ isLoading }: { isLoading: boolean }) => {
    const { register, watch } = useForm<IFormInputs>();
    const { changeSearchParams } = useFetchStore();

    useEffect(() => {
        const debouncedCb = debounce((formValue: any) => {
            changeSearchParams(formValue.TextField);
        }, 1000);

        const subscription = watch(debouncedCb);

        return () => {
            subscription.unsubscribe();
            changeSearchParams('');
        };
    }, [watch]);

    return (
        <div className='sticky top-0 z-50 col-span-10 mb-2 w-full auto-rows-min bg-background pb-3 pt-3'>
            {isLoading ? (
                <Loader2 className='absolute left-4 top-[25px] animate-spin text-gray-400' />
            ) : (
                <Search className='absolute left-4 top-[25px] text-gray-400' />
            )}

            <form>
                <Input
                    {...register('TextField')}
                    className='rounded-md border border-slate-300 bg-slate-100 py-2 pl-11 text-[19px] focus-visible:ring-0 dark:border-none dark:bg-gray-800'
                    placeholder='Поиск...'
                    disabled={isLoading}
                />
            </form>
        </div>
    );
};
