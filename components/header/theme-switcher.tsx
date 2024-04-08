import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
                <Ellipsis size={28} />
            </div>
        );
    }

    return (
        <div className='h-max w-max transition-all duration-200 hover:text-primary-foreground justify-center cursor-pointer p-2 hover:bg-primary rounded-full'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {theme === 'dark' ? <Sun size={28} /> : <Moon size={28} />}
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align='center'
                    sideOffset={12}
                    className='bg-background'
                >
                    <DropdownMenuItem
                        className='hover:bg-secondary dark:hover:bg-secondary-foreground hover:text-background cursor-pointer'
                        onClick={() => setTheme('light')}
                    >
                        Светлая
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className='bg-border' />

                    <DropdownMenuItem
                        className='hover:bg-secondary dark:hover:bg-secondary-foreground hover:text-background cursor-pointer'
                        onClick={() => setTheme('dark')}
                    >
                        Темная
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className='bg-border' />

                    <DropdownMenuItem
                        className='hover:bg-secondary dark:hover:bg-secondary-foreground hover:text-background cursor-pointer'
                        onClick={() => setTheme('system')}
                    >
                        Системная
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
