'use client';

import { LoaderCircle } from 'lucide-react';

function LoadingPage() {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center'>
            <div className='flex items-center justify-center'>
                <LoaderCircle className='animate-spin text-primary' size={52} />
            </div>
        </div>
    );
}

export default LoadingPage;
