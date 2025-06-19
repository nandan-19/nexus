"use client"
import React, { useEffect, useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import FeatureShowcase from './components/FeatureShowcase';
import Loader from './components/Loader';
import RippleEffect from './components/RippleEffect';
import ScrollReveal from './components/ScrollReveal';
import ParallaxSection from './components/ParallaxSection';
import ShowcaseWork from './components/ShowcaseWork';
import PopupModal from './components/PopupModal';
import Testimonials from './components/Testimonials';
import PricingSection from './components/PricingSection';
import HowItWorks from './components/HowItWorks';

const sectionIds = [
  'hero', 'features', 'showcase', 'testimonials', 'pricing', 'howitworks'
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = 'hero';
      for (const id of sectionIds) {
        const ref = sectionRefs.current[id];
        if (ref && ref.offsetTop - 80 <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (id: string) => {
    const ref = sectionRefs.current[id];
    if (ref) {
      window.scrollTo({ top: ref.offsetTop - 60, behavior: 'smooth' });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Loader visible={loading} />
      {/* Sticky Nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl bg-white/70 backdrop-blur-lg z-40 flex justify-center gap-6 py-3 px-8 rounded-2xl shadow-xl border border-blue-100 font-sans text-base transition-all">
        {sectionIds.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`px-4 py-1 rounded-lg font-semibold transition-all duration-200 ${activeSection === id ? 'bg-blue-600 text-white shadow-md' : 'text-blue-700 hover:bg-blue-100'}`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>
      {/* Add top padding to main content to avoid overlap with navbar */}
      <div className="pt-32 w-full flex flex-col items-center">
        <div ref={el => { sectionRefs.current['hero'] = el; }} id="hero" className="w-full pt-24">
          <HeroSection />
        </div>
        <SocialProof />
        <div ref={el => { sectionRefs.current['features'] = el; }} id="features" className="w-full">
          <FeatureShowcase />
        </div>
        <RippleEffect onRipple={() => setModalOpen(true)} />
        <ScrollReveal />
        <ParallaxSection />
        <div ref={el => { sectionRefs.current['showcase'] = el; }} id="showcase" className="w-full">
          <ShowcaseWork />
        </div>
        {modalOpen && <PopupModal open={modalOpen} setOpen={setModalOpen} />}
        <div ref={el => { sectionRefs.current['testimonials'] = el; }} id="testimonials" className="w-full">
          <Testimonials />
        </div>
        <div ref={el => { sectionRefs.current['pricing'] = el; }} id="pricing" className="w-full">
          <PricingSection />
        </div>
        <div ref={el => { sectionRefs.current['howitworks'] = el; }} id="howitworks" className="w-full">
          <HowItWorks />
        </div>
      </div>
    </main>
  );
}
