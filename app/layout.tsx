import { Footer } from '@/components/footer';
import { Header } from '@/components/header/header';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/lib/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../styles/globals.css';

const roboto = Roboto({
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
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang='ru' suppressHydrationWarning>
                <body className={roboto.className}>
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
        </ClerkProvider>
    );
}
