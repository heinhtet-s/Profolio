import { EDUINFO } from '@/lib/constant';
import { cn, MotionDiv } from '@/lib/utils';
type EduComponentProps = {
    title: string;
    duration: string;
    uniName: string;
};

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
            'grid cursor-pointer grid-cols-8 border-b pb-10 border-slate-300 group relative',
            index !== 0 ? 'mt-10' : ''
        ])}
        initial={{ opacity: 0, y: 30 }} // Start below and invisible
        whileInView={{ opacity: 1, y: 0 }} // Animate to final position
        viewport={{ once: true }} // Trigger only once when it comes into view
        transition={{
            duration: 0.6,
            type: 'easeInOut',
            delay: index * 0.2 // Staggered delay for each item
        }}
        whileHover={{
            paddingLeft: 12,
            paddingRight: 16
        }}>
        <MotionDiv
            className="col-span-3"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <h3 className="text-base font-medium">{data?.title}</h3>
        </MotionDiv>
        <div className="col-span-3">
            <p className="text-base leading-8 font-normal opacity-70 text-textColor">
                {data?.uniName}
            </p>
        </div>
        <MotionDiv
            className="col-span-2"
            whileHover={{ x: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <p className="text-base leading-8 font-normal opacity-70 text-textColor">
                {data?.duration}
            </p>
        </MotionDiv>
    </MotionDiv>
);

const EducationSection = () => {
    return (
        <section className="py-[50px] mb-10">
            <h3 className="text-center text-lg">Browse My </h3>
            <h1 className="text-center font-bold mb-16 leading-[75px] text-title text-secondary">
                Academic Achievements
            </h1>
            <div className="grid grid-cols-12 gap-24">
                <div className="col-span-4">
                    <p className="text-base leading-8 font-normal opacity-70 text-textColor">
                        My educational journey started with a deep interest in
                        technology, which naturally led me to full-stack
                        development. I’ve always been passionate about both
                        front-end and back-end technologies, and I enjoy
                        building end-to-end solutions that deliver seamless user
                        experiences. I am a fast learner, and I constantly seek
                        to expand my knowledge by exploring various areas of
                        development, from databases to user interfaces.
                    </p>
                </div>
                <div className="col-span-8">
                    <MotionDiv
                        className="col-span-7"
                        initial={{ opacity: 0 }} // Initial opacity
                        whileInView={{ opacity: 1 }} // Fade in when in view
                        viewport={{ once: true }} // Trigger only once
                        transition={{
                            duration: 1,
                            ease: 'easeInOut',
                            delay: 0.4 // Delay the whole list slightly
                        }}>
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
    );
};
export default EducationSection;
