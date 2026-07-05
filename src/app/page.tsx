"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EverythingIncluded from "@/components/EverythingIncluded";
import ScrollStack from "@/components/ScrollStack";
import Proof from "@/components/Proof";
import WhyItSticks from "@/components/WhyItSticks";
import Guarantee from "@/components/Guarantee";
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
    <div className="bg-linen text-ink min-h-screen font-sans antialiased selection:bg-[#810100] selection:text-white">
      {/* Navigation Header */}
      <Header scrollToSection={scrollToSection} />

      {/* 1. HERO KEYNOTE */}
      <Hero scrollToSection={scrollToSection} />

      {/* 2. EVERYTHING INCLUDED "UNBOXING" */}
      <EverythingIncluded />

      {/* 3. HOW THE PROTOCOL WORKS (The Clean Sequence) */}
      <ScrollStack />

      {/* 4. RESULTS & SOCIAL PROOF DOMINANCE */}
      <Proof />

      {/* 5. WHY PEOPLE FINALLY STICK WITH IT */}
      <WhyItSticks />

      {/* 6. THE 14-DAY FEEL CALMER GUARANTEE */}
      <Guarantee />

      {/* 7. ACCORDION FAQ */}
      <FAQ />

      {/* 8. FINAL CLOSING CTA */}
      <Pricing />

      {/* Footer Navigation & Legal Block */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
