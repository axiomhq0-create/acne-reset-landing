"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductReveal() {
  const labels = [
    { text: "1. Reset Protocol", style: "top-[15%] left-[5%] md:left-[10%]" },
    { text: "2. Calm Tracker", style: "top-[25%] right-[5%] md:right-[10%]" },
    { text: "3. Product Guide", style: "top-[50%] left-[2%] md:left-[8%]" },
    { text: "4. Daily Check-ins", style: "top-[65%] right-[2%] md:right-[8%]" },
    { text: "5. Maintenance Blueprint", style: "bottom-[12%] left-1/2 -translate-x-1/2" }
  ];

  return (
    <section className="py-28 md:py-32 bg-[#EDEBDE] text-[#1B1716] border-b border-[#2D2624]/10 relative z-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 text-center space-y-16 relative">
        
        {/* Gallery-Grade Mockup Container taking up almost the full width */}
        <div className="relative w-full max-w-[1000px] aspect-[16/10] mx-auto bg-transparent p-4 flex items-center justify-center overflow-visible">
          
          <div className="relative w-full h-full transform hover:scale-[1.005] transition-transform duration-700">
            <Image 
              src="/assets/transformation-1.png"
              alt="Acne Reset protocol system mockup"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 1000px"
            />
          </div>

          {/* 5 Minimal elegant floating label strings softly animating into place */}
          {labels.map((lbl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * idx, ease: "easeOut" }}
              className={`absolute ${lbl.style} bg-white/60 backdrop-blur-md border border-[#1B1716]/10 px-4 py-2 rounded-full shadow-sm text-xs font-mono tracking-wider text-[#1B1716]/80 whitespace-nowrap z-30 pointer-events-none`}
            >
              {lbl.text}
            </motion.div>
          ))}

        </div>

        {/* Quiet footnote matching high-ticket pacing */}
        <p className="text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed italic">
          One system, engineered to take the guessing game out of clear skin.
        </p>

      </div>
    </section>
  );
}
