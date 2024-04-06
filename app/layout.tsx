import { Header } from '@/components/header/header';
import { ThemeProvider } from '@/lib/theme-provider';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import '../styles/globals.css';

const roboto = Roboto({
    subsets: ['cyrillic', 'latin'],
    weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
    title: 'Food Planet',
    description:
        'Разработка веб-сайта интернет магазина по продаже еды Food Planet',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ru' suppressHydrationWarning>
            <body className={roboto.className}>
                <ThemeProvider
                    enableSystem
                    attribute='class'
                    defaultTheme='system'
                >
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
