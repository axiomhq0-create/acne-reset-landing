"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import ScrollStack from "@/components/ScrollStack";
import Unboxing from "@/components/Unboxing";
import Results from "@/components/Results";
import EmotionalPayoff from "@/components/EmotionalPayoff";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
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
    <div className="bg-[#EDEBDE] text-[#1B1716] min-h-screen font-sans antialiased selection:bg-[#810100] selection:text-white">
      {/* Navigation Header */}
      <Header scrollToSection={scrollToSection} />

      {/* STAGE 1: HERO KEYNOTE */}
      <Hero scrollToSection={scrollToSection} />

      {/* STAGE 2: MASSIVE PRODUCT SHOWCASE */}
      <ProductShowcase />

      {/* STAGE 3: THE SCROLL STACK */}
      <ScrollStack />

      {/* STAGE 4: EVERYTHING INCLUDED AS AN UNBOXING */}
      <Unboxing />

      {/* STAGE 5: EDITORIAL PROOF & IDENTITY SHIFTS */}
      <Results />

      {/* STAGE 6: THE EMOTIONAL PAYOFF */}
      <EmotionalPayoff />

      {/* STAGE 7: ACCORDION FAQ */}
      <FAQ />

      {/* STAGE 8: THE MASSIVE CLOSING CTA */}
      <Pricing />

      {/* Footer Navigation & Legal Block */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
