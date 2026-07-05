"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SpotlightWrapper from "./SpotlightWrapper";

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
    <section className="relative w-full min-h-screen flex items-center px-6 md:px-12 py-24 overflow-hidden bg-[#EDEBDE] block opacity-100 visible z-20">
      
      {/* Layer 0 & 1 & 2: The Absolute Background Portrait & Cinematic Overlay Stack */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/ChatGPT Image Jul 1, 2026, 01_08_27 PM.png" 
          alt="Transformation Portrait" 
          fill
          className="object-cover object-center lg:object-[center_35%]"
          priority
          sizes="100vw"
        />
        {/* Grey Plasma / Vignette Overlay Stack */}
        <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply pointer-events-none" /> {/* Plasma hint */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Layer 3: Interactive Text Layer Bounding Box */}
      <div className="relative z-10 block opacity-100 visible max-w-[1280px] mx-auto w-full flex flex-col items-start text-left space-y-8">

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif text-[#1A1612] tracking-tight leading-[1.1] max-w-3xl font-medium drop-shadow-sm"
        >
          You don't have to pretend the mirror doesn't matter.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-neutral-800 max-w-xl font-light leading-relaxed"
        >
          This page won't tell you to love yourself first and skincare second. It's here to help with both, in the right order.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <div className="w-full sm:w-auto">
            <SpotlightWrapper 
              className="rounded-full w-full overflow-hidden shadow-sm"
              spotlightColor="rgba(255, 255, 255, 0.45)"
            >
              <a 
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("pricing");
                }}
                className="relative overflow-hidden w-full bg-[#810100] hover:bg-[#630102] transition-transform hover:-translate-y-0.5 shadow-lg text-white rounded-full py-4 px-8 text-center font-medium tracking-wide block cursor-pointer"
              >
                <span className="relative z-10">Find Your Starting Phase</span>
              </a>
            </SpotlightWrapper>
          </div>

          <a 
            href="#protocol"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("protocol");
            }}
            className="w-full sm:w-auto border border-[#1A1612]/30 hover:border-[#1A1612] text-[#1A1612] bg-[#EDEBDE]/40 backdrop-blur-sm rounded-full py-4 px-8 text-center font-medium tracking-wide block transition-colors cursor-pointer"
          >
            The Framework
          </a>
        </motion.div>

        {/* Italic Footnote Block */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-2"
        >
          <p className="text-xs italic text-neutral-800 font-serif">
            "A process before products. A system before routines."
          </p>
        </motion.div>

        {/* Divider line */}
        <div className="w-full max-w-xl border-t border-[#1A1612]/15 pt-4" />

        {/* Footer Trust Matrix */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[9px] sm:text-[10px] tracking-[0.25em] font-semibold text-[#1B1716]/80 leading-normal uppercase max-w-2xl"
        >
          90-DAY FRAMEWORK    &bull;    WORKS WITH ANY PRODUCTS    &bull;    BUILT AROUND PROCESS, NOT PRODUCTS
        </motion.div>

      </div>

    </section>
  );
}
