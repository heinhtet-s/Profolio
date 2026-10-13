'use client';
import Image from 'next/image';
import { FaAward, FaCode, FaLayerGroup } from 'react-icons/fa';

const AboutMeSection = () => {
    return (
        <section
            className="pt-20 md:pt-32 pb-16 md:pb-24 border-t border-borderGlass"
            id="about">
            {/* Editorial Eyebrow & Title */}
            <div className="mb-14">
                <span className="text-xs font-mono tracking-widest uppercase text-champagne block mb-3">
                    01 / Background & Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                    Bridging Architectural Discipline{' '}
                    <br className="hidden sm:inline" />
                    <span className="editorial-serif font-normal italic champagne-gradient-text">
                        With Intuitive Product Execution
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Visual Column */}
                <div className="lg:col-span-5 relative group">
                    <div className="relative rounded-2xl overflow-hidden p-2 bg-gradient-to-b from-champagne/20 via-surface to-champagne/5 border border-borderGlass shadow-2xl group-hover:border-champagne/35 group-hover:shadow-[0_0_35px_rgba(226,206,172,0.15)] transition-all duration-500">
                        <div className="relative aspect-square sm:aspect-[4/5] rounded-xl overflow-hidden bg-surface">
                            <Image
                                alt="Hein Htet Zaw - Workspace & Craft"
                                src="/image/hero1.png"
                                fill
                                className="object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>
                    {/* Editorial Tag */}
                    <div className="mt-4 flex items-center justify-between text-xs text-textMuted font-mono px-2">
                        <span>Bangkok, Thailand</span>
                        <span>Product Engineering</span>
                    </div>
                </div>

                {/* Narrative & Pillars Column */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-6">
                        Full-Stack Software Engineer with over{' '}
                        <span className="text-champagne font-semibold underline decoration-champagne/40 underline-offset-4">
                            3 years of production experience
                        </span>{' '}
                        building enterprise platforms and high-growth digital
                        applications.
                    </h3>

                    <p className="text-base sm:text-lg leading-relaxed text-textColor/90 mb-8 font-light">
                        With a deep specialization in modern JavaScript and
                        TypeScript ecosystems, I engineer resilient web products
                        that merge scalable backend microservices with sleek,
                        highly reactive client interfaces. My expertise spans
                        React, Next.js, NestJS, Node.js/Express, Docker, and
                        cloud databases — ensuring that every system I deliver
                        is maintainable, secure, and built for growth.
                    </p>

                    {/* Three Luxury Metric Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="group glass-card p-5 rounded-xl border border-borderGlass hover:border-champagne/40 hover:-translate-y-1.5 hover:shadow-[0_12px_24px_-8px_rgba(226,206,172,0.15)] transition-all duration-300">
                            <div className="w-10 h-10 rounded-lg bg-champagne/10 text-champagne flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-champagne/20 transition-all duration-300">
                                <FaAward className="text-lg" />
                            </div>
                            <h4 className="text-white text-base font-semibold group-hover:text-champagne transition-colors">
                                3+ Years
                            </h4>
                            <p className="text-xs text-textMuted mt-1 leading-relaxed">
                                Professional experience in startups & IT firms.
                            </p>
                        </div>

                        <div className="group glass-card p-5 rounded-xl border border-borderGlass hover:border-champagne/40 hover:-translate-y-1.5 hover:shadow-[0_12px_24px_-8px_rgba(226,206,172,0.15)] transition-all duration-300">
                            <div className="w-10 h-10 rounded-lg bg-champagne/10 text-champagne flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-champagne/20 transition-all duration-300">
                                <FaCode className="text-lg" />
                            </div>
                            <h4 className="text-white text-base font-semibold group-hover:text-champagne transition-colors">
                                20+ Projects
                            </h4>
                            <p className="text-xs text-textMuted mt-1 leading-relaxed">
                                Production web apps, EPOS systems, & portals.
                            </p>
                        </div>

                        <div className="group glass-card p-5 rounded-xl border border-borderGlass hover:border-champagne/40 hover:-translate-y-1.5 hover:shadow-[0_12px_24px_-8px_rgba(226,206,172,0.15)] transition-all duration-300">
                            <div className="w-10 h-10 rounded-lg bg-champagne/10 text-champagne flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-champagne/20 transition-all duration-300">
                                <FaLayerGroup className="text-lg" />
                            </div>
                            <h4 className="text-white text-base font-semibold group-hover:text-champagne transition-colors">
                                Full Lifecycle
                            </h4>
                            <p className="text-xs text-textMuted mt-1 leading-relaxed">
                                From system design to deployment & maintenance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
