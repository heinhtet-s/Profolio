'use client';
import React from 'react';

type BtnProps = {
    text: string;
    isLoading: boolean;
};

const SubmitBtn: React.FC<BtnProps> = ({ text, isLoading }) => {
    return (
        <button
            type="submit"
            className={`w-full sm:w-auto bg-champagne text-bgDark hover:bg-champagneLight hover:shadow-[0_0_30px_rgba(226,206,172,0.35)] min-h-[46px] px-8 py-3 rounded-full font-semibold text-sm tracking-wide duration-300 transition-all cursor-pointer flex items-center justify-center gap-2 ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}>
            {isLoading ? (
                <>
                    <div className="border-2 border-t-2 border-t-bgDark border-champagne rounded-full w-4 h-4 animate-spin mr-2"></div>
                    <span>Sending Dispatch...</span>
                </>
            ) : (
                <span>{text}</span>
            )}
        </button>
    );
};

export default SubmitBtn;
