import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Globe } from 'lucide-react';

export const LangSwitcher = () => {
    return (
        <TooltipProvider delayDuration={50} disableHoverableContent>
            <DropdownMenu>
                <Tooltip>
                    <TooltipTrigger>
                        <DropdownMenuTrigger
                            asChild
                            className='no-select flex items-center gap-1 rounded-full p-2 outline-none transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-secondary-foreground'
                        >
                            <div className='flex cursor-pointer items-center gap-2'>
                                <Globe size={28} />
                            </div>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={12}>
                        <p>Аккаунт</p>
                    </TooltipContent>
                </Tooltip>

                <DropdownMenuContent sideOffset={12} className='bg-background'>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </TooltipProvider>
    );
};
