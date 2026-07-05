"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-16 md:py-24 bg-[#EDEBDE] text-[#1B1716] border-b border-[#2D2624]/10 relative z-20">
      <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#810100]/10 flex items-center justify-center text-[#810100] mb-2">
          <ShieldCheck size={26} />
        </div>
        <h3 className="text-xl md:text-2xl font-serif font-semibold tracking-tight text-[#1B1716]">
          14-Day Feel Calmer Guarantee
        </h3>
        <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-serif italic max-w-lg">
          "If you don't feel more confident that you finally have a plan, email us. We'll refund you. Done."
        </p>
      </div>
    </section>
  );
}
