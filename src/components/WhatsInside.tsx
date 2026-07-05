"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SpotlightWrapper from "./SpotlightWrapper";

export default function WhatsInside() {
  return (
    <section className="py-16 md:py-24 bg-[#EDEBDE] text-[#1B1716] border-b border-[#2D2624]/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title / Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6E68] mb-4 block">
            The Deliverables
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight leading-[1.1] text-[#1B1716]">
            What's Inside the Protocol
          </h2>
          <p className="text-[#6B6E68] text-base md:text-lg mt-4">
            Everything you need to calm, clear, and maintain your skin in one comprehensive, digital package.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Visual Asset Side */}
          <div className="relative aspect-square w-full max-w-[460px] mx-auto bg-[#EDEBDE] rounded-3xl border border-[#2D2624]/10 shadow-inner p-4 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full">
              <Image 
                src="/assets/transformation-1.png"
                alt="Acne Reset Protocol Digital Mockups flat-lay"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
            
            {/* Ambient design accents */}
            <div className="absolute top-4 right-4 bg-[#EDEBDE] border border-[#2D2624]/10 p-2 rounded-lg text-left shadow-sm max-w-[120px]">
              <span className="text-[7px] uppercase font-bold text-[#810100] block mb-0.5">Includes</span>
              <h4 className="text-[9px] font-serif font-semibold leading-tight text-[#1B1716]">Interactive Trackers & Guides</h4>
            </div>
          </div>

          {/* Text/List Side */}
          <div className="flex flex-col justify-between h-full space-y-8 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Left List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#810100] font-bold">✦</span>
                  <span className="text-sm md:text-base text-[#1B1716] font-medium">The 3-Phase Acne Reset Protocol (main guide)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#810100] font-bold">✦</span>
                  <span className="text-sm md:text-base text-[#1B1716] font-medium">21-Day Calm Tracker</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#810100] font-bold">✦</span>
                  <span className="text-sm md:text-base text-[#1B1716] font-medium">45-Day Clear Tracker</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#810100] font-bold">✦</span>
                  <span className="text-sm md:text-base text-[#1B1716] font-medium">90-Day Transformation Dashboard</span>
                </div>
              </div>

              {/* Right List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#810100] font-bold">✦</span>
                  <span className="text-sm md:text-base text-[#1B1716] font-medium">Product Selection Guide</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#810100] font-bold">✦</span>
                  <span className="text-sm md:text-base text-[#1B1716] font-medium">Calm Phase Product Guide</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#810100] font-bold">✦</span>
                  <span className="text-sm md:text-base text-[#1B1716] font-medium">Maintenance Blueprint</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#810100] font-bold">✦</span>
                  <span className="text-sm md:text-base text-[#1B1716] font-medium">Lifetime Updates</span>
                </div>
              </div>
            </div>

            {/* Repeat CTA Button */}
            <div className="pt-4 max-w-sm">
              <SpotlightWrapper 
                className="rounded-full w-full overflow-hidden shadow-sm"
                spotlightColor="rgba(255, 255, 255, 0.45)"
              >
                <motion.a 
                  href="https://whop.com/checkout/plan_rDsgEaLiNqGrH"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, backgroundColor: "#630102" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden w-full bg-[#810100] border border-white/20 shadow-[0_0_1px_1px_rgba(255,255,255,0.15)] text-white font-semibold tracking-wider uppercase text-xs sm:text-sm py-4 px-6 rounded-full transition-all duration-300 text-center block cursor-pointer"
                >
                  <span className="relative z-10">Get Everything — $97</span>
                  <motion.div 
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
                    initial={{ left: "-100%" }}
                    whileHover={{ left: "150%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.a>
              </SpotlightWrapper>

              {/* Certainty Checkmarks */}
              <div className="flex flex-wrap items-center justify-start gap-x-3 gap-y-1 mt-4 text-[10px] sm:text-xs text-neutral-500 font-medium">
                <span className="flex items-center gap-1">✔ Instant Access</span>
                <span className="flex items-center gap-1">✔ One-time payment</span>
                <span className="flex items-center gap-1">✔ Works with products you own</span>
                <span className="flex items-center gap-1">✔ Lifetime updates</span>
                <span className="flex items-center gap-1">✔ 2,100+ customers</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
