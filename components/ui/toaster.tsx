'use client';

import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { Check } from 'lucide-react';

export function Toaster() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(function ({
                id,
                title,
                description,
                action,
                ...props
            }) {
                return (
                    <Toast key={id} {...props} duration={2000}>
                        <div className='grid gap-1'>
                            <div className='flex items-center gap-1'>
                                <Check size={32} className='text-green-500' />
                                {title && (
                                    <ToastTitle className='text-base leading-4'>
                                        {title}
                                    </ToastTitle>
                                )}
                            </div>
                            {description && (
                                <ToastDescription className='pt-2'>
                                    <div className='*:text-[19px]'>
                                        {description}
                                    </div>
                                </ToastDescription>
                            )}
                        </div>
                        {action}
                        <ToastClose />
                    </Toast>
                );
            })}
            <ToastViewport />
        </ToastProvider>
    );
}
