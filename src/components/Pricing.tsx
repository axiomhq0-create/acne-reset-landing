"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightWrapper from "./SpotlightWrapper";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#EDEBDE] text-[#1B1716] border-b border-[#2D2624]/10 relative z-20">
      <div className="max-w-xl mx-auto px-6 text-center space-y-8">
        
        {/* Giant Price Nod */}
        <div className="space-y-2">
          <div className="text-6xl md:text-7xl font-mono font-bold text-[#810100] tracking-tight">
            $97
          </div>
          <p className="text-sm uppercase tracking-[0.25em] font-semibold text-neutral-500">
            One payment. Lifetime access.
          </p>
        </div>

        {/* Massive Full-width CTA Button */}
        <div className="w-full">
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
          <span className="text-[11px] text-neutral-500 mt-3 block">
            Immediate checkout anchor. 14-day feel calmer guarantee included.
          </span>
        </div>

        {/* Strategic Decoy Option Sub-links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 border-t border-[#2D2624]/10">
          <a 
            href="https://whop.com/checkout/plan_T4jvV63GgLVVH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-neutral-500 hover:text-[#810100] transition-colors cursor-pointer"
          >
            Calm Phase Only — $37
          </a>
          <span className="hidden sm:inline text-neutral-300">|</span>
          <a 
            href="https://whop.com/checkout/plan_C7Lm7D71Z9NeR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-neutral-500 hover:text-[#810100] transition-colors cursor-pointer"
          >
            Maintenance Roadmap — $47
          </a>
        </div>

      </div>
    </section>
  );
}
