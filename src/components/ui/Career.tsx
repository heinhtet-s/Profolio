'use client';
import { CAREERINFO } from '@/lib/constant';
import { MotionDiv, MotionH1, MotionH2, MotionSection } from '@/lib/utils';
import { HiOutlineBriefcase } from 'react-icons/hi';

type CareerComponentProps = {
    title: string;
    duration: string;
    dec: string;
};

const CareerComponent = ({
    data,
    index
}: {
    data: CareerComponentProps;
    index: number;
}) => (
    <MotionDiv
        key={index}
        className="relative pl-8 sm:pl-10 pb-10 last:pb-2 border-l border-borderGlass group transition-all duration-300"
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.6,
            delay: index * 0.15
        }}>
        {/* Glowing Node Marker */}
        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-champagne/40 group-hover:border-champagne group-hover:bg-champagne/20 group-hover:shadow-[0_0_15px_rgba(226,206,172,0.5)] transition-all duration-300 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
        </div>

        {/* Content Card */}
        <div className="glass-card p-6 rounded-2xl border border-borderGlass hover:border-champagne/30 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-lg font-bold text-white group-hover:text-champagne transition-colors">
                    {data?.title}
                </h3>
                <span className="text-xs font-mono text-champagne/90 bg-champagne/10 px-3 py-1 rounded-full border border-champagne/20 w-fit">
                    {data?.duration}
                </span>
            </div>

            <p className="text-sm text-textColor/80 leading-relaxed font-light">
                {data?.dec}
            </p>
        </div>
    </MotionDiv>
);

const CareerSection = () => {
    return (
        <MotionSection
            id="experience"
            className="pt-20 md:pt-32 pb-16 md:pb-24 border-t border-borderGlass"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            {/* Eyebrow & Title */}
            <div className="mb-14">
                <MotionH2
                    className="text-xs font-mono tracking-widest uppercase text-champagne mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>
                    04 / Career Chronology
                </MotionH2>
                <MotionH1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}>
                    Professional Track Record &{' '}
                    <span className="editorial-serif font-normal italic champagne-gradient-text">
                        Industry Impact
                    </span>
                </MotionH1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Left Side: Ethos & Highlights */}
                <div className="lg:col-span-4">
                    <div className="glass-card p-6 sm:p-8 rounded-2xl border border-borderGlass sticky top-28">
                        <div className="w-10 h-10 rounded-xl bg-champagne/10 text-champagne flex items-center justify-center mb-4">
                            <HiOutlineBriefcase className="text-xl" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">
                            Engineering Ethos
                        </h4>
                        <p className="text-sm leading-relaxed text-textColor/80 font-light mb-6">
                            Throughout my tenure across software startups,
                            enterprise client systems, and agile product teams,
                            I have focused on building resilient systems that
                            hold up under load while maintaining swift developer
                            velocity.
                        </p>
                        <div className="pt-4 border-t border-white/5 flex flex-col gap-2.5 text-xs font-mono text-textMuted">
                            <div className="flex items-center gap-2">
                                <span className="text-champagne">✓</span>{' '}
                                Full-stack feature ownership
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-champagne">✓</span>{' '}
                                Microservices & API integration
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-champagne">✓</span> Modern
                                state & data caching
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Timeline */}
                <div className="lg:col-span-8">
                    <div className="ml-2">
                        {CAREERINFO.map((data, index) => (
                            <CareerComponent
                                key={index}
                                data={data}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </MotionSection>
    );
};

export default CareerSection;
