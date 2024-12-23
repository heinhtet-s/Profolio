'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll'))
                .default;

            new LocomotiveScroll({
                lenisOptions: {
                    duration: 1,
                    easing: (t) => 1 - Math.pow(1 - t, 5)
                }
            });
        })();
    }, []);
    useEffect(() => {
        const scrollToTop = () => {
            console.log('dd');
            // Wait for any potential rendering delays
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Use smooth scrolling for better UX
            }, 200); // Adjust delay if needed
        };

        scrollToTop();
    }, [pathname]);

    return (
        <>
            <Toaster />
            {children}
        </>
    );
};

export default LayoutProvider;
