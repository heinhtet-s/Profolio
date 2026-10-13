'use client';
import React from 'react';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiKubernetes,
    SiFirebase,
    SiHtml5,
    SiRedux
} from 'react-icons/si';

type Skill = {
    title: string;
    level: string;
    icon: React.ReactNode;
};

const FRONTEND_SKILLS: Skill[] = [
    { title: 'Next.js', level: 'Expert', icon: <SiNextdotjs /> },
    { title: 'React', level: 'Expert', icon: <SiReact /> },
    { title: 'TypeScript', level: 'Proficient', icon: <SiTypescript /> },
    { title: 'JavaScript (ES6+)', level: 'Expert', icon: <SiJavascript /> },
    { title: 'Redux / Zustand', level: 'Proficient', icon: <SiRedux /> },
    { title: 'Tailwind CSS', level: 'Expert', icon: <SiTailwindcss /> },
    { title: 'React Native', level: 'Intermediate', icon: <SiReact /> },
    { title: 'HTML5 & Modern CSS', level: 'Expert', icon: <SiHtml5 /> }
];

const BACKEND_SKILLS: Skill[] = [
    { title: 'NestJS', level: 'Proficient', icon: <SiNestjs /> },
    { title: 'Node.js', level: 'Proficient', icon: <SiNodedotjs /> },
    { title: 'Express.js', level: 'Proficient', icon: <SiExpress /> },
    { title: 'MongoDB', level: 'Proficient', icon: <SiMongodb /> },
    {
        title: 'PostgreSQL & MySQL',
        level: 'Intermediate',
        icon: <SiPostgresql />
    },
    { title: 'Docker', level: 'Intermediate', icon: <SiDocker /> },
    { title: 'Kubernetes', level: 'Familiar', icon: <SiKubernetes /> },
    { title: 'Firebase / Firestore', level: 'Proficient', icon: <SiFirebase /> }
];

const SkillItem = ({ skill }: { skill: Skill }) => {
    return (
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface/60 border border-borderGlass hover:border-champagne/45 hover:bg-surfaceLight/90 hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(226,206,172,0.18)] transition-all duration-200 group cursor-default">
            <div className="flex items-center gap-3">
                <div className="text-xl text-textMuted group-hover:text-champagne group-hover:scale-110 transition-all duration-200">
                    {skill.icon}
                </div>
                <span className="text-sm font-medium text-white group-hover:text-champagneLight transition-colors">
                    {skill.title}
                </span>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-champagne/80 bg-champagne/10 px-2.5 py-0.5 rounded-full border border-champagne/20 group-hover:border-champagne/40 group-hover:bg-champagne/20 transition-colors">
                {skill.level}
            </span>
        </div>
    );
};

const ExpertiseSection = () => {
    return (
        <section
            className="pt-20 md:pt-32 pb-16 md:pb-24 border-t border-borderGlass"
            id="expertise">
            {/* Eyebrow & Title */}
            <div className="mb-14">
                <span className="text-xs font-mono tracking-widest uppercase text-champagne block mb-3">
                    02 / Technical Stack & Proficiency
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                    Architectural & Engineering{' '}
                    <span className="editorial-serif font-normal italic champagne-gradient-text">
                        Capabilities
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {/* Frontend Architecture Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-borderGlass hover:border-champagne/35 transition-all duration-500 shadow-2xl relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-champagne transition-colors">
                                Frontend Architecture & UI
                            </h3>
                            <p className="text-xs text-textMuted mt-1 font-mono">
                                High performance, responsiveness, &
                                accessibility
                            </p>
                        </div>
                        <span className="text-xs font-mono text-champagne/80 bg-surface px-3 py-1 rounded-full border border-borderGlass group-hover:border-champagne/30 transition-colors">
                            Client-Side
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {FRONTEND_SKILLS.map((skill, idx) => (
                            <SkillItem
                                key={idx}
                                skill={skill}
                            />
                        ))}
                    </div>
                </div>

                {/* Backend & Cloud Systems Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-borderGlass hover:border-champagne/35 transition-all duration-500 shadow-2xl relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-champagne transition-colors">
                                Backend & Distributed Systems
                            </h3>
                            <p className="text-xs text-textMuted mt-1 font-mono">
                                Microservices, database models, & cloud
                                pipelines
                            </p>
                        </div>
                        <span className="text-xs font-mono text-champagne/80 bg-surface px-3 py-1 rounded-full border border-borderGlass group-hover:border-champagne/30 transition-colors">
                            Server-Side
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {BACKEND_SKILLS.map((skill, idx) => (
                            <SkillItem
                                key={idx}
                                skill={skill}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
