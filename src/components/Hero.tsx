"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SpotlightWrapper from "./SpotlightWrapper";

export default function Hero() {
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
    <section className="relative min-h-screen w-full flex flex-col justify-center py-28 md:py-32 px-6 md:px-12 bg-[#EDEBDE] text-[#1B1716] overflow-hidden z-20">
      
      {/* Sunlight studio subtle overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30 mix-blend-color-burn">
        <div className="sunlight-mesh absolute inset-[-10%] w-[120%] h-[120%]" />
      </div>

      {/* Very soft transparent vignette overlay strictly behind left text container to lock contrast */}
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[60%] bg-gradient-to-r from-black/5 via-black/[0.02] to-transparent pointer-events-none z-10" />

      <div className="relative z-20 w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* Left Column Copy Stack */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-10">
          <div className="space-y-6 w-full">
            
            {/* Massive Serif Headline (72–84px) */}
            <h1 className="text-5xl sm:text-6xl md:text-[80px] font-serif text-[#1B1716] tracking-tight leading-[1.05] max-w-2xl font-medium">
              You don't have to pretend the mirror doesn't matter.
            </h1>

            {/* Body Copy - Narrowed significantly to prevent reading fatigue */}
            <p className="text-[#1B1716]/70 text-sm md:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
              This page won't tell you to love yourself first and skincare second. It's here to help with both, in the right order.
            </p>

            {/* High-Contrast Spacing: Expand the vertical air between copy and CTA button */}
            <div className="h-4" />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <div className="w-full sm:w-auto">
                <SpotlightWrapper 
                  className="rounded-full w-full overflow-hidden shadow-sm"
                  spotlightColor="rgba(255, 255, 255, 0.45)"
                >
                  <a 
                    href="#pricing"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("pricing");
                    }}
                    className="relative overflow-hidden w-full bg-[#810100] hover:bg-[#630102] transition-transform hover:-translate-y-0.5 shadow-lg text-white rounded-full py-4 px-10 text-center font-medium tracking-wide block cursor-pointer"
                  >
                    <span className="relative z-10">Get the Protocol</span>
                  </a>
                </SpotlightWrapper>
              </div>

              <a 
                href="#protocol"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("protocol");
                }}
                className="w-full sm:w-auto border border-[#1B1716]/30 hover:border-[#1B1716] text-[#1B1716] bg-[#EDEBDE]/40 backdrop-blur-sm rounded-full py-4 px-10 text-center font-medium tracking-wide block transition-colors cursor-pointer"
              >
                The Framework
              </a>
            </div>

            {/* Italic Quote Footnote */}
            <div className="pt-4">
              <p className="text-xs italic text-[#1B1716]/60 font-serif">
                "A process before products. A system before routines."
              </p>
            </div>

            {/* Divider line */}
            <div className="w-full max-w-md border-t border-[#1B1716]/10 pt-6" />

            {/* Trust Row Matrix Text */}
            <div className="text-[9px] tracking-[0.3em] font-semibold text-[#1B1716]/60 leading-normal uppercase">
              90-Day Framework &bull; Works with any products &bull; Built around process
            </div>

          </div>
        </div>

        {/* Right Column Display: Massive Raw Portrait Image */}
        <div className="w-full flex items-center justify-center lg:justify-end overflow-visible">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[550px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-white/20"
          >
            {/* The natural sunlight portrait */}
            <Image 
              src="/ChatGPT Image Jul 1, 2026, 01_08_27 PM.png"
              alt="Protagonist woman in soft natural morning sunlight looking directly into camera with real skin texture and vulnerability"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 550px"
            />
          </motion.div>
        </div>

      </div>

    </section>
  );
}
