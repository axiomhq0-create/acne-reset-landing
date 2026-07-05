"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-[#1B1716] text-[#EDEBDE] border-t border-[#EDEBDE]/10 py-16 z-20 relative">
      <footer className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8">
          
          <div className="flex flex-col items-start max-w-md text-left space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-6 flex items-center">
                <svg viewBox="0 0 120 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" suppressHydrationWarning>
                  <path d="M18 62 C42 52 78 30 102 18" stroke="#EDEBDE" strokeWidth="1.5" fill="none" suppressHydrationWarning />
                  <circle cx="18" cy="62" r="9" stroke="#EDEBDE" strokeWidth="1.5" fill="none" suppressHydrationWarning />
                  <circle cx="60" cy="40" r="11" stroke="#EDEBDE" strokeWidth="1.5" fill="rgba(237,235,222,0.25)" suppressHydrationWarning />
                  <circle cx="102" cy="18" r="13" fill="#EDEBDE" stroke="#EDEBDE" strokeWidth="1.5" suppressHydrationWarning />
                </svg>
              </div>
              <span className="font-serif font-semibold text-lg tracking-tight text-[#EDEBDE]">the Acne Reset</span>
            </div>
            <p className="text-xs text-[#EDEBDE]/60 leading-relaxed">
              The problem was never that you hadn't found the right product. It was that you'd never had the right process.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-left md:text-right text-[#EDEBDE]/60">
            <p className="text-xs max-w-xs leading-normal">
              Educational skincare guidance only. Not medical advice.
            </p>
            <p className="text-xs">
              Support: Contact us through our official social channels.
            </p>
          </div>
        </div>

        <div className="border-t border-[#EDEBDE]/10 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[#EDEBDE]/50 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} The Acne Reset. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#EDEBDE]/50 hover:text-[#EDEBDE] transition-colors duration-200">
              Privacy & Terms
            </Link>
          </div>
        </div>

      </footer>
    </section>
  );
}
