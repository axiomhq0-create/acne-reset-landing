"use client";

import React from "react";
import { Layers, Ban, CreditCard, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Objections() {
  const items = [
    {
      icon: <Layers className="text-[#C4956A]" size={24} />,
      text: "Works with products you already own",
    },
    {
      icon: <Ban className="text-[#C4956A]" size={24} />,
      text: "No subscription, ever",
    },
    {
      icon: <Download className="text-[#C4956A]" size={24} />,
      text: "Instant digital access",
    },
    {
      icon: <CreditCard className="text-[#C4956A]" size={24} />,
      text: "One-time $97",
    },
  ];

  return (
    <section className="py-12 bg-[#FAF7F2] text-[#1A1612] relative z-20 border-t border-b border-[#2D2624]/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#2D2624]/5">
                {item.icon}
              </div>
              <p className="text-xs md:text-sm font-semibold text-[#2D2624] leading-snug max-w-[150px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
