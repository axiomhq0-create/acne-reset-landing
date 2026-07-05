"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SpotlightWrapper from "./SpotlightWrapper";

export default function FinalPurchase() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#EDEBDE] text-[#1B1716] border-b border-[#2D2624]/10 relative z-20">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        
        {/* Bold Serif Resolution Header */}
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight leading-[1.2] text-[#1B1716]">
            No restarting. No guessing. <br className="hidden md:inline" /> No building another Sunday routine. <br /> Just the next step.
          </h2>
        </div>

        {/* Large high-end system composition canvas */}
        <div className="relative w-full max-w-[700px] mx-auto bg-[#E5E2D2] rounded-3xl border border-[#2D2624]/10 p-8 md:p-12 shadow-sm overflow-hidden flex flex-col items-center gap-8">
          
          <div className="relative w-full aspect-[16/10] max-w-[480px] transform hover:scale-[1.02] transition-transform duration-500">
            <Image 
              src="/assets/transformation-1.png"
              alt="Acne Reset Complete Bundle package mockups photoshoot"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>

          <div className="space-y-6 w-full max-w-md">
            
            {/* Price node */}
            <div className="text-6xl md:text-7xl font-serif font-bold text-[#1B1716] tracking-tight">
              $97
            </div>

            {/* Massive Cherry Red CTA Button */}
            <div className="pt-2">
              <SpotlightWrapper 
                className="rounded-full w-full overflow-hidden shadow-md"
                spotlightColor="rgba(255, 255, 255, 0.45)"
              >
                <motion.a 
                  href="https://whop.com/checkout/plan_rDsgEaLiNqGrH"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, backgroundColor: "#630102" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden w-full bg-[#810100] border border-white/20 shadow-[0_0_1px_1px_rgba(255,255,255,0.15)] text-white font-semibold tracking-wider uppercase text-sm sm:text-base py-5 px-8 rounded-full transition-all duration-300 text-center block cursor-pointer"
                >
                  <span className="relative z-10">[ GET THE COMPLETE PROTOCOL ]</span>
                  <motion.div 
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
                    initial={{ left: "-100%" }}
                    whileHover={{ left: "150%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.a>
              </SpotlightWrapper>
            </div>

            {/* Support Text */}
            <p className="text-[11px] sm:text-xs text-neutral-500 leading-normal">
              Everything included. One payment. Instant access. 14-day feel calmer guarantee.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
