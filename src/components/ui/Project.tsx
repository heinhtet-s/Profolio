'use client';
import { PROJECTCARDDATA } from '@/lib/constant';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

type ProjectCardComponentProps = {
    img: StaticImageData;
    title: string;
    type: string;
    desc: string;
    link: string;
};

const ProjectCardComponent = ({
    data,
    setIsHovered,
    index
}: {
    data: ProjectCardComponentProps;
    setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
    index: number;
}) => {
    const handleMouseEnter = React.useCallback(() => {
        setIsHovered(true);
    }, [setIsHovered]);

    const handleMouseLeave = React.useCallback(() => {
        setIsHovered(false);
    }, [setIsHovered]);

    const router = useRouter();

    return (
        <div
            className="group cursor-pointer flex flex-col h-full rounded-2xl glass-card overflow-hidden hover:border-champagne/45 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.85),_0_0_25px_rgba(226,206,172,0.12)]"
            onClick={() => {
                router.push(data?.link);
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {/* Visual Container */}
            <div className="w-full h-64 sm:h-72 md:h-80 relative overflow-hidden bg-surface">
                <Image
                    alt={data?.title}
                    src={data?.img}
                    quality={85}
                    placeholder="blur"
                    priority={index < 2}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                />

                {/* Subtle Gradient Veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />

                {/* Floating Category Pill */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-bgDark/80 border border-borderGlass text-champagne backdrop-blur-md group-hover:border-champagne/30 transition-colors">
                        {data?.type === 'fullstack'
                            ? 'Full-Stack Architecture'
                            : 'Frontend Engineering'}
                    </span>
                </div>

                {/* Arrow Action Icon in top right */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-bgDark/80 border border-borderGlass flex items-center justify-center text-white group-hover:text-champagne group-hover:border-champagne/50 group-hover:bg-champagne/10 transition-all duration-300">
                    <HiOutlineArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                    <h3 className="text-xl sm:text-2xl text-white font-bold tracking-tight group-hover:text-champagne transition-colors duration-300 flex items-center justify-between">
                        {data?.title}
                    </h3>
                    <p className="mt-3 text-sm text-textColor/80 leading-relaxed font-light line-clamp-3">
                        {data?.desc}
                    </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-champagne group-hover:underline decoration-champagne/40 underline-offset-4 flex items-center gap-1">
                        Inspect Architecture & Case
                    </span>
                    <span className="text-xs text-textMuted font-mono">
                        Case 0{index + 1}
                    </span>
                </div>
            </div>
        </div>
    );
};

const ProjectCardSection = ({
    setIsHovered
}: {
    setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <section
            id="projects"
            className="pt-20 md:pt-32 pb-16 md:pb-24 border-t border-borderGlass">
            {/* Eyebrow & Title */}
            <div className="mb-14">
                <span className="text-xs font-mono tracking-widest uppercase text-champagne block mb-3">
                    03 / Selected Case Studies
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                    Production Deployments &{' '}
                    <span className="editorial-serif font-normal italic champagne-gradient-text">
                        Engineered Systems
                    </span>
                </h2>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {PROJECTCARDDATA?.map((el, key) => (
                    <ProjectCardComponent
                        key={key}
                        index={key}
                        setIsHovered={setIsHovered}
                        data={el}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectCardSection;
