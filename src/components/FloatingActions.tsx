"use client";

import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Mic2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PROMPTS = [
  { text: "Be the first to know", action: "waitlist" },
  { text: "Who needs to be heard?", action: "nominate" },
];

export const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromptIdx, setCurrentPromptIdx] = useState(0);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const waitlistFormId = siteConfig.tallyFormUrl.split("/").pop();
  const nominationFormUrl = `https://tally.so/r/${siteConfig.nominationFormId}`;

  // Threshold-based scroll detection
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollDifference = currentScrollY - lastScrollY;
    const isAtBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 50;

    if (currentScrollY < 50 || isAtBottom) {
      setIsVisible(true);
    } else if (scrollDifference > 10) {
      // Scrolling down - hide
      setIsVisible(false);
    } else if (scrollDifference < -20) {
      // Scrolling up - show
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Rotating prompts
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentPromptIdx((prev) => (prev + 1) % PROMPTS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleActionClick = (action: string) => {
    setLoadingAction(action);
    setTimeout(() => setLoadingAction(null), 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 100, opacity: 0, x: "-50%" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-1/2 z-50 flex flex-col items-center gap-3 sm:left-auto sm:right-8 sm:translate-x-0 sm:items-end sm:bottom-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
        >
          {/* Prompt Bubble */}
          <motion.div 
            className="relative mb-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="rounded-2xl bg-white px-6 py-3 text-xs font-[900] tracking-wider text-black shadow-[0_20px_50px_rgba(255,255,255,0.3)] transition-all duration-500 sm:text-sm text-center border border-black/5 whitespace-nowrap">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentPromptIdx}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  {PROMPTS[currentPromptIdx].text}
                </motion.span>
              </AnimatePresence>
            </div>
            {/* Triangle pointer */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 bg-white sm:left-auto sm:right-8 sm:translate-x-0" />
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-2 sm:flex-col sm:gap-4">
            <a
              href={siteConfig.tallyFormUrl}
              data-tally-open={waitlistFormId}
              data-tally-layout="modal"
              data-tally-width="500"
              data-tally-overlay="1"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              onClick={() => handleActionClick("waitlist")}
              className={`group relative flex items-center justify-center gap-2 rounded-full bg-ted-red px-5 py-3.5 text-white shadow-[0_10px_30px_rgba(235,0,40,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 sm:w-[240px] sm:px-8 sm:py-4 sm:gap-3 ${
                currentPromptIdx === 0 ? "ring-2 ring-white ring-offset-2 ring-offset-black" : ""
              }`}
            >
              <Mail size={18} fill="white" strokeWidth={1} className={`relative z-10 ${loadingAction === "waitlist" ? "animate-spin" : ""} sm:w-5 sm:h-5`} />
              <span className="relative z-10 text-[11px] font-[900] uppercase tracking-[0.2em] sm:text-[13px]">
                {loadingAction === "waitlist" ? "Opening..." : "Join waitlist"}
              </span>
            </a>

            <a
              href={nominationFormUrl}
              data-tally-open={siteConfig.nominationFormId}
              data-tally-layout="modal"
              data-tally-width="500"
              data-tally-overlay="1"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              onClick={() => handleActionClick("nominate")}
              className={`group relative flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/60 px-5 py-3.5 text-white shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95 sm:w-[240px] sm:px-8 sm:py-4 sm:gap-3 ${
                currentPromptIdx === 1 ? "ring-2 ring-ted-red ring-offset-2 ring-offset-black" : ""
              }`}
            >
              <Mic2 size={16} className={`relative z-10 text-ted-red ${loadingAction === "nominate" ? "animate-spin" : ""} sm:w-5 sm:h-5`} strokeWidth={2.5} />
              <span className="relative z-10 text-[11px] font-[900] uppercase tracking-[0.2em] sm:text-[13px]">
                {loadingAction === "nominate" ? "Opening..." : "Nominate candidate"}
              </span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
