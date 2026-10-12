'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type BtnProps = {
    text: string;
    handleClick?: () => void;
    outline?: boolean;
    className?: string;
    icon?: React.ReactNode;
};

const PrimaryBtn: React.FC<BtnProps> = ({
    text,
    handleClick,
    outline = false,
    className,
    icon
}) => {
    return (
        <button
            onClick={handleClick}
            className={twMerge(
                outline
                    ? 'border border-[rgba(226,206,172,0.35)] text-champagne hover:bg-champagne/10 hover:border-champagne px-6 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group'
                    : 'bg-champagne text-bgDark hover:bg-champagneLight hover:shadow-[0_0_25px_rgba(226,206,172,0.35)] px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group',
                className
            )}>
            <span>{text}</span>
            {icon && (
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    {icon}
                </span>
            )}
        </button>
    );
};

export default PrimaryBtn;
