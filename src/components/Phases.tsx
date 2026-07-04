"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

export default function Phases() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Spring physics settings to prevent layout snapping
  const springConfig = { stiffness: 45, damping: 15, mass: 0.8 };

  // Card 1 (The Calm Phase): Active at 0.0, scales/dims at 0.35
  const rawScale0 = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 0.95, 0.95]);
  const scale0 = useSpring(rawScale0, springConfig);
  const rawY0 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y0 = useSpring(rawY0, springConfig);
  const rawOpacity0 = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0.95]);
  const opacity0 = useSpring(rawOpacity0, springConfig);

  // Card 2 (The Clear Phase): Starts entry at 0.25, locked/holding from 0.35 to 0.65, exit at 0.65
  const rawScale1 = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65, 0.75, 1], [1, 1, 1, 1, 0.95, 0.95]);
  const scale1 = useSpring(rawScale1, springConfig);
  const rawY1 = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65, 0.75, 1], [450, 450, 0, 0, 0, 0]);
  const y1 = useSpring(rawY1, springConfig);
  const rawOpacity1 = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65, 0.75, 1], [0, 0, 1, 1, 0.95, 0.95]);
  const opacity1 = useSpring(rawOpacity1, springConfig);

  // Card 3 (The Maintain Phase): Starts entry at 0.55, locked/focus at 0.80 to the end
  const rawScale2 = useTransform(scrollYProgress, [0, 0.55, 0.8, 1], [1, 1, 1, 1]);
  const scale2 = useSpring(rawScale2, springConfig);
  const rawY2 = useTransform(scrollYProgress, [0, 0.55, 0.8, 1], [900, 900, 0, 0]);
  const y2 = useSpring(rawY2, springConfig);
  const rawOpacity2 = useTransform(scrollYProgress, [0, 0.55, 0.8, 1], [0, 0, 1, 1]);
  const opacity2 = useSpring(rawOpacity2, springConfig);

  return (
    <>
      <section id="system" className="relative bg-[#EBC8BE] overflow-visible py-32">
      {/* Soft editorial top transition fade (eliminates hard cut top edge border) */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

      {/* Background Blended Plasma Mesh Overlay Tint - mirrors Hero style */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80 md:opacity-75 mix-blend-color-burn md:mix-blend-soft-light">
        <div className="sunlight-mesh absolute inset-[-10%] w-[120%] h-[120%]" />
      </div>

      {/* Header Info Block */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 pb-16 flex flex-col items-center">
        <motion.div 
          {...scrollAnimateProps}
          className="text-center max-w-3xl mx-auto"
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A1B12] font-semibold tracking-tight leading-[1.1] mb-6">
            The Order Was Always The Missing Piece.
          </h2>
          <p className="text-[#6B6E68] text-base md:text-lg leading-relaxed">
            Most people start with treatment because it feels like progress. But skin that is still inflamed isn't ready to respond to anything yet, it just fights back. That's the cycle you've probably already lived.
          </p>
          <p className="text-[#1A1B12] font-medium mt-4">
            Here is what actually has to happen, in order:
          </p>
        </motion.div>
      </div>

      {/* ScrollStack Runway Extension Container (120vh Compressed Height) */}
      <div ref={containerRef} className="relative h-[120vh] w-full z-20 overflow-visible">
        {/* Sticky inner container holding h-[85vh] max */}
        <div className="sticky top-0 h-[85vh] w-full flex items-center justify-center overflow-visible">
          {/* Inner card loop centered on mobile */}
          <div className="relative w-full max-w-[90vw] md:max-w-xl mx-auto flex items-center justify-center justify-items-center px-4 overflow-visible h-[60vh]">
            
            {/* Card 1: The Calm Phase */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              style={{
                y: y0,
                scale: scale0,
                opacity: opacity0,
                zIndex: 1,
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
              className="absolute w-full origin-top will-change-transform flex items-center justify-center justify-items-center mx-auto"
            >
              <div className="!h-auto !p-6 md:!p-8 w-full bg-[#fcfaf7] backdrop-blur-md border border-white/20 rounded-[30px] shadow-xl">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-8 overflow-hidden h-full">
                  <div className="w-full md:w-1/2 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col gap-4">
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
                          <div className="bg-[#2D2624]/10 text-[#2D2624] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider w-max">
                            Phase 01
                          </div>
                        </div>
                        <span className="font-serif italic text-2xl md:text-3xl text-[#2D2624]">Days 1–21</span>
                      </div>
                      <h3 className="text-2xl font-serif font-semibold text-[#2D2624] mb-1">The Calm Phase</h3>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block mb-4">2,100+ women start here</span>
                      <p className="text-[#2D2624]/85 text-sm md:text-base leading-relaxed">
                        First, your skin has to stop fighting you. Nothing gets treated here, it gets stabilized, so treatment has something to work with later.
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full md:w-1/2 min-h-[220px] md:min-h-[300px] overflow-hidden rounded-[20px] shrink-0 shadow-sm border border-white/20">
                    <Image
                      src="/Reduce_the_intensity_of_the_202606261417.jpeg"
                      alt="Phase 1 Calm visual representation"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: The Clear Phase */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              style={{
                y: y1,
                scale: scale1,
                opacity: opacity1,
                zIndex: 2,
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
              className="absolute w-full origin-top will-change-transform flex items-center justify-center justify-items-center mx-auto"
            >
              <div className="!h-auto !p-6 md:!p-8 w-full bg-[#fcfaf7] backdrop-blur-md border border-white/20 rounded-[30px] shadow-xl">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-8 overflow-hidden h-full">
                  <div className="w-full md:w-1/2 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col gap-4">
                          <svg viewBox="0 0 40 40" className="w-12 h-12 text-[#2D2624]" suppressHydrationWarning>
                            <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none" suppressHydrationWarning />
                            <defs>
                              <clipPath id="half-clip-system">
                                <motion.rect x="4" y="4" height="32" variants={rectVariants} />
                              </clipPath>
                            </defs>
                            <circle cx="20" cy="20" r="16" fill="currentColor" clipPath="url(#half-clip-system)" suppressHydrationWarning />
                          </svg>
                          <div className="bg-[#2D2624]/10 text-[#2D2624] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider w-max">
                            Phase 02
                          </div>
                        </div>
                        <span className="font-serif italic text-2xl md:text-3xl text-[#2D2624]">Days 22–66</span>
                      </div>
                      <h3 className="text-2xl font-serif font-semibold text-[#2D2624] mb-1">The Clear Phase</h3>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block mb-4">Where the cycle breaks</span>
                      <p className="text-[#2D2624]/85 text-sm md:text-base leading-relaxed">
                        Only once it's stable does treatment actually work. One consistent approach, given enough time to do what it was supposed to do in the first place.
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full md:w-1/2 min-h-[220px] md:min-h-[300px] overflow-hidden rounded-[20px] shrink-0 shadow-sm border border-white/20">
                    <Image
                      src="/The_background_is_light_and_202606261423.jpeg"
                      alt="Phase 2 Clear visual representation"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: The Maintain Phase */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              style={{
                y: y2,
                scale: scale2,
                opacity: opacity2,
                zIndex: 3,
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
              className="absolute w-full origin-top will-change-transform flex items-center justify-center justify-items-center mx-auto"
            >
              <div className="!h-auto !p-6 md:!p-8 w-full bg-[#fcfaf7] backdrop-blur-md border border-white/20 rounded-[30px] shadow-xl">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-8 overflow-hidden h-full">
                  <div className="w-full md:w-1/2 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col gap-4">
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
                          <div className="bg-[#2D2624]/10 text-[#2D2624] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider w-max">
                            Phase 03
                          </div>
                        </div>
                        <span className="font-serif italic text-2xl md:text-3xl text-[#2D2624]">Day 67 Onward</span>
                      </div>
                      <h3 className="text-2xl font-serif font-semibold text-[#2D2624] mb-1">The Maintain Phase</h3>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block mb-4">Where confidence locks in</span>
                      <p className="text-[#2D2624]/85 text-sm md:text-base leading-relaxed">
                        Once it's working, the only thing left to lose is consistency. Not a new routine, but protection for the one that already proved itself.
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full md:w-1/2 min-h-[220px] md:min-h-[300px] overflow-hidden rounded-[20px] shrink-0 shadow-sm border border-white/20">
                    <Image
                      src="/Remove_the_black_dress_and_202606261411.jpeg"
                      alt="Phase 3 Maintain visual representation"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>

    {/* Section 4 (Editorial Quote) ──> Pure White Backing */}
    <section className="relative bg-white py-32 z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, transform: "translate3d(0, 10px, 0)" }}
          whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.45, ease: easeOutPremium }}
          className="text-center flex flex-col items-center gap-2"
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
              const el = document.getElementById("pricing");
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-full font-semibold uppercase tracking-wider text-xs border border-[#2D2624] text-[#2D2624] bg-transparent hover:bg-[#2D2624]/5 transition-colors cursor-pointer"
          >
            See Which Phase Is Yours
          </button>
        </motion.div>
      </div>
    </section>
  </>
  );
}
