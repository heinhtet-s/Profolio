import { useInView } from 'framer-motion';
import Image from 'next/image';
import PrimaryBtn from '../share/PrimaryBtn';
import { useRef } from 'react';
import { MotionDiv, MotionH1 } from '@/lib/utils';

const HeroSection = () => {
    const ref = useRef<HTMLElement>(null!);
    const isInView = useInView(ref, { once: true }); // Trigger only once when the section comes into view

    return (
        <section
            ref={ref}
            className="pt-[100px] pb-[200px] flex justify-between items-center gap-[100px]">
            <MotionDiv
                className="w-1/2"
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                    duration: 0.8,
                    ease: 'easeOut'
                }}>
                <p className="flex gap-2 mb-4 text-2xl text-textColor items-center">
                    Welcome to my Portfolio{' '}
                    <Image
                        alt="waveIcon"
                        src="/image/wave.avif"
                        width={25}
                        height={25}
                        className="block basis-[16px] h-fit"
                    />
                </p>
                <MotionH1
                    className="font-bold leading-[75px] text-textColor text-heroTitle"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}>
                    Hi I'm
                </MotionH1>
                <MotionH1
                    className="font-bold leading-[75px] text-secondary text-heroTitle"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}>
                    Hein Htet Zaw
                </MotionH1>
                <MotionH1
                    className="font-bold leading-[75px] text-textColor text-heroTitle"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}>
                    Frontend Developer
                </MotionH1>
                <div className="flex gap-5 mt-5 mb-7">
                    <PrimaryBtn
                        text="Contact with Me"
                        handleClick={() => {}}
                    />
                    <PrimaryBtn
                        outline={true}
                        text="My Resume"
                        handleClick={() => {}}
                    />
                </div>
                <div className="flex cursor-pointer gap-5 ml-2">
                    <Image
                        alt="github"
                        src="/image/github.png"
                        width={30}
                        height={30}
                    />
                    <Image
                        alt="linkedin"
                        src="/image/linkedin.png"
                        width={30}
                        height={30}
                    />
                </div>
            </MotionDiv>

            <MotionDiv
                className="w-1/2 flex justify-end relative"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                    duration: 0.8,
                    ease: 'easeOut'
                }}>
                <div className="relative max-w-[450px] w-full h-[450px]">
                    <Image
                        alt="waveIcon"
                        src="/image/2024-10-27 13.03.45.jpg"
                        fill={true}
                        className="object-cover object-top overflow-hidden rounded-full"
                    />
                </div>
            </MotionDiv>
        </section>
    );
};

export default HeroSection;
