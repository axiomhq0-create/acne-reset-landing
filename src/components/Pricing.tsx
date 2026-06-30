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

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % transformationImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Complete Transformation Main Tier (bg-[#F4E9DD]) */}
      <section id="pricing" className="py-32 bg-[#F4E9DD]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...scrollAnimateProps}
            className="text-center max-w-3xl mx-auto mb-16"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6E68] mb-4 block">
              The Premium Offering
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1A1B12] font-semibold tracking-tight leading-[1.1]">
              Three Phases. One Connected System.
            </h2>
            <p className="text-[#6B6E68] text-base md:text-lg mt-4">
              The phases are built to hand off to each other — Calm prepares your skin for Clear, Clear sets up Maintain. The Complete Transformation is the full path in order.
            </p>
          </motion.div>

          {/* Card Wrapper - scaled up by 6% to max-w-[1085px] with bi-directional scrolling */}
          <motion.div 
            initial={{ opacity: 0, transform: "translate3d(0, 10px, 0) scale(0.98)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" }}
            whileHover={{ scale: 1.005 }}
            viewport={{ once: false, amount: 0.15 }} // Bi-directional scroll wrapper
            transition={{ duration: 0.45, ease: easeOutPremium }}
            className="max-w-[1085px] mx-auto relative group"
            style={{ willChange: "transform, opacity" }}
          >
            <SpotlightWrapper 
              className="glass-panel rounded-[14px] p-8 md:p-12 lg:p-16 transition-colors duration-300 group-hover:border-[rgba(255,255,255,0.6)]" // Enhanced silver glow signature on hover
              style={{
                border: '1px solid rgba(255, 255, 255, 0.45)', // Premium silver micro-stroke outline
                boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)' // Light catching shadow
              }}
              spotlightColor="rgba(255, 255, 255, 0.25)"
            >
              {/* Golden light glow backdrop */}
              <div className="absolute top-[-30%] right-[-30%] w-[60%] aspect-square rounded-full bg-parchment/25 blur-3xl -z-10" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Details */}
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs uppercase tracking-[0.15em] font-bold text-bloomDeep bg-[#1A1B12]/5 rounded px-2.5 py-1">
                      Best Value
                    </span>
                    <span className="font-serif text-lg text-[#1A1B12]">Complete System</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1B12] mb-3">
                    The Complete Transformation
                  </h3>

                  {/* Bold, crisp, high-end serif price token */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl md:text-5xl font-serif font-bold text-[#1A1B12]">$97</span>
                    <span className="text-xl md:text-2xl font-serif italic text-[#6B6E68] font-light">/ Complete System</span>
                  </div>

                  <p className="text-[#6B6E68] mb-8 text-sm md:text-base leading-relaxed">
                    The entire system, exactly as it's designed to work. Every phase, fully supported. Every handoff already in your hands before you need it.
                  </p>

                  {/* Included utility section heading */}
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#6B6E68] mb-3 block">
                    Included
                  </span>

                  {/* Bullet list with custom checkmarks - Staggered fade in */}
                  <motion.ul 
                    variants={listContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    className="flex flex-col gap-3 w-full mb-8"
                    style={{ willChange: "transform, opacity" }}
                  >
                    {[
                      "3-Phase Acne Reset Ebook",
                      "21-Day Calm Tracker",
                      "Calm Phase Product Guide",
                      "45-Day Clear Tracker",
                      "Full Product Selection Guide",
                      "90-Day Transformation Dashboard",
                      "Maintenance Blueprint"
                    ].map((bullet, idx) => (
                      <motion.li 
                        key={idx} 
                        variants={listItemVariants}
                        className="flex items-start gap-3 text-sm md:text-base text-[#1A1B12]"
                        style={{ willChange: "transform, opacity" }}
                      >
                        <svg viewBox="0 0 16 16" className="w-5 h-5 text-[#C4956A] mt-0.5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeWidth="1" fill="none" />
                          <path d="M5 8.5 L7 10.5 L11.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <p className="text-[#6B6E68] text-xs mb-6 italic">
                    One payment. The full path. Nothing to rebuy. Nothing to figure out twice.
                  </p>

                  <SpotlightWrapper 
                    className="rounded-full w-full sm:w-auto overflow-hidden shrink-0"
                    spotlightColor="rgba(255, 255, 255, 0.45)"
                  >
                    <a 
                      href="https://whop.com/checkout/plan_rDsgEaLiNqGrH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#E8C4B8] text-[#1A1B12] px-10 py-4 font-semibold text-center transition-all duration-200 hover:scale-[1.02] hover:bg-[#DCA596]"
                      style={{
                        border: '1px solid rgba(255, 255, 255, 0.45)', // Razor-sharp silver boundary seam
                        boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)'
                      }}
                    >
                      Start The Complete Transformation
                    </a>
                  </SpotlightWrapper>
                </div>

                {/* Right product composition mockup - scaled up by 5% to max-h-[546px] object-contain */}
                <div className="relative w-full h-auto bg-stone-100/50 rounded-[10px] border border-white/40 shadow-inner p-6 flex items-center justify-center">
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
                        alt={`Mockup representation of The Acne Reset system - View ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto max-h-[546px] object-contain mx-auto transition-transform duration-500 hover:scale-102"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Overlay floating cards simulating digital items */}
                  <div className="absolute bottom-4 left-4 glass-panel bg-white/70 backdrop-blur-md border border-white/60 p-4 shadow-md max-w-[200px] hidden sm:block z-20 rounded-[10px]">
                    <span className="text-[10px] uppercase font-bold text-[#A8978F] block mb-1">Interactive</span>
                    <h4 className="text-xs font-serif font-semibold text-[#1A1B12]">90-Day Tracker Dashboard</h4>
                    <div className="w-full h-1 bg-[#1A1B12]/10 rounded-full mt-2 overflow-hidden">
                      <div className="w-2/3 h-full bg-[#C4956A]" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 glass-panel bg-white/70 backdrop-blur-md border border-white/60 p-4 shadow-md max-w-[160px] hidden sm:block z-20 rounded-[10px]">
                    <span className="text-[10px] uppercase font-bold text-[#A8978F] block mb-1">Curated</span>
                    <h4 className="text-xs font-serif font-semibold text-[#1A1B12]">Product Selection Guide</h4>
                  </div>
                </div>
              </div>
            </SpotlightWrapper>
          </motion.div>
        </div>
      </section>

      {/* Alternative Products Grid - Transition back to soft off-white (bg-[#FBF9F6]) */}
      <section className="py-32 bg-[#FBF9F6] border-t border-[#1A1B12]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              {...scrollAnimateProps}
              className="text-center mb-16"
              style={{ willChange: "transform, opacity" }}
            >
              <h3 className="text-2xl md:text-3xl font-serif text-[#1A1B12] font-semibold">
                Alternative Options
              </h3>
              <p className="text-[#6B6E68] text-sm mt-2">
                Two situations where starting with a single phase or framework makes sense.
              </p>
            </motion.div>

            {/* Staggered fade in reveal for cards */}
            <motion.div 
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }} // Bi-directional scroll wrapper
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Card 1: CALM YOUR SKIN ($47) */}
              <motion.div 
                variants={listItemVariants}
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(45,38,36,0.04)" }}
                transition={{ duration: 0.2 }}
                className="h-full rounded-[10px]"
                style={{ willChange: "transform, opacity" }}
              >
                <SpotlightWrapper 
                  className="glass-panel rounded-[10px] overflow-hidden flex flex-col h-full"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.45)', // Premium silver micro-stroke outline
                    boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)' // Light catching shadow
                  }}
                  spotlightColor="rgba(255, 255, 255, 0.25)"
                >
                  <div 
                    className="w-full bg-stone-100/50 shrink-0 relative flex items-center justify-center p-4"
                    style={{ 
                      border: '1px solid rgba(255, 255, 255, 0.45)', 
                      boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.12), 0 4px 20px rgba(212, 212, 216, 0.06)', 
                      borderRadius: '12px', 
                      overflow: 'hidden' 
                    }}
                  >
                    <Image 
                      src="/assets/calm-card-premium.png" 
                      alt="The Calm Phase product guide, tracker chart, and tablet mockup"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain max-h-[380px] lg:max-h-[420px] mx-auto"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#1A1B12] text-xs font-semibold px-3 py-1 rounded-full border border-white/50 shadow-sm z-10">
                      $47
                    </span>
                  </div>
                  <div className="p-8 flex flex-col flex-grow text-left justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#A8978F] block mb-2">Phase 1 Entry</span>
                      <h4 className="text-xl md:text-2xl font-serif font-semibold text-[#1A1B12] mb-3">Calm Your Skin</h4>
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
                        className="block w-full bg-[#E8C4B8] text-[#1A1B12] font-semibold py-3.5 text-center transition-all duration-200 hover:bg-[#DCA596]"
                        style={{
                          border: '1px solid rgba(255, 255, 255, 0.45)', // Razor-sharp silver boundary seam
                          boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)'
                        }}
                      >
                        Start With Calm
                      </a>
                    </SpotlightWrapper>
                  </div>
                </SpotlightWrapper>
              </motion.div>

              {/* Card 2: THE ROADMAP ($27) */}
              <motion.div 
                variants={listItemVariants}
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(45,38,36,0.04)" }}
                transition={{ duration: 0.2 }}
                className="h-full rounded-[10px]"
                style={{ willChange: "transform, opacity" }}
              >
                <SpotlightWrapper 
                  className="glass-panel rounded-[10px] overflow-hidden flex flex-col h-full"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.45)', // Premium silver micro-stroke outline
                    boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)' // Light catching shadow
                  }}
                  spotlightColor="rgba(255, 255, 255, 0.25)"
                >
                  <div className="aspect-video w-full relative bg-stone-100 shrink-0">
                    <Image 
                      src="/assets/roadmap-card.png" 
                      alt="The Roadmap guide document mockup"
                      fill
                      className="object-cover object-left-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#1A1B12] text-xs font-semibold px-3 py-1 rounded-full border border-white/50 shadow-sm">
                      $27
                    </span>
                  </div>
                  <div className="p-8 flex flex-col flex-grow text-left justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#A8978F] block mb-2">Theory Only</span>
                      <h4 className="text-xl md:text-2xl font-serif font-semibold text-[#1A1B12] mb-3">The Roadmap</h4>
                      <p className="text-sm text-[#6B6E68] mb-6 leading-relaxed flex-grow">
                        All three phases, fully explained. No trackers. No worksheets. Just the process. Built for people who prefer to map the territory before they move.
                      </p>
                      <div className="border-t border-[#1A1B12]/5 pt-4 mb-6">
                        <span className="text-xs text-[#1A1B12] font-medium block mb-2">Includes:</span>
                        <ul className="text-xs text-[#6B6E68] space-y-1.5">
                          <li>✓ 3-Phase Reset core strategy</li>
                          <li>✓ Educational guidelines</li>
                          <li>✓ Lifelong maintenance parameters</li>
                        </ul>
                      </div>
                    </div>
                    <SpotlightWrapper 
                      className="rounded-full w-full overflow-hidden shrink-0 shadow-sm"
                      spotlightColor="rgba(255, 255, 255, 0.45)"
                    >
                      <a 
                        href="https://whop.com/checkout/plan_C7Lm7D71Z9NeR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-[#E8C4B8] text-[#1A1B12] font-semibold py-3.5 text-center transition-all duration-200 hover:bg-[#DCA596]"
                        style={{
                          border: '1px solid rgba(255, 255, 255, 0.45)', // Razor-sharp silver boundary seam
                          boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)'
                        }}
                      >
                        Get The Roadmap
                      </a>
                    </SpotlightWrapper>
                  </div>
                </SpotlightWrapper>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
