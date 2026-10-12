'use client';
import { EDUINFO } from '@/lib/constant';
import { MotionDiv, MotionH1, MotionH2 } from '@/lib/utils';
import { HiOutlineAcademicCap } from 'react-icons/hi';

type EduComponentProps = {
    degree?: string;
    title: string;
    duration: string;
    uniName: string;
};

const EduComponent = ({
    data,
    index
}: {
    data: EduComponentProps;
    index: number;
}) => {
    const isBachelor = data.degree?.toLowerCase().includes('bachelor');

    return (
        <MotionDiv
            key={index}
            className={`glass-card p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                isBachelor
                    ? 'border-champagne/40 bg-surface/90 shadow-[0_0_30px_rgba(226,206,172,0.12)] hover:border-champagne'
                    : 'border-borderGlass hover:border-champagne/40'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.1
            }}>
            <div className="flex items-start justify-between gap-3 mb-5">
                <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isBachelor
                            ? 'bg-champagne/20 text-champagne border border-champagne/40 shadow-sm'
                            : 'bg-champagne/10 text-champagne'
                    }`}>
                    <HiOutlineAcademicCap className="text-xl" />
                </div>
                <div className="flex flex-col items-end gap-1.5">
                    {data?.degree && (
                        <span
                            className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                                isBachelor
                                    ? 'bg-champagne/20 text-champagne border-champagne/40 font-semibold'
                                    : 'bg-surface text-champagne/80 border-borderGlass'
                            }`}>
                            {data.degree}
                        </span>
                    )}
                    <span className="text-[11px] font-mono text-textMuted bg-surface/80 px-2 py-0.5 rounded-full border border-borderGlass">
                        {data?.duration}
                    </span>
                </div>
            </div>

            <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {data?.title}
                </h3>
                <p
                    className={`text-xs sm:text-sm font-mono ${
                        isBachelor
                            ? 'text-champagne font-medium'
                            : 'text-textMuted'
                    }`}>
                    {data?.uniName}
                </p>
            </div>
        </MotionDiv>
    );
};

const EducationSection = () => {
    return (
        <section className="pt-20 md:pt-32 pb-16 md:pb-24 border-t border-borderGlass">
            {/* Eyebrow & Title */}
            <div className="mb-14">
                <MotionH2
                    className="text-xs font-mono tracking-widest uppercase text-champagne mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>
                    05 / Academic Credentials
                </MotionH2>
                <MotionH1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}>
                    Education & Professional{' '}
                    <span className="editorial-serif font-normal italic champagne-gradient-text">
                        Accreditations
                    </span>
                </MotionH1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {EDUINFO.map((data, index) => (
                    <EduComponent
                        key={index}
                        data={data}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default EducationSection;
