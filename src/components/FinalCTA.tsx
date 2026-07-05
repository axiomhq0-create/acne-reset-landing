"use client";

import React from "react";
import Image from "next/image";
import SpotlightWrapper from "./SpotlightWrapper";

export default function FinalCTA() {
  return (
    <section id="pricing" className="py-32 md:py-36 bg-[#EDEBDE] text-[#1B1716] relative z-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        
        {/* Large striking image of the product system */}
        <div className="relative w-full max-w-[650px] aspect-[16/10] mx-auto bg-transparent flex items-center justify-center overflow-hidden">
          <Image 
            src="/assets/transformation-1.png"
            alt="The Complete Acne Reset Protocol System"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 650px"
          />
        </div>

        {/* Pricing tag & CTA Stack */}
        <div className="space-y-6 max-w-md mx-auto">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-500 block">
              The Complete Protocol
            </span>
            <div className="font-serif text-5xl md:text-6xl text-[#1B1716] font-medium tracking-tight">
              $97
            </div>
          </div>

          <p className="text-xs text-neutral-500 max-w-xs mx-auto leading-relaxed">
            Everything you've seen above included instantly. One-time payment. Lifetime updates.
          </p>

          <div className="pt-4">
            <SpotlightWrapper 
              className="rounded-full w-full overflow-hidden shadow-sm"
              spotlightColor="rgba(255, 255, 255, 0.45)"
            >
              <button 
                onClick={() => alert("Proceeding to secure checkout...")}
                className="relative overflow-hidden w-full bg-[#810100] hover:bg-[#630102] transition-transform hover:-translate-y-0.5 shadow-lg text-white rounded-full py-4 px-10 text-center font-medium tracking-wide text-sm uppercase block cursor-pointer"
              >
                <span className="relative z-10">Get The Complete Protocol</span>
              </button>
            </SpotlightWrapper>
          </div>
        </div>

      </div>
    </section>
  );
}
