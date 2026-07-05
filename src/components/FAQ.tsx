"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "How is this different from buying another skincare product?",
      answer: "We don't sell you serums or cleansers. We give you the sequential protocol showing you when and how to use products you already own. Skin resetting is about routine timing and lipid-barrier preservation, not product overload."
    },
    {
      question: "Does it work with sensitive or highly reactive skin?",
      answer: "Yes. Phase 1 (CALM) is entirely focused on down-regulating inflammation, rebuilding the moisture barrier, and calming active flare-ups before targeted active treatments are introduced in Phase 2."
    },
    {
      question: "Can I use my existing products during the protocol?",
      answer: "Absolutely. The program teaches you how to map your current shelf onto the protocol sequence, prioritizing, omitting, or timing them to achieve clear skin."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 90-day money-back guarantee. If you follow the protocol sequence and don't see stabilizing changes in your skin, simply email us for a full refund."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#EDEBDE] text-[#1B1716] relative z-20">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-500 block">
            Questions & Answers
          </span>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight font-normal">
            Frequently Asked
          </h2>
        </div>

        <div className="space-y-4 pt-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white/40 border border-[#1B1716]/5 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-white/10"
                >
                  <span className="font-serif text-lg md:text-xl text-[#1B1716] pr-4">
                    {faq.question}
                  </span>
                  <span className="text-neutral-500 text-lg transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm md:text-base text-neutral-700 leading-relaxed font-light border-t border-[#1B1716]/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
