"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SpotlightWrapper from "./SpotlightWrapper";

const easeOutPremium = [0.16, 1, 0.3, 1] as const;

const scrollAnimateProps = {
  initial: { opacity: 0, transform: "translate3d(0, 10px, 0)" },
  whileInView: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  viewport: { once: false, amount: 0.15 }, // Bi-directional scroll wrapper
  transition: { duration: 0.45, ease: easeOutPremium },
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const listItemVariants = {
  hidden: { 
    opacity: 0, 
    transform: "translate3d(0, 15px, 0)" // GPU matrix translation and Apple-style lift-up offset
  },
  visible: {
    opacity: 1,
    transform: "translate3d(0, 0, 0)", // GPU matrix translation
    transition: {
      duration: 0.45, // Restrained animation timing
      ease: easeOutPremium,
    },
  },
};

const transformationImages = [
  "/assets/transformation-1.png",
  "/assets/transformation-2.png",
  "/assets/transformation-3.png",
];

export default function Pricing() {
  const [activeImg, setActiveImg] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const scrollWidth = carouselRef.current.scrollWidth;
    const clientWidth = carouselRef.current.clientWidth;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const percentage = scrollLeft / maxScroll;
    const index = Math.round(percentage * 2);
    setActiveIndex(Math.max(0, Math.min(index, 2)));
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % transformationImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Complete Transformation Main Tier (bg-[#F4E9DD]) */}
      <section id="pricing" className="py-12 md:py-32 bg-[#F4E9DD]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...scrollAnimateProps}
            className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6E68] mb-4 block">
              The Premium Offering
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1A1B12] font-semibold tracking-tight leading-[1.1]">
              Three Phases. One Connected System.
            </h2>
            <p className="text-[#6B6E68] text-base md:text-lg mt-4">
              The phases are built to hand off to each other. Calm prepares your skin for Clear, while Clear sets up Maintain. The Complete Transformation is the full path in order.
            </p>
          </motion.div>
          {/* Fallback Swipe indicator above product card */}
          <div className="block md:hidden text-center mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#6B6E68]/80">
              ← Swipe to Compare Packages →
            </span>
          </div>

          {/* New Merged Staggered Grid/Carousel Wrapper */}
          {/* New Merged Staggered Grid/Carousel Wrapper */}
          <motion.div 
            ref={carouselRef}
            onScroll={handleScroll}
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="flex flex-row overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-6 w-full max-w-5xl mx-auto md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 px-6 md:px-0 scroll-px-6 md:scroll-px-0"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Card 1: Complete Transformation */}
            <motion.div
              variants={listItemVariants}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-[85vw] shrink-0 snap-center md:col-span-2 md:w-full md:shrink relative group h-full"
              style={{ willChange: "transform, opacity" }}
            >
              <SpotlightWrapper 
                className="bg-white/50 backdrop-blur-lg border border-white/80 rounded-3xl p-6 shadow-sm transition-all duration-500 ease-out group-hover:border-white/100 h-full"
                spotlightColor="rgba(255, 255, 255, 0.25)"
              >
                <div className="max-w-2xl mx-auto flex flex-col items-center text-center w-full h-full justify-between gap-6">
                  {/* 1. PRODUCT_IMAGE_DOMINANT_WITH_PANELS - Mockup Asset increased by exactly 20% with md:scale-110 */}
                  <div className="w-full max-w-[480px] h-auto mb-2 mx-auto block relative aspect-square bg-stone-100/50 rounded-2xl border border-white/40 shadow-inner p-2 sm:p-4 flex items-center justify-center overflow-hidden md:scale-110 transform transition-transform duration-500">
                    {transformationImages.map((src, index) => (
                      <motion.div
                        key={src}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeImg === index ? 0.95 : 0 }}
                        transition={{ duration: 1.0, ease: "easeInOut" }}
                        className={activeImg === index ? "relative w-full h-auto z-10" : "absolute inset-0 w-full h-auto pointer-events-none z-0"}
                      >
                        <Image 
                          src={src} 
                          alt="Acne Reset Complete Transformation package mockup visual"
                          width={480}
                          height={480}
                          className="w-full h-auto max-w-[480px] object-contain mx-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          priority={index === 0}
                        />
                      </motion.div>
                    ))}

                    {/* Overlay floating cards simulating digital items */}
                    <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 glass-panel bg-white/70 backdrop-blur-md border border-white/60 p-1.5 md:p-2.5 shadow-md max-w-[120px] md:max-w-[170px] z-20 rounded-[6px] md:rounded-[8px] text-left">
                      <span className="text-[7px] md:text-[8px] uppercase font-bold text-[#A8978F] block mb-0.5">Interactive</span>
                      <h4 className="text-[8px] md:text-[10px] font-serif font-semibold text-[#1A1B12] leading-tight">90-Day Tracker Dashboard</h4>
                      <div className="w-full h-0.5 bg-[#1A1B12]/10 rounded-full mt-1 md:mt-1.5 overflow-hidden">
                        <div className="w-2/3 h-full bg-[#C4956A]" />
                      </div>
                    </div>

                    <div className="absolute top-2 right-2 md:top-3 md:right-3 glass-panel bg-white/70 backdrop-blur-md border border-white/60 p-1.5 md:p-2.5 shadow-md max-w-[100px] md:max-w-[140px] z-20 rounded-[6px] md:rounded-[8px] text-left">
                      <span className="text-[7px] md:text-[8px] uppercase font-bold text-[#A8978F] block mb-0.5">Curated</span>
                      <h4 className="text-[8px] md:text-[10px] font-serif font-semibold text-[#1A1B12] leading-tight">Product Selection Guide</h4>
                    </div>
                  </div>

                  {/* 2. Compacted Text Card (Title, Price, Description) - Marginally increased sizes with tight leading-snug */}
                  <div className="w-full text-center mt-4">
                    <span className="text-[10px] uppercase font-bold text-[#A8978F] block mb-1">Best Value</span>
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1A1B12] tracking-tight leading-snug mb-1">
                      The Complete Transformation
                    </h3>
                    
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-xl md:text-2xl font-serif font-semibold text-[#1A1B12]">$97</span>
                      <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#A8978F]">/ Complete System</span>
                    </div>
                    
                    <p className="text-sm md:text-base text-[#6B6E68] max-w-lg mx-auto tracking-tight leading-snug">
                      Every tool, tracker, dashboard, and selection guide. The absolute path from red and reactive to calm and clear skin.
                    </p>
                  </div>

                  {/* 3. Structured Two-Column Included Features Grid */}
                  <div className="w-full border-t border-[#1A1B12]/5 pt-3.5 mb-2">
                    <span className="text-[10px] uppercase tracking-[0.1em] text-[#A8978F] font-bold block mb-3 text-center">
                      Included Features
                    </span>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-left max-w-lg mx-auto">
                      {[
                        "3-Phase Acne Reset Ebook",
                        "21-Day Calm Tracker",
                        "Calm Phase Product Guide",
                        "45-Day Clear Tracker",
                        "Full Product Selection Guide",
                        "90-Day Transformation Dashboard",
                        "Maintenance Blueprint"
                      ].map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11px] md:text-xs text-[#1A1B12] leading-tight">
                          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-[#C4956A] mt-0.5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeWidth="1" fill="none" />
                            <path d="M5 8.5 L7 10.5 L11.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 4. Action Button */}
                  <div className="w-full mt-auto">
                    <p className="text-[#6B6E68] text-[10px] mb-3 italic text-center w-full">
                      One payment. The full path. Nothing to rebuy. Nothing to figure out twice.
                    </p>
                    <SpotlightWrapper 
                      className="rounded-full w-full overflow-hidden shrink-0 shadow-sm"
                      spotlightColor="rgba(255, 255, 255, 0.45)"
                    >
                      <a 
                        href="https://whop.com/checkout/plan_rDsgEaLiNqGrH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-transparent text-[#1A1B12] font-semibold py-3.5 text-center transition-all duration-300 rounded-full border border-[#1A1B12]/15 group-hover:bg-[#2D2624] group-hover:text-[#FAF7F4] group-hover:border-transparent"
                      >
                        Start The Transformation
                      </a>
                    </SpotlightWrapper>
                  </div>
                </div>
              </SpotlightWrapper>
            </motion.div>

            {/* Alternative Options Title (hidden on mobile, visible on desktop inside the grid layout) */}
            <div className="hidden md:block md:col-span-2 text-center my-10">
              <h3 className="text-2xl md:text-3xl font-serif text-[#1A1B12] font-semibold">
                Alternative Options
              </h3>
              <p className="text-[#6B6E68] text-sm mt-2">
                Two situations where starting with a single phase or framework makes sense.
              </p>
            </div>

            {/* Card 2: CALM YOUR SKIN ($47) */}
            <motion.div 
              variants={listItemVariants}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-[85vw] shrink-0 snap-center md:w-full md:shrink h-full group relative"
              style={{ willChange: "transform, opacity" }}
            >
              <SpotlightWrapper 
                className="bg-white/50 backdrop-blur-lg border border-white/80 rounded-3xl p-6 shadow-sm transition-all duration-500 ease-out group-hover:border-white/100 flex flex-col h-full"
                spotlightColor="rgba(255, 255, 255, 0.25)"
              >
                <div 
                  className="w-full bg-stone-100/50 shrink-0 relative flex items-center justify-center p-4 overflow-hidden rounded-2xl border border-white/80"
                >
                  <Image 
                    src="/assets/calm-card-premium.png" 
                    alt="The Calm Phase product guide, tracker chart, and tablet mockup"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain max-h-[380px] lg:max-h-[420px] mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow text-left justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#A8978F] block mb-2">Phase 1 Entry</span>
                    <h4 className="text-xl md:text-2xl font-serif font-semibold text-[#1A1B12] mb-1">Calm Your Skin</h4>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-lg md:text-xl font-serif font-semibold text-[#1A1B12]">$47</span>
                      <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#A8978F]">/ Phase 1 Only</span>
                    </div>
                    <p className="text-sm text-[#6B6E68] mb-6 leading-relaxed flex-grow">
                      Gets your skin stable enough that Clear and Maintain can actually do their job when you're ready. Ideal if your skin is reactive or highly inflamed.
                    </p>
                    <div className="border-t border-[#1A1B12]/5 pt-4 mb-6">
                      <span className="text-xs text-[#1A1B12] font-medium block mb-2">Includes:</span>
                      <ul className="text-xs text-[#6B6E68] space-y-1.5">
                        <li>✓ 3-Phase Acne Reset Ebook</li>
                        <li>✓ 21-Day Calm Tracker</li>
                        <li>✓ Calm Phase Product Guide</li>
                      </ul>
                    </div>
                  </div>
                  
                  <SpotlightWrapper 
                    className="rounded-full w-full overflow-hidden shrink-0 shadow-sm"
                    spotlightColor="rgba(255, 255, 255, 0.45)"
                  >
                    <a 
                      href="https://whop.com/checkout/plan_T4jvV63GgLVVH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-transparent text-[#1A1B12] font-semibold py-3.5 text-center transition-all duration-300 rounded-full border border-[#1A1B12]/15 group-hover:bg-[#2D2624] group-hover:text-[#FAF7F4] group-hover:border-transparent"
                    >
                      Start With Calm
                    </a>
                  </SpotlightWrapper>
                </div>
              </SpotlightWrapper>
            </motion.div>

            {/* Card 3: THE ROADMAP ($27) */}
            <motion.div 
              variants={listItemVariants}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-[85vw] shrink-0 snap-center md:w-full md:shrink h-full group relative"
              style={{ willChange: "transform, opacity" }}
            >
              <SpotlightWrapper 
                className="bg-white/50 backdrop-blur-lg border border-white/80 rounded-3xl p-6 shadow-sm transition-all duration-500 ease-out group-hover:border-white/100 flex flex-col h-full"
                spotlightColor="rgba(255, 255, 255, 0.25)"
              >
                <div 
                  className="w-full bg-stone-100/50 shrink-0 relative flex items-center justify-center p-4 overflow-hidden rounded-2xl border border-white/80"
                >
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <Image 
                      src="/assets/roadmap-card.png" 
                      alt="The Roadmap guide document mockup"
                      fill
                      className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow text-left justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#A8978F] block mb-2">Theory Only</span>
                    <h4 className="text-xl md:text-2xl font-serif font-semibold text-[#1A1B12] mb-1">The Roadmap</h4>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-lg md:text-xl font-serif font-semibold text-[#1A1B12]">$27</span>
                      <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#A8978F]">/ Process Strategy</span>
                    </div>
                    <p className="text-sm text-[#6B6E68] mb-6 leading-relaxed flex-grow">
                      All three phases, fully explained. No trackers. No worksheets. Just the process. Built for people who prefer to map the territory before they move.
                    </p>

                  </div>
                  
                  <SpotlightWrapper 
                    className="rounded-full w-full overflow-hidden shrink-0 shadow-sm"
                    spotlightColor="rgba(255, 255, 255, 0.45)"
                  >
                    <a 
                      href="https://whop.com/checkout/plan_C7Lm7D71Z9NeR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-transparent text-[#1A1B12] font-semibold py-3.5 text-center transition-all duration-300 rounded-full border border-[#1A1B12]/15 group-hover:bg-[#2D2624] group-hover:text-[#FAF7F4] group-hover:border-transparent"
                    >
                      Get The Roadmap
                    </a>
                  </SpotlightWrapper>
                </div>
              </SpotlightWrapper>
            </motion.div>

          {/* Pagination Dots Indicator for Mobile Swipe Tray */}
          <div className="flex md:hidden justify-center gap-2 mt-4">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (carouselRef.current) {
                    const scrollWidth = carouselRef.current.scrollWidth;
                    const clientWidth = carouselRef.current.clientWidth;
                    const maxScroll = scrollWidth - clientWidth;
                    carouselRef.current.scrollTo({
                      left: (maxScroll / 2) * idx,
                      behavior: "smooth",
                    });
                    setActiveIndex(idx);
                  }
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "bg-[#1A1B12] scale-110" : "bg-[#1A1B12]/20"
                }`}
                aria-label={`Go to product package ${idx + 1}`}
              />
            ))}
          </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
