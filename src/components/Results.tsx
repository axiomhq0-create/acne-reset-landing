"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Results() {
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
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500 mb-3 block">
            The Evidence
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-[#1B1716]">
            Identity Shifts
          </h2>
        </div>

        {/* High-fashion editorial text columns separated by horizontal rules */}
        <div className="border-t border-b border-[#2D2624]/20 py-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 text-left gap-2">
            <p className="font-serif italic text-2xl md:text-3xl text-[#1B1716]">
              "I stopped checking mirrors."
            </p>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">— Sarah</span>
          </div>
          
          <div className="border-t border-[#2D2624]/10" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 text-left gap-2">
            <p className="font-serif italic text-2xl md:text-3xl text-[#1B1716]">
              "I finally stopped restarting."
            </p>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">— Chloe</span>
          </div>

          <div className="border-t border-[#2D2624]/10" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 text-left gap-2">
            <p className="font-serif italic text-2xl md:text-3xl text-[#1B1716]">
              "It wasn't another routine."
            </p>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">— Emily</span>
          </div>

        </div>

        {/* Sub-grid with DMs & IG Comments stream */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-8">
          
          {/* Direct Messages */}
          <div className="space-y-6 text-left">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-neutral-400">
              Direct Messages
            </h3>
            <div className="space-y-4">
              {dms.map((dm, idx) => (
                <div key={idx} className="bg-white/45 backdrop-blur-sm border border-white/60 p-5 rounded-2xl rounded-tl-none text-left shadow-sm space-y-2">
                  <div className="flex items-center justify-between border-b border-[#2D2624]/5 pb-1">
                    <span className="text-xs font-bold text-[#1B1716]">{dm.user}</span>
                    <span className="text-[9px] text-neutral-400">✓ Verified Buyer</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-serif italic">
                    "{dm.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram Comments */}
          <div className="space-y-6 text-left">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-neutral-400">
              Community Comments
            </h3>
            <div className="space-y-4">
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
