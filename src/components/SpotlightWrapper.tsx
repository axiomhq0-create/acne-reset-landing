"use client";

import React, { useRef, useState } from "react";

interface SpotlightWrapperProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  style?: React.CSSProperties; // Correctly support external styles
}

export default function SpotlightWrapper({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.15)",
  style: externalStyle = {},
}: SpotlightWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseStyle, setMouseStyle] = useState<React.CSSProperties>({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMouseStyle({
      "--mouse-x": `${x}px`,
      "--mouse-y": `${y}px`,
      "--spotlight-color": spotlightColor,
    } as React.CSSProperties);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
      style={{ ...externalStyle, ...mouseStyle }} // Merge external styles with hover state CSS vars
    >
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: "radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), var(--spotlight-color, rgba(255,255,255,0.15)) 0%, transparent 80%)",
            zIndex: 1,
          }}
        />
      )}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
