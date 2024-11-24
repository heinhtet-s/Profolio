'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MotionDiv } from '@/lib/utils';
import SubmitBtn from '../share/SubmitBtn';
import toast from 'react-hot-toast';

// Define form input types
interface FormData {
    name: string;
    email: string;
    message: string;
}

// Define status type

const ContactInfo: React.FC = () => {
    const [isLoading, seIsLoading] = useState(false);
    // React Hook Form setup with TypeScript
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>();

    // Form submission handler
    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        seIsLoading(false);
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            await response.json();
            toast.success('Successfully Sent ');
            reset(); // Reset form after successful submission
        } catch (error) {
            toast.error('Something wrong');
        } finally {
            seIsLoading(false);
        }
    };

    return (
        <section
            id={'contact'}
            className="pt-[80px] container pb-[80px] bg-secondary">
            <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}>
                <h3 className="text-center text-lg text-white">Contact Me</h3>
                <h1 className="text-center text-white font-bold mb-10 leading-[45px] sm:leading-[75px] text-subTitle sm:text-title  ">
                    Let's Get in Touch
                </h1>
            </MotionDiv>

            <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-5 ">
                <MotionDiv
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeInOut',
                        delay: 0.2
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

                <MotionDiv
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeInOut',
                        delay: 0.4
                    }}
                    className="w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Field */}
                        <input
                            {...register('name', {
                                required: 'Name is required',
                                minLength: {
                                    value: 3,
                                    message:
                                        'Name must be at least 3 characters'
                                }
                            })}
                            className={`bg-white mb-4 w-full outline-none rounded-lg p-3 ${
                                errors.name ? 'border border-red-500' : ''
                            }`}
                            placeholder="Name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">
                                {errors.name.message}
                            </p>
                        )}

                        {/* Email Field */}
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email address'
                                }
                            })}
                            className={`bg-white w-full mb-4 outline-none rounded-lg p-3 ${
                                errors.email ? 'border border-red-500' : ''
                            }`}
                            placeholder="Email"
                            type="email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email.message}
                            </p>
                        )}

                        {/* Message Field */}
                        <textarea
                            {...register('message', {
                                required: 'Message is required',
                                minLength: {
                                    value: 10,
                                    message:
                                        'Message must be at least 10 characters'
                                }
                            })}
                            rows={3}
                            className={` bg-white block w-full outline-none rounded-lg p-3 ${
                                errors.message ? 'border border-red-500' : ''
                            }  `}
                            placeholder="Message"
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm">
                                {errors.message.message}
                            </p>
                        )}
                        <SubmitBtn
                            text="Send Email"
                            isLoading={isLoading}
                        />
                    </form>
                </MotionDiv>
            </div>
        </section>
    );
};

export default ContactInfo;
