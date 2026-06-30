"use client";

import React, { useRef, useEffect } from "react";

interface PlasmaProps {
  color?: string;
  speed?: number;
  direction?: "forward" | "reverse";
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

export default function Plasma({
  color = "#c4956a",
  speed = 1,
  direction = "forward",
  scale = 1,
  opacity = 1,
  mouseInteractive = true,
}: PlasmaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    // Initialize mouse to center of screen
    mouseRef.current.targetX = canvas.offsetWidth / 2;
    mouseRef.current.targetY = canvas.offsetHeight / 2;
    mouseRef.current.x = canvas.offsetWidth / 2;
    mouseRef.current.y = canvas.offsetHeight / 2;

    if (mouseInteractive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Convert hex to rgb helper
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 196, g: 149, b: 106 }; // Default #c4956a
    };

    const rgb = hexToRgb(color);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse movement interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      time += 0.003 * speed * (direction === "forward" ? 1 : -1);

      const width = canvas.width;
      const height = canvas.height;

      // Layer 1: Base color filling
      ctx.fillStyle = "#1A1B12"; // Deep ink tone
      ctx.fillRect(0, 0, width, height);

      // Layer 2: Ambient background glow
      const baseGrad = ctx.createRadialGradient(
        width * 0.5, height * 0.5, 0,
        width * 0.5, height * 0.5, Math.max(width, height)
      );
      baseGrad.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.1 * opacity})`);
      baseGrad.addColorStop(1, "rgba(26, 27, 18, 0)");
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // Layer 3: Blending moving plasma blobs using Screen blend mode
      ctx.globalCompositeOperation = "screen";
      
      const blobs = 3;
      for (let i = 0; i < blobs; i++) {
        const offset = i * Math.PI * 0.67;
        const waveX = width * 0.5 + Math.sin(time + offset) * (width * 0.22) * scale;
        const waveY = height * 0.5 + Math.cos(time * 0.8 + offset) * (height * 0.22) * scale;
        const radius = Math.min(width, height) * (0.45 + i * 0.1) * scale;

        const grad = ctx.createRadialGradient(waveX, waveY, 0, waveX, waveY, radius);
        grad.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.16 * opacity})`);
        grad.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.04 * opacity})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(waveX, waveY, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Layer 4: Interactive cursor hover glow
      if (mouseInteractive) {
        const mouseRadius = Math.min(width, height) * 0.25 * scale;
        const mouseGrad = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, mouseRadius
        );
        mouseGrad.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.18 * opacity})`);
        mouseGrad.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.05 * opacity})`);
        mouseGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = mouseGrad;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, mouseRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Reset to normal compositing
      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (mouseInteractive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, speed, direction, scale, opacity, mouseInteractive]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        display: "block",
      }}
    />
  );
}
