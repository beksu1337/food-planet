import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

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
                        className='border-b hover:bg-secondary dark:hover:bg-secondary-foreground hover:text-background cursor-pointer'
                        onClick={() => setTheme('light')}
                    >
                        Светлая
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className='border-b dark:hover:bg-secondary-foreground cursor-pointer hover:text-background hover:bg-secondary'
                        onClick={() => setTheme('dark')}
                    >
                        Темная
                    </DropdownMenuItem>
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
