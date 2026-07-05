"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EmotionalResolution() {
  return (
    <section className="py-36 md:py-44 px-6 bg-[#F3D5CE] text-center relative z-20 flex items-center justify-center overflow-hidden">
      
      <div className="max-w-3xl mx-auto space-y-12 select-none pointer-events-none">
        
        {/* Step-by-step lines showing the absolute resolution */}
        <div className="space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl text-[#1B1716] tracking-tight"
          >
            No restarting.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl text-[#1B1716] tracking-tight"
          >
            No guessing.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-3xl md:text-5xl text-[#1B1716] tracking-tight"
          >
            No building another Sunday routine.
          </motion.p>
        </div>

        <motion.p 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl text-[#810100] tracking-tight font-medium pt-4"
        >
          Just the next step.
        </motion.p>

      </div>

    </section>
  );
}
