'use client';
import React from 'react';
import { MotionDiv, MotionH1, MotionH2 } from '@/lib/utils';
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
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface/60 border border-borderGlass hover:border-champagne/40 hover:bg-surfaceLight/80 transition-all duration-300 group">
            <div className="flex items-center gap-3">
                <div className="text-xl text-textMuted group-hover:text-champagne transition-colors">
                    {skill.icon}
                </div>
                <span className="text-sm font-medium text-white group-hover:text-champagneLight transition-colors">
                    {skill.title}
                </span>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-champagne/80 bg-champagne/10 px-2.5 py-0.5 rounded-full border border-champagne/20">
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
                <MotionH2
                    className="text-xs font-mono tracking-widest uppercase text-champagne mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>
                    02 / Technical Stack & Proficiency
                </MotionH2>
                <MotionH1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}>
                    Architectural & Engineering{' '}
                    <span className="editorial-serif font-normal italic champagne-gradient-text">
                        Capabilities
                    </span>
                </MotionH1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {/* Frontend Architecture Card */}
                <MotionDiv
                    className="glass-card p-6 sm:p-8 rounded-2xl border border-borderGlass hover:border-champagne/30 transition-all duration-500 shadow-2xl relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                Frontend Architecture & UI
                            </h3>
                            <p className="text-xs text-textMuted mt-1 font-mono">
                                High performance, responsiveness, &
                                accessibility
                            </p>
                        </div>
                        <span className="text-xs font-mono text-champagne/80 bg-surface px-3 py-1 rounded-full border border-borderGlass">
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
                </MotionDiv>

                {/* Backend & Cloud Systems Card */}
                <MotionDiv
                    className="glass-card p-6 sm:p-8 rounded-2xl border border-borderGlass hover:border-champagne/30 transition-all duration-500 shadow-2xl relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                Backend & Distributed Systems
                            </h3>
                            <p className="text-xs text-textMuted mt-1 font-mono">
                                Microservices, database models, & cloud
                                pipelines
                            </p>
                        </div>
                        <span className="text-xs font-mono text-champagne/80 bg-surface px-3 py-1 rounded-full border border-borderGlass">
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
                </MotionDiv>
            </div>
        </section>
    );
};

export default ExpertiseSection;
