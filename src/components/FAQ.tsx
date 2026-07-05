"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    q: "Is this medical advice?",
    a: "No. The Acne Reset Protocol is an educational system providing step-by-step skincare sequencing structure. If you have medical concerns or require prescription treatment, consult a board-certified dermatologist."
  },
  {
    q: "Do I need specific products?",
    a: "No. The system is designed to work with products you already own. We guide you on active ingredient categories, but you do not need to buy any specific brand or custom skincare line."
  },
  {
    q: "When do I get access?",
    a: "Immediately. As soon as your checkout is completed, you will receive an email link with instant access to the digital guides, trackers, and dashboard."
  },
  {
    q: "Is this lifetime?",
    a: "Yes. You pay once ($97) and receive lifetime access, including any future updates or additions to the protocol at no extra cost."
  },
  {
    q: "Can beginners use it?",
    a: "Yes, absolutely. The guides are written in plain, non-clinical terms, guiding you step-by-step from day 1 to day 90 with clear check-ins and instructions."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#EDEBDE] text-[#1B1716] border-b border-[#2D2624]/10 relative z-20">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500 mb-3 block">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight leading-[1.1] text-[#1B1716]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-[#2D2624]/10 pb-4 transition-colors duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between py-4 text-left font-serif font-semibold text-base md:text-lg text-[#1B1716] hover:text-[#810100] transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <span className="ml-4 shrink-0 text-[#810100]">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed pb-4">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
