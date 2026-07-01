"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./AnimatedList.css";

export interface AnimatedListProps {
  items: string[];
  displayScrollbar?: boolean;
  showGradients?: boolean;
  itemClassName?: string;
  className?: string;
  onItemSelect?: (index: number) => void;
  enableArrowNavigation?: boolean;
}

export default function AnimatedList({
  items = [],
  displayScrollbar = false,
  showGradients = true,
  itemClassName = "",
  className = "",
  onItemSelect,
  enableArrowNavigation = true,
}: AnimatedListProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!enableArrowNavigation || items.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const nextIdx = prev === null || prev === items.length - 1 ? 0 : prev + 1;
        if (onItemSelect) onItemSelect(nextIdx);
        return nextIdx;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const nextIdx = prev === null || prev === 0 ? items.length - 1 : prev - 1;
        if (onItemSelect) onItemSelect(nextIdx);
        return nextIdx;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, enableArrowNavigation, items]);

  // Scroll selected item into view if keyboard navigation is used
  useEffect(() => {
    if (selectedIndex !== null && listRef.current) {
      const selectedEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex]);

  if (!items || items.length === 0) return null;

  return (
    <div className={`scroll-list-container ${className}`}>
      {/* Top Gradient Overlay */}
      {showGradients && (
        <div className="absolute top-0 inset-x-0 h-12 top-gradient z-10 pointer-events-none" />
      )}

      {/* Scrollable List */}
      <div
        ref={listRef}
        className={`scroll-list overflow-y-auto flex flex-col gap-3 max-h-[500px] ${
          !displayScrollbar ? "no-scrollbar" : ""
        }`}
        style={{
          scrollbarWidth: displayScrollbar ? "thin" : "none",
        }}
      >
        {items.map((itemHtml, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => {
                setSelectedIndex(idx);
                if (onItemSelect) onItemSelect(idx);
              }}
              onMouseEnter={() => setSelectedIndex(idx)}
              className={`item cursor-pointer select-none ${
                isSelected ? "selected" : ""
              } ${itemClassName}`}
              dangerouslySetInnerHTML={{ __html: itemHtml }}
            />
          );
        })}
      </div>

      {/* Bottom Gradient Overlay */}
      {showGradients && (
        <div className="absolute bottom-0 inset-x-0 h-12 bottom-gradient z-10 pointer-events-none" />
      )}
    </div>
  );
}
