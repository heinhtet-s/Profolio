/* eslint-disable @next/next/no-img-element */
'use client';
import { PROJECTCARDDATA } from '@/lib/constant';
import { MotionDiv } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type ProjectCardComponentProps = {
    img: StaticImageData;
    title: string;
    type: string;
    desc: string;
    link: string;
};

const ProjectCardComponent = ({
    data
    // setIsHovered
}: {
    data: ProjectCardComponentProps;
    // setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    // const handleMouseEnter = React.useCallback(() => {
    //     setIsHovered(true);
    // }, [setIsHovered]);

    // const handleMouseLeave = React.useCallback(() => {
    //     setIsHovered(false);
    // }, [setIsHovered]);
    const router = useRouter();
    return (
        <MotionDiv
            // // initial={{ opacity: 0, scale: 0.8 }} // Starts lower
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.8 }}
            className="cursor-pointer group"
            onClick={() => {
                router.push(data?.link);
            }}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
        >
            <div className="w-full   h-[300px] sm:h-[400px] md:h-[550px]  relative transition-transform duration-700 ease-in-out overflow-hidden group-hover:scale-95">
                <Image
                    alt="projectImage"
                    src={data?.img}
                    quality={50} // Optimize image quality
                    placeholder="blur"
                    priority
                    fill
                    className="object-cover  object-center transition-transform duration-700 ease-in-out"
                />

                {/* <img
                    alt="projectImage"
                    src={data?.img}
                    className="object-cover  h-[300px] sm:h-[400px] md:h-[550px]   object-center transition-transform duration-700 ease-in-out"
                /> */}
            </div>
            <div className="pt-5 mb-5 transition-all duration-700 ease-in-out group-hover:-translate-y-4 group-hover:px-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-[20px] sm:text-[24px] md:text-[30px] text-textColor font-bold leading-[30px] sm:leading-[40px] md:leading-[50px]">
                        {data?.title}
                    </h2>
                    <button className="border border-secondary text-secondary rounded-3xl px-2 text-sm sm:text-base">
                        {data?.type}
                    </button>
                </div>
                <p className="mt-3 text-sm sm:text-base leading-6 sm:leading-8 font-normal opacity-70 text-textColor">
                    {data?.desc}
                </p>
            </div>
        </MotionDiv>
    );
};

//     {
//     setIsHovered
// }: {
//     setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
// }
const ProjectCardSection = () => {
    return (
        <div
            id="projects"
            className="pt-[100px]  mb-10">
            <h3 className="text-center text-lg">Browse My Featured</h3>
            <h1 className="text-center font-bold mb-10 leading-[45px] sm:leading-[75px] text-subTitle sm:text-title  text-secondary">
                Projects
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 sm:gap-16 lg:gap-24">
                {PROJECTCARDDATA?.map((el, key) => (
                    <div key={key}>
                        <ProjectCardComponent
                            // setIsHovered={setIsHovered}
                            data={el}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCardSection;
