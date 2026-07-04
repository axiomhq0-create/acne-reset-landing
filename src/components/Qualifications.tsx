"use client";

import React from "react";

export default function Qualifications() {
  return (
    <section className="py-12 px-6 bg-[#FAF6F0] text-[#1A1612] border-t border-b border-[#2D2624]/10">
      <div className="max-w-xl mx-auto space-y-8">
        
        {/* Is this for you? */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl md:text-2xl italic">Is this for you?</h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <span className="text-[#E8C4B8] font-bold">✓</span>
              <span>You've tried multiple products without lasting success</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E8C4B8] font-bold">✓</span>
              <span>Your skin calms for a while, then flares up again</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E8C4B8] font-bold">✓</span>
              <span>You're ready to follow a process instead of buying another product</span>
            </li>
          </ul>
        </div>

        <div className="border-t border-neutral-200 my-6" />

        {/* This is NOT for you if */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl md:text-2xl italic">This is <span className="underline decoration-[#E8C4B8]">NOT</span> for you if...</h3>
          <ul className="space-y-3 text-sm md:text-base text-neutral-600">
            <li className="flex items-start gap-3">
              <span className="text-[#E8C4B8] font-bold">✕</span>
              <span>You're looking for an overnight fix</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E8C4B8] font-bold">✕</span>
              <span>You aren't willing to stay consistent for 90 days</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
