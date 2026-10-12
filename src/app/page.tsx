'use client';
import { useState } from 'react';
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
    const [isVisible, setIsVisible] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="min-h-screen bg-bgDark text-textColor selection:bg-champagne selection:text-bgDark overflow-x-hidden"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}>
            <CustomCursor
                isHovered={isHovered}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />

            <Navbar />

            <main className="container">
                <HeroSection />
                <AboutMeSection />
                <ExpertiseSection />
                <ProjectCardSection setIsHovered={setIsHovered} />
                <CareerSection />
                <EducationSection />
            </main>

            <ContactInfo />
        </div>
    );
}
