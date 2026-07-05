"use client";

import React from "react";

export default function EmotionalPayoff() {
  return (
    <section className="py-32 px-6 bg-[#F3D5CE] text-center relative z-20 border-b border-[#2D2624]/10">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="font-serif text-3xl md:text-5xl text-[#1B1716] leading-tight">
          You're never going to wonder <br />what to do next again.
        </h2>
        <div className="space-y-2 text-base md:text-lg text-neutral-600 tracking-wide font-light">
          <p>No restarting.</p>
          <p>No guessing.</p>
          <p>No building another Sunday routine.</p>
          <p className="text-[#810100] font-medium mt-4">Just the next step.</p>
        </div>
      </div>
    </section>
  );
}
