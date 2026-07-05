"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SpotlightWrapper from "./SpotlightWrapper";

const easeOutPremium = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutPremium },
  },
};

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 bg-[#EDEBDE] text-[#1B1716] overflow-hidden">
      
      {/* Subtle overlay styling elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 mix-blend-color-burn">
        <div className="sunlight-mesh absolute inset-[-10%] w-[120%] h-[120%]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
        
        {/* Left Column Copy Stack */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 w-full"
          >
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold leading-[1.1] tracking-tight max-w-2xl text-[#1B1716]"
            >
              You don't have to pretend the mirror doesn't matter.
            </motion.h1>

            <motion.p 
              variants={itemVariants} 
              className="text-neutral-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl"
            >
              The Complete 3-Phase Acne Reset Protocol. Everything you need for the full 90-day process.
            </motion.p>

            {/* Price Node */}
            <motion.div 
              variants={itemVariants}
              className="flex items-baseline justify-center lg:justify-start gap-2"
            >
              <span className="text-4xl sm:text-5xl font-serif font-semibold text-[#1B1716]">$97</span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500">/ One-time Access</span>
            </motion.div>

            {/* CTA Button Block */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col items-center lg:items-start w-full"
            >
              <div className="w-full sm:w-auto min-w-[280px]">
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
                    whileHover={{ scale: 1.02, backgroundColor: "#630102" }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden w-full bg-[#810100] border border-white/20 shadow-[0_0_1px_1px_rgba(255,255,255,0.15)] text-white font-semibold tracking-wider uppercase text-xs sm:text-sm py-4 px-8 rounded-full transition-all duration-300 text-center block cursor-pointer"
                  >
                    <span className="relative z-10">[ Get Instant Access ]</span>
                    <motion.div 
                      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
                      initial={{ left: "-100%" }}
                      whileHover={{ left: "150%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </motion.a>
                </SpotlightWrapper>
                <span className="text-[10px] text-neutral-500 mt-2.5 block tracking-normal normal-case w-full text-center lg:text-left px-2">
                  One payment. Instant access. 14-day feel calmer guarantee.
                </span>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Right Column Display */}
        <div className="lg:col-span-6 w-full flex items-center justify-center overflow-visible">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOutPremium }}
            className="relative w-full max-w-[500px] aspect-square lg:max-w-none lg:h-[500px]"
          >
            <Image 
              src="/assets/transformation-1.png"
              alt="Acne Reset Protocol Digital unboxing package (includes iPad layout guide, Calm Tracker, Clear Tracker, Maintenance Blueprint, and Dashboard)"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

      </div>

      {/* Trust Strip footer section */}
      <div className="relative z-10 border-t border-[#1B1716]/10 pt-8 pb-2 w-full mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4 md:gap-12 text-center lg:text-left text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#1B1716]/70">
          <span>2,100+ Women</span>
          <span>Works With Products You Own</span>
          <span>No Subscription</span>
        </div>
      </div>

    </section>
  );
}
