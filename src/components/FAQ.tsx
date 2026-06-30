"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is this a replacement for seeing a dermatologist?",
    answer: "No — and it doesn't try to be. If your skin needs medical treatment, this works alongside that care, not instead of it. The system is built around skincare education and structure, not diagnosis.",
  },
  {
    question: "How long until I see results?",
    answer: "Calm is 21 days. Clear is 45 days. Maintain is ongoing. We're not going to give you a number we can't stand behind. What we can tell you is that the phases are designed so your skin is never working against the step it's in.",
  },
  {
    question: "I don't know my skin type or which actives to use?",
    answer: "That's what the Product Selection Guide and Calm Phase Product Guide are built for. You don't need to know anything before you start — the guides walk you through exactly what to use and why.",
  },
  {
    question: "Can I start with Calm or The Roadmap and upgrade later?",
    answer: "Yes. Both are built as entry points into the same system. When you're ready to continue, the path is already there.",
  },
  {
    question: "I've already tried everything.",
    answer: "Then you already know the problem isn't the ingredients. The 3-Phase Reset wasn't built around finding one miracle product. It was built around giving your skin a structure that makes whatever you use actually work. The missing piece was never the product. It was the order.",
  },
  {
    question: "Is this a subscription?",
    answer: "No. Every product is a one-time purchase. No recurring charges. No surprises.",
  },
  {
    question: "How do I get support?",
    answer: "Through our official social channels. We respond within 24–48 hours.",
  },
];

const easeOutPremium = [0.16, 1, 0.3, 1] as const;

const scrollAnimateProps = {
  initial: { opacity: 0, transform: "translate3d(0, 10px, 0)" },
  whileInView: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  viewport: { once: false, amount: 0.15 }, // Bi-directional scroll wrapper config
  transition: { duration: 0.45, ease: easeOutPremium },
};

export default function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F4E9DD] border-t border-[#1A1B12]/5">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          {...scrollAnimateProps}
          className="text-center mb-16"
          style={{ willChange: "transform, opacity" }}
        >
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6E68] mb-3 block">Answers</span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1A1B12]">Common Questions</h2>
        </motion.div>

        <div className="border-t border-[#1A1B12]/10 divide-y divide-[#1A1B12]/10">
          {faqData.map((item, index) => {
            const isOpen = expandedFaq === index;
            return (
              <div key={index} className="py-5 text-left">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left py-2 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-serif font-medium text-[#1A1B12] group-hover:text-bloomDeep transition-colors duration-200 pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-[#6B6E68] group-hover:text-[#1A1B12] shrink-0"
                  >
                    <motion.div>
                      <ChevronDown size={20} />
                    </motion.div>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }} // Explicit 0.2s ease-in-out height expansion
                      className="overflow-hidden"
                    >
                      <p className="pt-2 pb-4 text-[#6B6E68] text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
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
