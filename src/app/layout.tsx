import type { Metadata, Viewport } from 'next';
import React from 'react';
import './globals.css';
import LayoutProvider from '@/components/ui/LayoutProvider';

export const metadata: Metadata = {
    title: 'Hein Htet Zaw | FullStack Developer Portfolio',
    description:
        "Welcome to Hein Htet Zaw's portfolio. Explore projects showcasing expertise in React, Next.js,Node.js, Tailwind CSS, and modern frontend development."
};
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
    // Also supported by less commonly used
    // interactiveWidget: 'resizes-visual',
};
export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <LayoutProvider>{children}</LayoutProvider>
            </body>
        </html>
    );
}
