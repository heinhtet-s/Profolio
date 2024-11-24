import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { AnimationScope, motion, type MotionProps } from 'framer-motion';
import React, { Ref } from 'react';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Define a new interface that extends MotionProps

// Define types for different HTML elements with motion props
type MotionDivProps = MotionProps &
    React.HTMLAttributes<HTMLDivElement> & { ref?: Ref<HTMLElement> };
type MotionSpanProps = MotionProps & React.HTMLAttributes<HTMLSpanElement>;
type MotionH2Props = MotionProps & React.HTMLAttributes<HTMLHeadingElement>;

type MotionPProps = MotionProps & React.HTMLAttributes<HTMLParagraphElement>;
type MotionAProps = MotionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type MotionButtonProps = MotionProps &
    React.ButtonHTMLAttributes<HTMLButtonElement>;
type MotionNavProps = MotionProps &
    React.HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> };
type MotionUlProps = MotionProps &
    React.HTMLAttributes<HTMLUListElement> & {
        ref?: AnimationScope<any>;
    };

// Export typed motion components
export const MotionDiv = motion.div as React.FC<MotionDivProps>;
export const MotionSpan = motion.span as React.FC<MotionSpanProps>;
export const MotionH1 = motion.h1 as React.FC<MotionH2Props>;
export const MotionH2 = motion.h2 as React.FC<MotionH2Props>;
export const MotionP = motion.p as React.FC<MotionPProps>;
export const MotionA = motion.a as React.FC<MotionAProps>;
export const MotionButton = motion.button as React.FC<MotionButtonProps>;
export const MotionNav = motion.nav as React.FC<MotionNavProps>;
export const MotionUl = motion.ul as React.FC<MotionUlProps>;
export const MotionLi = motion.li as React.FC<
    MotionProps & React.LiHTMLAttributes<HTMLLIElement>
>;
export const MotionSection = motion.section as React.FC<
    MotionProps & React.HTMLAttributes<HTMLElement>
>;
