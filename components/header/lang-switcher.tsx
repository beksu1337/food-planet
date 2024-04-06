import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export const LangSwitcher = () => {
    return (
        <div className='flex items-center gap-2 cursor-pointer'>
            <DropdownMenu>
                <DropdownMenuTrigger className='duration-200 hover:bg-primary transition-all hover:text-secondary-foreground p-2 rounded-full outline-none flex items-center gap-1 no-select'>
                    <Globe size={28} />
                    <p>ru</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-background'>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
