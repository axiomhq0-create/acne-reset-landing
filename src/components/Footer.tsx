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
