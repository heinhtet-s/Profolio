'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MotionDiv, MotionH1, MotionH2 } from '@/lib/utils';
import SubmitBtn from '../share/SubmitBtn';
import toast from 'react-hot-toast';
import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker,
    HiOutlineClipboardCopy
} from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactInfo: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>();

    const copyEmail = () => {
        navigator.clipboard.writeText('heinh9540@gmail.com');
        setIsCopied(true);
        toast.success('Email copied to clipboard!');
        setTimeout(() => setIsCopied(false), 2500);
    };

    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            await response.json();
            toast.success('Your message has been dispatched successfully!');
            reset();
        } catch (error) {
            toast.error(
                'Dispatch failed. Please email directly at heinh9540@gmail.com'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="pt-20 md:pt-32 pb-16 md:pb-24 border-t border-borderGlass relative bg-gradient-to-b from-transparent to-surface/40">
            <div className="container">
                {/* Eyebrow & Title */}
                <div className="mb-14 text-center md:text-left">
                    <MotionH2
                        className="text-xs font-mono tracking-widest uppercase text-champagne mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}>
                        06 / Collaboration & Inquiries
                    </MotionH2>
                    <MotionH1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}>
                        Let's Discuss Next{' '}
                        <span className="editorial-serif font-normal italic champagne-gradient-text">
                            Opportunities
                        </span>
                    </MotionH1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                    {/* Left Info Card */}
                    <MotionDiv
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border border-borderGlass flex flex-col justify-between">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-champagne">
                                Direct Contact Channels
                            </span>
                            <h3 className="text-2xl font-bold text-white mt-2 mb-6">
                                Connect With Me
                            </h3>
                            <p className="text-sm text-textColor/80 leading-relaxed font-light mb-8">
                                Whether you have an open Full-Stack Software
                                Engineering position, a high-impact contract, or
                                require technical consultation, I look forward
                                to hearing from you.
                            </p>

                            <div className="flex flex-col gap-5">
                                {/* Email with copy button */}
                                <div className="p-4 rounded-xl bg-surface border border-borderGlass flex items-center justify-between group hover:border-champagne/40 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-champagne/10 text-champagne flex items-center justify-center">
                                            <HiOutlineMail className="text-lg" />
                                        </div>
                                        <div>
                                            <span className="block text-[11px] font-mono uppercase text-textMuted">
                                                Electronic Mail
                                            </span>
                                            <a
                                                href="mailto:heinh9540@gmail.com"
                                                className="text-sm font-semibold text-white hover:text-champagne transition-colors">
                                                heinh9540@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <button
                                        onClick={copyEmail}
                                        type="button"
                                        aria-label="Copy Email"
                                        className="p-2 rounded-lg bg-surfaceLight hover:bg-champagne/20 text-champagne transition-colors">
                                        {isCopied ? (
                                            <FaCheck className="text-xs text-emerald-400" />
                                        ) : (
                                            <HiOutlineClipboardCopy className="text-sm" />
                                        )}
                                    </button>
                                </div>

                                {/* Phone */}
                                <div className="p-4 rounded-xl bg-surface border border-borderGlass flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-champagne/10 text-champagne flex items-center justify-center">
                                        <HiOutlinePhone className="text-lg" />
                                    </div>
                                    <div>
                                        <span className="block text-[11px] font-mono uppercase text-textMuted">
                                            Direct Line
                                        </span>
                                        <a
                                            href="tel:+660618502916"
                                            className="text-sm font-semibold text-white hover:text-champagne transition-colors">
                                            09771955315
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="p-4 rounded-xl bg-surface border border-borderGlass flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-champagne/10 text-champagne flex items-center justify-center">
                                        <HiOutlineLocationMarker className="text-lg" />
                                    </div>
                                    <div>
                                        <span className="block text-[11px] font-mono uppercase text-textMuted">
                                            Base Location
                                        </span>
                                        <p className="text-sm font-semibold text-white">
                                            Yangon, Myanmar (Open to Global
                                            Relocation & Remote)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-textMuted">
                            <span>Availability: Immediate</span>
                            <span className="text-champagne">Mon — Sat</span>
                        </div>
                    </MotionDiv>

                    {/* Right Form Card */}
                    <MotionDiv
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-borderGlass">
                        <span className="text-xs font-mono uppercase tracking-widest text-champagne">
                            Send Direct Transmission
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-2 mb-6">
                            Project Inquiry or Message
                        </h3>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-5">
                            {/* Name Field */}
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-wider text-textMuted mb-2">
                                    Your Name / Entity
                                </label>
                                <input
                                    {...register('name', {
                                        required: 'Name is required',
                                        minLength: {
                                            value: 3,
                                            message:
                                                'Name must be at least 3 characters'
                                        }
                                    })}
                                    className={`bg-surface/80 text-white w-full outline-none rounded-xl p-3.5 border transition-all duration-300 placeholder:text-textMuted/50 text-sm ${
                                        errors.name
                                            ? 'border-red-400 focus:border-red-500'
                                            : 'border-borderGlass focus:border-champagne focus:ring-1 focus:ring-champagne/40'
                                    }`}
                                    placeholder="e.g. Jane Doe or Acme Corp"
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-xs mt-1.5 font-mono">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-wider text-textMuted mb-2">
                                    Electronic Mail Address
                                </label>
                                <input
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message:
                                                'Invalid email address format'
                                        }
                                    })}
                                    className={`bg-surface/80 text-white w-full outline-none rounded-xl p-3.5 border transition-all duration-300 placeholder:text-textMuted/50 text-sm ${
                                        errors.email
                                            ? 'border-red-400 focus:border-red-500'
                                            : 'border-borderGlass focus:border-champagne focus:ring-1 focus:ring-champagne/40'
                                    }`}
                                    placeholder="e.g. name@company.com"
                                    type="email"
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-xs mt-1.5 font-mono">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-wider text-textMuted mb-2">
                                    Message Overview
                                </label>
                                <textarea
                                    {...register('message', {
                                        required: 'Message is required',
                                        minLength: {
                                            value: 10,
                                            message:
                                                'Please provide at least 10 characters'
                                        }
                                    })}
                                    rows={4}
                                    className={`bg-surface/80 text-white block w-full outline-none rounded-xl p-3.5 border transition-all duration-300 placeholder:text-textMuted/50 text-sm ${
                                        errors.message
                                            ? 'border-red-400 focus:border-red-500'
                                            : 'border-borderGlass focus:border-champagne focus:ring-1 focus:ring-champagne/40'
                                    }`}
                                    placeholder="Describe your project, timeline, or engineering inquiry..."
                                />
                                {errors.message && (
                                    <p className="text-red-400 text-xs mt-1.5 font-mono">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            <div className="pt-2 flex items-center justify-between">
                                <SubmitBtn
                                    text="Dispatch Message ↗"
                                    isLoading={isLoading}
                                />
                                <span className="text-xs text-textMuted font-mono hidden sm:inline">
                                    Prompt Response Within 24 Hours
                                </span>
                            </div>
                        </form>
                    </MotionDiv>
                </div>

                {/* Editorial Footer */}
                <div className="mt-20 pt-8 border-t border-borderGlass flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-textMuted">
                    <p>
                        © {new Date().getFullYear()} Hein Htet Zaw — Engineered
                        with Next.js & TypeScript.
                    </p>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (
                                typeof window !== 'undefined' &&
                                (window as any).locomotiveScroll
                            ) {
                                (window as any).locomotiveScroll.scrollTo(0, {
                                    duration: 1.1
                                });
                            } else {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                        className="text-champagne hover:underline transition-colors">
                        Return to Top ↑
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
