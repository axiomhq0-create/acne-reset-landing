"use client";

import React from "react";
import Image from "next/image";

export default function CinematicInterlude() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[#1B1716] overflow-hidden z-20">
      
      {/* MOVIE POSTER LIGHTING FRAME */}
      <div className="absolute inset-0">
        <Image 
          src="/The_background_is_light_and_202606261423.jpeg" 
          fill
          className="object-cover opacity-50 filter grayscale mix-blend-luminosity" 
          alt="Emotional Reflection Slate" 
          priority
        />
        {/* Immersive Edge Vignettes */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="font-serif text-4xl md:text-6xl text-[#EDEBDE] tracking-tight leading-tight font-light drop-shadow-lg select-none">
          Imagine waking up and not thinking about your skin first.
        </h2>
      </div>

    </section>
  );
}
