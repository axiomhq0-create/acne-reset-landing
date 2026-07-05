"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProductGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scale softly from 96% to 100% on scroll intersection
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.9], [0.96, 1.0, 0.96]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#EDEBDE] text-[#1B1716] relative z-20 overflow-hidden border-b border-[#2D2624]/10">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        
        {/* Gallery Label */}
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-500 block">
          Gallery Collection
        </span>

        {/* Softly scaling mockup */}
        <motion.div 
          style={{ scale }}
          className="relative w-full aspect-[16/10] max-w-[700px] mx-auto bg-[#FAF8F5]/40 rounded-[32px] border border-[#2D2624]/5 shadow-sm p-6 flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full h-full transform hover:scale-[1.02] transition-transform duration-700">
            <Image 
              src="/assets/transformation-1.png"
              alt="Acne Reset Complete digital collection suite"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
        </motion.div>

        {/* Minimalist Footer Frame */}
        <div className="space-y-4 pt-4">
          <div className="text-3xl font-serif font-bold text-[#1B1716]">
            $97
          </div>
          <p className="text-sm text-neutral-500 font-medium">
            One payment. Everything included.
          </p>
          <div className="pt-2">
            <a 
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("pricing");
              }}
              className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-[#810100] hover:text-[#630102] transition-colors border-b border-[#810100]/30 hover:border-[#630102] pb-1 cursor-pointer"
            >
              [ Start The Transformation ]
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
