'use client';

import { Loader } from '@/lib/loader';

function LoadingPage() {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center'>
            <div className='flex items-center justify-center'>
                <Loader />
            </div>
        </div>
    );
}

export default LoadingPage;
