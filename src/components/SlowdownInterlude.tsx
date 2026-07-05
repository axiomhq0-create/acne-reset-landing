"use client";

import React from "react";
import Image from "next/image";

export default function SlowdownInterlude() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[#EDEBDE] overflow-hidden z-20">
      
      {/* Background Image Layer with opacity 60% and rich vignette */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/The_background_is_light_and_202606261423.jpeg" 
          fill 
          className="object-cover object-center scale-[1.05] brightness-[0.7]" 
          alt="Emotional Mirror State" 
          priority
        />
        {/* Cinematic Vignette Engine */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/85 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Centered Payoff Text (48–64px) hanging weightlessly */}
      <div className="relative z-10 max-w-4xl px-6 text-center select-none pointer-events-none">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-[60px] text-white tracking-tight leading-[1.15] drop-shadow-2xl">
          Imagine waking up and not thinking <br className="hidden md:inline" /> about your skin first.
        </h2>
      </div>

    </section>
  );
}
