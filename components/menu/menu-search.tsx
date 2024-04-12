import { Input } from '@/components/ui/input';
import { useFetchStore } from '@/lib/store';
import { debounce } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface IFormInputs {
    TextField: string;
}

export const MenuSearch = ({ isLoading }: { isLoading: boolean }) => {
    const { register, handleSubmit, watch } = useForm<IFormInputs>();
    const { changeSearchParams } = useFetchStore();

    useEffect(() => {
        const debouncedCb = debounce((formValue: any) => {
            changeSearchParams(formValue.TextField);
        }, 1200);

        const subscription = watch(debouncedCb);

        return () => subscription.unsubscribe();
    }, [watch]);

    if (!isLoading) {
        return (
            <div className='sticky top-0 z-50 col-span-10 mb-2 w-full auto-rows-min bg-background pb-2 pt-3'>
                <Search className='absolute left-4 top-[25px] text-gray-400' />
                <form>
                    <Input
                        {...register('TextField', { required: true })}
                        className='rounded-full border-none bg-gray-200 py-2 pl-11 text-[19px] focus-visible:ring-0 dark:bg-gray-800'
                        placeholder='Поиск...'
                    />
                </form>
            </div>
        );
    }
};
