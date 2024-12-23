import { CAREERINFO } from '@/lib/constant';
import { cn, MotionDiv, MotionSection } from '@/lib/utils';
type CareerComponentProps = {
    title: string;
    duration: string;
    dec: string;
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
            'grid cursor-pointer grid-cols-1 md:grid-cols-8 border-b pb-6 md:pb-10 border-slate-300 group relative',
            index !== 0 ? 'mt-6 md:mt-10' : ''
        ])}
        viewport={{ once: true }} // Trigger only once when it comes into view
        initial={{ opacity: 0, y: 30 }} // Starts below (down to up)
        whileInView={{ opacity: 1, y: 0 }} // Moves to its final position (up)
        transition={{
            duration: 0.5,
            type: 'easeinout',
            delay: index * 0.2 // Staggered fade-in effect for multiple components
        }}
        whileHover={{
            paddingLeft: 8, // Adjust for smaller screens
            paddingRight: 12, // Adjust for smaller screens
            scale: 1.05,
            transition: { duration: 0.3 }
        }}>
        <MotionDiv
            className="mb-4 md:mb-0 col-span-1 md:col-span-3"
            whileHover={{ x: 8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <h3 className="text-sm md:text-base font-medium">{data?.title}</h3>
            <p className="opacity-70 text-textColor text-sm md:text-base">
                {data?.duration}
            </p>
        </MotionDiv>

        <MotionDiv
            className="col-span-1 md:col-span-5"
            whileHover={{ x: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <p className="text-sm md:text-base leading-6 md:leading-8 font-normal opacity-70 text-textColor">
                {data?.dec}
            </p>
        </MotionDiv>
    </MotionDiv>
);

const CareerSection = () => {
    return (
        <MotionSection
            id="experience"
            className="pt-[100px] md:py-[50px] mb-10"
            initial={{ opacity: 0, y: 30 }} // Starts from below (down to up)
            whileInView={{ opacity: 1, y: 0 }} // Moves to its final position (up)
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            <h3 className="text-center text-lg"> Learn More About My </h3>
            <h1 className="text-center font-bold mb-10 leading-[45px] sm:leading-[75px] text-subTitle sm:text-title  text-secondary">
                Professional Journey
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                <div className="col-span-1 md:col-span-8">
                    <MotionDiv
                        className="col-span-7"
                        initial={{ opacity: 0, y: 30 }} // Starts from below (down to up)
                        whileInView={{ opacity: 1, y: 0 }} // Moves up to final position
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}>
                        {CAREERINFO.map((data, index) => (
                            <CareerComponent
                                key={index}
                                data={data}
                                index={index}
                            />
                        ))}
                    </MotionDiv>
                </div>
                <div className="col-span-1 md:col-span-4">
                    <p className="text-sm md:text-base leading-6 md:leading-8 font-normal opacity-70 text-textColor">
                        In my career as a full-stack developer, I've worked in
                        freelance roles, startups, and IT companies. I focus on
                        building reliable, user-friendly applications that work
                        well on both the front and back ends. I enjoy learning
                        new skills and exploring different technologies to keep
                        improving my work.
                    </p>
                </div>
            </div>
        </MotionSection>
    );
};

export default CareerSection;
