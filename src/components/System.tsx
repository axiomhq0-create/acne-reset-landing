"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const easeOutPremium = [0.16, 1, 0.3, 1] as const;

const strokeVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { delay: 0.25, duration: 0.45, ease: easeOutPremium },
  },
};

const rectVariants = {
  hidden: { width: 0 },
  visible: { 
    width: 16,
    transition: { delay: 0.25, duration: 0.45, ease: easeOutPremium },
  },
};

const solidCircleVariants = {
  hidden: { scale: 0.95, opacity: 0.3 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.25, duration: 0.45, ease: easeOutPremium },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 0.35, 
    scale: 1.05, 
    transition: { delay: 0.25, duration: 0.5, ease: easeOutPremium },
  },
};

const scrollAnimateProps = {
  initial: { opacity: 0, transform: "translate3d(0, 10px, 0)" },
  whileInView: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.45, ease: easeOutPremium },
};

export default function System() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const phases = [
    {
      id: "phase-01",
      phaseNum: "Phase 01",
      days: "Days 1–21",
      title: "CALM",
      description: "First, your skin has to stop fighting you. Nothing gets treated here — it gets stabilized, so treatment has something to work with later.",
      image: "/Reduce_the_intensity_of_the_202606261417.jpeg",
      icon: (
        <svg viewBox="0 0 40 40" className="w-12 h-12 text-[#2D2624]" suppressHydrationWarning>
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
      )
    },
    {
      id: "phase-02",
      phaseNum: "Phase 02",
      days: "Days 22–66",
      title: "CLEAR",
      description: "Only once it's stable does treatment actually work. One consistent approach, given enough time to do what it was supposed to do in the first place.",
      image: "/The_background_is_light_and_202606261423.jpeg",
      icon: (
        <svg viewBox="0 0 40 40" className="w-12 h-12 text-[#2D2624]" suppressHydrationWarning>
          <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none" suppressHydrationWarning />
          <defs>
            <clipPath id="half-clip-system">
              <motion.rect x="4" y="4" height="32" variants={rectVariants} />
            </clipPath>
          </defs>
          <circle cx="20" cy="20" r="16" fill="currentColor" clipPath="url(#half-clip-system)" suppressHydrationWarning />
        </svg>
      )
    },
    {
      id: "phase-03",
      phaseNum: "Phase 03",
      days: "Day 67 Onward",
      title: "CLEF",
      description: "Once it's working, the only thing left to lose is consistency. Not a new routine — protection for the one that already proved itself.",
      image: "/Remove_the_black_dress_and_202606261411.jpeg",
      icon: (
        <svg viewBox="0 0 40 40" className="w-12 h-12 text-[#2D2624]" suppressHydrationWarning>
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
      )
    }
  ];

  return (
    <section id="system" className="py-32 bg-[#EBC8BE] relative">
      {/* Soft editorial top transition fade (eliminates hard cut top edge border) */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

      {/* Background Image - Desktop Only */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0">
        <Image 
          src="/assets/hero-portrait.jpg" 
          alt="Skincare sequence framework visual representation"
          fill
          className="object-cover animate-none object-center"
          sizes="100vw"
          style={{ filter: "none", WebkitFilter: "none" }}
        />
      </div>

      {/* Branded Blush Overlay Tint for text contrast - Desktop Only */}
      <div className="hidden md:block absolute inset-0 bg-[#EBC8BE]/80 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col">
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

        {/* Stacking Cards Container */}
        <div ref={containerRef} className="relative w-full max-w-xl mx-auto md:max-w-2xl px-4 flex flex-col">
          {phases.map((phase, index) => {
            const offsetTop = 120 + index * 25;
            
            // Calculate scale transition based on viewport scroll progress
            const startSegment = index / phases.length;
            const endSegment = (index + 1) / phases.length;
            
            const scale = useTransform(
              scrollYProgress,
              [startSegment, endSegment],
              [1, 0.92 + (phases.length - index - 1) * 0.015]
            );

            return (
              <motion.div
                key={phase.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                style={{
                  position: 'sticky',
                  top: `${offsetTop}px`,
                  scale,
                  zIndex: index + 1,
                  marginBottom: index < phases.length - 1 ? '10vh' : '0vh',
                  willChange: "transform, opacity",
                }}
                className="w-full origin-top"
              >
                <div className="!h-auto !p-6 md:!p-8 max-w-[90vw] md:max-w-full bg-[#fcfaf7] border border-stone-200 rounded-[30px] shadow-[0_0_30px_rgba(0,0,0,0.05)]">
                  <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-8 overflow-hidden h-full">
                    {/* Left Column: Text block and sequence animations */}
                    <div className="w-full md:w-1/2 flex flex-col justify-between text-left">
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <div className="flex flex-col gap-4">
                            {phase.icon}
                            <div className="bg-bloomDeep/20 text-[#1A1B12] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider w-max">
                              {phase.phaseNum}
                            </div>
                          </div>
                          <span className="font-serif italic text-2xl md:text-3xl text-bloomDeep">{phase.days}</span>
                        </div>
                        <h3 className="text-2xl font-serif font-semibold text-[#1A1B12] mb-4">{phase.title}</h3>
                        <p className="text-[#6B6E68] text-sm md:text-base leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                    {/* Right Column: Image Asset */}
                    <div className="relative w-full md:w-1/2 min-h-[220px] md:min-h-[300px] overflow-hidden rounded-[20px] shrink-0">
                      <Image
                        src={phase.image}
                        alt={`${phase.title} phase visual representation`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

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
          <p className="text-[#6B6E68] text-sm md:text-base max-w-md mx-auto leading-relaxed mb-6">
            Each one only works because of the one before it.
          </p>
          <button 
            onClick={() => {
              const el = document.getElementById("checkout");
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-full font-semibold uppercase tracking-wider text-xs border border-[#2D2624] text-[#2D2624] bg-transparent hover:bg-[#2D2624]/5 transition-colors cursor-pointer"
          >
            See Which Phase Is Yours
          </button>
        </motion.div>
      </div>
    </section>
  );
}
