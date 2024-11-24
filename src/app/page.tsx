'use client';
// import 'locomotive-scroll/bundled/locomotive-scroll.css';
import { useEffect, useState } from 'react';
import React from 'react';
import Navbar from '@/components/ui/Nav';
import CustomCursor from '@/components/share/CustomCursor';
import HeroSection from '@/components/ui/HeroSection';
import AboutMeSection from '@/components/ui/About';
import ExpertiseSection from '@/components/ui/Expert';
import ProjectCardSection from '@/components/ui/Project';
import CareerSection from '@/components/ui/Career';
import EducationSection from '@/components/ui/Education';
import ContactInfo from '@/components/ui/ContactInfo';

export default function Home() {
    console.log('hello');
    const [isVisible, setIsVisible] = useState(true);
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
    const [isHovered, setIsHovered] = useState(false); // Track if cursor is hovering over a project card

    return (
        <div
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}>
            <CustomCursor
                isHovered={isHovered}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />

            <div className="container">
                <Navbar />
                <HeroSection />
                <AboutMeSection />
                <ExpertiseSection />
                <ProjectCardSection setIsHovered={setIsHovered} />
                <CareerSection />
                <EducationSection />
            </div>
            <ContactInfo />
        </div>
    );
}
