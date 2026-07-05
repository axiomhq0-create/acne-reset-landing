"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EverythingIncluded() {
  const items = [
    { label: "📱 Protocol", desc: "The foundational reset guide" },
    { label: "📘 Product Guide", desc: "Curated ingredient & selection lookup" },
    { label: "📖 Calm Tracker", desc: "Interactive phase 1 logbook" },
    { label: "📖 Clear Tracker", desc: "Interactive phase 2 logbook" },
    { label: "📖 Maintenance Blueprint", desc: "Ongoing result protection routine" },
    { label: "📊 Dashboard", desc: "Complete 90-day progress panel" },
    { label: "✓ Lifetime access", desc: "Free updates for future protocol improvements" },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#EDEBDE] text-[#1B1716] border-t border-b border-[#2D2624]/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Minimalist Copy Layout Side */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500 mb-3 block">
              Digital Unboxing
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight leading-[1.1] text-[#1B1716]">
              Everything Included
            </h2>
            <p className="text-neutral-600 text-sm md:text-base mt-4">
              A comprehensive, digital toolkit designed to end the cycle of trial and error. Every guide, tracker, and blueprint is fully integrated into a single, cohesive framework.
            </p>
          </div>

          <div className="space-y-4">
            {items.map((item, idx) => (
              <div key={idx} className="border-b border-[#2D2624]/10 pb-4">
                <h4 className="text-base font-serif font-semibold text-[#1B1716] flex items-center gap-2">
                  {item.label}
                </h4>
                <p className="text-xs text-neutral-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mockups Photoshoot Canvas Side (Dominant Visual) */}
        <div className="lg:col-span-7 relative w-full flex justify-center overflow-visible">
          <div className="relative w-full max-w-[620px] aspect-[4/3] bg-[#E5E2D2] rounded-3xl border border-[#2D2624]/10 shadow-inner p-6 md:p-12 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full transform scale-110 md:scale-125 transition-transform duration-700 hover:scale-115">
              <Image 
                src="/assets/transformation-1.png"
                alt="Luxury unboxing digital mockup flat-lay presentation"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            
            {/* Elegant overlay badge */}
            <div className="absolute bottom-6 right-6 bg-[#EDEBDE] border border-[#2D2624]/10 py-2.5 px-4 rounded-xl shadow-sm text-left max-w-[150px]">
              <span className="text-[8px] uppercase tracking-wider font-bold text-[#810100] block mb-0.5">Delivered</span>
              <h4 className="text-xs font-serif font-semibold text-[#1B1716] leading-tight">Instant Digital Download</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
