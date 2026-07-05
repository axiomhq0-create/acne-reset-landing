"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollStack from "@/components/ScrollStack";
import ProductReveal from "@/components/ProductReveal";
import Proof from "@/components/Proof";
import FAQ from "@/components/FAQ";
import FinalPurchase from "@/components/FinalPurchase";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
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
    <main className="w-full relative min-h-screen bg-[#EDEBDE] block overflow-x-hidden text-[#1B1716] font-sans antialiased selection:bg-[#810100] selection:text-white">
      {/* 1. Global Navigation Frame */}
      <Header scrollToSection={scrollToSection} />

      {/* 2. Hero Section - Cotton Canvas, Left Copy, Right Float Portrait Image */}
      <Hero />

      {/* 3. Emotional Interlude - Full Width Dark Cinematic Portrait with Centered Text */}
      <div className="relative w-full min-h-[60vh] flex items-center justify-center bg-zinc-900 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 opacity-60">
          <Image 
            src="/The_background_is_light_and_202606261423.jpeg" 
            fill 
            className="object-cover" 
            alt="Emotional Mirror State" 
          />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        {/* Centered Payoff Text */}
        <h2 className="relative z-10 font-serif text-3xl md:text-5xl text-white text-center tracking-tight max-w-2xl px-6 leading-tight drop-shadow-md">
          Imagine waking up and not thinking about your skin first.
        </h2>
      </div>

      {/* 4. The Protocol Scroll Stack Section - Sticky Card Cascade Layer */}
      <ScrollStack />

      {/* 5. Product Reveal / Unboxing Section - Large Centered Mockup Display */}
      <ProductReveal />

      {/* 6. Identity Shifts / Editorial Proof Section - Rule-Separated Quotes & Grid Metrics */}
      <Proof />

      {/* 7. Frequently Asked Questions Section - Minimal Opaque Accordions */}
      <FAQ />

      {/* 8. Final Purchase Climax - Centered Payoff Callout with Mockup Capsule Box */}
      <FinalPurchase />

      {/* 9. Global Editorial Footer - Noir Black Underlay Canvas */}
      <Footer />
    </main>
  );
}
