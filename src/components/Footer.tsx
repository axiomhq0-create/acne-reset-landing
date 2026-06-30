"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightWrapper from "./SpotlightWrapper";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const scrollAnimateProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <>
      {/* Commitment & Final CTA Block - Signature Blush (bg-[#EBC8BE]) */}
      <section className="bg-[#EBC8BE] border-t border-[#1A1B12]/5 pt-28 pb-24">
        {/* COMMITMENT BANNER */}
        <div className="max-w-3xl mx-auto px-6 text-center mb-24">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6E68] mb-3 block">Our Commitment</span>
          <p className="text-[#1A1B12] font-serif text-xl md:text-2xl leading-relaxed italic">
            "This system was built to work. If you follow it and feel stuck, reach out through our official social channels and tell us what's happening. We'd rather help you move forward than leave you guessing."
          </p>
        </div>

        {/* FINAL CTA */}
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.div 
            {...scrollAnimateProps}
            className="flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6E68] mb-6">
              Begin Today
            </span>
            
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A1B12] font-semibold tracking-tight leading-[1.1] max-w-2xl mb-8">
              The mirror used to mean something good. <span className="italic block font-normal text-3xl md:text-4xl text-[#6B6E68] mt-4">It still can.</span>
            </h2>

            <div className="max-w-xl text-[#6B6E68] space-y-4 text-base md:text-lg leading-relaxed mb-10">
              <p>
                The person who stopped checking — who learned not to care, not to look, not to hope — that's not you.
              </p>
              <p>
                That's just who you became while you were waiting for something that worked.
              </p>
              <p className="font-semibold text-[#1A1B12] text-xl">
                This is what works.
              </p>
            </div>

            <SpotlightWrapper 
              className="rounded-full overflow-hidden shadow-sm"
              spotlightColor="rgba(255, 255, 255, 0.45)"
            >
              <button 
                onClick={() => scrollToSection("pricing")}
                className="w-full bg-[#E8C4B8] text-[#1A1B12] px-12 py-4 font-semibold text-lg transition-all duration-200 hover:scale-[1.02] hover:bg-[#DCA596] rounded-full font-serif"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.45)', // Razor-sharp silver boundary seam
                  boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)'
                }}
              >
                Begin Your Reset
              </button>
            </SpotlightWrapper>
            <span className="text-xs text-[#6B6E68] mt-4">Start where you are.</span>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation & Legal Block - Muted Taupe (bg-[#E3DCD5]) */}
      <section className="bg-[#E3DCD5] border-t border-[#1A1B12]/10 py-12">
        <footer className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8">
            <div className="flex flex-col items-start max-w-md text-left">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-6 flex items-center">
                  <svg viewBox="0 0 120 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" suppressHydrationWarning>
                    <path d="M18 62 C42 52 78 30 102 18" stroke="#E2C4B5" strokeWidth="1.5" fill="none" suppressHydrationWarning />
                    <circle cx="18" cy="62" r="9" stroke="#1A1B12" strokeWidth="1.5" fill="none" suppressHydrationWarning />
                    <circle cx="60" cy="40" r="11" stroke="#1A1B12" strokeWidth="1.5" fill="rgba(226,196,181,0.25)" suppressHydrationWarning />
                    <circle cx="102" cy="18" r="13" fill="#1A1B12" stroke="#1A1B12" strokeWidth="1.5" suppressHydrationWarning />
                  </svg>
                </div>
                <span className="font-serif font-semibold text-lg tracking-tight">the Acne Reset</span>
              </div>
              <p className="text-xs text-[#6B6E68] leading-relaxed">
                The problem was never that you hadn't found the right product. It was that you'd never had the right process.
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-2 text-left md:text-right">
              <p className="text-xs text-[#6B6E68] max-w-xs leading-normal">
                Educational skincare guidance only. Not medical advice.
              </p>
              <p className="text-xs text-[#6B6E68]">
                Support: Contact us through our official social channels.
              </p>
            </div>
          </div>

          <div className="border-t border-[#1A1B12]/5 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[#6B6E68] gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} The Acne Reset. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-stone-400 text-xs hover:text-stone-600 transition-colors duration-200">
                Privacy & Terms
              </Link>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
