'use client';
import PrimaryBtn from '@/components/ui/PrimaryBtn';
import Image from 'next/image';
import { FaCode } from 'react-icons/fa6';
import { FaAward } from 'react-icons/fa';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
// import 'locomotive-scroll/bundled/locomotive-scroll.css';

import { useEffect } from 'react';
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
export default function Home() {
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
    return (
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
            <section className="pt-[120px] ">
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
                        <h2 className="text-subTitle  text-textColor font-bold leading-[50px]">
                            I'm a JavaScript FullStack Developer with{' '}
                            <span className="text-secondary">
                                3 years of industry experience{' '}
                            </span>
                        </h2>
                        <p className="mt-6 text-lg leading-8	text-justify font-normal text-navTextColor">
                            I'm a JavaScript Full Stack Developer with a strong
                            focus on front-end development. I have a proven
                            record in building high-quality web and mobile
                            applications using React and React Native, with 3
                            years of industry experience. Skilled in JavaScript
                            and TypeScript, I'm proficient in frameworks like
                            React, Next.js, Vue.js, and backend with
                            Node.js/Express. Adaptable to various technologies,
                            I'm passionate about continuous learning and
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
            <section className="pt-[120px] mb-10 ">
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
            <section className="pt-[120px] mb-10 ">
                <h3 className="text-center text-lg">Browse My Recent </h3>
                <h1 className="text-center font-bold mb-16 leading-[75px]   text-title text-secondary">
                    Projects
                </h1>
                <div className="flex items-center gap-24    justify-between">
                    <div className="w-1/2 cursor-pointer  ">
                        <div className=" w-full relative h-[550px]   overflow-hidden  rounded-lg  ">
                            <Image
                                alt="projectImage"
                                src="/image/project2.png"
                                fill={true}
                                className="  basis-[16px] object-cover object-center "
                            />
                        </div>
                        <div className="py-5">
                            <div className="flex justify-between  items-center">
                                <h2 className="text-[30px]   text-textColor  font-bold leading-[50px]">
                                    PRUIdeas Web Application
                                </h2>
                                <button className="border border-secondary text-secondary rounded-3xl  px-2">
                                    fullstack
                                </button>
                            </div>
                            <p className="mt-6 text-lg  leading-8	 text-justify font-normal text-navTextColor">
                                A comprehensive learning management system
                                designed for both students , teachers and
                                administrator, equipped with a multitude of
                                features such as project management, submission
                                capabilities for students, reaction options, and
                                reward allocation by teachers for outstanding
                                projects rewire in simple and normal way
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 cursor-pointer  ">
                        <div className=" w-full relative h-[550px]   overflow-hidden  rounded-lg  ">
                            <Image
                                alt="projectImage"
                                src="/image/project_image5.png"
                                fill={true}
                                className="  basis-[16px] object-cover object-center "
                            />
                        </div>
                        <div className="py-5">
                            <div className="flex justify-between  items-center">
                                <h2 className="text-[30px]   text-textColor  font-bold leading-[50px]">
                                    PRUIdeas Web Application
                                </h2>
                                <button className="border border-secondary text-secondary rounded-3xl  px-2">
                                    fullstack
                                </button>
                            </div>
                            <p className="mt-6 text-lg  leading-8	 text-justify font-normal text-navTextColor">
                                A comprehensive learning management system
                                designed for both students , teachers and
                                administrator, equipped with a multitude of
                                features such as project management, submission
                                capabilities for students, reaction options, and
                                reward allocation by teachers for outstanding
                                projects rewire in simple and normal way
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
