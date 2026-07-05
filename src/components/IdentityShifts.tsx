"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IdentityShifts() {
  const metrics = [
    {
      value: "92%",
      label: "Morning Calm",
      description: "Reported they no longer check the mirror first thing after waking up."
    },
    {
      value: "89%",
      label: "Fast Recovery",
      description: "Saw a significant reduction in skin reactiveness within Phase 1 (Days 1-21)."
    },
    {
      value: "94%",
      label: "Routine Control",
      description: "Felt confident matching their existing skincare products to the Reset sequence."
    }
  ];

  return (
    <section className="py-24 bg-[#EDEBDE] text-[#1B1716] relative z-20 border-b border-[#2D2624]/10">
      <div className="max-w-[1280px] mx-auto px-6 space-y-16">
        
        {/* Intro header */}
        <div className="max-w-2xl text-left space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-500 block">
            Clinical Proof & Feedback
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight font-normal leading-tight">
            Proof in the process. <br />Not in the claims.
          </h2>
        </div>

        {/* Rule-separated grid metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-[#1B1716]/10">
          {metrics.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="space-y-4 pr-6 md:border-r last:border-r-0 border-[#1B1716]/10"
            >
              <div className="font-serif text-5xl md:text-6xl text-[#810100] font-light">
                {item.value}
              </div>
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1B1716]">
                  {item.label}
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed font-light max-w-xs">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
