"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Qualifications from "@/components/Qualifications";
import WhatsInside from "@/components/WhatsInside";
import SocialProof from "@/components/SocialProof";
import Phases from "@/components/Phases";
import Story from "@/components/Story";
import Objections from "@/components/Objections";
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

      {/* Pre-Qualifier Grid Section */}
      <Qualifications />

      {/* What's Inside Section */}
      <WhatsInside />

      {/* Social Proof Section */}
      <SocialProof />

      {/* Phases Showcase Section */}
      <Phases />

      {/* Story Section */}
      <Story />

      {/* Objections Matrix Section */}
      <Objections />

      {/* Offerings Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA & Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
