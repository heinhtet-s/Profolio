'use client';
import PrimaryBtn from '@/components/ui/PrimaryBtn';
import Image from 'next/image';
import { FaCode } from 'react-icons/fa6';
import { FaAward } from 'react-icons/fa';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
// import 'locomotive-scroll/bundled/locomotive-scroll.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { CAREERINFO, EDUINFO, PROJECTCARDDATA } from '@/lib/constant';
import { cn, MotionDiv } from '@/lib/utils';
import CustomCursor from '@/components/ui/CustomCursor';
const ExpertLisingComponent = ({
    level,
    title
}: {
    level: string;
    title: string;
}) => {
    return (
        <li className="flex gap-8  text-lg  ">
            <div className="mt-1">
                <IoCheckmarkDoneCircle
                    color="#333333"
                    fontSize="24px"
                />
            </div>
            <div>
                <p className="font-semibold leading-0">{title}</p>
                <p className=" opacity-70 text-base ">{level}</p>
            </div>
        </li>
    );
};
type ProjectCardComponentProps = {
    img: string;
    title: string;
    type: string;
    desc: string;
};
type CareerComponentProps = {
    title: string;
    duration: string;
    dec: string;
};
type EduComponentProps = {
    title: string;
    duration: string;
    uniName: string;
};
const ProjectCardComponent = ({
    data,
    setIsHovered
}: {
    data: ProjectCardComponentProps;
    setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div
            className=" cursor-pointer group"
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
        </div>
    );
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
        layout
        className={cn([
            'grid cursor-pointer grid-cols-8 border-b pb-10 border-slate-300 group',
            index !== 0 ? 'mt-10' : ''
        ])}
        whileHover={{
            paddingLeft: 12,
            paddingRight: 16
        }}
        transition={{
            duration: 0.5,
            type: 'spring'
        }}>
        <MotionDiv
            className="col-span-3"
            whileHover={{ x: 4 }}>
            <h3 className="text-base font-medium">{data?.title}</h3>
            <p className="opacity-70 text-textColor">{data?.duration} </p>
        </MotionDiv>
        <MotionDiv
            className="col-span-5"
            whileHover={{ x: -4 }}>
            <p className="text-base leading-8 font-normal opacity-70 text-textColor">
                {data?.dec}
            </p>
        </MotionDiv>
    </MotionDiv>
);

