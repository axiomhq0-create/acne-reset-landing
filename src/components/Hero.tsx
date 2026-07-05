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
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 bg-[#EDEBDE] text-[#1B1716] overflow-hidden z-20">
      
      {/* Sunlight studio subtle overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30 mix-blend-color-burn">
        <div className="sunlight-mesh absolute inset-[-10%] w-[120%] h-[120%]" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto my-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center py-8">
        
        {/* Left Column Copy Stack */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <div className="space-y-6 w-full">
            
            {/* Capsule Pill Bar */}
            <div className="inline-flex items-center justify-center lg:justify-start bg-[#F3D5CE]/50 border border-[#F3D5CE] px-4 py-2 rounded-full text-[10px] md:text-xs font-semibold tracking-wider text-[#810100] uppercase mb-4">
              Calm / 21 Days  &rarr;  Clear / 45 Days  &rarr;  Maintain / Ongoing
            </div>

            {/* Headline with 25% upscale */}
            <h1 className="text-5xl md:text-7xl font-serif text-[#1A1612] tracking-tight leading-[1.1] max-w-3xl font-medium mb-8">
              You don't have to pretend the mirror doesn't matter.
            </h1>

            {/* Subheadline from reference text */}
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-lg pb-4">
              This page won't tell you to love yourself first and skincare second. It's here to help with both, in the right order.
            </p>

            {/* Button Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <div className="w-full sm:w-auto">
                <SpotlightWrapper 
                  className="rounded-full w-full overflow-hidden shadow-sm"
                  spotlightColor="rgba(255, 255, 255, 0.45)"
                >
                  <motion.a 
                    href="#pricing"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("pricing");
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden w-full bg-[#810100] hover:bg-[#630102] transition-transform hover:-translate-y-0.5 shadow-lg text-white rounded-full py-4 px-8 text-center font-medium tracking-wide block cursor-pointer"
                  >
                    <span className="relative z-10">Find Your Starting Phase</span>
                    <motion.div 
                      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
                      initial={{ left: "-100%" }}
                      whileHover={{ left: "150%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </motion.a>
                </SpotlightWrapper>
              </div>

              <motion.a 
                href="#protocol"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("protocol");
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto border border-[#1A1612]/30 hover:border-[#1A1612] text-[#1A1612] rounded-full py-4 px-8 text-center font-medium tracking-wide block transition-colors cursor-pointer"
              >
                The Framework
              </motion.a>
            </div>

            {/* Footnote Block */}
            <div className="pt-2">
              <p className="text-xs italic text-neutral-500 font-serif">
                "A process before products. A system before routines."
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-[#1A1612]/10 my-4" />

            {/* Trust Row Matrix Text */}
            <div className="text-[9px] sm:text-[10px] tracking-[0.25em] font-semibold text-[#1B1716]/60 leading-normal uppercase">
              90-DAY FRAMEWORK    &bull;    WORKS WITH ANY PRODUCTS    &bull;    BUILT AROUND PROCESS, NOT PRODUCTS
            </div>

          </div>
        </div>

        {/* Right Column Display: Natural Sunlight Portrait with Cinematic Poster overlays */}
        <div className="w-full flex items-center justify-center lg:justify-end overflow-visible">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[500px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-white/25"
          >
            {/* The natural sunlight portrait */}
            <Image 
              src="/ChatGPT Image Jul 1, 2026, 01_08_27 PM.png"
              alt="Protagonist woman in soft natural morning sunlight looking directly into camera with real skin texture and vulnerability"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 500px"
            />

            {/* 1. Primary Mesh Layer: dynamic grey plasma overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-500/10 via-transparent to-stone-400/10 mix-blend-overlay pointer-events-none" />

            {/* 2. Movie-Poster Lighting Frame */}
            {/* Top gradient stretching down */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/60 via-black/10 to-transparent pointer-events-none" />

            {/* Bottom gradient rising up */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>

      </div>

    </section>
  );
}
