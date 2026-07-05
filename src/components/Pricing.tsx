"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SpotlightWrapper from "./SpotlightWrapper";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#EDEBDE] text-[#1B1716] border-b border-[#2D2624]/10 relative z-20">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500 block">
            The Complete Offering
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight leading-[1.1] text-[#1B1716]">
            Start Your Skincare Reset Today
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-xl mx-auto">
            Get instant digital access to the complete 3-phase reset protocol, guides, interactive trackers, and dashboard.
          </p>
        </div>

        {/* Re-anchored Massive Mockup Presentation */}
        <div className="relative w-full max-w-[700px] mx-auto bg-[#E5E2D2] rounded-3xl border border-[#2D2624]/10 p-6 md:p-12 shadow-sm overflow-hidden flex flex-col items-center">
          
          <div className="relative w-full aspect-[16/10] max-w-[540px] transform hover:scale-[1.02] transition-transform duration-500">
            <Image 
              src="/assets/transformation-1.png"
              alt="Acne Reset Complete Bundle package mockups"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 540px"
            />
          </div>

          <div className="mt-8 space-y-6 w-full max-w-md">
            {/* Price node */}
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl md:text-5xl font-serif font-semibold text-[#1B1716]">$97</span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500">/ Complete System</span>
            </div>

            {/* Certainty checkmarks stacked or nested */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left text-xs text-neutral-600 border-t border-[#2D2624]/10 pt-6">
              <span className="flex items-center gap-1.5">✔ Instant Access</span>
              <span className="flex items-center gap-1.5">✔ One-time payment</span>
              <span className="flex items-center gap-1.5">✔ Works with products you own</span>
              <span className="flex items-center gap-1.5">✔ Lifetime updates</span>
              <span className="col-span-2 text-center text-[10px] text-neutral-400 mt-1">✔ 2,100+ customers trust this reset</span>
            </div>

            {/* Duplicate Primary Cherry Red Checkout Button */}
            <div className="pt-2">
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
                  <span className="relative z-10">Get The Complete Protocol — $97</span>
                  <motion.div 
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
                    initial={{ left: "-100%" }}
                    whileHover={{ left: "150%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.a>
              </SpotlightWrapper>
              <span className="text-[10px] text-neutral-500 mt-2 block">
                Instant download. One-time fee. 14-day refund guarantee.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
