'use client';
import React, { JSX } from 'react';
import Navbar from '@/components/ui/Nav';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

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

const page = () => {
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

    if (!projectData) return <div>Project not found</div>;

    return <ProjectDetailComponent data={projectData} />;
};

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

const ProjectDetailComponent = ({ data }: { data: Project }) => {
    return (
        <div className="container">
            <Navbar />
            <MotionSection className="pt-[100px]  px-6 md:px-8  pb-[50px] ">
                <MotionH1
                    className="font-bold text-3xl md:text-5xl leading-tight text-navTextColor  md:text-left"
                    whileInView="visible"
                    viewport={{ once: true }}
                    initial="hidden"
                    variants={fadeInVariants}>
                    {data?.title}
                </MotionH1>

                {/* First section */}
                <MotionDiv
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 md:my-20 "
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } }
                    }}>
                    <MotionDiv
                        whileInView="visible"
                        viewport={{ once: true }}
                        initial="hidden"
                        variants={fadeInVariants}>
                        <h1 className="font-bold text-2xl md:text-4xl mb-5 text-navTextColor">
                            About This Project
                        </h1>
                        <p className="mt-3 text-base md:text-lg leading-7 text-textColor opacity-70 font-normal">
                            {data?.sections[0]?.description}
                        </p>
                        <a
                            target="_blank"
                            href={data?.sections[0]?.link}
                            className="px-4 py-2 mt-5 inline-flex items-center gap-2 text-white bg-secondary rounded-full hover:bg-secondaryHover transition duration-300 text-sm md:text-lg">
                            Go Live <FaArrowRight fontSize={'16px'} />
                        </a>
                    </MotionDiv>
                    <MotionDiv
                        whileInView="visible"
                        viewport={{ once: true }}
                        initial="hidden"
                        variants={fadeInVariants}>
                        <Image
                            alt={data?.sections[0]?.image?.alt}
                            src={data?.sections[0]?.image?.src}
                            layout="responsive"
                            width={100}
                            height={140}
                            quality={75}
                            loading="lazy"
                            className="object-cover object-top rounded-lg"
                        />
                    </MotionDiv>
                </MotionDiv>

                {/* Second section */}
                <MotionDiv
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 md:my-40 items-center"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } }
                    }}>
                    <MotionDiv
                        whileInView="visible"
                        viewport={{ once: true }}
                        initial="hidden"
                        variants={fadeInVariants}>
                        <Image
                            alt={data?.sections[1]?.image?.alt}
                            src={data?.sections[1]?.image?.src}
                            layout="responsive"
                            width={100}
                            height={140}
                            quality={75}
                            loading="lazy"
                            className="object-cover object-top rounded-lg"
                        />
                    </MotionDiv>
                    <MotionDiv
                        whileInView="visible"
                        viewport={{ once: true }}
                        initial="hidden"
                        variants={fadeInVariants}>
                        <h1 className="font-bold text-2xl md:text-4xl mb-5 text-navTextColor">
                            Technologies we use
                        </h1>
                        <p className="mt-3 text-base md:text-lg leading-7 text-textColor opacity-70 font-normal">
                            {data?.sections[1]?.description}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            {data?.sections[1]?.technologies?.map(
                                (tech, key) => (
                                    <MotionDiv
                                        key={key}
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        initial="hidden"
                                        variants={fadeInVariants}>
                                        {tech?.icon}
                                    </MotionDiv>
                                )
                            )}
                        </div>
                    </MotionDiv>
                </MotionDiv>

                {/* Third section */}
                <MotionDiv
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 md:my-40 items-center"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } }
                    }}>
                    <MotionDiv
                        whileInView="visible"
                        viewport={{ once: true }}
                        initial="hidden"
                        variants={fadeInVariants}>
                        <h1 className="font-bold text-2xl md:text-4xl mb-5 text-navTextColor">
                            Key Responsibilities
                        </h1>
                        <ul className="list-disc ml-5">
                            {data?.sections[2]?.responsibilities?.map(
                                (el, key) => (
                                    <li
                                        key={key}
                                        className="mt-3 text-base md:text-lg text-textColor opacity-70 font-normal">
                                        {el}
                                    </li>
                                )
                            )}
                        </ul>
                    </MotionDiv>
                    <MotionDiv
                        whileInView="visible"
                        viewport={{ once: true }}
                        initial="hidden"
                        variants={fadeInVariants}>
                        <Image
                            alt="features showcase"
                            src={data?.sections[2]?.image?.src}
                            layout="responsive"
                            width={100}
                            height={140}
                            quality={75}
                            loading="lazy"
                            className="object-cover object-top rounded-lg"
                        />
                    </MotionDiv>
                </MotionDiv>
            </MotionSection>
        </div>
    );
};

export default page;
