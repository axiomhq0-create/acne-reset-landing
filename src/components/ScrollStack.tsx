"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springConfig = { stiffness: 45, damping: 15, mass: 0.8 };

  // Card transform variables
  const rawY0 = useTransform(scrollYProgress, [0, 0.35], [0, 0]);
  const y0 = useSpring(rawY0, springConfig);
  const rawScale0 = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 0.95, 0.95]);
  const scale0 = useSpring(rawScale0, springConfig);
  const rawOpacity0 = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0]);
  const opacity0 = useSpring(rawOpacity0, springConfig);

  const rawY1 = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65], [400, 400, 0, 0]);
  const y1 = useSpring(rawY1, springConfig);
  const rawScale1 = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65, 0.75], [0.95, 0.95, 1, 1, 0.95]);
  const scale1 = useSpring(rawScale1, springConfig);
  const rawOpacity1 = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65, 0.75], [0, 0, 1, 1, 0]);
  const opacity1 = useSpring(rawOpacity1, springConfig);

  const rawY2 = useTransform(scrollYProgress, [0, 0.55, 0.8], [800, 800, 0]);
  const y2 = useSpring(rawY2, springConfig);
  const rawScale2 = useTransform(scrollYProgress, [0, 0.55, 0.8], [0.95, 0.95, 1]);
  const scale2 = useSpring(rawScale2, springConfig);
  const rawOpacity2 = useTransform(scrollYProgress, [0, 0.55, 0.8], [0, 0, 1]);
  const opacity2 = useSpring(rawOpacity2, springConfig);

  return (
    <section className="relative bg-[#EBC8BE] overflow-visible py-32 z-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

      {/* Header Info Block */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 pb-16 flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#810100] mb-4 block">
            The Timeline
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A1B12] font-semibold tracking-tight leading-[1.1] mb-6">
            The Clean Skincare Sequence
          </h2>
        </div>
      </div>

      {/* Runway extension */}
      <div ref={containerRef} className="relative h-[150vh] w-full z-20 overflow-visible">
        <div className="sticky top-0 h-[85vh] w-full flex items-center justify-center overflow-visible">
          <div className="relative w-full max-w-[90vw] md:max-w-xl mx-auto flex items-center justify-center px-4 h-[60vh] overflow-visible">
            
            {/* Card 1: CALM */}
            <motion.div
              style={{
                y: y0,
                scale: scale0,
                opacity: opacity0,
                zIndex: 1,
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
              className="absolute w-full origin-top flex items-center justify-center"
            >
              <div className="w-full bg-[#fcfaf7] border border-[#2D2624]/10 rounded-[30px] p-6 md:p-8 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 text-left space-y-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-2xl font-serif font-bold text-[#810100]">21 Days</span>
                      <span className="text-[10px] uppercase font-bold text-neutral-400">Phase 01</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-[#1B1716]">CALM</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-serif italic">
                      "Stop the flare-ups first by stabilizing the lipid barrier."
                    </p>
                  </div>
                  <div className="relative w-full md:w-[180px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 border border-[#2D2624]/10">
                    <Image
                      src="/Reduce_the_intensity_of_the_202606261417.jpeg"
                      alt="Calm phase representation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 180px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: CLEAR */}
            <motion.div
              style={{
                y: y1,
                scale: scale1,
                opacity: opacity1,
                zIndex: 2,
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
              className="absolute w-full origin-top flex items-center justify-center"
            >
              <div className="w-full bg-[#fcfaf7] border border-[#2D2624]/10 rounded-[30px] p-6 md:p-8 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 text-left space-y-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-2xl font-serif font-bold text-[#810100]">45 Days</span>
                      <span className="text-[10px] uppercase font-bold text-neutral-400">Phase 02</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-[#1B1716]">CLEAR</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-serif italic">
                      "Introduce targeted treatments when the skin is calm and ready."
                    </p>
                  </div>
                  <div className="relative w-full md:w-[180px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 border border-[#2D2624]/10">
                    <Image
                      src="/The_background_is_light_and_202606261423.jpeg"
                      alt="Clear phase representation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 180px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: MAINTAIN */}
            <motion.div
              style={{
                y: y2,
                scale: scale2,
                opacity: opacity2,
                zIndex: 3,
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
              className="absolute w-full origin-top flex items-center justify-center"
            >
              <div className="w-full bg-[#fcfaf7] border border-[#2D2624]/10 rounded-[30px] p-6 md:p-8 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 text-left space-y-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-2xl font-serif font-bold text-[#810100]">Ongoing</span>
                      <span className="text-[10px] uppercase font-bold text-neutral-400">Phase 03</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-[#1B1716]">MAINTAIN</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-serif italic">
                      "Transition to a low-maintenance blueprint to lock in results."
                    </p>
                  </div>
                  <div className="relative w-full md:w-[180px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 border border-[#2D2624]/10">
                    <Image
                      src="/Remove_the_black_dress_and_202606261411.jpeg"
                      alt="Maintain phase representation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 180px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
