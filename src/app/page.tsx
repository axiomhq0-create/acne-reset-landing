"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import ScrollStack from "@/components/ScrollStack";
import Unboxing from "@/components/Unboxing";
import EditorialProof from "@/components/EditorialProof";
import EmotionalPayoff from "@/components/EmotionalPayoff";
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
    <div className="bg-[#EDEBDE] text-[#1B1716] min-h-screen font-sans antialiased selection:bg-[#810100] selection:text-white">
      {/* Navigation Header */}
      <Header scrollToSection={scrollToSection} />

      {/* SECTION 1: THE HERO */}
      <Hero />

      {/* SECTION 2: THE PRODUCT */}
      <ProductGallery />

      {/* SECTION 3: THE PROTOCOL */}
      <ScrollStack />

      {/* SECTION 4: THE UNBOXING */}
      <Unboxing />

      {/* SECTION 5: EDITORIAL PROOF */}
      <EditorialProof />

      {/* SECTION 6: EMOTIONAL PAYOFF */}
      <EmotionalPayoff />

      {/* SECTION 7: THE ACCORDION FAQ */}
      <FAQ />

      {/* SECTION 8: FINAL PURCHASE TIER */}
      <FinalPurchase />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
