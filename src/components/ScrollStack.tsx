"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: React.ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => {
  return (
    <div 
      className={`scroll-stack-card relative w-full origin-top will-change-transform ${itemClassName}`.trim()}
      style={{
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
};

interface ScrollStackProps {
  className?: string;
  children: React.ReactNode;
  itemDistance?: number;
  itemStackDistance?: number;
  baseScale?: number;
  useWindowScroll?: boolean;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 120,
  itemStackDistance = 25,
  baseScale = 0.92,
  useWindowScroll = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = React.Children.toArray(children) as React.ReactElement[];

  const { scrollYProgress } = useScroll(
    useWindowScroll
      ? undefined
      : {
          target: containerRef,
          offset: ["start start", "end end"]
        }
  );

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {items.map((item, index) => {
        // First card pins at itemDistance (120px). Subsequent cards pin at offsets.
        const offsetTop = itemDistance + index * itemStackDistance;
        
        return (
          <ScrollStackCard
            key={index}
            index={index}
            total={items.length}
            offsetTop={offsetTop}
            baseScale={baseScale}
            scrollYProgress={scrollYProgress}
          >
            {item}
          </ScrollStackCard>
        );
      })}
    </div>
  );
};

interface ScrollStackCardProps {
  index: number;
  total: number;
  offsetTop: number;
  baseScale: number;
  scrollYProgress: any;
  children: React.ReactElement;
}

const ScrollStackCard: React.FC<ScrollStackCardProps> = ({
  index,
  total,
  offsetTop,
  baseScale,
  scrollYProgress,
  children,
}) => {
  // Scale down card as we scroll past its viewport segment
  const startSegment = index / total;
  const endSegment = (index + 1) / total;
  
  const scale = useTransform(
    scrollYProgress,
    [startSegment, endSegment],
    [1, baseScale + (total - index - 1) * 0.015]
  );

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: `${offsetTop}px`,
        scale,
        zIndex: index + 1,
        marginBottom: index < total - 1 ? '10vh' : '0vh',
      }}
      className="w-full origin-top"
    >
      {children}
    </motion.div>
  );
};

export default ScrollStack;
