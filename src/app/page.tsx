"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CinematicInterlude from "@/components/CinematicInterlude";
import ScrollStack from "@/components/ScrollStack";
import ProductReveal from "@/components/ProductReveal";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
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
    <main className="w-full relative min-h-screen bg-[#EDEBDE] block overflow-x-hidden text-[#1B1716] antialiased scroll-smooth selection:bg-[#810100] selection:text-white">
      {/* Global Navigation Frame */}
      <Header scrollToSection={scrollToSection} />

      {/* Scene Array Stacking Natively for Perfect Fluid Pacing */}
      <div className="w-full block relative space-y-0">
        <Hero />
        <CinematicInterlude />
        <ScrollStack />
        <ProductReveal />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </div>

      {/* Global Editorial Footer */}
      <Footer />
    </main>
  );
}
