import Image from 'next/image';
import { FaAward, FaCode } from 'react-icons/fa';
import { MotionDiv, MotionH1, MotionH2 } from '@/lib/utils';

const AboutMeSection = () => {
    return (
        <section
            className="pt-[100px]"
            id="about">
            <MotionH2
                className="text-center text-lg"
                initial={{ opacity: 0, y: 100 }} // Starts lower
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                Get To Know More
            </MotionH2>
            <MotionH1
                className="text-center font-bold mb-10 leading-[75px] text-subTitle sm:text-title  text-secondary"
                initial={{ opacity: 0, y: 100 }} // Starts lower
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                About Me
            </MotionH1>
            <div className="flex flex-wrap lg:flex-nowrap  items-center gap-24 justify-between">
                <MotionDiv
                    className="w-full lg:w-1/2 flex justify-start"
                    initial={{ opacity: 0, y: 200 }} // Starts lower
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <Image
                        alt="waveIcon"
                        src="/image/hero1.png"
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover object-top rounded-lg"
                    />
                </MotionDiv>
                <MotionDiv
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, y: 100 }} // Starts lower
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <h2 className="text-subTitle text-textColor font-bold leading-[50px]">
                        I'm a JavaScript FullStack Developer with{' '}
                        <span className="text-secondary">
                            3 years of industry experience
                        </span>
                    </h2>
                    <p className="mt-6 text-lg leading-8 opacity-70 text-textColor font-normal">
                        I'm a JavaScript Full Stack Developer with a strong
                        focus on front-end development. I have a proven record
                        in building high-quality web and mobile applications
                        using React and React Native, with 3 years of industry
                        experience. Skilled in JavaScript and TypeScript, I'm
                        proficient in frameworks like React, Next.js, Vue.js,
                        and backend with Node.js/Express. Adaptable to various
                        technologies, I'm passionate about continuous learning
                        and dedicated to delivering excellent results.
                    </p>
                    <div className="flex items-center flex-wrap lg:flex-nowrap mt-6 gap-10">
                        <MotionDiv
                            className=" w-full lg:w-1/2 border border-slate-500 rounded-3xl p-6 flex flex-col justify-center items-center"
                            initial={{ opacity: 0, y: 100 }} // Starts lower
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}>
                            <FaAward fontSize={40} />
                            <h3 className="text-textColor text-lg font-semibold">
                                Experience
                            </h3>
                            <p className="text-navTextColor text-base opacity-70">
                                3+ years
                            </p>
                        </MotionDiv>
                        <MotionDiv
                            className=" w-full lg:w-1/2 border border-slate-500 rounded-3xl p-6 flex flex-col justify-center items-center"
                            initial={{ opacity: 0, y: 100 }} // Starts lower
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}>
                            <FaCode fontSize={40} />
                            <h3 className="text-textColor text-lg font-semibold">
                                Projects Completed
                            </h3>
                            <p className="text-navTextColor opacity-70 text-base">
                                20+
                            </p>
                        </MotionDiv>
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
};

export default AboutMeSection;
