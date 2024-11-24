'use client';
import { AnimatePresence, useInView } from 'framer-motion';
import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import {
    MotionDiv,
    MotionH2,
    MotionLi,
    MotionNav,
    MotionUl
} from '@/lib/utils';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { useAnimate, usePresence } from 'framer-motion';
import Link from 'next/link';
import { NAVITEM } from '@/lib/constant';
const NAVANIMATIONITEM = [
    'About',
    'Experience',
    'Projects',
    'Contact',
    'Email Me'
];
const NavAnimationEnterSequence: any = NAVANIMATIONITEM.map((_, index) => [
    `#item-${index}`,
    { x: 0, opacity: 1 },
    {
        duration: 0.2
    }
]);
const NavAnimationRemoveSequence: any = NAVANIMATIONITEM.map((_, index) => [
    `#item-${index}`,
    { x: '50%', opacity: 0 },
    {
        duration: 0.2
    }
]);
const Navbar = () => {
    const ref = useRef<HTMLElement>(null!);
    const isInView = useInView(ref, { once: true }); // Trigger only once when in view
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu toggle

    return (
        <>
            {' '}
            {/* Backdrop */}
            {/* {isMenuOpen && (
                <MotionDiv
                    className="fixed inset-0 bg-black bg-opacity-80 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    onClick={() => setIsMenuOpen(false)}
                />
            )} */}
            <MotionNav
                ref={ref}
                className="fixed   md:relative  top-0 left-0 w-full flex justify-between items-center py-8 px-6 md:px-12 bg-white z-20"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{
                    y: {
                        duration: 0.8,
                        ease: 'easeInOut'
                    },
                    opacity: {
                        duration: 0.6,
                        ease: 'easeInOut'
                    }
                }}>
                {/* Logo Animation */}
                <MotionH2
                    initial={{ x: -50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{
                        x: {
                            duration: 0.8,
                            ease: 'easeInOut'
                        },
                        opacity: {
                            duration: 0.6,
                            ease: 'easeInOut'
                        }
                    }}
                    className="text-2xl font-medium text-navTextColor">
                    Hein Htet Zaw
                </MotionH2>

                {/* Hamburger Menu Icon */}
                <div
                    className="md:hidden z-30"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <HiX className="text-3xl text-navTextColor cursor-pointer transition-transform duration-300 transform hover:rotate-90" />
                    ) : (
                        <HiOutlineMenu className="text-3xl text-navTextColor cursor-pointer" />
                    )}
                </div>

                {/* Navigation Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <MobileNavbarItem setIsMenuOpen={setIsMenuOpen} />
                    )}
                </AnimatePresence>
                <MotionUl
                    className="hidden gap-[40px] md:flex cursor-pointer text-lg font-medium text-navTextColor"
                    initial={{ opacity: 0, gap: '60px' }}
                    animate={isInView ? { opacity: 1, gap: '40px' } : {}}
                    transition={{
                        opacity: {
                            duration: 0.8,
                            ease: 'easeInOut'
                        },
                        gap: {
                            duration: 1,
                            ease: 'easeInOut'
                        }
                    }}>
                    {NAVITEM.map((item, index) => (
                        <Link
                            key={index}
                            href={`/#${item?.toLocaleLowerCase()}`}>
                            <MotionLi
                                initial={{ x: -30, opacity: 0 }}
                                animate={isInView ? { x: 0, opacity: 1 } : {}}
                                transition={{
                                    duration: 0.8,
                                    delay: index / 10 + 0.2,
                                    ease: 'easeInOut'
                                }}>
                                {item}
                            </MotionLi>
                        </Link>
                    ))}
                </MotionUl>
                {/* Button for Desktop */}
                <MotionDiv
                    className="hidden md:block"
                    initial={{ x: 50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{
                        x: {
                            duration: 0.8,
                            ease: 'easeInOut'
                        },
                        opacity: {
                            duration: 0.6,
                            ease: 'easeInOut'
                        }
                    }}>
                    <a
                        target="_blank"
                        className="primaryBtn"
                        rel="noopener"
                        href="mailto:heinh9540@gmail.com">
                        Email Me{' '}
                    </a>
                </MotionDiv>
            </MotionNav>
        </>
    );
};
const MobileNavbarItem = ({
    setIsMenuOpen
}: {
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();
    console.log(isPresent, 'isPresnent');
    useEffect(() => {
        if (isPresent) {
            const enterAnimation = async () => {
                await animate(
                    scope.current,

                    { y: '0%' },
                    {
                        duration: 0.3
                    }
                );

                await animate(NavAnimationEnterSequence);
            };
            enterAnimation();
        } else {
            const exitAnimation = async () => {
                await animate(NavAnimationRemoveSequence);
                await animate(
                    scope.current,
                    { y: '-100%' },
                    {
                        duration: 0.3
                    }
                );
                safeToRemove();
            };

            exitAnimation();
        }
    }, [isPresent]);
    return (
        <MotionUl
            ref={scope}
            key="menu"
            className="flex flex-col justify-center  items-center fixed top-0 h-[100vh] left-0 w-full bg-white z-10 p-8 gap-20 font-medium text-navTextColor"
            initial={{ y: '-100%' }}
            // animate={{ y: 0 }}
            // exit={{ y: '-100%' }}
            // transition={{
            //     y: {
            //         duration: 0.6,
            //         ease: 'easeInOut'
            //     }
            // }}
        >
            {/* Sequential Animation for Links */}
            {NAVITEM.map((item, index) => (
                <Link
                    href={`/#${item?.toLocaleLowerCase()}`}
                    key={item}>
                    <MotionLi
                        initial={{ x: '50%', opacity: 0 }}
                        key={item}
                        id={`item-${index}`}
                        className="cursor-pointer text-4xl"
                        onClick={() => setIsMenuOpen(false)}>
                        {item}
                    </MotionLi>
                </Link>
            ))}

            {/* Add Button Inside Menu for Mobile */}
            <MotionLi
                id="item-4"
                initial={{ x: '50%', opacity: 0 }}
                className="md:hidden mt-4  "
                onClick={() => setIsMenuOpen(false)}>
                <a
                    className="primaryBtn text-3xl px-8 py-3"
                    rel="noopener"
                    href="mailto:heinh9540@gmail.com">
                    {' '}
                    Email Me{' '}
                </a>
            </MotionLi>
        </MotionUl>
    );
};

export default Navbar;
