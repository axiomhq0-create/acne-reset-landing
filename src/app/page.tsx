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
    <div className="bg-[#EDEBDE] text-[#1B1716] min-h-screen font-sans antialiased selection:bg-[#810100] selection:text-white">
      {/* Navigation Header */}
      <Header scrollToSection={scrollToSection} />

      {/* STAGE 1: THE HUMAN HERO */}
      <Hero />

      {/* STAGE 2: THE EMOTIONAL PAYOFF */}
      <TransformationFlow />

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
    </div>
  );
}
