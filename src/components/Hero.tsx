'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SpotlightWrapper from './SpotlightWrapper';

const easeOutPremium = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 8
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeOutPremium,
    },
  },
};

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen min-h-[100vh] w-full flex flex-col justify-between pt-36 pb-16 px-4 md:px-8 overflow-hidden bg-[#FAF6F0]">
      
      {/* LAYER 1: BASE IMAGE ASSET (z-0) */}
      <Image
        src="/ChatGPT Image Jul 1, 2026, 01_08_27 PM.png"
        alt="Acne Reset Editorial Model Portrait"
        fill
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
        priority
      />

      {/* LAYER 2: PLASMA GLASS VIGNETTE OVERLAY (z-10) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-10 backdrop-blur-[16px] pointer-events-none"
        style={{
          background: isMobile
            ? 'radial-gradient(circle at 50% 40%, transparent 15%, rgba(250,246,240,0.4) 45%, rgba(245,235,225,0.95) 85%)'
            : 'radial-gradient(circle at center, transparent 15%, rgba(250,246,240,0.4) 45%, rgba(245,235,225,0.95) 85%)',
          maskImage: isMobile
            ? 'radial-gradient(circle at 50% 40%, transparent 20%, black 75%)'
            : 'radial-gradient(circle at center, transparent 20%, black 75%)',
          WebkitMaskImage: isMobile
            ? 'radial-gradient(circle at 50% 40%, transparent 20%, black 75%)'
            : 'radial-gradient(circle at center, transparent 20%, black 75%)'
        }}
      />

      {/* Ambient pink plasma blend layer for skin tones overlay */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-80 md:opacity-75 mix-blend-color-burn md:mix-blend-soft-light"
      >
        <div className="sunlight-mesh absolute inset-[-10%] w-[120%] h-[120%]" />
      </div>

      {/* LAYER 3: THE FIXED FOREGROUND LAYOUT (z-20) */}
      <div 
        style={{ position: "relative", zIndex: 20 }}
        className="flex-grow flex flex-col justify-between items-center md:items-start h-full w-full max-w-7xl mx-auto"
      >
        {/* Upper text/CTA content */}
        <div className="flex flex-col items-center md:items-start w-full max-w-2xl mt-auto mb-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="flex flex-col items-center md:items-start w-full space-y-4 md:space-y-6 text-center md:text-left"
            style={{ willChange: "transform, opacity" }}
          >
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl lg:text-7xl font-serif text-[#2D2624] font-semibold leading-[1.15] tracking-tight max-w-2xl"
              style={{ willChange: "transform, opacity" }}
            >
              You don't have to pretend the mirror doesn't matter.
            </motion.h1>

            <motion.p 
              variants={itemVariants} 
              className="text-[#2D2624]/95 text-base md:text-lg leading-relaxed max-w-xl"
              style={{ willChange: "transform, opacity" }}
            >
              For years, you've been told to just 'drink more water' or 'give it time.' But you know what it feels like to delete a photo before anyone else can see it. The 3-Phase Acne Reset is not another cleanser. It is the process to finally become yourself again.
            </motion.p>

            {/* Timeline capsule wrapper */}
            <motion.div 
              variants={itemVariants} 
              className="w-full flex justify-center md:justify-start px-2"
            >
              <div className="w-full max-w-md mx-auto md:mx-0 flex flex-row items-center justify-center md:justify-start whitespace-nowrap gap-x-2 text-[11px] sm:text-xs py-3 px-4 bg-white/50 backdrop-blur-md border border-white/80 rounded-full text-stone-700 shadow-sm">
                <span className="font-semibold text-[#2D2624]">Calm</span>
                <span className="text-stone-500 font-light">(21 Days)</span>
                <span className="text-stone-400 font-light">·</span>
                <span className="font-semibold text-[#2D2624]">Clear</span>
                <span className="text-stone-500 font-light">(45 Days)</span>
                <span className="text-stone-400 font-light">·</span>
                <span className="font-semibold text-[#2D2624]">Maintain</span>
                <span className="text-stone-500 font-light">(Ongoing)</span>
              </div>
            </motion.div>

            {/* CTA Button Row */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start"
              style={{ willChange: "transform, opacity" }}
            >
              <SpotlightWrapper 
                className="rounded-full w-full sm:w-auto overflow-hidden shadow-sm"
                spotlightColor="rgba(255, 255, 255, 0.45)"
              >
                <motion.button 
                  onClick={() => scrollToSection("pricing")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden w-full bg-[#E5A9A9] text-neutral-900 font-semibold tracking-wider uppercase text-xs sm:text-sm py-2.5 px-5 md:py-4 md:px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-center block cursor-pointer"
                >
                  <span className="relative z-10">Find Your Starting Phase</span>
                  <motion.div 
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
                    initial={{ left: "-100%" }}
                    whileHover={{ left: "150%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.button>
              </SpotlightWrapper>

              <SpotlightWrapper 
                className="rounded-full w-full sm:w-auto overflow-hidden shadow-sm"
                spotlightColor="rgba(255, 255, 255, 0.20)"
              >
                <button 
                  onClick={() => scrollToSection("system")}
                  className="w-full text-[#2D2624] py-2.5 px-5 text-xs font-medium md:py-4 md:px-8 md:text-sm md:font-semibold uppercase tracking-wider flex items-center justify-center transition-all duration-200 ease-in-out hover:scale-[1.02] hover:bg-white/30 rounded-full font-serif cursor-pointer"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    border: '1px solid rgba(255, 255, 255, 0.45)',
                    boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)'
                  }}
                >
                  The Framework
                </button>
              </SpotlightWrapper>
            </motion.div>
          </motion.div>
        </div>

        {/* Slim, elegant Trust Strip section */}
        <div className="relative z-30 border-t border-[#2D2624]/10 pt-8 pb-4 w-full mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center md:justify-start items-center gap-6 md:gap-12 text-center md:text-left text-[13px] uppercase tracking-[0.2em] font-semibold text-[#2D2624]/70">
            <span>90-Day Framework</span>
            <span>Works With Any Products</span>
            <span>Built Around Process, Not Products</span>
          </div>
          {/* Core Bridge Line */}
          <div className="text-center md:text-left mt-4">
            <p className="font-serif italic text-xs md:text-sm text-[#2D2624]/80 tracking-wide">
              A process before products. A system before routines.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
