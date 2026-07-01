"use client";

import React from "react";
import { motion } from "framer-motion";

const easeOutPremium = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Stagger columns left-to-right
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    transform: "translate3d(0, 15px, 0)" // GPU matrix translation and Apple-style lift-up offset
  },
  visible: {
    opacity: 1,
    transform: "translate3d(0, 0, 0)", // GPU matrix translation
    transition: {
      duration: 0.45, // Restrained animation timing
      ease: easeOutPremium,
    },
  },
};

export default function Story() {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Headline Architecture */}
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0, 10px, 0)" }}
          whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.45, ease: easeOutPremium }}
          className="max-w-3xl mx-auto mb-20"
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#2D2624] font-semibold tracking-tight leading-[1.15]">
            Why this works when everything else didn't.
          </h2>
        </motion.div>

        {/* Three-Column Credibility Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }} // Bi-directional scroll wrapper
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Column 01: Skin Recovery */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-start"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Crisp, single-stroke vector shield icon */}
            <div className="w-12 h-12 rounded-full bg-[#2D2624]/5 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#2D2624]" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" suppressHydrationWarning>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" suppressHydrationWarning />
                <path d="M12 6v11M8 10h8" suppressHydrationWarning />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-[#2D2624] mb-3">
              Built around skin recovery.
            </h3>
            <p className="text-[#6B6E68] text-sm md:text-base leading-relaxed">
              We stabilize the lipid barrier first so treatment can actually succeed, rather than triggering active defense reactions.
            </p>
          </motion.div>

          {/* Column 02: Right Order */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-start"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Crisp, single-stroke vector sequence path icon */}
            <div className="w-12 h-12 rounded-full bg-[#2D2624]/5 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#2D2624]" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" suppressHydrationWarning>
                <path d="M2 18h4l4-5h4l4-5h4" suppressHydrationWarning />
                <circle cx="4" cy="18" r="1.5" fill="none" suppressHydrationWarning />
                <circle cx="12" cy="13" r="1.5" fill="none" suppressHydrationWarning />
                <circle cx="20" cy="8" r="1.5" fill="currentColor" suppressHydrationWarning />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-[#2D2624] mb-3">
              Uses products in the right order.
            </h3>
            <p className="text-[#6B6E68] text-sm md:text-base leading-relaxed">
              Every handoff is timed precisely. The Calm Phase prepares cells to receive the active elements of the Clear Phase.
            </p>
          </motion.div>

          {/* Column 03: Relapse Prevention */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-start"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Crisp, single-stroke vector infinity loop icon */}
            <div className="w-12 h-12 rounded-full bg-[#2D2624]/5 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#2D2624]" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" suppressHydrationWarning>
                <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 100 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 100-8c-2 0-4 1.33-6 4z" suppressHydrationWarning />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-[#2D2624] mb-3">
              Designed to prevent relapse.
            </h3>
            <p className="text-[#6B6E68] text-sm md:text-base leading-relaxed">
              We build systems, not routines. The Maintain Phase locks in clarity and adjusts automatically to prevent regression.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
