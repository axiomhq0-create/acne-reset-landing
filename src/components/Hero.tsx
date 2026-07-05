"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SpotlightWrapper from "./SpotlightWrapper";

const easeOutPremium = [0.16, 1, 0.3, 1] as const;

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
      
      {/* Sunlight studio subtle mesh layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30 mix-blend-color-burn">
        <div className="sunlight-mesh absolute inset-[-10%] w-[120%] h-[120%]" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto my-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center py-8">
        
        {/* Left Column Copy Stack */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <div className="space-y-6 w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-[1.1] tracking-tight max-w-xl text-[#1B1716]">
              You don't have to pretend the mirror doesn't matter.
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-md">
              The Complete 3-Phase Acne Reset Protocol. Everything you need for the full 90-day process.
            </p>

            {/* Price Anchor */}
            <div className="flex items-baseline justify-center lg:justify-start gap-2">
              <span className="text-4xl sm:text-5xl font-serif font-semibold text-[#1B1716]">$97</span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400">/ Complete System</span>
            </div>

            {/* Primary Button */}
            <div className="flex flex-col items-center lg:items-start w-full">
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
                    className="relative overflow-hidden w-full bg-[#810100] hover:bg-[#630102] transition-transform hover:-translate-y-0.5 shadow-lg text-white rounded-full py-4 px-8 text-center font-medium tracking-wide block w-full sm:w-auto cursor-pointer"
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
              </div>
            </div>

            {/* Trust Row */}
            <div className="pt-4 text-[9px] sm:text-[10px] tracking-[0.25em] font-semibold text-[#1B1716]/60 leading-normal uppercase">
              2,100+ WOMEN • WORKS WITH PRODUCTS YOU OWN • ONE PAYMENT • LIFETIME ACCESS
            </div>

          </div>
        </div>

        {/* Right Column Display: Sunlight studio shoot with 2px floating loop */}
        <div className="w-full flex items-center justify-center lg:justify-end overflow-visible">
          <motion.div 
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-[560px] aspect-square bg-[#FAF8F5]/30 rounded-3xl p-4 shadow-sm border border-white/40 flex items-center justify-center overflow-hidden"
          >
            <Image 
              src="/assets/transformation-1.png"
              alt="Acne Reset Protocol Digital unboxing package (tablet, physical guidebooks, trackers, ceramic bowl, soft fabric shadows)"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </motion.div>
        </div>

      </div>

    </section>
  );
}
