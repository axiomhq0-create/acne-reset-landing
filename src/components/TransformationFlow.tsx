"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TransformationFlow() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden z-20">
      
      {/* Cinematic Portrait Overlay of protagonist near mirror in soft lighting */}
      <Image 
        src="/The_background_is_light_and_202606261423.jpeg"
        alt="Protagonist woman in front of sunlit mirror representing absolute calm and relief"
        fill
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none brightness-[0.70] contrast-[1.05]"
        priority
      />

      {/* Shadow Vignette for Editorial Typography Reading contrast */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* Floating Centered Typography */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-semibold leading-[1.25] tracking-tight text-shadow"
        >
          Imagine waking up and not thinking <br className="hidden md:inline" /> about your skin first.
        </motion.h2>
      </div>

    </section>
  );
}
