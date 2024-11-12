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
            className={`fixed flex text-lg justify-center items-center  text-white top-0 left-0 w-3 h-3 rounded-full bg-blue-500 pointer-events-none z-[9999] `}
            animate={{
                x: !isHovered ? cursorPosition.x - 6 : cursorPosition.x - 40,
                y: !isHovered ? cursorPosition.y - 6 : cursorPosition.y - 80,
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
                className="text-base opacity-0 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isHovered ? 1 : 0 // Make text visible when hovered
                }}
                transition={{
                    delay: isHovered ? 0.3 : 0, // Add delay before showing text after cursor size change
                    duration: 0.3 // Smooth transition for the text
                }}>
                See Project
            </MotionP>
        </MotionDiv>
    );
};

export default CustomCursor;
