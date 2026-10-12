import { useState, useEffect } from 'react';
import React from 'react';
import { MotionDiv, MotionP } from '@/lib/utils';

const CustomCursor = ({
    isVisible,
    setIsVisible,
    isHovered
}: {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isHovered: boolean;
}) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [setIsVisible]);

    return (
        <MotionDiv
            className="fixed flex opacity-0 text-xs tracking-widest uppercase font-semibold justify-center items-center text-champagne top-0 left-0 rounded-full pointer-events-none z-[9999] backdrop-blur-md bg-surface/90 border border-champagne/40 shadow-[0_0_25px_rgba(226,206,172,0.3)]"
            animate={{
                display: isHovered ? 'flex' : 'none',
                x: cursorPosition.x - 45,
                y: cursorPosition.y - 45,
                opacity: isVisible && isHovered ? 1 : 0,
                width: !isHovered ? 16 : 90,
                height: !isHovered ? 16 : 90
            }}
            transition={{
                type: 'spring',
                damping: 22,
                stiffness: 180
            }}>
            <MotionP
                style={{
                    flex: '0 0 90px'
                }}
                className="text-[11px] text-center font-medium text-champagneLight select-none"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isHovered ? 1 : 0
                }}
                transition={{
                    duration: 0.2
                }}>
                View Case ↗
            </MotionP>
        </MotionDiv>
    );
};

export default CustomCursor;
