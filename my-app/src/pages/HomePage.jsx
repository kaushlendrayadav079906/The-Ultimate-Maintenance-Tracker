import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CorePillars from '../components/home/CorePillars';
import FeatureShowcase from '../components/home/FeatureShowcase';
import WorkflowPreview from '../components/home/WorkflowPreview';
import ModuleShortcuts from '../components/home/ModuleShortcuts';
import GetStartedPanel from '../components/home/GetStartedPanel';
import Footer from '../components/home/Footer';
import SystemHealth from '../components/home/SystemHealth';
import LatestNews from '../components/home/LatestNews';
import '../components/home/Home.css';

const HomePage = () => {
    return (
        <div className="home-wrapper">
            <HeroSection />
            <CorePillars />
            <SystemHealth />
            <FeatureShowcase />
            <LatestNews />
            <WorkflowPreview />
            <ModuleShortcuts />
            <GetStartedPanel />
            <Footer />
        </div>
    );
};

export default HomePage;
