'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
type BtnProps = {
    text: string;
    handleClick: () => void;
    outline?: boolean;
    className?: string;
};
const PrimaryBtn: React.FC<BtnProps> = ({
    text,
    handleClick,
    outline = false,
    className
}) => {
    return (
        <button
            onClick={handleClick}
            className={twMerge(
                outline
                    ? 'border border-secondary text-secondary hover:bg-secondary hover:text-white '
                    : 'bg-secondary text-white hover:bg-secondaryHover ',
                `px-5  duration-700 font-medium transition-all	 text-lg  cursor-pointer	 rounded-[50px] py-2 ${className || ''}`
            )}>
            {text}
        </button>
    );
};

export default PrimaryBtn;
