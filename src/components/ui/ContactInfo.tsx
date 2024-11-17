'use client';
import React from 'react';
import PrimaryBtn from '../share/PrimaryBtn';
import { MotionDiv } from '@/lib/utils';

const ContactInfo = () => {
    return (
        <section className="pt-[80px] container pb-[80px] bg-secondary">
            <MotionDiv
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below the final position
                whileInView={{ opacity: 1, y: 0 }} // Fade in and move to the original position
                viewport={{ once: true }} // Trigger the animation only once
                transition={{
                    duration: 0.8,
                    ease: 'easeInOut'
                }}>
                <h3 className="text-center text-lg text-white">Contact Me</h3>
                <h1 className="text-center font-bold mb-16 leading-[75px] text-white text-title">
                    Let's Get in Touch
                </h1>
            </MotionDiv>

            <div className="grid grid-cols-2 gap-10 mb-10">
                {/* Left Side: Contact Info */}
                <MotionDiv
                    initial={{ opacity: 0, x: -50 }} // Start from the left, invisible
                    whileInView={{ opacity: 1, x: 0 }} // Fade in and move to the center
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeInOut',
                        delay: 0.2 // Add slight delay for smoother sequencing
                    }}
                    className="bg-white h-fit p-6 rounded-lg">
                    <h3 className="text-lg font-semibold">Hotline 24/7</h3>
                    <p className="text-2xl font-semibold mb-6">
                        (+66) 0618502916
                    </p>
                    <p className="mb-2">
                        Address:{' '}
                        <span className="opacity-70 text-textColor">
                            Soi Ramkhamhaeng 50, Bang Kapi, Bangkok
                        </span>
                    </p>
                    <p className="mb-2">
                        Email:{' '}
                        <span className="opacity-70 text-textColor">
                            heinh9540@gmail.com
                        </span>
                    </p>
                    <p className="mb-2">
                        Work Hour:{' '}
                        <span className="opacity-70 text-textColor">
                            Mon - Sat: 9:00 - 18:00
                        </span>
                    </p>
                </MotionDiv>

                {/* Right Side: Form Inputs */}
                <MotionDiv
                    initial={{ opacity: 0, x: 50 }} // Start from the right, invisible
                    whileInView={{ opacity: 1, x: 0 }} // Fade in and move to the center
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeInOut',
                        delay: 0.4 // Slight delay for this side to animate after the left side
                    }}
                    className="w-full">
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
                        placeholder="Message"
                    />
                    <PrimaryBtn
                        text="Send Email"
                        className="bg-secondaryHover mt-4"
                        handleClick={() => {}}
                    />
                </MotionDiv>
            </div>
        </section>
    );
};

export default ContactInfo;
