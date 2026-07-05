"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mechanism from "@/components/Mechanism";
import Phases from "@/components/Phases";
import WhatsInside from "@/components/WhatsInside";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
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
    <div className="bg-linen text-ink min-h-screen font-sans antialiased selection:bg-bloomDeep selection:text-[#1A1B12]">
      {/* Navigation Header */}
      <Header scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />

      {/* Mechanism Section */}
      <Mechanism />

      {/* Phases Showcase Section */}
      <Phases />

      {/* What's Inside Section */}
      <WhatsInside />

      {/* Offerings Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA & Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
