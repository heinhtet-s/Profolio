'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
type BtnProps = {
    text: string;
    handleClick: () => void;
    outline?: boolean;
};
const PrimaryBtn: React.FC<BtnProps> = ({
    text,
    handleClick,
    outline = false
}) => {
    return (
        <button
            onClick={handleClick}
            className={twMerge(
                'px-5 text-white duration-700 font-medium transition-all	 text-lg  cursor-pointer	 rounded-[50px] py-2',
                outline
                    ? 'border border-secondary text-secondary hover:bg-secondary hover:text-white '
                    : 'bg-secondary hover:bg-secondaryHover '
            )}>
            {text}
        </button>
    );
};

export default PrimaryBtn;
