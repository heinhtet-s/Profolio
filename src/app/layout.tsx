import type { Metadata, Viewport } from 'next';
import React from 'react';
import './globals.css';
import LayoutProvider from '@/components/ui/LayoutProvider';

export const metadata: Metadata = {
    title: 'Hein Htet Zaw — Full-Stack Software Engineer',
    description:
        'Portfolio of Hein Htet Zaw, Full-Stack Software Engineer specializing in scalable web systems, clean architectural design, and high-performance React & Node.js applications.',
    keywords: [
        'Hein Htet Zaw',
        'Full-Stack Software Engineer',
        'Next.js',
        'React',
        'TypeScript',
        'Node.js',
        'Software Engineer Portfolio',
        'Bangkok Developer'
    ],
    authors: [{ name: 'Hein Htet Zaw' }],
    openGraph: {
        title: 'Hein Htet Zaw — Full-Stack Software Engineer',
        description:
            'Engineering scalable web applications, resilient distributed systems, and refined digital experiences with modern JavaScript & cloud architecture.',
        type: 'website'
    }
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    themeColor: '#090D16'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className="dark">
            <body className="bg-bgDark text-textColor selection:bg-champagne selection:text-bgDark antialiased">
                <LayoutProvider>{children}</LayoutProvider>
            </body>
        </html>
    );
}
