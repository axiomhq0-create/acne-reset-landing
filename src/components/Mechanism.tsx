"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ZapOff, RefreshCcw } from "lucide-react";

export default function Mechanism() {
  const cards = [
    {
      icon: <ShieldAlert className="text-[#810100]" size={32} />,
      title: "Stripping the Barrier",
      description: "Harsh cleansers destroy your skin's natural lipid defense shield, keeping the surface in a state of chronic, reactive inflammation.",
    },
    {
      icon: <ZapOff className="text-[#810100]" size={32} />,
      title: "Over-Treating Flare-Ups",
      description: "Attacking active blemishes with aggressive spot treatments ignores the underlying cellular cycle and irritates surrounding tissue.",
    },
    {
      icon: <RefreshCcw className="text-[#810100]" size={32} />,
      title: "Lack of a Maintenance Loop",
      description: "Stopping your routine the moment your skin temporarily clears guarantees the next flare-up cycle will start again from scratch.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#EDEBDE] text-[#1B1716] border-t border-b border-[#2D2624]/10 relative z-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Core Anchor Sentence Frame */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6E68] mb-4 block">
            Why isolated products fail
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight leading-[1.1] text-[#1B1716]">
            Products aren't designed to work in sequence. <span className="italic font-normal block mt-2 text-[#6B6E68]">Your skin is.</span>
          </h2>
        </div>

        {/* 3 Minimalist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#EDEBDE] border border-[#2D2624]/10 rounded-2xl p-6 md:p-8 flex flex-col items-start text-left space-y-4 hover:border-[#810100]/25 transition-colors duration-300"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm border border-[#2D2624]/5">
                {card.icon}
              </div>
              <h3 className="text-lg md:text-xl font-serif font-semibold text-[#1B1716]">
                {card.title}
              </h3>
              <p className="text-sm text-[#6B6E68] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
