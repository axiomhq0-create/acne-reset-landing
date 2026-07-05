"use client";

import React from "react";
import Image from "next/image";

export default function ProductReveal() {
  return (
    <section className="py-24 bg-[#EDEBDE] text-[#1B1716] border-b border-[#2D2624]/10 relative z-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        
        {/* Label */}
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-500 block">
          The Engine Behind The Transformation
        </span>

        {/* Clean, modest, scaled-down mockup */}
        <div className="relative w-full aspect-[16/10] max-w-[500px] mx-auto bg-[#FAF8F5]/30 rounded-[24px] border border-[#2D2624]/5 shadow-sm p-4 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full transform hover:scale-[1.01] transition-transform duration-500">
            <Image 
              src="/assets/transformation-1.png"
              alt="Acne Reset system mockup (quiet engine behind the transformation)"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>

        {/* Supporting quiet text */}
        <p className="text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed italic">
          A modular digital framework of guides, trackers, and sequencing checklists designed to guide you step-by-step.
        </p>

      </div>
    </section>
  );
}
