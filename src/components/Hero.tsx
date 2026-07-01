"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SpotlightWrapper from "./SpotlightWrapper";

const easeOutPremium = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Snappy entry stagger
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    transform: "translate3d(0, 8px, 0)" // Snappy GPU translation
  },
  visible: {
    opacity: 1,
    transform: "translate3d(0, 0, 0)", // Snappy GPU translation
    transition: {
      duration: 0.3, // Snappy animation timing
      ease: easeOutPremium,
    },
  },
};

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-16 pb-8 md:py-24 overflow-hidden bg-[#E8C4B8]">
      {/* 1. Foundational Background Asset: Universal cover scaling with z-0 */}
      <Image
        src="/ChatGPT Image Jul 1, 2026, 01_08_27 PM.png"
        alt="Acne Reset Radiant Skin portrait"
        fill
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 will-change-transform"
        style={{ transform: "translateZ(0)" }}
        priority
      />

      {/* 2. Plasma-infused Glass Vignette Overlay: backdrop blur and radial mask overlay with z-10 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-10 backdrop-blur-[16px] pointer-events-none will-change-transform"
        style={{
          transform: "translateZ(0)",
          background: 'radial-gradient(circle at center, transparent 15%, rgba(250,246,240,0.4) 45%, rgba(245,235,225,0.95) 85%)',
          maskImage: 'radial-gradient(circle at center, transparent 20%, black 75%)',
          WebkitMaskImage: 'radial-gradient(circle at center, transparent 20%, black 75%)'
        }}
      />

      {/* 3. Content Layer: Your text elements, headers, and CTA buttons */}
      <div 
        style={{ position: "relative", zIndex: 20 }}
        className="flex-grow flex flex-col justify-end pb-12 px-6 md:w-1/2 md:justify-center md:px-12 md:ml-0 md:mr-auto h-full w-full"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center md:items-start md:text-left w-full pt-24 pb-6 px-4 md:p-0">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="flex flex-col items-center md:items-start w-full"
            style={{ willChange: "transform, opacity" }}
          >
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl sm:text-6xl lg:text-8xl font-serif text-[#2D2624] font-semibold leading-[1.1] tracking-tight max-w-4xl"
              style={{ willChange: "transform, opacity" }}
            >
              You don't have to pretend the mirror doesn't matter.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="text-base md:text-lg text-[#2D2624]/90 mt-6 max-w-2xl leading-relaxed"
              style={{ willChange: "transform, opacity" }}
            >
              For years, you've been told to just 'drink more water' or 'give it time.' But you know what it feels like to delete a photo before anyone else can see it. The 3-Phase Acne Reset is not another cleanser. It is the process to finally become yourself again.
            </motion.p>

            {/* Sequence steps preview */}
            <motion.div 
              variants={itemVariants} 
              className="mt-8 flex justify-center md:justify-start w-full"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-6 py-4 md:py-3.5 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl md:rounded-full max-w-full text-stone-700 text-sm md:text-base shadow-sm">
                
                {/* Phase 1 */}
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="font-semibold text-stone-900">Calm</span>
                  <span className="text-stone-400 font-light">/</span>
                  <span className="text-stone-600">21 Days</span>
                </div>

                {/* Arrow 1 - Desktop Only */}
                <span className="hidden md:inline text-stone-400 text-xs">→</span>
                {/* Separator - Mobile Only */}
                <span className="md:hidden text-stone-200 text-xs py-0.5 font-light">|</span>

                {/* Phase 2 */}
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="font-semibold text-stone-900">Clear</span>
                  <span className="text-stone-400 font-light">/</span>
                  <span className="text-stone-600">45 Days</span>
                </div>

                {/* Arrow 2 - Desktop Only */}
                <span className="hidden md:inline text-stone-400 text-xs">→</span>
                {/* Separator - Mobile Only */}
                <span className="md:hidden text-stone-200 text-xs py-0.5 font-light">|</span>

                {/* Phase 3 */}
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="font-semibold text-stone-900">Maintain</span>
                  <span className="text-stone-400 font-light">/</span>
                  <span className="text-stone-600">Ongoing</span>
                </div>

              </div>
            </motion.div>

            {/* CTA Button Row */}
            <motion.div 
              variants={itemVariants} 
              className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start"
              style={{ willChange: "transform, opacity" }}
            >
              <SpotlightWrapper 
                className="rounded-full w-full sm:w-auto overflow-hidden shadow-sm"
                spotlightColor="rgba(255, 255, 255, 0.45)"
              >
                <button 
                  onClick={() => scrollToSection("pricing")}
                  className="w-full bg-[#2D2624] text-[#FAF7F4] px-10 py-4.5 text-xs font-semibold uppercase tracking-wider text-center transition-all duration-255 ease-in-out hover:scale-[1.03] hover:bg-[#413835] rounded-full shadow-md shadow-stone-900/5"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.45)', // Razor-sharp silver boundary seam
                    boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)'
                  }}
                >
                  Find Your Starting Phase →
                </button>
              </SpotlightWrapper>

              <SpotlightWrapper 
                className="rounded-full w-full sm:w-auto overflow-hidden shadow-sm"
                spotlightColor="rgba(255, 255, 255, 0.20)"
              >
                <button 
                  onClick={() => scrollToSection("system")}
                  className="w-full text-[#2D2624] px-8 py-3.5 font-medium flex items-center justify-center transition-all duration-200 ease-in-out hover:scale-[1.02] hover:bg-[rgba(45,38,36,0.1)] rounded-full font-serif"
                  style={{
                    backgroundColor: "rgba(45, 38, 36, 0.05)",
                    border: '1px solid rgba(255, 255, 255, 0.45)', // Silver outline edge
                    boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)'
                  }}
                >
                  The Framework
                </button>
              </SpotlightWrapper>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slim, elegant Trust Strip section */}
      <div className="relative z-20 border-t border-[#2D2624]/10 pt-8 pb-4 w-full mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 text-center text-[13px] uppercase tracking-[0.2em] font-semibold text-[#2D2624]/70">
          <span>90-Day Framework</span>
          <span>Works With Any Products</span>
          <span>Built Around Process, Not Products</span>
        </div>
        {/* Core Bridge Line */}
        <div className="text-center mt-4">
          <p className="font-serif italic text-xs md:text-sm text-[#2D2624]/80 tracking-wide">
            A process before products. A system before routines.
          </p>
        </div>
      </div>
    </section>
  );
}
