"use client";

import React from "react";

export default function Qualifications() {
  return (
    <section className="py-12 px-6 bg-[#FAF6F0] text-[#1A1612] border-t border-b border-[#2D2624]/10">
      <div className="max-w-xl mx-auto space-y-8">
        
        {/* This is for you if */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl md:text-2xl italic">This is for you if...</h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <span className="text-[#E8C4B8] font-bold">✓</span>
              <span>You've tried 5+ products and still hide from photos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E8C4B8] font-bold">✓</span>
              <span>Your skin is reactive and nothing "sticks"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E8C4B8] font-bold">✓</span>
              <span>You're tired of starting over every month</span>
            </li>
          </ul>
        </div>

        <div className="border-t border-neutral-200 my-6" />

        {/* This is NOT for you if */}
        <div className="space-y-3">
          <h3 className="font-serif text-xl md:text-2xl italic">This is <span className="underline decoration-[#E8C4B8]">NOT</span> for you if...</h3>
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
            You want overnight results or a magic cream.
          </p>
        </div>

      </div>
    </section>
  );
}
