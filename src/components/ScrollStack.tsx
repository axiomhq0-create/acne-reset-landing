"use client";

import React, { useState, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export default function ScrollStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Measure the full length of the tracking container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale step boundaries evenly across the expanded 300vh scrolling track depth
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      if (activeStep !== 0) setActiveStep(0);
    } else if (latest >= 0.33 && latest < 0.66) {
      if (activeStep !== 1) setActiveStep(1);
    } else {
      if (activeStep !== 2) setActiveStep(2);
    }
  });

  const phases = [
    { 
      tagline: "PHASE 01 — DAYS 1-21", 
      title: "CALM — Reduce inflammation.", 
      desc: "Stop the flare-ups first by stabilizing the lipid barrier. Active treatment on inflamed skin only causes more reactive spots." 
    },
    { 
      tagline: "PHASE 02 — DAYS 22-66", 
      title: "CLEAR — Treat stable skin.", 
      desc: "Introduce targeted active ingredients once the skin is stabilized, healthy, and ready to absorb clear-agent routines." 
    },
    { 
      tagline: "PHASE 03 — ONGOING", 
      title: "MAINTAIN — Keep results.", 
      desc: "Lock in clear skin permanently with a simplified daily maintenance protocol to prevent returning blemishes." 
    }
  ];

  return (
    // Expanded track container height eliminates the blank pink dead space
    <section ref={containerRef} className="relative w-full h-[300vh] bg-[#F3D5CE] z-20">
      {/* Pinned frame stays locked in the viewport window */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* TRANSITIONING LANDSCAPE UNDERLAY */}
        <div className="absolute inset-0 z-0 bg-[#F3D5CE]">
          {[0, 1, 2].map((idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-opacity duration-500 ease-in-out bg-cover bg-center bg-no-repeat"
              style={{
                opacity: activeStep === idx ? 1 : 0,
                transform: 'translateZ(0)',
                backgroundImage: `url('/images/protocol-phase-${idx + 1}.jpg')`
              }}
            />
          ))}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>

        {/* COMPACT FLOATING CARD FRAME */}
        <div className="relative z-10 w-full max-w-xl mx-auto px-6">
          <div className="relative w-full min-h-[260px] flex items-center justify-center">
            {phases.map((phase, index) => {
              const isActive = index === activeStep;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 p-8 md:p-10 flex flex-col justify-center rounded-3xl border transition-all duration-300 ease-out will-change-transform ${
                    isActive
                      ? "opacity-100 translate-y-0 bg-white/80 backdrop-blur-[12px] border-white/60 shadow-xl scale-100"
                      : "opacity-0 translate-y-4 bg-transparent backdrop-blur-none border-transparent pointer-events-none scale-95"
                  }`}
                  style={{ transform: 'translateZ(0)' }}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-[#810100] font-bold">
                    {phase.tagline}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1B1716] tracking-tight mt-2 mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-800 leading-relaxed font-light">
                    {phase.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
