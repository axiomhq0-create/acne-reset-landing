"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Unboxing() {
  const tags = [
    { label: "Protocol", position: "top-4 left-6" },
    { label: "Dashboard", position: "bottom-12 right-6" },
    { label: "Tracker", position: "bottom-4 left-8" },
    { label: "Guide", position: "top-12 right-12" },
    { label: "Blueprint", position: "top-1/3 left-2" },
    { label: "Checklists", position: "bottom-1/3 right-2" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Staggered 100ms delay sequence
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.4, ease: "easeOut" as const } 
    },
  };

  return (
    <section className="py-24 md:py-32 bg-[#EDEBDE] text-[#1B1716] border-b border-[#2D2624]/10 relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-500 block">
            Tactile Luxury
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-[#1B1716]">
            The Unboxing
          </h2>
        </div>

        {/* Exploded product photoshoot canvas */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full max-w-[800px] mx-auto aspect-[16/10] bg-[#E5E2D2] rounded-[32px] border border-[#2D2624]/10 shadow-inner p-6 md:p-12 flex items-center justify-center overflow-visible"
        >
          
          <div className="relative w-full h-full scale-110 md:scale-125 transform transition-transform duration-700 hover:scale-115">
            <Image 
              src="/assets/transformation-1.png"
              alt="Exploded digital product bundle mockup photoshoot"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          {/* Minimalist pointing tags pointing to deliverables */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {tags.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={tagVariants}
                className={`absolute ${item.position} flex items-center gap-2`}
              >
                <div className="bg-white/85 backdrop-blur-sm border border-[#2D2624]/10 py-1.5 px-3.5 rounded-full text-xs font-semibold shadow-sm text-stone-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#810100]" />
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Clean Checklist row below on mobile */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-6 text-sm font-semibold md:hidden">
          <span>Protocol</span>
          <span>Dashboard</span>
          <span>Tracker</span>
          <span>Guide</span>
          <span>Blueprint</span>
          <span>Checklists</span>
        </div>

      </div>
    </section>
  );
}
