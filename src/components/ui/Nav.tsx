import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PrimaryBtn from '../share/PrimaryBtn';
import { MotionH2, MotionNav, MotionUl } from '@/lib/utils';

const Navbar = () => {
    const ref = useRef<HTMLElement>(null!);
    const isInView = useInView(ref, { once: true }); // Trigger only once when in view

    return (
        <MotionNav
            ref={ref}
            className="flex justify-between items-center py-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
                duration: 1,
                ease: 'easeInOut'
            }}>
            {/* Logo Animation */}
            <MotionH2
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{
                    x: {
                        duration: 0.8,
                        ease: 'easeInOut'
                    },
                    opacity: {
                        duration: 0.6,
                        ease: 'easeInOut'
                    }
                }}
                className="text-2xl font-medium text-navTextColor">
                Hein Htet Zaw
            </MotionH2>

            {/* Navigation Links Animation */}
            <MotionUl
                className="flex gap-[40px] cursor-pointer text-lg font-medium text-navTextColor"
                initial={{ opacity: 0, gap: '60px' }}
                animate={isInView ? { opacity: 1, gap: '40px' } : {}}
                transition={{
                    opacity: {
                        duration: 0.8,
                        ease: 'easeInOut'
                    },
                    gap: {
                        duration: 1,
                        ease: 'easeInOut'
                    }
                }}>
                <motion.li
                    initial={{ x: -30, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: 'easeInOut'
                    }}>
                    About
                </motion.li>
                <motion.li
                    initial={{ x: -30, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: 'easeInOut'
                    }}>
                    Experience
                </motion.li>
                <motion.li
                    initial={{ x: -30, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: 'easeInOut'
                    }}>
                    Projects
                </motion.li>
                <motion.li
                    initial={{ x: -30, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: 'easeInOut'
                    }}>
                    Contact
                </motion.li>
            </MotionUl>

            {/* Button Animation */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{
                    x: {
                        duration: 0.8,
                        ease: 'easeInOut'
                    },
                    opacity: {
                        duration: 0.6,
                        ease: 'easeInOut'
                    }
                }}>
                <PrimaryBtn
                    handleClick={() => {}}
                    text="Email Me"
                />
            </motion.div>
        </MotionNav>
    );
};

export default Navbar;
