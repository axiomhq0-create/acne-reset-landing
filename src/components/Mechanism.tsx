"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ZapOff, RefreshCcw } from "lucide-react";

export default function Mechanism() {
  const cards = [
    {
      icon: <ShieldAlert className="text-[#810100]" size={32} />,
      title: "You start treating too early.",
      description: "When your skin is inflamed, every new active feels like progress—but it's often just more irritation. The redness gets worse, confidence drops, and another routine gets abandoned.",
    },
    {
      icon: <ZapOff className="text-[#810100]" size={32} />,
      title: "You mistake temporary improvement for recovery.",
      description: "A few clearer days make it feel like you've finally found the answer. Then the breakout comes back, and you're left wondering what you did wrong.",
    },
    {
      icon: <RefreshCcw className="text-[#810100]" size={32} />,
      title: "You keep starting from day one.",
      description: "New cleanser. New serum. New promise. Every restart resets your skin and your confidence, keeping you trapped in the same cycle.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#EDEBDE] text-[#1B1716] border-t border-b border-[#2D2624]/10 relative z-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Core Anchor Sentence Frame */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight leading-[1.2] text-[#1B1716] whitespace-pre-line">
            You didn't fail your routine. Your routine failed you.
            {"\n"}
            <span className="italic font-normal text-xl md:text-2xl text-[#6B6E68] mt-4 block">
              Every time you started over, your skin had to start over too.
            </span>
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

        {/* The Unbreakable Bridge Transition */}
        <div className="mt-20 border-t border-[#2D2624]/10 pt-16 text-center max-w-2xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#810100] block mb-2">
            Why nothing ever seems to stick:
          </span>
          <div className="space-y-4 text-[#1B1716]/80 font-serif italic text-base md:text-lg leading-relaxed">
            <p>Every breakout convinces you to change something.</p>
            <div className="text-[#810100] font-bold text-sm">↓</div>
            <p>Every change resets your progress.</p>
            <div className="text-[#810100] font-bold text-sm">↓</div>
            <p>Every restart feels like another failure.</p>
            <div className="text-[#810100] font-bold text-sm">↓</div>
            <p>Until you think your skin just doesn't respond.</p>
          </div>
          <div className="pt-8 space-y-2">
            <h4 className="text-2xl md:text-3xl font-serif font-semibold text-[#1B1716]">
              It isn't your skin.
            </h4>
            <h4 className="text-2xl md:text-3xl font-serif font-semibold text-[#810100] italic">
              It's the order.
            </h4>
          </div>
        </div>

      </div>
    </section>
  );
}
