'use client';
import PrimaryBtn from '@/components/ui/PrimaryBtn';
import Image from 'next/image';

export default function Home() {
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
                    <h1 className="font-bold  leading-[75px] text-textColor  text-[60px] ">
                        Hi I'm
                    </h1>
                    <h1 className="font-bold  leading-[75px] text-secondary  text-[60px] ">
                        Hein Htet Zaw
                    </h1>
                    <h1 className="font-bold  leading-[75px] text-textColor  text-[60px] ">
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
                    <Image
                        alt="waveIcon"
                        src="/image/2024-10-27 13.03.45.jpg"
                        width="450"
                        height={'450'}
                        className=" h-[450px] object-cover object-top rounded-full"
                    />
                </div>
            </section>
            <section className="pt-[120px] ">
                <h3 className="text-center text-lg"> Get To know More</h3>
                <h1 className="text-center font-bold mb-10 leading-[75px]   text-[50px] text-secondary">
                    About Me
                </h1>
                <div className="flex items-center gap-10  justify-between">
                    <div className="w-1/  flex justify-start">
                        <Image
                            alt="waveIcon"
                            src="/image/profolio_image.jpg"
                            width="500"
                            height={'660'}
                            className=" w-auto h-[660px] object-cover object-top rounded-lg"
                        />
                    </div>
                    <div className="w-1/2 ">
                        <h2 className="text-[40px]  text-textColor font-bold leading-[50px]">
                            I'm a JavaScript FullStack Developer with{' '}
                            <span className="text-secondary">
                                3 years of industry experience{' '}
                            </span>
                        </h2>

                        <p className="mt-6 text-lg leading-7 text-justify font-normal text-navTextColor">
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
                    </div>
                </div>
            </section>
        </div>
    );
}
