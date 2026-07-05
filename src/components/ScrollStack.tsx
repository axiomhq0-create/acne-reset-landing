"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ScrollStack() {
  const phases = [
    {
      day: "Days 1–21",
      title: "CALM",
      subtitle: "2,100+ women start here",
      desc: "Stop the flare-ups first by stabilizing the lipid barrier and reducing surface inflammation before active treatment begins.",
      image: "/Reduce_the_intensity_of_the_202606261417.jpeg",
    },
    {
      day: "Days 22–66",
      title: "CLEAR",
      subtitle: "Where the cycle breaks",
      desc: "Introduce targeted sequence-based skincare when the skin barrier is calm and ready to heal without fighting back.",
      image: "/The_background_is_light_and_202606261423.jpeg",
    },
    {
      day: "Day 67 Onward",
      title: "MAINTAIN",
      subtitle: "Where confidence locks in",
      desc: "Transition to a low-maintenance defense blueprint to protect your results and lock in clear skin permanently.",
      image: "/Remove_the_black_dress_and_202606261411.jpeg",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#EDEBDE] text-[#1B1716] border-b border-[#2D2624]/10 relative z-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500 mb-3 block">
            The Reset Process
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight leading-[1.1] text-[#1B1716]">
            How The Protocol Works
          </h2>
        </div>

        {/* Clean linear timeline cards sequence */}
        <div className="space-y-12">
          {phases.map((phase, idx) => (
            <React.Fragment key={idx}>
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#EDEBDE] border border-[#2D2624]/10 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm hover:border-[#810100]/25 transition-colors duration-300"
              >
                {/* Left Text */}
                <div className="flex-1 text-left space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#810100] text-xs uppercase tracking-widest font-semibold">{phase.day}</span>
                    <span className="text-xs text-neutral-500 font-serif italic">{phase.subtitle}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-[#1B1716]">
                    {phase.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>

                {/* Right Image */}
                <div className="relative w-full md:w-[220px] aspect-[4/3] sm:aspect-video md:aspect-square rounded-2xl overflow-hidden shrink-0 border border-[#2D2624]/10 shadow-sm">
                  <Image 
                    src={phase.image}
                    alt={`${phase.title} phase visual representation`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 220px"
                  />
                </div>
              </motion.div>

              {/* Connector Arrow */}
              {idx < phases.length - 1 && (
                <div className="flex justify-center text-[#810100] text-lg font-bold py-2">
                  ↓
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
