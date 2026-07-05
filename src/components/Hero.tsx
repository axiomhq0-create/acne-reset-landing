"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 pb-24 px-6 md:px-12 bg-[#EDEBDE] overflow-hidden z-10">
      
      {/* ATMOSPHERIC BACKGROUND SYSTEM LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Slow-Motion 5% Plasma Mesh Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#EDEBDE] via-[#F3D5CE]/30 to-[#EDEBDE] opacity-80 mix-blend-multiply animate-pulse" style={{ animationDuration: '12s' }} />
        {/* Subtle Photographic Grain Overlay */}
        <div className="absolute inset-0 bg-noise-opacity opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#EDEBDE] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: TYPOGRAPHY ANCHOR */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8 pr-4">
          <h1 className="text-6xl md:text-8xl font-serif text-[#1B1716] tracking-tight leading-[1.05] max-w-2xl font-normal select-none">
            You don't have to pretend the mirror doesn't matter.
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-800 max-w-md font-light leading-relaxed">
            This page won't tell you to love yourself first and skincare second. It's here to help with both, in the right order.
          </p>

          <div className="pt-4 w-full sm:w-auto">
            <button 
              onClick={() => scrollToSection("pricing")}
              className="w-full sm:w-auto bg-[#810100] hover:bg-[#630102] text-[#EDEBDE] font-medium tracking-wide text-base px-10 py-5 rounded-full shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 cursor-pointer"
            >
              Find Your Starting Phase
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: FULL BLEED HUMAN PORTRAIT IMAGE */}
        <div className="lg:col-span-5 w-full h-[65vh] lg:h-[80vh] relative group overflow-hidden rounded-3xl">
          <motion.img 
            initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            src="/ChatGPT Image Jul 1, 2026, 01_08_27 PM.png" 
            className="w-full h-full object-cover object-center transform transition-transform duration-[10s] ease-out group-hover:scale-105 will-change-transform"
            alt="Vulnerability Portrait Presentation"
          />
          {/* Frosted Glass Floating Label Accent */}
          <div className="absolute bottom-6 left-6 bg-white/30 backdrop-blur-[12px] border border-white/40 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#1B1716] shadow-sm">
            Works with products you own
          </div>
        </div>

      </div>

    </section>
  );
}
