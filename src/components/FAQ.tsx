"use client";

import React from "react";
import { FileText, Layers, HelpCircle, ShieldCheck, Heart, Sparkles, MessageSquare } from "lucide-react";
import Carousel from "./ui/Carousel";

const FAQ_CAROUSEL_ITEMS = [
  {
    id: 1,
    title: "Is this a replacement for seeing a dermatologist?",
    description: "No — and it doesn't try to be. If your skin needs medical treatment, this works alongside that care, not instead of it. The system is built around skincare education and structure, not diagnosis.",
    icon: <ShieldCheck className="carousel-icon" size={20} />
  },
  {
    id: 2,
    title: "How long until I see results?",
    description: "Calm is 21 days. Clear is 45 days. Maintain is ongoing. We're not going to give you a number we can't stand behind. What we can tell you is that the phases are designed so your skin is never working against the step it's in.",
    icon: <FileText className="carousel-icon" size={20} />
  },
  {
    id: 3,
    title: "I don't know my skin type or which actives to use?",
    description: "That's what the Product Selection Guide and Calm Phase Product Guide are built for. You don't need to know anything before you start — the guides walk you through exactly what to use and why.",
    icon: <Layers className="carousel-icon" size={20} />
  },
  {
    id: 4,
    title: "Can I start with Calm or The Roadmap and upgrade later?",
    description: "Yes. Both are built as entry points into the same system. When you're ready to continue, the path is already there.",
    icon: <Sparkles className="carousel-icon" size={20} />
  },
  {
    id: 5,
    title: "I've already tried everything.",
    description: "Then you already know the problem isn't the ingredients. The 3-Phase Reset wasn't built around finding one miracle product. It was built around giving your skin a structure that makes whatever you use actually work. The missing piece was never the product. It was the order.",
    icon: <HelpCircle className="carousel-icon" size={20} />
  },
  {
    id: 6,
    title: "Is this a subscription?",
    description: "No. Every product is a one-time purchase. No recurring charges. No surprises.",
    icon: <Heart className="carousel-icon" size={20} />
  },
  {
    id: 7,
    title: "How do I get support?",
    description: "Through our official social channels. We respond within 24–48 hours.",
    icon: <MessageSquare className="carousel-icon" size={20} />
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#FAF6F0] py-24 w-full flex flex-col items-center justify-center overflow-visible">
      <div className="text-center mb-12 max-w-2xl px-4">
        <h2 className="text-3xl md:text-5xl font-serif text-[#1c1917] font-semibold tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Carousel Frame Window */}
      <div className="w-full max-w-5xl h-[520px] relative flex items-center justify-center px-4">
        <Carousel 
          items={FAQ_CAROUSEL_ITEMS}
          autoplay={false}
          baseWidth={400}
          loop={true}
          round={false}
        />
      </div>
    </section>
  );
}
