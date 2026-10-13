'use client';
import { AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { MotionDiv, MotionUl } from '@/lib/utils';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useAnimate, usePresence } from 'framer-motion';
import Link from 'next/link';
import { NAVITEM } from '@/lib/constant';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        // Track active section via IntersectionObserver
        const sectionIds = NAVITEM.map((item) => item.toLowerCase());
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -60% 0px',
                threshold: 0
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        item: string
    ) => {
        const id = item.toLowerCase();
        const elem = document.getElementById(id);
        if (elem) {
            e.preventDefault();
            if (
                typeof window !== 'undefined' &&
                (window as any).locomotiveScroll
            ) {
                (window as any).locomotiveScroll.scrollTo(elem, {
                    offset: -85,
                    duration: 1.1
                });
            } else {
                const headerOffset = 85;
                const elementPosition = elem.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <>
            {/* Edge-to-Edge Full-Width Glass Header */}
            <header
                className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-[#090D16]/85 backdrop-blur-xl border-b border-champagne/15 shadow-[0_12px_36px_-10px_rgba(0,0,0,0.85)] py-3 sm:py-3.5'
                        : 'bg-[#090D16]/60 backdrop-blur-md border-b border-white/[0.06] py-3.5 sm:py-4'
                }`}>
                {/* Hairline champagne gradient accent line along bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-champagne/25 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Brand / Monogram Badge */}
                    <Link
                        href="/"
                        className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
                        <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#1C2538] to-[#101625] border border-champagne/35 flex items-center justify-center shadow-[0_0_15px_rgba(226,206,172,0.12)] group-hover:border-champagne group-hover:shadow-[0_0_22px_rgba(226,206,172,0.3)] transition-all duration-300">
                            <span className="font-mono font-bold text-xs tracking-wider text-champagne group-hover:text-champagneLight transition-colors">
                                HZ
                            </span>
                            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                        </div>
                        <div className="flex flex-col text-left">
                            <div className="flex items-center gap-2">
                                <span className="text-xs sm:text-sm font-semibold tracking-wider text-white group-hover:text-champagne transition-colors leading-none">
                                    HEIN HTET
                                </span>
                                <span className="hidden lg:inline-block text-[9px] px-1.5 py-0.5 rounded-full bg-champagne/10 border border-champagne/25 text-champagne font-mono tracking-wider">
                                    DEV
                                </span>
                            </div>
                            <span className="text-[10px] font-mono tracking-widest text-textMuted uppercase mt-1 leading-none">
                                Software Engineer
                            </span>
                        </div>
                    </Link>

                    {/* Center Navigation Links (Desktop) */}
                    <ul className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#121826]/60 border border-white/[0.06] backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
                        {NAVITEM.map((item, index) => {
                            const isCurrent =
                                activeSection === item.toLowerCase();
                            return (
                                <Link
                                    key={index}
                                    href={`/#${item.toLowerCase()}`}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all duration-300 ${
                                        isCurrent
                                            ? 'text-champagne bg-champagne/15 border border-champagne/30 shadow-[0_0_15px_rgba(226,206,172,0.15)] font-semibold'
                                            : 'text-textColor hover:text-white hover:bg-white/5 border border-transparent'
                                    }`}>
                                    <span>{item}</span>
                                </Link>
                            );
                        })}
                    </ul>

                    {/* Right Actions & Social Links */}
                    <div className="flex items-center gap-2.5 sm:gap-3">
                        {/* Social Quick Links */}
                        <div className="hidden lg:flex items-center gap-2 pr-2 border-r border-white/10">
                            <a
                                href="https://github.com/HeinHtetZaw9"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub Profile"
                                className="w-8 h-8 rounded-full bg-surfaceLight/50 border border-borderGlass text-textMuted hover:text-champagne hover:border-champagne/40 flex items-center justify-center transition-all duration-300 hover:scale-105">
                                <FaGithub className="text-sm" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hein-htet-zaw/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn Profile"
                                className="w-8 h-8 rounded-full bg-surfaceLight/50 border border-borderGlass text-textMuted hover:text-champagne hover:border-champagne/40 flex items-center justify-center transition-all duration-300 hover:scale-105">
                                <FaLinkedinIn className="text-sm" />
                            </a>
                        </div>

                        {/* Direct Contact Button */}
                        <a
                            href="mailto:heinh9540@gmail.com"
                            className="bg-champagne text-bgDark hover:bg-champagneLight px-4 sm:px-5 py-2 rounded-full font-semibold text-xs tracking-wider transition-all duration-300 shadow-[0_0_18px_rgba(226,206,172,0.22)] hover:shadow-[0_0_24px_rgba(226,206,172,0.4)] hover:scale-105 flex items-center gap-1.5">
                            <span>Let&apos;s Talk</span>
                            <span className="text-[10px] transform group-hover:translate-x-0.5 transition-transform">
                                ↗
                            </span>
                        </a>

                        {/* Mobile Hamburger Toggle */}
                        <button
                            type="button"
                            className="md:hidden w-9 h-9 rounded-full bg-surfaceLight/80 border border-borderGlass text-white flex items-center justify-center hover:border-champagne/40 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu">
                            {isMenuOpen ? (
                                <HiX className="text-xl text-champagne" />
                            ) : (
                                <HiOutlineMenu className="text-xl text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <MobileNavbarItem
                        setIsMenuOpen={setIsMenuOpen}
                        activeSection={activeSection}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

const MobileNavbarItem = ({
    setIsMenuOpen,
    activeSection
}: {
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
    activeSection: string;
}) => {
    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (isPresent) {
            const enterAnimation = async () => {
                await animate(
                    scope.current,
                    { opacity: [0, 1], y: ['-5%', '0%'] },
                    { duration: 0.3, ease: 'easeOut' }
                );
            };
            enterAnimation();
        } else {
            const exitAnimation = async () => {
                await animate(
                    scope.current,
                    { opacity: [1, 0], y: ['0%', '-5%'] },
                    { duration: 0.25, ease: 'easeIn' }
                );
                safeToRemove();
            };
            exitAnimation();
        }
    }, [isPresent, animate, safeToRemove, scope]);

    return (
        <MotionDiv
            ref={scope}
            key="mobile-nav"
            className="fixed inset-0 z-40 bg-[#090D16]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 pt-24 md:hidden border-b border-champagne/20">
            <div className="flex flex-col gap-6">
                {/* Status Indicator */}
                <div className="flex items-center justify-between py-2 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-champagne">
                            Available for Work
                        </span>
                    </div>
                    <span className="text-[10px] font-mono text-textMuted uppercase tracking-widest">
                        Navigation
                    </span>
                </div>

                {/* Nav Links */}
                <MotionUl className="flex flex-col gap-3 font-sans">
                    {NAVITEM.map((item, index) => {
                        const isCurrent = activeSection === item.toLowerCase();
                        return (
                            <Link
                                key={item}
                                href={`/#${item.toLowerCase()}`}
                                onClick={(e) => {
                                    setIsMenuOpen(false);
                                    const elem = document.getElementById(
                                        item.toLowerCase()
                                    );
                                    if (elem) {
                                        e.preventDefault();
                                        if (
                                            typeof window !== 'undefined' &&
                                            (window as any).locomotiveScroll
                                        ) {
                                            (
                                                window as any
                                            ).locomotiveScroll.scrollTo(elem, {
                                                offset: -85,
                                                duration: 1.1
                                            });
                                        } else {
                                            const headerOffset = 85;
                                            const elementPosition =
                                                elem.getBoundingClientRect()
                                                    .top;
                                            const offsetPosition =
                                                elementPosition +
                                                window.pageYOffset -
                                                headerOffset;
                                            window.scrollTo({
                                                top: offsetPosition,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }
                                }}
                                className={`flex items-center justify-between group py-3 px-3 rounded-xl transition-all duration-200 border ${
                                    isCurrent
                                        ? 'bg-champagne/10 border-champagne/30 text-champagne'
                                        : 'border-transparent text-white hover:bg-white/5 hover:text-champagne'
                                }`}>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-mono text-champagne/50">
                                        0{index + 1}
                                    </span>
                                    <span className="text-lg font-medium group-hover:translate-x-1.5 transition-transform duration-300">
                                        {item}
                                    </span>
                                </div>
                                <span className="text-xs font-mono text-champagne/70 group-hover:text-champagne">
                                    ↗
                                </span>
                            </Link>
                        );
                    })}
                </MotionUl>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <span className="text-xs text-textMuted uppercase tracking-wider font-mono">
                        Direct Channel
                    </span>
                    <div className="flex items-center gap-2">
                        <a
                            href="https://github.com/HeinHtetZaw9"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub Profile"
                            className="w-8 h-8 rounded-full bg-surfaceLight/60 border border-borderGlass text-textMuted hover:text-champagne flex items-center justify-center transition-colors">
                            <FaGithub className="text-sm" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hein-htet-zaw/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn Profile"
                            className="w-8 h-8 rounded-full bg-surfaceLight/60 border border-borderGlass text-textMuted hover:text-champagne flex items-center justify-center transition-colors">
                            <FaLinkedinIn className="text-sm" />
                        </a>
                    </div>
                </div>

                <a
                    href="mailto:heinh9540@gmail.com"
                    className="primaryBtn text-center w-full py-3 text-xs tracking-widest uppercase font-mono"
                    onClick={() => setIsMenuOpen(false)}>
                    Send Message Directly
                </a>
            </div>
        </MotionDiv>
    );
};

export default Navbar;
