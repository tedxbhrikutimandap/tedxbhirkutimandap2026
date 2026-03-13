"use client";

import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const waitlistFormId = siteConfig.tallyFormUrl.split("/").pop();

  // Threshold-based scroll detection
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollDifference = currentScrollY - lastScrollY;
    const isAtBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 50;

    if (currentScrollY < 50 || isAtBottom) {
      setIsVisible(true);
    } else if (scrollDifference > 10) {
      setIsVisible(false);
    } else if (scrollDifference < -20) {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 100, opacity: 0, x: "-50%" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-1/2 z-50 flex flex-col items-center gap-3 sm:left-auto sm:right-8 sm:translate-x-0 sm:items-end sm:bottom-8"
        >
          {/* Prompt Bubble */}
          <motion.div
            className="relative mb-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="rounded-2xl bg-white px-6 py-3 text-xs font-[900] tracking-wider text-black shadow-[0_20px_50px_rgba(255,255,255,0.3)] transition-all duration-500 sm:text-sm text-center border border-black/5 whitespace-nowrap">
              Be the first to know ✨
            </div>
            {/* Triangle pointer */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 bg-white sm:left-auto sm:right-8 sm:translate-x-0" />
          </motion.div>

          {/* Join Waitlist Button */}
          <a
            href={siteConfig.tallyFormUrl}
            data-tally-open={waitlistFormId}
            data-tally-layout="modal"
            data-tally-width="500"
            data-tally-overlay="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="group relative flex items-center justify-center gap-2 rounded-full bg-ted-red px-5 py-3.5 text-white shadow-[0_10px_30px_rgba(235,0,40,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 sm:w-[240px] sm:px-8 sm:py-4 sm:gap-3 ring-2 ring-white ring-offset-2 ring-offset-black"
          >
            <Mail size={18} fill="white" strokeWidth={1} className="relative z-10 sm:w-5 sm:h-5" />
            <span className="relative z-10 text-[11px] font-[900] uppercase tracking-[0.2em] sm:text-[13px]">
              Join waitlist
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
