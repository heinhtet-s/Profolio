'use client';
import { PROJECTCARDDATA } from '@/lib/constant';
import { MotionDiv } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type ProjectCardComponentProps = {
    img: string;
    title: string;
    type: string;
    desc: string;
    link: string;
};

const ProjectCardComponent = ({
    data,
    setIsHovered
}: {
    data: ProjectCardComponentProps;
    setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const router = useRouter();
    return (
        <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }} // Starts lower
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=" cursor-pointer group"
            onClick={() => {
                router.push(data?.link);
            }}
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}>
            <div className="w-full relative h-[550px] transition-transform duration-700 ease-in-out overflow-hidden group-hover:scale-95">
                <Image
                    alt="projectImage"
                    src={data?.img}
                    quality={75} // Optimize image quality
                    loading="lazy" // Lazy loading for performance
                    fill={true}
                    className="object-cover object-center transition-transform duration-700 ease-in-out"
                />
            </div>
            <div className="pt-5 mb-5 transition-all duration-700 ease-in-out group-hover:-translate-y-4 group-hover:px-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-[30px] text-textColor font-bold leading-[50px]">
                        {data?.title}
                    </h2>
                    <button className="border border-secondary text-secondary rounded-3xl px-2">
                        {data?.type}
                    </button>
                </div>
                <p className="mt-3 text-base leading-8 font-normal  opacity-70  text-textColor ">
                    {data?.desc}
                </p>
            </div>
        </MotionDiv>
    );
};

const ProjectCardSection = ({
    setIsHovered
}: {
    setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="py-[50px] mb-10">
            <h3 className="text-center text-lg">Browse My Featured</h3>
            <h1 className="text-center font-bold mb-16 leading-[75px] text-title text-secondary">
                Projects
            </h1>

            <div className="grid grid-cols-2 gap-24">
                {PROJECTCARDDATA?.map((el, key) => (
                    <ProjectCardComponent
                        setIsHovered={setIsHovered}
                        data={el}
                        key={key}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectCardSection;
