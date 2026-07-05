"use client";

import React, { useState, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export default function ScrollStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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
    { tagline: "PHASE 01 — DAYS 1-21", title: "CALM — Reduce inflammation.", desc: "Stop the flare-ups first by stabilizing the lipid barrier. Active treatment on inflamed skin only causes more reactive spots." },
    { tagline: "PHASE 02 — DAYS 22-66", title: "CLEAR — Treat stable skin.", desc: "Introduce targeted active ingredients once the skin is stabilized, healthy, and ready to absorb clear-agent routines." },
    { tagline: "PHASE 03 — ONGOING", title: "MAINTAIN — Keep results.", desc: "Lock in clear skin permanently with a simplified daily maintenance protocol to prevent returning blemishes." }
  ];

  const bgPortraits = [
    "/Reduce_the_intensity_of_the_202606261417.jpeg",
    "/The_background_is_light_and_202606261423.jpeg",
    "/Remove_the_black_dress_and_202606261411.jpeg"
  ];

  return (
    <div ref={containerRef} className="relative w-full h-[250vh] bg-[#F3D5CE] z-20">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* HARDWARE ACCELERATED HUMAN EVOLUTION PORTRAIT UNDERLAY */}
        <div className="absolute inset-0 z-0 will-change-transform bg-[#F3D5CE]">
          {[0, 1, 2].map((idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-opacity duration-[1000ms] ease-in-out bg-cover bg-center bg-no-repeat"
              style={{
                opacity: activeStep === idx ? 0.75 : 0,
                transform: 'translateZ(0)',
                backgroundImage: `url('${bgPortraits[idx]}')`
              }}
            />
          ))}
          <div className="absolute inset-0 bg-[#1B1716]/10 pointer-events-none" />
        </div>

        {/* SINGLE LAYER BALANCED VIEWPORT BLOCK CONTAINER */}
        <div className="relative z-10 w-full max-w-2xl px-6 mx-auto">
          <div className="relative w-full min-h-[300px] flex items-center justify-center">
            {phases.map((phase, index) => {
              const isActive = index === activeStep;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-center rounded-3xl border transition-all duration-[600ms] ease-out will-change-transform ${
                    isActive
                      ? "opacity-100 translate-y-0 bg-white/35 backdrop-blur-[14px] border-white/50 shadow-xl"
                      : "opacity-0 translate-y-4 bg-transparent backdrop-blur-none border-transparent pointer-events-none"
                  }`}
                  style={{ transform: 'translateZ(0)' }}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-[#810100] font-semibold">
                    {phase.tagline}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#1B1716] tracking-tight mt-3 mb-4">
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
    </div>
  );
}
