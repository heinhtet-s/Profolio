'use client';
import React from 'react';

type BtnProps = {
    text: string;
    isLoading: boolean;
};

const SubmitBtn: React.FC<BtnProps> = ({ text, isLoading }) => {
    return (
        <button
            className={`bg-secondaryHover mt-3 text-white min-h-[44px] hover:bg-secondaryHover px-5 duration-700 font-medium transition-all text-lg cursor-pointer rounded-[50px] py-2 flex items-center justify-center ${
                isLoading ? 'opacity-70 min-w-[140px] cursor-not-allowed' : ''
            }`}
            disabled={isLoading}>
            {isLoading ? (
                <div className="spinner border-2 border-t-2 border-t-white border-secondary rounded-full w-5 h-5 animate-spin mr-2"></div>
            ) : (
                text
            )}
        </button>
    );
};

export default SubmitBtn;
