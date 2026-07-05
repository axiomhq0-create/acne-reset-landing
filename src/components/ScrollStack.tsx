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

  // Map scroll progress to background image opacity fades
  const bgOpacity0 = useSpring(useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0]), springConfig);
  const bgOpacity1 = useSpring(useTransform(scrollYProgress, [0.35, 0.45, 0.70, 0.80], [0, 1, 1, 0]), springConfig);
  const bgOpacity2 = useSpring(useTransform(scrollYProgress, [0.70, 0.80, 1], [0, 0, 1]), springConfig);

  // Dynamic text opacity transforms to hide inactive cards text completely
  const textOpacity0 = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0]);
  const textOpacity1 = useTransform(scrollYProgress, [0, 0.35, 0.45, 0.70, 0.80], [0, 0, 1, 1, 0]);
  const textOpacity2 = useTransform(scrollYProgress, [0, 0.70, 0.80, 1], [0, 0, 1, 1]);

  // Cards lift, stack, and compress linearly
  const scale0 = useSpring(useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 0.95, 0.95]), springConfig);
  const opacity0 = useSpring(useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0.3]), springConfig);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65], [400, 400, 0, 0]), springConfig);
  const scale1 = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65, 0.75], [0.95, 0.95, 1, 1, 0.95]), springConfig);
  const opacity1 = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65, 0.75], [0, 0, 1, 1, 0.3]), springConfig);

  const y2 = useSpring(useTransform(scrollYProgress, [0, 0.55, 0.8], [800, 800, 0]), springConfig);
  const scale2 = useSpring(useTransform(scrollYProgress, [0, 0.55, 0.8], [0.95, 0.95, 1]), springConfig);
  const opacity2 = useSpring(useTransform(scrollYProgress, [0, 0.55, 0.8], [0, 0, 1]), springConfig);

  return (
    <section className="relative bg-[#EDEBDE] overflow-visible py-32 z-20">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 text-center pb-12 relative z-30">
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#810100] block mb-3">
          The Clean Skincare Sequence
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-[#1B1716]">
          The Protocol
        </h2>
      </div>

      {/* Sticky Window Container */}
      <div ref={containerRef} className="relative h-[200vh] w-full overflow-visible">
        
        {/* Sticky Background Image Box */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-10 flex items-center justify-center">
          
          {/* Background image 1: CALM */}
          <motion.div style={{ opacity: bgOpacity0 }} className="absolute inset-0 w-full h-full">
            <Image 
              src="/Reduce_the_intensity_of_the_202606261417.jpeg"
              alt="Protagonist Calm State (Post-inflammation lowering, softening posture)"
              fill
              className="object-cover brightness-[0.7] contrast-[1.02]"
              sizes="100vw"
            />
          </motion.div>

          {/* Background image 2: CLEAR */}
          <motion.div style={{ opacity: bgOpacity1 }} className="absolute inset-0 w-full h-full">
            <Image 
              src="/The_background_is_light_and_202606261423.jpeg"
              alt="Protagonist Clear State (Skin stabilizing, expression turning upward)"
              fill
              className="object-cover brightness-[0.7] contrast-[1.02]"
              sizes="100vw"
            />
          </motion.div>

          {/* Background image 3: MAINTAIN */}
          <motion.div style={{ opacity: bgOpacity2 }} className="absolute inset-0 w-full h-full">
            <Image 
              src="/Remove_the_black_dress_and_202606261411.jpeg"
              alt="Protagonist Maintain State (Radical confidence, looking past mirror)"
              fill
              className="object-cover brightness-[0.7] contrast-[1.02]"
              sizes="100vw"
            />
          </motion.div>

          {/* Dark Overlay for Text readability */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />

          {/* Centered Glassmorphic Cards Stack */}
          <div className="relative w-full max-w-[90vw] md:max-w-xl mx-auto flex items-center justify-center px-4 h-[60vh] overflow-visible z-20">
            
            {/* Card 1 */}
            <motion.div
              style={{
                scale: scale0,
                opacity: opacity0,
                zIndex: 1,
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
              className="absolute w-full origin-top"
            >
              <div 
                className="w-full p-8 md:p-10 rounded-[24px] text-left space-y-4 shadow-xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                }}
              >
                <motion.div style={{ opacity: textOpacity0 }} className="pointer-events-none select-none space-y-4">
                  <span className="text-[10px] uppercase font-bold text-[#810100] tracking-widest block">Phase 01 — Days 1-21</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1B1716]">CALM — Reduce inflammation.</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md">
                    Stop the flare-ups first by stabilizing the lipid barrier. Active treatment on inflamed skin only causes more reactive spots.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              style={{
                y: y1,
                scale: scale1,
                opacity: opacity1,
                zIndex: 2,
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
              className="absolute w-full origin-top"
            >
              <div 
                className="w-full p-8 md:p-10 rounded-[24px] text-left space-y-4 shadow-xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                }}
              >
                <motion.div style={{ opacity: textOpacity1 }} className="pointer-events-none select-none space-y-4">
                  <span className="text-[10px] uppercase font-bold text-[#810100] tracking-widest block">Phase 02 — Days 22-66</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1B1716]">CLEAR — Treat stable skin.</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md">
                    Introduce targeted active ingredients once the skin is stabilized, healthy, and ready to absorb clear-agent routines.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              style={{
                y: y2,
                scale: scale2,
                opacity: opacity2,
                zIndex: 3,
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
              className="absolute w-full origin-top"
            >
              <div 
                className="w-full p-8 md:p-10 rounded-[24px] text-left space-y-4 shadow-xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                }}
              >
                <motion.div style={{ opacity: textOpacity2 }} className="pointer-events-none select-none space-y-4">
                  <span className="text-[10px] uppercase font-bold text-[#810100] tracking-widest block">Phase 03 — Ongoing</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1B1716]">MAINTAIN — Keep results.</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md">
                    Lock in clear skin permanently with a simplified daily maintenance protocol to prevent returning blemishes.
                  </p>
                </motion.div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
