import { MotionDiv, MotionLi } from '@/lib/utils';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';

const ExpertLisingComponent = ({
    level,
    title
}: {
    level: string;
    title: string;
}) => {
    return (
        <MotionLi
            className="flex gap-3 sm:gap-8 text-lg  "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}>
            <div className="mt-1">
                <IoCheckmarkDoneCircle
                    color="#333333"
                    fontSize="24px"
                />
            </div>
            <div>
                <p className="font-semibold leading-0">{title}</p>
                <p className="opacity-70 text-base">{level}</p>
            </div>
        </MotionLi>
    );
};

const ExpertiseSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3 // Delay between child animations
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="pt-[100px] md:py-[50px] mb-10">
            <h3 className="text-center text-lg">Explore My</h3>
            <h1 className="text-center font-bold mb-10 leading-[45px] sm:leading-[75px] text-title text-secondary text-2xl sm:text-4xl">
                Expertise Areas
            </h1>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24 justify-between">
                {/* Frontend Development */}
                <MotionDiv
                    className="w-full lg:w-1/2 border border-slate-500 rounded-3xl py-6 px-8 sm:px-12 lg:px-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}>
                    <h2 className="text-xl sm:text-2xl mb-6 opacity-70 text-textColor text-center font-bold leading-[30px] sm:leading-[50px]">
                        Frontend Development
                    </h2>
                    <div className="grid grid-cols-2 gap-5">
                        <ul className="flex flex-col gap-5">
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="HTML"
                                    level="Expert"
                                />
                            </MotionDiv>
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="JavaScript"
                                    level="Expert"
                                />
                            </MotionDiv>
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="React"
                                    level="Expert"
                                />
                            </MotionDiv>
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="Vue.js"
                                    level="Intermediate"
                                />
                            </MotionDiv>
                        </ul>
                        <ul className="flex flex-col gap-5">
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="CSS"
                                    level="Expert"
                                />
                            </MotionDiv>
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="TypeScript"
                                    level="Proficient"
                                />
                            </MotionDiv>
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="Next.js"
                                    level="Expert"
                                />
                            </MotionDiv>
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="React Native"
                                    level="Intermediate"
                                />
                            </MotionDiv>
                        </ul>
                    </div>
                </MotionDiv>

                {/* Backend Development */}
                <MotionDiv
                    className="w-full lg:w-1/2 border border-slate-500 rounded-3xl py-6 px-8 sm:px-12 lg:px-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}>
                    <h2 className="text-xl sm:text-2xl mb-6 opacity-70 text-textColor text-center font-bold leading-[30px] sm:leading-[50px]">
                        Backend Development
                    </h2>
                    <div className="grid grid-cols-2 gap-5">
                        <ul className="flex flex-col gap-5">
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="Node JS"
                                    level="Proficient"
                                />
                            </MotionDiv>
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="MongoDB"
                                    level="Intermediate"
                                />
                            </MotionDiv>
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="Nest JS"
                                    level="Intermediate"
                                />
                            </MotionDiv>
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="Kubernetes"
                                    level="Beginner"
                                />
                            </MotionDiv>
                        </ul>
                        <ul className="flex flex-col gap-5">
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="Express JS"
                                    level="Intermediate"
                                />
                            </MotionDiv>
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="PostgreSQL"
                                    level="Intermediate"
                                />
                            </MotionDiv>
                            <MotionDiv variants={itemVariants}>
                                <ExpertLisingComponent
                                    title="Docker"
                                    level="Intermediate"
                                />
                            </MotionDiv>
                        </ul>
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
};

export default ExpertiseSection;
