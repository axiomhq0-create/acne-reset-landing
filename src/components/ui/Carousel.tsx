"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Carousel.css";

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CarouselProps {
  items: CarouselItem[];
  autoplay?: boolean;
  baseWidth?: number;
  loop?: boolean;
  round?: boolean;
}

export default function Carousel({
  items = [],
  autoplay = false,
  baseWidth = 400,
  loop = true,
  round = false,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (loop) {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (loop) {
      setCurrentIndex(items.length - 1);
    }
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 4500);
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  if (!items || items.length === 0) return null;

  return (
    <div className="carousel-container w-full max-w-5xl flex flex-col items-center justify-center relative select-none">
      {/* Left Arrow Button */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-6 z-30 w-10 h-10 rounded-full flex items-center justify-center bg-[#FAF6F0] border border-stone-200/80 shadow-sm hover:bg-stone-50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-[#1c1917]" size={20} />
      </button>

      {/* Slides Track Window */}
      <div className="relative w-full overflow-hidden flex items-center justify-center h-[340px]">
        <div className="relative flex items-center justify-center w-full h-full">
          <AnimatePresence initial={false} mode="popLayout">
            {items.map((item, idx) => {
              const offset = idx - currentIndex;
              // Only render immediate neighbors to save resources and look clean
              if (Math.abs(offset) > 1) return null;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                    x: offset * 320,
                  }}
                  animate={{
                    opacity: offset === 0 ? 1 : 0.45,
                    scale: offset === 0 ? 1 : 0.88,
                    x: offset * (baseWidth + 24),
                    zIndex: offset === 0 ? 10 : 5,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileTap={{ scale: 0.97, y: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 28,
                  }}
                  style={{
                    width: `${baseWidth}px`,
                    borderRadius: round ? "50%" : "24px",
                    willChange: "transform",
                    transform: "translateZ(0)",
                  }}
                  className={`carousel-item absolute select-none ${
                    round ? "aspect-square justify-center items-center text-center" : ""
                  }`}
                >
                  <div className="carousel-item-header">
                    {/* Icon with container */}
                    <div className="carousel-icon-container w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content details */}
                  <div className="carousel-item-content">
                    <h3 className="carousel-item-title text-xl font-serif font-bold text-[#1c1917]">
                      {item.title}
                    </h3>
                    <p className="carousel-item-description text-sm md:text-base text-[#57534e] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-6 z-30 w-10 h-10 rounded-full flex items-center justify-center bg-[#FAF6F0] border border-stone-200/80 shadow-sm hover:bg-stone-50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="text-[#1c1917]" size={20} />
      </button>

      {/* Indicator dots navigation */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`carousel-indicator w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx ? "active w-4" : "inactive"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