const EduComponent = ({
    data,
    index
}: {
    data: EduComponentProps;
    index: number;
}) => (
    <MotionDiv
        key={index}
        className={cn([
            'grid cursor-pointer  grid-cols-8 border-b pb-10 border-slate-300 group',
            index !== 0 ? 'mt-10' : ''
        ])}
        whileHover={{
            paddingLeft: 12,
            paddingRight: 16
        }}
        transition={{
            duration: 0.3,
            ease: 'easeInOut'
        }}>
        <MotionDiv
            className="col-span-3"
            whileHover={{ x: 4 }}>
            <h3 className="text-base font-medium">{data?.title}</h3>
        </MotionDiv>
        <div className="col-span-3">
            <p className="text-base leading-8 font-normal opacity-70 text-textColor">
                {data?.uniName}
            </p>
        </div>
        <MotionDiv
            className="col-span-2"
            whileHover={{ x: -4 }}>
            <p className="text-base leading-8 font-normal opacity-70 text-textColor">
                {data?.duration}
            </p>
        </MotionDiv>
    </MotionDiv>
);
export default function Home() {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll'))
                .default;

            new LocomotiveScroll({
                lenisOptions: {
                    duration: 1,
                    easing: (t) => 1 - Math.pow(1 - t, 5)
                }
            });
        })();
    }, []);
    const [isHovered, setIsHovered] = useState(false); // Track if cursor is hovering over a project card

    return (
        <div
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}>
            <CustomCursor
                isHovered={isHovered}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />
            <div className="container">
                <nav className="flex  justify-between items-center py-8">
                    <h1 className="text-2xl	 font-medium text-navTextColor ">
                        Hein Htet Zaw
                    </h1>
                    <ul className="flex gap-[40px] cursor-pointer text-lg	     font-medium text-navTextColor">
                        <li>About</li>
                        <li>Experience</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                    <PrimaryBtn
                        handleClick={() => {}}
                        text="Email Me"
                    />
                </nav>
                <section className="pt-[100px] flex justify-between items-center  gap-[100px]  ">
                    <div className="w-1/2">
                        <p className="flex gap-2 mb-4  text-2xl text-textColor	 items-center">
                            Welcome to my Portfolio{' '}
                            <Image
                                alt="waveIcon"
                                src="/image/wave.avif"
                                width={25}
                                height={25}
                                className="block basis-[16px] h-fit"
                            />
                        </p>
                        <h1 className="font-bold  leading-[75px] text-textColor  text-heroTitle ">
                            Hi I'm
                        </h1>
                        <h1 className="font-bold  leading-[75px] text-secondary  text-heroTitle ">
                            Hein Htet Zaw
                        </h1>
                        <h1 className="font-bold  leading-[75px] text-textColor  text-heroTitle ">
                            Frontend Developer
                        </h1>
                        <div className="flex gap-5 mt-5 mb-7 ">
                            <PrimaryBtn
                                text="Contact with Me "
                                handleClick={() => {}}
                            />
                            <PrimaryBtn
                                outline={true}
                                text="My Resume"
                                handleClick={() => {}}
                            />
                        </div>
                        <div className="flex cursor-pointer  gap-5 ml-2">
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
                    </div>
                    <div className="w-1/2 flex justify-end relative">
                        <div className="relative max-w-[450px] w-full  h-[450px] ">
                            <Image
                                alt="waveIcon"
                                src="/image/2024-10-27 13.03.45.jpg"
                                fill={true}
                                className="object-cover object-top overflow-hidden  rounded-full"
                            />
                        </div>
                    </div>
                </section>
                <section className="py-[50px]  ">
                    <h3 className="text-center text-lg"> Get To know More</h3>
                    <h1 className="text-center font-bold mb-10 leading-[75px]   text-title text-secondary">
                        About Me
                    </h1>
                    <div className="flex items-center gap-24  justify-between">
                        <div className="w-1/2  flex justify-start">
                            <Image
                                alt="waveIcon"
                                src="/image/hero1.png"
                                width="500"
                                height={'500'}
                                className=" w-full h-auto object-cover object-top rounded-lg"
                            />
                        </div>
                        <div className="w-1/2 ">
                            <h2 className="text-subTitle  text-textColor font-bold leading-[50px] ">
                                I'm a JavaScript FullStack Developer with{' '}
                                <span className="text-secondary">
                                    3 years of industry experience{' '}
                                </span>
                            </h2>
                            <p className="mt-6 text-lg leading-8 opacity-70  text-textColor	font-normal ">
                                I'm a JavaScript Full Stack Developer with a
                                strong focus on front-end development. I have a
                                proven record in building high-quality web and
                                mobile applications using React and React
                                Native, with 3 years of industry experience.
                                Skilled in JavaScript and TypeScript, I'm
                                proficient in frameworks like React, Next.js,
                                Vue.js, and backend with Node.js/Express.
                                Adaptable to various technologies, I'm
                                passionate about continuous learning and
                                dedicated to delivering excellent results.
                            </p>
                            <div className="flex items-center mt-6 gap-10 ">
                                <div className="w-1/2 border border-slate-500 rounded-3xl p-6 flex flex-col justify-center items-center">
                                    <FaAward
                                        width="40"
                                        fontSize={'40px'}
                                    />
                                    <h3 className="text-textColor  text-lg font-semibold">
                                        Experience
                                    </h3>
                                    <p className="text-navTextColor text-base opacity-70">
                                        3+ years
                                    </p>
                                </div>
                                <div className="w-1/2 border border-slate-500 rounded-3xl p-6 flex flex-col justify-center items-center">
                                    <FaCode
                                        width="40"
                                        fontSize={'40px'}
                                    />

                                    <h3 className="text-textColor  text-lg font-semibold">
                                        Projects Completed
                                    </h3>
                                    <p className="text-navTextColor opacity-70 text-base ">
                                        20+
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-[50px]  mb-10 ">
                    <h3 className="text-center text-lg">Explore My </h3>
                    <h1 className="text-center font-bold mb-16 leading-[75px]   text-title text-secondary">
                        Expertise Areas
                    </h1>
                    <div className="flex items-center gap-24   justify-between">
                        <div className="w-1/2 border border-slate-500 rounded-3xl py-6 px-20 ">
                            <h2 className="text-[30px]  mb-6 opacity-70  text-textColor text-center font-bold leading-[50px]">
                                Frontend Development
                            </h2>
                            <div className="flex justify-between ">
                                <div className=" flex justify-center">
                                    <ul className=" flex flex-col gap-5  text-navTextColor">
                                        <ExpertLisingComponent
                                            title="HTML"
                                            level="Espect"
                                        />
                                        <ExpertLisingComponent
                                            title="Javascript"
                                            level="Espect"
                                        />
                                        <ExpertLisingComponent
                                            title="React"
                                            level="Espect"
                                        />

                                        <ExpertLisingComponent
                                            title="Vue.js"
                                            level="Intermediate"
                                        />
                                    </ul>
                                </div>

                                <div className=" flex justify-center">
                                    <ul className=" flex flex-col gap-5  text-navTextColor">
                                        {' '}
                                        <ExpertLisingComponent
                                            title="CSS"
                                            level="Espect"
                                        />
                                        <ExpertLisingComponent
                                            title="TypeScript"
                                            level="Proficient"
                                        />
                                        <ExpertLisingComponent
                                            title=" Next.js"
                                            level="Espect"
                                        />
                                        <ExpertLisingComponent
                                            title="React Native"
                                            level="Intermediate"
                                        />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 border border-slate-500 rounded-3xl py-6 px-20 ">
                            <h2 className="text-[30px]  mb-6 opacity-70  text-textColor text-center font-bold leading-[50px]">
                                Backend Development
                            </h2>
                            <div className="flex justify-between ">
                                <div className=" flex justify-center">
                                    <ul className=" flex flex-col gap-5  text-navTextColor">
                                        <ExpertLisingComponent
                                            title="Node JS"
                                            level="Proficient"
                                        />

                                        <ExpertLisingComponent
                                            title="MongoDB"
                                            level="Intermediate"
                                        />
                                        <ExpertLisingComponent
                                            title="Nest JS"
                                            level="Intermediate"
                                        />
                                        <ExpertLisingComponent
                                            title="Kubernetes"
                                            level="Beginner"
                                        />
                                    </ul>
                                </div>

                                <div className=" flex justify-center">
                                    <ul className=" flex flex-col gap-5  text-navTextColor">
                                        {' '}
                                        <ExpertLisingComponent
                                            title="Express JS"
                                            level="Intermediate"
                                        />
                                        <ExpertLisingComponent
                                            title="PostgreSQL"
                                            level="Intermediate"
                                        />
                                        <ExpertLisingComponent
                                            title="Docker"
                                            level="Intermediate"
                                        />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-[50px]  mb-10 ">
                    <h3 className="text-center text-lg">Browse My Featured </h3>
                    <h1 className="text-center font-bold mb-16 leading-[75px]   text-title text-secondary">
                        Projects
                    </h1>
                    <div className="grid grid-cols-2  gap-24  ">
                        {PROJECTCARDDATA?.map((el, key) => (
                            <ProjectCardComponent
                                setIsHovered={setIsHovered}
                                data={el}
                                key={key}
                            />
                        ))}
                    </div>
                </section>
                <section className="py-[50px]  mb-10 ">
                    <h3 className="text-center text-lg">
                        Learn More About My{' '}
                    </h3>
                    <h1 className="text-center font-bold mb-16 leading-[75px]   text-title text-secondary">
                        Professional Journey
                    </h1>
                    <div className="grid grid-cols-12  gap-24  ">
                        <div className="col-span-8">
                            <MotionDiv className="col-span-7">
                                {CAREERINFO.map((data, index) => (
                                    <CareerComponent
                                        key={index}
                                        data={data}
                                        index={index}
                                    />
                                ))}
                            </MotionDiv>
                        </div>
                        <div className="col-span-4">
                            <p className=" text-base leading-8 font-normal  opacity-70  text-textColor ">
                                In my career as a full-stack developer, I've
                                worked in freelance roles, startups, and IT
                                companies. I focus on building reliable,
                                user-friendly applications that work well on
                                both the front and back ends. I enjoy learning
                                new skills and exploring different technologies
                                to keep improving my work.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="py-[50px]  mb-10 ">
                    <h3 className="text-center text-lg">Browse My </h3>
                    <h1 className="text-center font-bold mb-16 leading-[75px]   text-title text-secondary">
                        Academic Achievements
                    </h1>
                    <div className="grid grid-cols-12  gap-24  ">
                        <div className="col-span-4">
                            <p className=" text-base leading-8 font-normal  opacity-70  text-textColor ">
                                My educational journey started with a deep
                                interest in technology, which naturally led me
                                to full-stack development. I’ve always been
                                passionate about both front-end and back-end
                                technologies, and I enjoy building end-to-end
                                solutions that deliver seamless user
                                experiences. I am a fast learner, and I
                                constantly seek to expand my knowledge by
                                exploring various areas of development, from
                                databases to user interfaces.
                            </p>
                        </div>
                        <div className="col-span-8">
                            <MotionDiv className="col-span-7">
                                {EDUINFO.map((data, index) => (
                                    <EduComponent
                                        key={index}
                                        data={data}
                                        index={index}
                                    />
                                ))}
                            </MotionDiv>
                        </div>
                    </div>
                </section>
            </div>
            <section className="pt-[80px] container pb-[80px] bg-secondary ">
                <h3 className="text-center text-lg text-white">contact me </h3>
                <h1 className="text-center font-bold mb-16 leading-[75px] text-white   text-title">
                    Let's Get in Touch
                </h1>
                <div className="grid grid-cols-2  gap-10 mb-10  ">
                    <div className="bg-white h-fit  p-6 rounded-lg">
                        <h3 className="text-lg font-semibold	">Hotline 24/7</h3>
                        <p className="text-2xl font-semibold mb-6">
                            (+66) 0618502916
                        </p>
                        <p className="mb-2">
                            Address:{' '}
                            <span className=" opacity-70  text-textColor">
                                {' '}
                                Soi Ramkhamhaeng 50, Bang Kapi, Bangkok{' '}
                            </span>
                        </p>
                        <p className="mb-2">
                            Email:{' '}
                            <span className=" opacity-70  text-textColor">
                                {' '}
                                heinh9540@gmail.com{' '}
                            </span>
                        </p>
                        <p className="mb-2">
                            Work Hour:{' '}
                            <span className=" opacity-70  text-textColor">
                                {' '}
                                Mon - Sat: 9:00 - 18:00
                            </span>
                        </p>
                    </div>
                    <div className="w-full">
                        <input
                            className="bg-white mb-4 w-full outline-none rounded-lg p-3"
                            placeholder="Name"
                        />
                        <input
                            className="bg-white w-full mb-4 outline-none rounded-lg p-3"
                            placeholder="Email"
                        />
                        <textarea
                            rows={3}
                            className="bg-white block w-full outline-none rounded-lg p-3"
                            placeholder="Message"></textarea>
                        <PrimaryBtn
                            text="Send  email"
                            className="bg-secondaryHover mt-4"
                            handleClick={() => {}}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
