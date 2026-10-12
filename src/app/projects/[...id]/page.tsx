'use client';
import React, { JSX } from 'react';
import Navbar from '@/components/ui/Nav';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import Link from 'next/link';

import { FLASHMALL, PRUIDEA_LMS, SDAX, TEENUP } from '@/lib/constant';
import { useParams } from 'next/navigation';
import { MotionDiv, MotionH1, MotionSection } from '@/lib/utils';

type Section = {
    description?: string;
    additionalInfo?: string;
    technologies?: {
        icon: JSX.Element;
    }[];
    link?: string;
    responsibilities?: string[];
    image: {
        src: string;
        alt: string;
    };
};

type Project = {
    title: string;
    sections: Section[];
};

const ProjectPage = () => {
    const { id } = useParams<{ id: string[] }>();

    const getProjectData = (): Project | null => {
        switch (id?.[0]) {
            case 'sdax':
                return SDAX;
            case 'flashmall':
                return FLASHMALL;
            case 'teen-up':
                return TEENUP;
            case 'pruidea':
                return PRUIDEA_LMS;
            default:
                return null;
        }
    };

    const projectData = getProjectData();

    if (!projectData) {
        return (
            <div className="min-h-screen bg-bgDark flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-2xl font-bold text-white mb-4">
                    Project Case Not Found
                </h1>
                <Link
                    href="/"
                    className="primaryBtn">
                    Return to Portfolio
                </Link>
            </div>
        );
    }

    return <ProjectDetailComponent data={projectData} />;
};

const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
};

const ProjectDetailComponent = ({ data }: { data: Project }) => {
    return (
        <div className="min-h-screen bg-bgDark text-textColor selection:bg-champagne selection:text-bgDark overflow-x-hidden">
            <Navbar />

            <main className="container pt-24 sm:pt-28 md:pt-32 pb-24">
                {/* Back Link */}
                <div className="mb-8">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-textMuted hover:text-champagne transition-colors py-2 group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Return to Case Studies</span>
                    </Link>
                </div>

                {/* Hero Title */}
                <MotionSection className="pb-16 border-b border-borderGlass">
                    <span className="text-xs font-mono uppercase tracking-widest text-champagne block mb-3">
                        Architectural Case Study
                    </span>
                    <MotionH1
                        className="font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-4xl"
                        whileInView="visible"
                        viewport={{ once: true }}
                        initial="hidden"
                        variants={fadeInVariants}>
                        {data?.title}
                    </MotionH1>
                </MotionSection>

                {/* Section 1: Overview */}
                <MotionDiv
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 my-16 md:my-24 items-center"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}>
                    <MotionDiv
                        className="lg:col-span-6 flex flex-col justify-center"
                        variants={fadeInVariants}>
                        <span className="text-xs font-mono uppercase tracking-widest text-champagne mb-2 block">
                            Part 01
                        </span>
                        <h2 className="font-bold text-2xl sm:text-3xl mb-5 text-white tracking-tight">
                            Project Architecture & Vision
                        </h2>
                        <p className="text-base sm:text-lg leading-relaxed text-textColor/90 font-light mb-8">
                            {data?.sections[0]?.description}
                        </p>
                        {data?.sections[0]?.link &&
                            data?.sections[0]?.link !== '#' && (
                                <div>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={data?.sections[0]?.link}
                                        className="primaryBtn">
                                        <span>Launch Live Deployment</span>
                                        <HiOutlineArrowUpRight className="text-base" />
                                    </a>
                                </div>
                            )}
                    </MotionDiv>

                    <MotionDiv
                        className="lg:col-span-6"
                        variants={fadeInVariants}>
                        <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-borderGlass shadow-2xl">
                            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-surface">
                                <Image
                                    alt={
                                        data?.sections[0]?.image?.alt ||
                                        'Project Showcase'
                                    }
                                    src={data?.sections[0]?.image?.src}
                                    fill
                                    quality={85}
                                    priority
                                    className="object-cover object-top filter brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </MotionDiv>
                </MotionDiv>

                {/* Section 2: Technologies */}
                {data?.sections[1] && (
                    <MotionDiv
                        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 my-16 md:my-28 items-center"
                        whileInView="visible"
                        initial="hidden"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}>
                        <MotionDiv
                            className="lg:col-span-6 order-2 lg:order-1"
                            variants={fadeInVariants}>
                            <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-borderGlass shadow-2xl">
                                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-surface">
                                    <Image
                                        alt={
                                            data?.sections[1]?.image?.alt ||
                                            'Technologies Showcase'
                                        }
                                        src={data?.sections[1]?.image?.src}
                                        fill
                                        quality={85}
                                        className="object-cover object-top filter brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </MotionDiv>

                        <MotionDiv
                            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center"
                            variants={fadeInVariants}>
                            <span className="text-xs font-mono uppercase tracking-widest text-champagne mb-2 block">
                                Part 02
                            </span>
                            <h2 className="font-bold text-2xl sm:text-3xl mb-5 text-white tracking-tight">
                                Integrated Technology Stack
                            </h2>
                            <p className="text-base sm:text-lg leading-relaxed text-textColor/90 font-light mb-8">
                                {data?.sections[1]?.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {data?.sections[1]?.technologies?.map(
                                    (tech, key) => (
                                        <div
                                            key={key}
                                            className="w-14 h-14 rounded-xl bg-surface/90 border border-borderGlass hover:border-champagne/40 flex items-center justify-center text-champagne hover:scale-105 hover:bg-surfaceLight transition-all duration-300 shadow-md">
                                            {tech?.icon}
                                        </div>
                                    )
                                )}
                            </div>
                        </MotionDiv>
                    </MotionDiv>
                )}

                {/* Section 3: Responsibilities */}
                {data?.sections[2] && (
                    <MotionDiv
                        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 my-16 md:my-28 items-center"
                        whileInView="visible"
                        initial="hidden"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}>
                        <MotionDiv
                            className="lg:col-span-6 flex flex-col justify-center"
                            variants={fadeInVariants}>
                            <span className="text-xs font-mono uppercase tracking-widest text-champagne mb-2 block">
                                Part 03
                            </span>
                            <h2 className="font-bold text-2xl sm:text-3xl mb-5 text-white tracking-tight">
                                Key Engineering Responsibilities
                            </h2>
                            <ul className="space-y-4">
                                {data?.sections[2]?.responsibilities?.map(
                                    (el, key) => (
                                        <li
                                            key={key}
                                            className="flex items-start gap-3.5 text-sm sm:text-base text-textColor/90 font-light leading-relaxed">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                                            <span>{el}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </MotionDiv>

                        <MotionDiv
                            className="lg:col-span-6"
                            variants={fadeInVariants}>
                            <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-borderGlass shadow-2xl">
                                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-surface">
                                    <Image
                                        alt={
                                            data?.sections[2]?.image?.alt ||
                                            'Responsibilities Showcase'
                                        }
                                        src={data?.sections[2]?.image?.src}
                                        fill
                                        quality={85}
                                        className="object-cover object-top filter brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </MotionDiv>
                    </MotionDiv>
                )}

                {/* Bottom Navigation CTA */}
                <div className="mt-20 pt-10 border-t border-borderGlass flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="outlineBtn">
                        ← All Case Studies
                    </Link>
                    <a
                        href="mailto:heinh9540@gmail.com"
                        className="primaryBtn">
                        Inquire About Similar Architecture ↗
                    </a>
                </div>
            </main>
        </div>
    );
};

export default ProjectPage;
