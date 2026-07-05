"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Proof() {
  const testimonials = [
    {
      quote: "I stopped checking my face in my phone camera on dates.",
      author: "Maya, 28"
    },
    {
      quote: "I went to my cousin's wedding without foundation for the first time in 6 years.",
      author: "Priya, 24"
    },
    {
      quote: "I no longer check the lighting angle before entering a restaurant.",
      author: "Sarah, 31"
    }
  ];

  const dms = [
    {
      user: "Jessica T.",
      message: "Hey! Just wanted to say I'm on Day 45 and I literally haven't had a new spot in 2 weeks. This is crazy. Usually I clear up then flare right back, but it actually feels calm."
    },
    {
      user: "Sophia K.",
      message: "Honestly thank you so much, the product guide alone saved me like $150. I threw out 4 cleansers that were basically peeling my skin off."
    }
  ];

  const comments = [
    { handle: "@iamkatie", comment: "The daily check-ins and tracker are so clutch, thank you guys 🙌" },
    { handle: "@elena_r", comment: "Best 97 bucks I've ever spent on my face. Period." },
    { handle: "@charlotte.b", comment: "Actually stuck to this for 90 days because it's a checklist, not just advice." }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#EDEBDE] text-[#1B1716] border-b border-[#2D2624]/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500 mb-3 block">
            Undeniable Results
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight leading-[1.1] text-[#1B1716]">
            Real Identity Shifts
          </h2>
          <p className="text-neutral-600 text-sm md:text-base mt-4">
            Skincare is personal, but results are visible. Here is how our customers describe life after the reset.
          </p>
        </div>

        {/* 1. Identity Testimonials Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#EDEBDE] border border-[#2D2624]/10 p-8 rounded-2xl text-left space-y-4 shadow-sm hover:border-[#810100]/25 transition-colors duration-300"
            >
              <span className="text-2xl text-[#810100] font-serif">“</span>
              <p className="font-serif italic text-base text-[#1B1716] leading-relaxed">
                {item.quote}
              </p>
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block">{item.author}</span>
            </motion.div>
          ))}
        </div>

        {/* 2. Chat DMs & IG Comments Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Simulated Raw DMs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-lg uppercase tracking-wider font-semibold text-neutral-500 mb-4">
              Direct Messages
            </h3>
            <div className="space-y-4 max-w-lg">
              {dms.map((dm, idx) => (
                <div key={idx} className="bg-white/45 backdrop-blur-sm border border-white/60 p-5 rounded-2xl rounded-tl-none text-left shadow-sm space-y-2">
                  <div className="flex items-center justify-between border-b border-[#2D2624]/5 pb-1">
                    <span className="text-xs font-bold text-[#1B1716]">{dm.user}</span>
                    <span className="text-[10px] text-neutral-400">✓ Verified Buyer</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-serif italic">
                    "{dm.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Simulated Instagram Threads */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-lg uppercase tracking-wider font-semibold text-neutral-500 mb-4">
              Community Comments
            </h3>
            <div className="space-y-3">
              {comments.map((comment, idx) => (
                <div key={idx} className="flex gap-3 border-b border-[#2D2624]/10 pb-4">
                  <div className="w-8 h-8 rounded-full bg-[#E5E2D2] flex items-center justify-center font-bold text-[10px] text-neutral-600 shrink-0 border border-[#2D2624]/5">
                    {comment.handle[1].toUpperCase()}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold text-[#1B1716]">{comment.handle}</span>
                      <span className="text-[9px] text-[#810100] font-semibold">Active Member</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-normal">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
