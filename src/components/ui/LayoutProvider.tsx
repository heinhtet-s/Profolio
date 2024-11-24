'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);
    return (
        <>
            <Toaster />
            {children}
        </>
    );
};

export default LayoutProvider;
