"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EditorialProof() {
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
      <div className="max-w-4xl mx-auto px-6 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-500 mb-3 block">
            The Evidence
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-[#1B1716]">
            Identity Shifts
          </h2>
        </div>

        {/* High-fashion editorial text columns separated by horizontal rules */}
        <div className="border-t border-b border-[#2D2624]/20 py-4 text-left">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 gap-2">
            <p className="font-serif italic text-2xl md:text-3xl text-[#1B1716]">
              "I stopped checking mirrors."
            </p>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">— Sarah</span>
          </div>
          
          <div className="border-t border-[#2D2624]/20" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 gap-2">
            <p className="font-serif italic text-2xl md:text-3xl text-[#1B1716]">
              "I finally stopped restarting."
            </p>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">— Chloe</span>
          </div>

          <div className="border-t border-[#2D2624]/20" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 gap-2">
            <p className="font-serif italic text-2xl md:text-3xl text-[#1B1716]">
              "It wasn't another routine."
            </p>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">— Emily</span>
          </div>

        </div>

        {/* Underlay: Fading upwards DMs & IG Comments - no layout boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-8">
          
          {/* Direct Messages */}
          <div className="space-y-8 text-left">
            <h3 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-500">
              Direct Messages
            </h3>
            <div className="space-y-6">
              {dms.map((dm, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="space-y-2 border-l border-[#810100]/20 pl-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#1B1716]">{dm.user}</span>
                    <span className="text-[9px] text-[#810100] font-semibold uppercase tracking-wider">✓ Verified Buyer</span>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed font-serif italic">
                    "{dm.message}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Instagram Comments */}
          <div className="space-y-8 text-left">
            <h3 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-500">
              Community Comments
            </h3>
            <div className="space-y-6">
              {comments.map((comment, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E5E2D2] flex items-center justify-center font-bold text-[10px] text-neutral-600 shrink-0 border border-[#2D2624]/5">
                    {comment.handle[1].toUpperCase()}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold text-[#1B1716]">{comment.handle}</span>
                      <span className="text-[9px] text-neutral-400">Community Member</span>
                    </div>
                    <p className="text-sm text-neutral-600 leading-normal font-serif">
                      {comment.comment}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
