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
      staggerChildren: 0.08, // Snappy card stagger
    },
  },
};

const cardVariants = {
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

const strokeVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { delay: 0.25, duration: 0.45, ease: easeOutPremium }, // Triggers precisely as parent settles
  },
};

const rectVariants = {
  hidden: { width: 0 },
  visible: { 
    width: 16,
    transition: { delay: 0.25, duration: 0.45, ease: easeOutPremium }, // Triggers precisely as parent settles
  },
};

const solidCircleVariants = {
  hidden: { scale: 0.95, opacity: 0.3 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.25, duration: 0.45, ease: easeOutPremium }, // Triggers precisely as parent settles
  },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 0.35, 
    scale: 1.05, 
    transition: { delay: 0.25, duration: 0.5, ease: easeOutPremium }, // Triggers precisely as parent settles
  },
};

const scrollAnimateProps = {
  initial: { opacity: 0, transform: "translate3d(0, 10px, 0)" },
  whileInView: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  viewport: { once: false, amount: 0.15 }, // Bi-directional scroll config
  transition: { duration: 0.45, ease: easeOutPremium },
};

export default function System() {
  return (
    <>
      {/* SYSTEM SECTION (The Framework - with full-bleed image backdrop) */}
      <section id="system" className="py-32 bg-[#EBC8BE] relative overflow-hidden">
        {/* Soft editorial top transition fade (eliminates hard cut top edge border) */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

        {/* Background Image - Full Bleed with zero filter/blur (z-0) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/assets/hero-portrait.jpg" 
            alt="Skincare sequence framework visual representation"
            fill
            className="object-cover animate-none"
            sizes="100vw"
            style={{ filter: "none", WebkitFilter: "none" }}
          />
        </div>

        {/* Branded Blush Overlay Tint for text contrast (z-10) */}
        <div className="absolute inset-0 bg-[#EBC8BE]/80 z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          {/* Header */}
          <motion.div 
            {...scrollAnimateProps}
            className="text-center max-w-3xl mx-auto mb-20"
            style={{ willChange: "transform, opacity" }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-[#1A1B12] font-semibold tracking-tight leading-[1.1] mb-6">
              The Order Was Always The Missing Piece.
            </h2>
            <p className="text-[#6B6E68] text-base md:text-lg leading-relaxed">
              Most people start with treatment because it feels like progress. But skin that's still inflamed isn't ready to respond to anything yet — it just fights back. That's the cycle you've probably already lived.
            </p>
            <p className="text-[#1A1B12] font-medium mt-4">
              Here is what actually has to happen, in order:
            </p>
          </motion.div>

          {/* 3-Column Grid with Staggered Framer Motion Animations */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }} // Bi-directional scroll wrapper
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Card 1: CALM */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(45,38,36,0.04)" }}
              transition={{ duration: 0.2 }}
              className="h-full rounded-[10px]"
              style={{ 
                willChange: "transform, opacity",
                backgroundColor: 'rgba(250, 247, 244, 0.83)', // Exact high-density glass layer
                backdropFilter: 'blur(18px)', // Cinematic backdrop filter
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255, 255, 255, 0.45)', // Premium silver micro-stroke outline
                boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)'
              }}
            >
              <SpotlightWrapper 
                className="rounded-[10px] h-full"
                spotlightColor="rgba(255, 255, 255, 0.25)"
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col gap-4">
                        {/* Branded Sequence Icon: Hollow Circle with Path Draw Animation */}
                        <svg viewBox="0 0 40 40" className="w-12 h-12 text-bloomDeep" suppressHydrationWarning>
                          <motion.circle 
                            cx="20" 
                            cy="20" 
                            r="16" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            fill="none" 
                            variants={strokeVariants}
                            suppressHydrationWarning
                          />
                        </svg>
                        <div className="bg-bloomDeep/20 text-[#1A1B12] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider w-max">
                          Phase 01
                        </div>
                      </div>
                      <span className="font-serif italic text-3xl text-bloomDeep">Days 1–21</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-[#1A1B12] mb-4">CALM</h3>
                    <p className="text-[#6B6E68] text-sm md:text-base leading-relaxed">
                      First, your skin has to stop fighting you. Nothing gets treated here — it gets stabilized, so treatment has something to work with later.
                    </p>
                  </div>
                </div>
              </SpotlightWrapper>
            </motion.div>

            {/* Card 2: CLEAR */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(45,38,36,0.04)" }}
              transition={{ duration: 0.2 }}
              className="h-full rounded-[10px]"
              style={{ 
                willChange: "transform, opacity",
                backgroundColor: 'rgba(250, 247, 244, 0.83)', // Exact high-density glass layer
                backdropFilter: 'blur(18px)', // Cinematic backdrop filter
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255, 255, 255, 0.45)', // Premium silver micro-stroke outline
                boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)'
              }}
            >
              <SpotlightWrapper 
                className="rounded-[10px] h-full"
                spotlightColor="rgba(255, 255, 255, 0.25)"
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col gap-4">
                        {/* Branded Sequence Icon: Half-Filled Circle with ClipPath Slide Animation */}
                        <svg viewBox="0 0 40 40" className="w-12 h-12 text-bloomDeep" suppressHydrationWarning>
                          <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none" suppressHydrationWarning />
                          <defs>
                            <clipPath id="half-clip">
                              <motion.rect x="4" y="4" height="32" variants={rectVariants} />
                            </clipPath>
                          </defs>
                          <circle cx="20" cy="20" r="16" fill="currentColor" clipPath="url(#half-clip)" suppressHydrationWarning />
                        </svg>
                        <div className="bg-bloomDeep/20 text-[#1A1B12] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider w-max">
                          Phase 02
                        </div>
                      </div>
                      <span className="font-serif italic text-3xl text-bloomDeep">Days 22–66</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-[#1A1B12] mb-4">CLEAR</h3>
                    <p className="text-[#6B6E68] text-sm md:text-base leading-relaxed">
                      Only once it's stable does treatment actually work. One consistent approach, given enough time to do what it was supposed to do in the first place.
                    </p>
                  </div>
                </div>
              </SpotlightWrapper>
            </motion.div>

            {/* Card 3: MAINTAIN */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(45,38,36,0.04)" }}
              transition={{ duration: 0.2 }}
              className="h-full rounded-[10px]"
              style={{ 
                willChange: "transform, opacity",
                backgroundColor: 'rgba(250, 247, 244, 0.83)', // Exact high-density glass layer
                backdropFilter: 'blur(18px)', // Cinematic backdrop filter
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255, 255, 255, 0.45)', // Premium silver micro-stroke outline
                boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)'
              }}
            >
              <SpotlightWrapper 
                className="rounded-[10px] h-full"
                spotlightColor="rgba(255, 255, 255, 0.25)"
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col gap-4">
                        {/* Branded Sequence Icon: Solid Circle with Scale & Micro-Glow Animation */}
                        <svg viewBox="0 0 40 40" className="w-12 h-12 text-bloomDeep" suppressHydrationWarning>
                          <motion.circle 
                            cx="20" 
                            cy="20" 
                            r="16" 
                            fill="currentColor" 
                            className="blur-[4px]"
                            variants={glowVariants}
                            suppressHydrationWarning
                          />
                          <motion.circle 
                            cx="20" 
                            cy="20" 
                            r="16" 
                            fill="currentColor" 
                            variants={solidCircleVariants}
                            suppressHydrationWarning
                          />
                        </svg>
                        <div className="bg-bloomDeep/20 text-[#1A1B12] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider w-max">
                          Phase 03
                        </div>
                      </div>
                      <span className="font-serif italic text-3xl text-bloomDeep">Day 67 Onward</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-[#1A1B12] mb-4">MAINTAIN</h3>
                    <p className="text-[#6B6E68] text-sm md:text-base leading-relaxed">
                      Once it's working, the only thing left to lose is consistency. Not a new routine — protection for the one that already proved itself.
                    </p>
                  </div>
                </div>
              </SpotlightWrapper>
            </motion.div>
          </motion.div>

          {/* Footer Summary Closing */}
          <motion.div 
            initial={{ opacity: 0, transform: "translate3d(0, 10px, 0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.45, ease: easeOutPremium }}
            className="text-center mt-20 flex flex-col items-center gap-2"
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-[#2D2624] text-xl md:text-2xl font-serif italic">
              Three phases. One sequence.
            </p>
            <p className="text-[#2D2624]/80 text-sm md:text-base font-serif mb-6">
              Each one only works because of the one before it.
            </p>
            <SpotlightWrapper 
              className="rounded-full overflow-hidden shrink-0 shadow-sm"
              spotlightColor="rgba(255, 255, 255, 0.45)"
            >
              <button 
                onClick={() => {
                  const pricingEl = document.getElementById("pricing");
                  if (pricingEl) {
                    pricingEl.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-[#2D2624] text-[#FAF7F4] px-8 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] hover:bg-[#413835] font-serif"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.45)', // Razor-sharp silver boundary seam
                  boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)'
                }}
              >
                See Which Phase Is Yours
              </button>
            </SpotlightWrapper>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL BREAK */}
      <section className="py-40 flex justify-center text-center bg-[#FBF9F6] border-t border-b border-[#1A1B12]/5 relative">
        <div className="absolute inset-0 bg-bloomDeep/5 pointer-events-none" />
        <motion.div 
          {...scrollAnimateProps}
          className="max-w-4xl mx-auto px-6 relative"
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-4xl md:text-6xl font-serif italic text-[#1A1B12] leading-[1.2]">
            "Products solve problems. Processes prevent them."
          </h2>
        </motion.div>
      </section>
    </>
  );
}
