'use client';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FAF6F0] pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-4xl mx-auto text-center px-6 flex flex-col items-center">
        
        <h1 className="text-4xl md:text-6xl font-serif text-[#1c1917] tracking-tight max-w-3xl leading-[1.15] mb-6">
          You don't have to pretend the mirror doesn't matter.
        </h1>

        <p className="text-stone-600 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
          For years, you've been told to just 'drink more water' or 'give it time.' But you know what it feels like to delete a photo before anyone else can see it. The 3-Phase Acne Reset is not another cleanser. It is the process to finally become yourself again.
        </p>

        <div className="w-full flex justify-center px-2 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 px-6 py-4 md:py-3.5 bg-white/50 backdrop-blur-md border border-white/80 rounded-2xl md:rounded-full w-full sm:w-auto text-stone-700 text-sm md:text-base shadow-sm">
            
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-semibold text-stone-900">Calm</span>
              <span className="text-stone-400 font-light">/</span>
              <span className="text-stone-600">21 Days</span>
            </div>

            <span className="hidden md:inline text-stone-400 text-xs">→</span>
            <span className="md:hidden text-stone-300 text-xs my-0.5">│</span>

            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-semibold text-stone-900">Clear</span>
              <span className="text-stone-400 font-light">/</span>
              <span className="text-stone-600">45 Days</span>
            </div>

            <span className="hidden md:inline text-stone-400 text-xs">→</span>
            <span className="md:hidden text-stone-300 text-xs my-0.5">│</span>

            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-semibold text-stone-900">Maintain</span>
              <span className="text-stone-400 font-light">/</span>
              <span className="text-stone-600">Ongoing</span>
            </div>

          </div>
        </div>

        <button 
          onClick={() => {
            const el = document.getElementById('pricing');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-[#1c1917] text-[#FAF6F0] font-medium px-8 py-4 rounded-xl hover:bg-stone-800 transition-all duration-300 shadow-md active:scale-[0.98]"
        >
          Find Your Starting Phase →
        </button>

      </div>
    </section>
  );
}
