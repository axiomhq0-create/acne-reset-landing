"use client";

import React from "react";
import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="w-full text-center py-24 bg-[#EDEBDE] text-[#1B1716] px-4 relative z-20 border-b border-[#2D2624]/10 overflow-hidden">
      <h2 className="font-serif tracking-tight text-xs uppercase tracking-[0.25em] mb-4 opacity-60">The Complete Protocol</h2>
      
      {/* MASSIVE HERO MOCKUP */}
      <div className="w-full max-w-5xl mx-auto my-12 transform scale-105 md:scale-115 lg:scale-120 transition-transform duration-500 relative aspect-[16/10] md:h-[500px]">
        <Image 
          src="/assets/transformation-1.png" 
          alt="The Complete 3-Phase Acne Reset System exploded unboxing view" 
          fill
          className="object-contain mx-auto drop-shadow-2xl rounded-lg"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>
      
      <p className="font-serif italic text-2xl md:text-3xl max-w-xl mx-auto leading-relaxed text-neutral-800 mt-8">
        Everything you need for 90 days.
      </p>
      
      <div className="text-4xl font-mono mt-6 font-bold text-[#810100]">$97</div>
    </section>
  );
}
