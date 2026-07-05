"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springConfig = { stiffness: 45, damping: 15, mass: 0.8 };

  // Cards lift, stack, and compress linearly
  const scale0 = useSpring(useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 0.95, 0.95]), springConfig);
  const opacity0 = useSpring(useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0.3]), springConfig);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65], [400, 400, 0, 0]), springConfig);
  const scale1 = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65, 0.75], [0.95, 0.95, 1, 1, 0.95]), springConfig);
  const opacity1 = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65, 0.75], [0, 0, 1, 1, 0.3]), springConfig);

  const y2 = useSpring(useTransform(scrollYProgress, [0, 0.55, 0.8], [800, 800, 0]), springConfig);
  const scale2 = useSpring(useTransform(scrollYProgress, [0, 0.55, 0.8], [0.95, 0.95, 1]), springConfig);
  const opacity2 = useSpring(useTransform(scrollYProgress, [0, 0.55, 0.8], [0, 0, 1]), springConfig);

  // Side progress line animation height
  const progressLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-[#F3D5CE] py-32 z-20">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 text-center pb-12">
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#810100] block mb-3">
          The Clean Skincare Sequence
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-[#1B1716]">
          The Protocol
        </h2>
      </div>

      {/* Sticky Window Container */}
      <div ref={containerRef} className="relative h-[150vh] w-full overflow-visible">
        <div className="sticky top-0 h-[85vh] w-full flex items-center justify-center overflow-visible">
          
          {/* Main layout container with cards and side progress */}
          <div className="relative w-full max-w-[90vw] md:max-w-2xl mx-auto flex flex-row items-center gap-8 h-[55vh] overflow-visible">
            
            {/* Left Side Progress Element */}
            <div className="hidden md:flex flex-col items-center h-[300px] relative shrink-0 z-30">
              <div className="w-[1px] h-full bg-[#1B1716]/10 relative rounded-full overflow-hidden">
                <motion.div 
                  style={{ height: progressLineHeight }}
                  className="w-full bg-[#810100] rounded-full"
                />
              </div>
              <div className="absolute inset-y-0 flex flex-col justify-between items-center py-2 text-[9px] font-mono text-[#810100] font-bold uppercase">
                <span>01</span>
                <span>02</span>
                <span>03</span>
              </div>
            </div>

            {/* Cards viewport */}
            <div className="relative flex-1 h-full flex items-center justify-center overflow-visible">
              
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
                  className="w-full p-8 md:p-12 rounded-[24px] text-left space-y-4 shadow-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.45)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                  }}
                >
                  <span className="text-[10px] uppercase font-bold text-[#810100] tracking-widest block">Phase 01 — Days 1-21</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1B1716]">CALM — Reduce inflammation.</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
                    Stop the flare-ups first by stabilizing the lipid barrier. Active treatment on inflamed skin only causes more reactive spots.
                  </p>
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
                  className="w-full p-8 md:p-12 rounded-[24px] text-left space-y-4 shadow-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.45)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                  }}
                >
                  <span className="text-[10px] uppercase font-bold text-[#810100] tracking-widest block">Phase 02 — Days 22-66</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1B1716]">CLEAR — Treat stable skin.</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
                    Introduce targeted active ingredients once the skin is stabilized, healthy, and ready to absorb clear-agent routines.
                  </p>
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
                  className="w-full p-8 md:p-12 rounded-[24px] text-left space-y-4 shadow-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.45)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                  }}
                >
                  <span className="text-[10px] uppercase font-bold text-[#810100] tracking-widest block">Phase 03 — Ongoing</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1B1716]">MAINTAIN — Keep results.</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
                    Lock in clear skin permanently with a simplified daily maintenance protocol to prevent returning blemishes.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
