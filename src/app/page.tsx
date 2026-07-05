"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SlowdownInterlude from "@/components/SlowdownInterlude";
import ScrollStack from "@/components/ScrollStack";
import ProductReveal from "@/components/ProductReveal";
import SocialProof from "@/components/SocialProof";
import EmotionalResolution from "@/components/EmotionalResolution";
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
    <main className="w-full relative min-h-screen bg-[#EDEBDE] block text-[#1B1716] font-sans antialiased selection:bg-[#810100] selection:text-white">
      {/* Global Navigation Frame */}
      <Header scrollToSection={scrollToSection} />

      {/* 🏛️ CHAPTER 1: THE HERO */}
      <Hero />

      {/* 🎬 CHAPTER 2: THE SLOWDOWN INTERLUDE */}
      <SlowdownInterlude />

      {/* ⏳ CHAPTER 3: THE PROTOCOL STACK */}
      <ScrollStack />

      {/* 📱 CHAPTER 4: THE PRODUCT REVEAL */}
      <ProductReveal />

      {/* 💬 CHAPTER 5: SOCIAL PROOF */}
      <SocialProof />

      {/* 🕊️ CHAPTER 6: THE EMOTIONAL RESOLUTION */}
      <EmotionalResolution />

      {/* 💳 CHAPTER 7: FINAL CTA CLIMAX */}
      <FinalCTA />

      {/* Global Editorial Footer */}
      <Footer />
    </main>
  );
}
