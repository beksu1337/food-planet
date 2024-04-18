import { DashboardList } from '@/components/dashboard/dashboard-list';
import { DashboardNav } from '@/components/dashboard/dashboard-nav';

export default function DashboardPage() {
    return (
        <div className='container min-h-screen pb-8 pt-24'>
            <div className='rounded-xl '>
                <h1 className='px-5 py-4 text-[36px] font-bold leading-8'>
                    Административная панель
                </h1>
                <DashboardNav />
                <DashboardList />
            </div>
        </div>
    );
}
