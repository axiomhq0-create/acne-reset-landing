"use client";

import React from "react";
import AnimatedList from "./ui/AnimatedList";

const faqItems = [
  "<div><p class='faq-question'>Is this a replacement for seeing a dermatologist?</p><p class='faq-answer'>No — and it doesn't try to be. If your skin needs medical treatment, this works alongside that care, not instead of it. The system is built around skincare education and structure, not diagnosis.</p></div>",
  "<div><p class='faq-question'>How long until I see results?</p><p class='faq-answer'>Calm is 21 days. Clear is 45 days. Maintain is ongoing. We're not going to give you a number we can't stand behind. What we can tell you is that the phases are designed so your skin is never working against the step it's in.</p></div>",
  "<div><p class='faq-question'>I don't know my skin type or which actives to use?</p><p class='faq-answer'>That's what the Product Selection Guide and Calm Phase Product Guide are built for. You don't need to know anything before you start — the guides walk you through exactly what to use and why.</p></div>",
  "<div><p class='faq-question'>Can I start with Calm or The Roadmap and upgrade later?</p><p class='faq-answer'>Yes. Both are built as entry points into the same system. When you're ready to continue, the path is already there.</p></div>",
  "<div><p class='faq-question'>I've already tried everything.</p><p class='faq-answer'>Then you already know the problem isn't the ingredients. The 3-Phase Reset wasn't built around finding one miracle product. It was built around giving your skin a structure that makes whatever you use actually work. The missing piece was never the product. It was the order.</p></div>",
  "<div><p class='faq-question'>Is this a subscription?</p><p class='faq-answer'>No. Every product is a one-time purchase. No recurring charges. No surprises.</p></div>",
  "<div><p class='faq-question'>How do I get support?</p><p class='faq-answer'>Through our official social channels. We respond within 24–48 hours.</p></div>"
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#FAF6F0] py-24 w-full flex flex-col items-center justify-center overflow-visible">
      <div className="text-center mb-12 max-w-2xl px-4">
        <h2 className="text-3xl md:text-5xl font-serif text-[#1c1917] font-semibold tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Animated Scroll List Frame */}
      <div className="w-full max-w-4xl px-4 relative">
        <AnimatedList 
          items={faqItems}
          displayScrollbar={false}
          showGradients={true}
          itemClassName="border border-stone-200/40"
        />
      </div>
    </section>
  );
}
