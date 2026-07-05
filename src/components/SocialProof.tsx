"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SocialProof() {
  const quotes = [
    "I stopped checking mirrors.",
    "I finally stopped restarting.",
    "It became automatic."
  ];

  const comments = [
    { text: "Day 45 and I literally don't remember the last time I woke up checking for new spots.", author: "@clara_m" },
    { text: "The calm phase saved my skin. I used to scrub so hard whenever I broke out.", author: "@dan.k" },
    { text: "Honestly, just having a checklist to follow instead of scrolling TikTok for product recommendations is worth it.", author: "@sarah.resets" },
    { text: "My friends noticed before I did. The daily check-ins kept me consistent.", author: "@julie_b" },
    { text: "For the first time in 5 years, I didn't buy a new serum this month. Just stuck to the maintenance roadmap.", author: "@marcus_t" },
    { text: "No morning mirror panic anymore.", author: "@hannah_s" }
  ];

  return (
    <section className="py-28 md:py-32 bg-[#EDEBDE] text-[#1B1716] border-b border-[#2D2624]/10 relative z-20 overflow-hidden">
      
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        {/* Left Column (Editorial Quotes Stack) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-12 relative z-20">
          
          {quotes.map((quote, idx) => (
            <div key={idx} className="w-full">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                className="font-serif text-3xl md:text-5xl text-[#1B1716] tracking-tight pb-8"
              >
                "{quote}"
              </motion.h3>
              {idx < quotes.length - 1 && (
                <div className="w-full border-t border-[#1B1716]/10" />
              )}
            </div>
          ))}

        </div>

        {/* Right Column (Waterfall Cascade of comments & DMs) */}
        <div className="lg:col-span-5 relative min-h-[450px] flex flex-col justify-center overflow-hidden z-10">
          
          {/* Scroll fade overlay masks */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#EDEBDE] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#EDEBDE] to-transparent z-20 pointer-events-none" />

          {/* Underlay Waterfall List */}
          <div className="space-y-4">
            {comments.map((comment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.85, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1 * idx }}
                className="bg-white/40 border border-[#1B1716]/5 p-5 rounded-[20px] shadow-sm space-y-2 backdrop-blur-sm"
              >
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-light italic">
                  "{comment.text}"
                </p>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-neutral-500 font-mono">
                  <span>Verified Reset Member</span>
                  <span>{comment.author}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
