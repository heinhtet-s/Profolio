'use client';
import React, { JSX } from 'react';
import Navbar from '@/components/ui/Nav';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

import { FLASHMALL, PRUIDEA_LMS, SDAX, TEENUP } from '@/lib/constant';
import { useParams } from 'next/navigation';

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
    switch (id[0]) {
        case 'sdax':
            return <ProjectDetailComponent data={SDAX} />;
        case 'flashmall':
            return <ProjectDetailComponent data={FLASHMALL} />;
        case 'teen-up':
            return <ProjectDetailComponent data={TEENUP} />;
        case 'pruidea':
            return <ProjectDetailComponent data={PRUIDEA_LMS} />;
        default:
            return <></>;
    }
};

const ProjectDetailComponent = ({ data }: { data: Project }) => {
    return (
        <div className="container">
            <Navbar />
            <section className="py-[50px]">
                {/* <div className="flex gap-4 text-2xl items-center ">
                <FaArrowLeft fontSize="30px" />
                <p> Back </p>
            </div> */}

                <h1 className="font-bold  leading-[75px]  text-title text-navTextColor">
                    {data?.title}
                </h1>
                <div className="grid grid-cols-2 gap-24 my-20  place-items-center">
                    <div>
                        <h1 className="font-bold mb-10 leading-[75px] text-subTitle text-navTextColor">
                            About This Project
                        </h1>
                        <p className="mt-3 text-lg leading-8 opacity-70 text-textColor font-normal">
                            {data?.sections[0]?.description}
                        </p>

                        <a
                            target="_blank"
                            href={data?.sections[0]?.link}
                            className={`px-5 w-fit  duration-700 flex items-center gap-2 mt-5 font-medium transition-all	 text-lg  cursor-pointer	 rounded-[50px] py-2  bg-secondary text-white hover:bg-secondaryHover `}>
                            Go Live <FaArrowRight fontSize={'20px'} />
                        </a>
                    </div>
                    <div>
                        <Image
                            alt={data?.sections[0]?.image?.alt}
                            src={data?.sections[0]?.image?.src}
                            layout="responsive" // Makes the image responsive
                            width={100} // Represents 100% width
                            height={140} // Adjust the height proportionally
                            quality={75} // Optimize image quality
                            loading="lazy" // Lazy loading for performance
                            className="object-cover object-top rounded-lg"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-24 my-40 place-items-center">
                    <div>
                        <Image
                            alt={data?.sections[1]?.image?.alt}
                            src={data?.sections[1]?.image?.src}
                            layout="responsive" // Makes the image responsive
                            width={100} // Represents 100% width
                            height={140} // Adjust the height proportionally
                            quality={75} // Optimize image quality
                            loading="lazy" // Lazy loading for performance
                            className="object-cover object-top rounded-lg"
                        />
                    </div>
                    <div>
                        <h1 className="font-bold mt-10 mb-5 leading-[75px] text-subTitle text-navTextColor">
                            Technologies we use
                        </h1>
                        <p className="mt-3 text-lg leading-8 opacity-70 text-textColor font-normal">
                            {data?.sections[1]?.description}
                        </p>

                        <div className="flex gap-4 mt-8 ">
                            {data?.sections[1]?.technologies?.map(
                                (tech, key) => <div key={key}>{tech?.icon}</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-24 my-40 place-items-center">
                    <div>
                        <h1 className="font-bold mb-5 leading-[75px] text-subTitle text-navTextColor">
                            Key Responsibilities
                        </h1>
                        <ul className="list-disc">
                            {data?.sections[2]?.responsibilities?.map(
                                (el, key) => (
                                    <li
                                        key={key}
                                        className="mt-3 text-lg opacity-70 text-textColor font-normal">
                                        {el}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div>
                        <Image
                            alt="features showcase"
                            src={data?.sections[2]?.image?.src}
                            layout="responsive" // Makes the image responsive
                            width={100} // Represents 100% width
                            height={140} // Adjust the height proportionally
                            quality={75} // Optimize image quality
                            loading="lazy" // Lazy loading for performance
                            className="object-cover object-top rounded-lg"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};
export default page;
