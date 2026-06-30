"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import SpotlightWrapper from "./SpotlightWrapper";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="transition-all duration-300 rounded-full"
      style={{ 
        position: 'fixed', 
        top: '16px', 
        left: '50%', 
        width: 'calc(100% - 3rem)', 
        maxWidth: '1000px', 
        height: '64px', 
        zIndex: 50, 
        padding: '0 24px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        backgroundColor: "rgba(250, 247, 244, 0.55)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: '1px solid rgba(255, 255, 255, 0.45)', // Silver outline edge
        boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)' // Light catching shadow
      }}
    >
      {/* Internal flex row layout with items-center justify-between for horizontal alignment */}
      <div className="flex justify-between items-center w-full">
        {/* Logo (Left, Serif with Sequence Mark) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-12 h-8 flex items-center">
            <svg viewBox="0 0 120 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" suppressHydrationWarning>
              <path d="M18 62 C42 52 78 30 102 18" stroke="#E2C4B5" strokeWidth="1.5" fill="none" suppressHydrationWarning />
              <circle cx="18" cy="62" r="9" stroke="#1A1B12" strokeWidth="1.5" fill="none" suppressHydrationWarning />
              <circle cx="60" cy="40" r="11" stroke="#1A1B12" strokeWidth="1.5" fill="rgba(226,196,181,0.25)" suppressHydrationWarning />
              <circle cx="102" cy="18" r="13" fill="#1A1B12" stroke="#1A1B12" strokeWidth="1.5" suppressHydrationWarning />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif italic text-xs text-[#6B6E68] tracking-wider">the</span>
            <span className="font-serif font-semibold text-lg md:text-xl tracking-tight text-[#1A1B12] -mt-0.5">Acne Reset</span>
          </div>
        </motion.div>

        {/* Right Nav Options (Center hidden, grouped under single flex dock on the Right) */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleNavClick("system")} 
            className="text-sm font-medium text-[#6B6E68] hover:text-[#1A1B12] transition-colors duration-200"
          >
            The System
          </button>
          <button 
            onClick={() => handleNavClick("faq")} 
            className="text-sm font-medium text-[#6B6E68] hover:text-[#1A1B12] transition-colors duration-200"
          >
            FAQ
          </button>
          
          <SpotlightWrapper 
            className="rounded-full overflow-hidden shrink-0"
            spotlightColor="rgba(255, 255, 255, 0.45)"
          >
            <button 
              onClick={() => handleNavClick("pricing")}
              className="bg-[#E8C4B8] text-[#1A1B12] px-8 py-3 rounded-full font-medium transition-all duration-200 hover:bg-[#DCA596]"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.45)', // Razor-sharp silver boundary seam
                boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)'
              }}
            >
              Begin The Reset
            </button>
          </SpotlightWrapper>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-3.5 text-[#1A1B12] hover:bg-black/5 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[70px] left-0 right-0 border border-white/50 px-6 py-6 flex flex-col gap-6 rounded-[24px]"
            style={{
              backgroundColor: "rgba(250, 247, 244, 0.95)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: '1px solid rgba(255, 255, 255, 0.45)',
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)"
            }}
          >
            <button onClick={() => handleNavClick("system")} className="text-left text-lg font-medium text-[#6B6E68] hover:text-[#1A1B12] py-2.5">The System</button>
            <button onClick={() => handleNavClick("faq")} className="text-left text-lg font-medium text-[#6B6E68] hover:text-[#1A1B12] py-2.5">FAQ</button>
            <SpotlightWrapper 
              className="rounded-full overflow-hidden shrink-0"
              spotlightColor="rgba(255, 255, 255, 0.45)"
            >
              <button 
                onClick={() => handleNavClick("pricing")}
                className="w-full bg-[#E8C4B8] text-[#1A1B12] py-3 font-medium text-center transition-all duration-200 hover:bg-[#DCA596] rounded-full"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.45)',
                  boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15), 0 4px 20px rgba(212, 212, 216, 0.08)'
                }}
              >
                Begin The Reset
              </button>
            </SpotlightWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
