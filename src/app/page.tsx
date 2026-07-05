"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TransformationFlow from "@/components/TransformationFlow";
import ScrollStack from "@/components/ScrollStack";
import ProductReveal from "@/components/ProductReveal";
import Proof from "@/components/Proof";
import FAQ from "@/components/FAQ";
import FinalPurchase from "@/components/FinalPurchase";
import Footer from "@/components/Footer";

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
    <main className="w-full relative min-h-screen bg-[#EDEBDE] block overflow-x-hidden overflow-y-auto text-[#1B1716] font-sans antialiased selection:bg-[#810100] selection:text-white">
      {/* Navigation Header */}
      <Header scrollToSection={scrollToSection} />

      {/* STAGE 1: THE HUMAN HERO */}
      <Hero />

      {/* STAGE 2: THE EMOTIONAL PAYOFF */}
      <TransformationFlow />

      {/* The Transition Banner */}
      <div className="w-full bg-[#1B1716] text-[#EDEBDE] py-12 px-6 text-center select-none pointer-events-none relative z-20">
        <p className="font-serif tracking-[0.2em] uppercase text-xs md:text-sm max-w-xl mx-auto opacity-80 leading-relaxed">
          The transition from routine to sequence begins below.
        </p>
      </div>

      {/* STAGE 3: THE TRANSFORMATION SEQUENCE */}
      <ScrollStack />

      {/* STAGE 4: THE SUBORDINATE PRODUCT REVEAL */}
      <ProductReveal />

      {/* STAGE 5: IDENTITY PROOF MATRIX */}
      <Proof />

      {/* FAQ ACCORDION */}
      <FAQ />

      {/* STAGE 6: THE CONFIDENCE CHECKOUT */}
      <FinalPurchase />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
