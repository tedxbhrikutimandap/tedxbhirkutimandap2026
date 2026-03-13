"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Mic2 } from "lucide-react";

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
    const isAtBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 100;

    if (isAtBottom) {
      setIsVisible(true);
    } else if (currentScrollY > 100 && scrollDifference > 10) {
      // Scrolling down - hide
      setIsVisible(false);
    } else if (scrollDifference < -5) {
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
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleActionClick = (action: string) => {
    setLoadingAction(action);
    // Tally modals open via data attributes, but we set a timeout to reset loading state
    // in case the modal opens or fails silently
    setTimeout(() => setLoadingAction(null), 3000);
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ease-in-out sm:bottom-8 sm:right-8 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
    >
      {/* Prompt Bubble */}
      <div className="relative mb-2">
        <div className="rounded-2xl bg-white px-4 py-2 text-[10px] font-bold tracking-wider text-black shadow-2xl transition-all duration-500 sm:text-[11px] min-w-[140px] text-center">
          <div className="relative h-4 overflow-hidden">
            {PROMPTS.map((prompt, idx) => (
              <span
                key={prompt.text}
                className={`absolute inset-0 transition-all duration-500 ease-in-out whitespace-nowrap ${
                  idx === currentPromptIdx ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {prompt.text}
              </span>
            ))}
          </div>
        </div>
        {/* Triangle pointer */}
        <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-white shadow-2xl" />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 w-full sm:w-auto">
        <a
          href={siteConfig.tallyFormUrl}
          data-tally-open={waitlistFormId}
          data-tally-layout="modal"
          data-tally-width="500"
          data-tally-overlay="1"
          data-tally-emoji-text="👋"
          data-tally-emoji-animation="wave"
          onClick={() => handleActionClick("waitlist")}
          className={`group flex items-center justify-center gap-3 rounded-full bg-ted-red px-6 py-3.5 text-white shadow-[0_10px_30px_rgba(235,0,40,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 ${
            currentPromptIdx === 0 ? "ring-4 ring-ted-red/20" : ""
          }`}
        >
          <Mail size={18} fill="white" strokeWidth={1} className={loadingAction === "waitlist" ? "animate-pulse" : ""} />
          <span className="text-xs font-[900] uppercase tracking-[0.2em]">
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
          className={`group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95 ${
            currentPromptIdx === 1 ? "ring-4 ring-white/10" : ""
          }`}
        >
          <Mic2 size={16} className={`text-ted-red ${loadingAction === "nominate" ? "animate-pulse" : ""}`} strokeWidth={2} />
          <span className="text-xs font-[900] uppercase tracking-[0.2em]">
            {loadingAction === "nominate" ? "Opening..." : "Nominate candidate"}
          </span>
        </a>
      </div>
    </div>
  );
};
