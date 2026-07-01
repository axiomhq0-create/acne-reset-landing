"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, GitFork, Infinity as InfinityIcon } from "lucide-react";
import Carousel from "./ui/Carousel";

const easeOutPremium = [0.16, 1, 0.3, 1] as const;

const STORY_CAROUSEL_ITEMS = [
  {
    id: 1,
    title: "Built around skin recovery.",
    description: "We stabilize the lipid barrier first so treatment can actually succeed, rather than triggering active defense reactions.",
    icon: <Shield className="carousel-icon" size={20} />
  },
  {
    id: 2,
    title: "Uses products in the right order.",
    description: "Every handoff is timed precisely. The Calm Phase prepares cells to receive the active elements of the Clear Phase.",
    icon: <GitFork className="carousel-icon" size={20} />
  },
  {
    id: 3,
    title: "Designed to prevent relapse.",
    description: "We build systems, not routines. The Maintain Phase locks in clarity and adjusts automatically to prevent regression.",
    icon: <InfinityIcon className="carousel-icon" size={20} />
  }
];

export default function Story() {
  return (
    <section id="philosophy" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Headline Architecture */}
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0, 10px, 0)" }}
          whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.45, ease: easeOutPremium }}
          className="max-w-3xl mx-auto mb-12"
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#2D2624] font-semibold tracking-tight leading-[1.15] mb-6">
            YOU'RE NOT IMAGINING IT. This was never just about your skin.
          </h2>
          <p className="text-[#6B6E68] text-base md:text-lg max-w-2xl leading-relaxed mx-auto">
            You've canceled plans for reasons you never said out loud. Taken photos and deleted them before anyone else saw. Searched for better lighting, better angles — not for vanity, but for relief. You've tried products. Some of them probably should have worked. They didn't. Not because you did something wrong. Because products without process are just ingredients. And ingredients without order are just hope. What you needed wasn't another thing to try. It was a sequence.
          </p>
        </motion.div>

        {/* Carousel Frame Window */}
        <div className="w-full max-w-5xl h-[380px] relative flex items-center justify-center px-4 mx-auto overflow-visible">
          <Carousel 
            items={STORY_CAROUSEL_ITEMS}
            autoplay={false}
            baseWidth={420}
            loop={true}
            round={false}
          />
        </div>
      </div>
    </section>
  );
}
