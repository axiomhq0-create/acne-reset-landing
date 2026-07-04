"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SocialProof() {
  return (
    <section className="py-16 bg-[#FAF6F0] text-[#1A1612] relative z-20 border-b border-[#2D2624]/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Quote 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center text-center p-8 bg-white/45 backdrop-blur-sm border border-white/60 rounded-3xl shadow-sm"
          >
            <span className="text-3xl text-[#E8C4B8] font-serif mb-2">“</span>
            <p className="font-serif italic text-lg md:text-xl text-[#1A1612] leading-relaxed mb-4">
              "I went to my cousin's wedding without foundation for the first time in 6 years."
            </p>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">— Priya, 24</span>
          </motion.div>

          {/* Quote 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-center items-center text-center p-8 bg-white/45 backdrop-blur-sm border border-white/60 rounded-3xl shadow-sm"
          >
            <span className="text-3xl text-[#E8C4B8] font-serif mb-2">“</span>
            <p className="font-serif italic text-lg md:text-xl text-[#1A1612] leading-relaxed mb-4">
              "I stopped checking my face in my phone camera on dates."
            </p>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">— Maya, 28</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
