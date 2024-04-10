import { Footer } from '@/components/footer';
import { Header } from '@/components/header/header';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/lib/theme-provider';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import '../styles/globals.css';

const poppins = Nunito_Sans({
    subsets: ['latin', 'cyrillic'],
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
            <body className={poppins.className}>
                <ThemeProvider
                    enableSystem
                    attribute='class'
                    defaultTheme='system'
                >
                    <Header />
                    {children}
                    <Footer />
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
