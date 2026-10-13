'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { Toaster } from 'react-hot-toast';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const locomotiveScrollRef = useRef<any>(null);

    useEffect(() => {
        let isMounted = true;

        (async () => {
            try {
                const LocomotiveScroll = (await import('locomotive-scroll'))
                    .default;

                if (!isMounted) return;

                // Clean up any existing instance first
                if (locomotiveScrollRef.current) {
                    locomotiveScrollRef.current.destroy();
                }

                const instance = new LocomotiveScroll({
                    lenisOptions: {
                        duration: 1.2,
                        easing: (t) =>
                            Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                        orientation: 'vertical',
                        gestureOrientation: 'vertical',
                        smoothWheel: true,
                        wheelMultiplier: 1.05,
                        touchMultiplier: 1.8,
                        infinite: false,
                        syncTouch: false
                    }
                });

                locomotiveScrollRef.current = instance;

                if (typeof window !== 'undefined') {
                    (window as any).locomotiveScroll = instance;
                }
            } catch (err) {
                console.error('LocomotiveScroll init error:', err);
            }
        })();

        return () => {
            isMounted = false;
            if (locomotiveScrollRef.current) {
                locomotiveScrollRef.current.destroy();
                locomotiveScrollRef.current = null;
                if (typeof window !== 'undefined') {
                    delete (window as any).locomotiveScroll;
                }
            }
        };
    }, []);

    useEffect(() => {
        // Reset scroll position on route change
        if (locomotiveScrollRef.current) {
            locomotiveScrollRef.current.scrollTo(0, { immediate: true });
        } else if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return (
        <>
            <Toaster />
            {children}
        </>
    );
};

export default LayoutProvider;
