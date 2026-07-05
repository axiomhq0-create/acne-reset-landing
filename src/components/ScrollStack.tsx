"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springConfig = { stiffness: 45, damping: 15, mass: 0.8 };

  // Map scroll progress to background image opacity fades
  const bgOpacity0 = useSpring(useTransform(scrollYProgress, [0, 0.33, 0.43], [1, 1, 0]), springConfig);
  const bgOpacity1 = useSpring(useTransform(scrollYProgress, [0.33, 0.43, 0.66, 0.76], [0, 1, 1, 0]), springConfig);
  const bgOpacity2 = useSpring(useTransform(scrollYProgress, [0.66, 0.76, 1], [0, 0, 1]), springConfig);

  // Cards lift, stack, and compress linearly
  const scale0 = useSpring(useTransform(scrollYProgress, [0, 0.33, 0.43], [1, 0.95, 0.95]), springConfig);
  const opacity0 = useSpring(useTransform(scrollYProgress, [0, 0.33, 0.43], [1, 1, 0.3]), springConfig);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.23, 0.33, 0.66], [400, 400, 0, 0]), springConfig);
  const scale1 = useSpring(useTransform(scrollYProgress, [0, 0.23, 0.33, 0.66, 0.76], [0.95, 0.95, 1, 1, 0.95]), springConfig);
  const opacity1 = useSpring(useTransform(scrollYProgress, [0, 0.23, 0.33, 0.66, 0.76], [0, 0, 1, 1, 0.3]), springConfig);

  const y2 = useSpring(useTransform(scrollYProgress, [0, 0.56, 0.66], [800, 800, 0]), springConfig);
  const scale2 = useSpring(useTransform(scrollYProgress, [0, 0.56, 0.66], [0.95, 0.95, 1]), springConfig);
  const opacity2 = useSpring(useTransform(scrollYProgress, [0, 0.56, 0.66], [0, 0, 1]), springConfig);

  // Active card index tracked from scroll progress
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest < 0.33) {
        setActiveCard(0);
      } else if (latest < 0.66) {
        setActiveCard(1);
      } else {
        setActiveCard(2);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-[#EDEBDE]"> 
      {/* Sticky Inner Frame that pins the image and cards while scrolling */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* The background portrait behind the cards */}
        <div className="absolute inset-0 z-0">
          <motion.div style={{ opacity: bgOpacity0 }} className="absolute inset-0 w-full h-full">
            <Image 
              src="/Reduce_the_intensity_of_the_202606261417.jpeg"
              alt="Protagonist Calm State"
              fill
              className="object-cover brightness-[0.7] contrast-[1.02]"
              sizes="100vw"
            />
          </motion.div>
          <motion.div style={{ opacity: bgOpacity1 }} className="absolute inset-0 w-full h-full">
            <Image 
              src="/The_background_is_light_and_202606261423.jpeg"
              alt="Protagonist Clear State"
              fill
              className="object-cover brightness-[0.7] contrast-[1.02]"
              sizes="100vw"
            />
          </motion.div>
          <motion.div style={{ opacity: bgOpacity2 }} className="absolute inset-0 w-full h-full">
            <Image 
              src="/Remove_the_black_dress_and_202606261411.jpeg"
              alt="Protagonist Maintain State"
              fill
              className="object-cover brightness-[0.7] contrast-[1.02]"
              sizes="100vw"
            />
          </motion.div>
        </div>

        {/* Dark Overlay for Text readability */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />

        {/* The Text Layout Container */}
        <div className="relative z-10 max-w-xl w-full px-6 text-center">
          <h2 className="font-serif text-xs uppercase tracking-widest text-[#810100] mb-2">The Protocol</h2>
          
          {/* Loop structure generating the 3 cards safely inside the viewport zone */}
          <div className="relative w-full h-[400px] mt-8 flex items-center justify-center">
             
            {/* Card 1 */}
            <motion.div
              style={{
                scale: scale0,
                opacity: opacity0,
                zIndex: 1,
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
              className="absolute w-full origin-top"
            >
              <div 
                className="w-full p-8 rounded-[24px] text-left space-y-4 shadow-xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                }}
              >
                <motion.div 
                  animate={{ 
                    opacity: activeCard === 0 ? 1 : 0,
                    y: activeCard === 0 ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none select-none space-y-4 text-[#1B1716]"
                >
                  <span className="text-[10px] uppercase font-bold text-[#810100] tracking-widest block">Phase 01 — Days 1-21</span>
                  <h3 className="text-2xl font-serif font-semibold">CALM — Reduce inflammation.</h3>
                  <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                    Stop the flare-ups first by stabilizing the lipid barrier. Active treatment on inflamed skin only causes more reactive spots.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              style={{
                y: y1,
                scale: scale1,
                opacity: opacity1,
                zIndex: 2,
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
              className="absolute w-full origin-top"
            >
              <div 
                className="w-full p-8 rounded-[24px] text-left space-y-4 shadow-xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                }}
              >
                <motion.div 
                  animate={{ 
                    opacity: activeCard === 1 ? 1 : 0,
                    y: activeCard === 1 ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none select-none space-y-4 text-[#1B1716]"
                >
                  <span className="text-[10px] uppercase font-bold text-[#810100] tracking-widest block">Phase 02 — Days 22-66</span>
                  <h3 className="text-2xl font-serif font-semibold">CLEAR — Treat stable skin.</h3>
                  <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                    Introduce targeted active ingredients once the skin is stabilized, healthy, and ready to absorb clear-agent routines.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              style={{
                y: y2,
                scale: scale2,
                opacity: opacity2,
                zIndex: 3,
                transform: "translateZ(0)",
                willChange: "transform, opacity",
              }}
              className="absolute w-full origin-top"
            >
              <div 
                className="w-full p-8 rounded-[24px] text-left space-y-4 shadow-xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                }}
              >
                <motion.div 
                  animate={{ 
                    opacity: activeCard === 2 ? 1 : 0,
                    y: activeCard === 2 ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none select-none space-y-4 text-[#1B1716]"
                >
                  <span className="text-[10px] uppercase font-bold text-[#810100] tracking-widest block">Phase 03 — Ongoing</span>
                  <h3 className="text-2xl font-serif font-semibold">MAINTAIN — Keep results.</h3>
                  <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                    Lock in clear skin permanently with a simplified daily maintenance protocol to prevent returning blemishes.
                  </p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
