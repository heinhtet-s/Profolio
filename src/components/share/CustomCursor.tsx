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

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <MotionDiv
            className={`fixed flex opacity-0 text-lg justify-center items-center text-white top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] backdrop-blur-md bg-[rgba(0,0,0,0.3)]`}
            animate={{
                display: isHovered ? 'flex' : 'none',
                x: cursorPosition.x - 40,
                y: cursorPosition.y - 80,
                opacity: isVisible ? 1 : 0, // Hide the cursor when it's out of the viewport
                width: !isHovered ? 15 : 100,
                height: !isHovered ? 15 : 100
            }}
            transition={{
                type: 'spring',
                damping: 20,
                stiffness: 150
            }}>
            <MotionP
                style={{
                    flex: '0 0 100px'
                }}
                className="text-base  text-center"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isHovered ? 1 : 0 // Make text visible when hovered
                }}
                transition={{
                    duration: 0.2 // Smooth transition for the text
                }}>
                See Project
            </MotionP>
        </MotionDiv>
    );
};

export default CustomCursor;
