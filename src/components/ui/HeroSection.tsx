'use client';
import Image from 'next/image';
import PrimaryBtn from '../share/PrimaryBtn';
import { FaGithub, FaLinkedinIn, FaArrowDown } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';

const HeroSection = () => {
    return (
        <section className="pt-24 sm:pt-32 md:pt-40 pb-20 md:pb-32 flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-16 relative">
            {/* Ambient Background Aura */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-champagne/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-surfaceLight/20 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Left Content Column */}
            <div className="w-full lg:w-3/5 flex flex-col items-start">
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface/90 border border-champagne/20 backdrop-blur-md mb-6 shadow-sm hover:border-champagne/40 transition-colors">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-champagne">
                        Available for Select Engineering Roles
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                    Hein Htet{' '}
                    <span className="editorial-serif font-normal italic champagne-gradient-text">
                        Zaw
                    </span>
                    <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-textMuted mt-2 tracking-normal">
                        Full-Stack Software Engineer
                    </span>
                </h1>

                {/* Subtitle / Bio */}
                <p className="text-base sm:text-lg text-textColor/90 max-w-xl leading-relaxed mb-8 font-light">
                    Architecting high-performance web systems and refined user
                    interfaces. Specializing in React, Next.js, TypeScript, and
                    distributed Node.js cloud backends with 3+ years of
                    production experience.
                </p>

                {/* CTAs & Socials */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10 w-full">
                    <a
                        href="#projects"
                        onClick={(e) => {
                            const elem = document.getElementById('projects');
                            if (elem) {
                                e.preventDefault();
                                if (
                                    typeof window !== 'undefined' &&
                                    (window as any).locomotiveScroll
                                ) {
                                    (window as any).locomotiveScroll.scrollTo(
                                        elem,
                                        {
                                            offset: -80,
                                            duration: 1.1
                                        }
                                    );
                                } else {
                                    elem.scrollIntoView({ behavior: 'smooth' });
                                }
                            }
                        }}>
                        <PrimaryBtn
                            text="Explore Projects"
                            icon={<FaArrowDown className="text-xs" />}
                        />
                    </a>

                    <a href="mailto:heinh9540@gmail.com">
                        <PrimaryBtn
                            outline={true}
                            text="Inquire for Collaboration"
                        />
                    </a>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 sm:ml-2">
                        <a
                            href="https://github.com/heinhtet-s"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="w-10 h-10 rounded-full bg-surface border border-borderGlass hover:border-champagne/50 hover:bg-surfaceLight transition-all duration-300 flex items-center justify-center text-textColor hover:text-champagne hover:scale-105">
                            <FaGithub className="text-lg" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hein-htet-zaw-992597258/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="w-10 h-10 rounded-full bg-surface border border-borderGlass hover:border-champagne/50 hover:bg-surfaceLight transition-all duration-300 flex items-center justify-center text-textColor hover:text-champagne hover:scale-105">
                            <FaLinkedinIn className="text-base" />
                        </a>
                    </div>
                </div>

                {/* Quick Impact Metrics Strip */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-borderGlass w-full max-w-lg">
                    <div className="group transition-transform hover:-translate-y-0.5">
                        <span className="block text-2xl sm:text-3xl font-bold text-white font-mono group-hover:text-champagne transition-colors">
                            5+
                        </span>
                        <span className="text-xs uppercase tracking-wider text-textMuted font-mono">
                            Years Industry Exp
                        </span>
                    </div>
                    <div className="group transition-transform hover:-translate-y-0.5">
                        <span className="block text-2xl sm:text-3xl font-bold text-champagne font-mono group-hover:text-champagneLight transition-colors">
                            20+
                        </span>
                        <span className="text-xs uppercase tracking-wider text-textMuted font-mono">
                            Projects Delivered
                        </span>
                    </div>
                    <div className="group transition-transform hover:-translate-y-0.5">
                        <span className="block text-2xl sm:text-3xl font-bold text-white font-mono group-hover:text-champagne transition-colors">
                            100%
                        </span>
                        <span className="text-xs uppercase tracking-wider text-textMuted font-mono">
                            Client Dedication
                        </span>
                    </div>
                </div>
            </div>

            {/* Right Visual / Portrait Column */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end relative">
                <div className="relative w-64 sm:w-80 md:w-96 aspect-square group">
                    {/* Glowing Accent Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-champagne/30 via-transparent to-champagne/10 blur-xl scale-105 pointer-events-none group-hover:scale-110 transition-transform duration-700" />

                    {/* Hairline Frame */}
                    <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-champagne/40 via-surface to-champagne/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_60px_rgba(226,206,172,0.25)] transition-shadow duration-500">
                        <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-surface">
                            <Image
                                alt="Hein Htet Zaw"
                                src="/image/2024-10-27 13.03.45.jpg"
                                fill
                                priority
                                className="object-cover object-top filter contrast-[1.02] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>

                    {/* Floating Luxury Badge */}
                    <div className="absolute -bottom-3 -left-3 sm:bottom-4 sm:-left-6 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-champagne/30 shadow-xl backdrop-blur-xl group-hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-8 h-8 rounded-full bg-champagne/10 border border-champagne/40 flex items-center justify-center text-champagne">
                            <HiOutlineSparkles className="text-base" />
                        </div>
                        <div>
                            <p className="text-[11px] font-mono text-champagne uppercase tracking-widest leading-none">
                                Craft & Rigour
                            </p>
                            <p className="text-xs font-semibold text-white mt-1">
                                Full-Stack Precision
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
