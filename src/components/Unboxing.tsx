"use client";

import React from "react";
import Image from "next/image";

export default function Unboxing() {
  const deliverables = [
    { label: "📱 Protocol", position: "top-4 left-4" },
    { label: "📘 Product Guide", position: "top-12 right-6" },
    { label: "📖 Calm Tracker", position: "bottom-12 left-8" },
    { label: "📖 Clear Tracker", position: "bottom-4 right-12" },
    { label: "📖 Maintenance Blueprint", position: "top-1/3 left-2" },
    { label: "📊 Dashboard", position: "bottom-1/3 right-2" },
  ];

  return (
    <section className="py-24 bg-[#EDEBDE] text-[#1B1716] border-t border-b border-[#2D2624]/10 relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500 block">
            Tactile Luxury
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-[#1B1716]">
            The Unboxing
          </h2>
        </div>

        {/* Exploded product photoshoot canvas */}
        <div className="relative w-full max-w-[800px] mx-auto aspect-[16/10] bg-[#E5E2D2] rounded-[32px] border border-[#2D2624]/10 shadow-inner p-6 md:p-12 flex items-center justify-center overflow-visible">
          
          <div className="relative w-full h-full scale-110 md:scale-125 transform transition-transform duration-700 hover:scale-115">
            <Image 
              src="/assets/transformation-1.png"
              alt="Exploded digital product bundle mockup photoshoot"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          {/* Minimalist pointing tags */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {deliverables.map((item, idx) => (
              <div key={idx} className={`absolute ${item.position} flex items-center gap-2`}>
                <div className="bg-white/85 backdrop-blur-sm border border-[#2D2624]/10 py-1.5 px-3 rounded-full text-xs font-semibold shadow-sm text-stone-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#810100]" />
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Clean Checklist row below on mobile */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-6 text-sm font-semibold md:hidden">
          <span>📱 Protocol</span>
          <span>📘 Product Guide</span>
          <span>📖 Calm Tracker</span>
          <span>📖 Clear Tracker</span>
          <span>📖 Maintenance Blueprint</span>
          <span>📊 Dashboard</span>
        </div>

      </div>
    </section>
  );
}
