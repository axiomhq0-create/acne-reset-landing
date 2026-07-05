"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyItSticks() {
  const items = [
    {
      title: "Daily check-ins",
      description: "Simple tracking tools keep you accountable without adding friction to your morning or evening routine."
    },
    {
      title: "Clear next step",
      description: "You'll always know exactly what phase you're in, what to look for, and when to move to the next level."
    },
    {
      title: "No guessing",
      description: "Every day has clear parameters. No wondering if you're doing too much or if you've missed something."
    },
    {
      title: "Built around the products you already own",
      description: "No mandatory multi-step cleanser lines or custom product bundles to buy. Keep using what works for you."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#EDEBDE] text-[#1B1716] border-b border-[#2D2624]/10 relative z-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500 mb-3 block">
            Operational Certainty
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight leading-[1.1] text-[#1B1716]">
            Why People Finally Stick With It
          </h2>
          <p className="text-neutral-600 text-sm md:text-base mt-4">
            Skincare fails when it requires too much cognitive load or constant starting over. The Protocol is structured for seamless consistency.
          </p>
        </div>

        {/* 4-Item Bullet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex items-start gap-4 text-left"
            >
              <div className="w-6 h-6 rounded-full bg-[#810100]/10 flex items-center justify-center text-[#810100] shrink-0 mt-1">
                <Check size={14} className="stroke-[3]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-serif font-semibold text-[#1B1716]">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
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
