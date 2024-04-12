import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Ellipsis, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className='p-2'>
                <Ellipsis size={28} className='animate-pulse' />
            </div>
        );
    }

    return (
        <TooltipProvider disableHoverableContent delayDuration={50}>
            <DropdownMenu>
                <Tooltip>
                    <TooltipTrigger>
                        <DropdownMenuTrigger asChild>
                            <div className='h-max w-max cursor-pointer justify-center rounded-full p-2 transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-foreground'>
                                {theme === 'dark' ? (
                                    <Sun size={28} />
                                ) : (
                                    <Moon size={28} />
                                )}
                            </div>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={12} className='no-select'>
                        <p>Сменить тему</p>
                    </TooltipContent>
                </Tooltip>

                <DropdownMenuContent
                    align='center'
                    sideOffset={12}
                    className='bg-background'
                >
                    <DropdownMenuItem
                        className='cursor-pointer hover:bg-gray-400 hover:text-background dark:hover:bg-secondary-foreground'
                        onClick={() => setTheme('light')}
                    >
                        Светлая
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className='bg-border' />

                    <DropdownMenuItem
                        className='cursor-pointer hover:bg-gray-400 hover:text-background dark:hover:bg-secondary-foreground'
                        onClick={() => setTheme('dark')}
                    >
                        Темная
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className='bg-border' />

                    <DropdownMenuItem
                        className='cursor-pointer hover:bg-gray-400 hover:text-background dark:hover:bg-secondary-foreground'
                        onClick={() => setTheme('system')}
                    >
                        Системная
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </TooltipProvider>
    );
};
