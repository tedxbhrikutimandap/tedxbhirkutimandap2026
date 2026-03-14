"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Mic2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ComingSoon = () => {
  const nominationFormUrl = `https://tally.so/r/${siteConfig.nominationFormId}`;
  const waitlistFormId = siteConfig.tallyFormUrl.split("/").pop();

  const [activeTooltip, setActiveTooltip] = useState<"nominate" | "waitlist" | null>(null);

  // Auto-cycle tooltips: nominate first, then waitlist
  useEffect(() => {
    const t1 = setTimeout(() => setActiveTooltip("nominate"), 1500);
    const t2 = setTimeout(() => setActiveTooltip(null), 5000);
    const t3 = setTimeout(() => setActiveTooltip("waitlist"), 6000);
    const t4 = setTimeout(() => setActiveTooltip(null), 9500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 md:gap-8">
      {/* Overlapping "COMING SOON" text block — Black Friday style */}
      <div className="relative flex flex-col items-center select-none">
        {/* Top outlined text — shows top portion of letters, bottom clipped */}
        <div className="h-[1.2rem] sm:h-[1.8rem] md:h-[2.5rem] lg:h-[3.2rem] overflow-hidden">
          <span
            className="block text-[2.5rem] sm:text-6xl md:text-8xl lg:text-9xl font-[900] uppercase tracking-tight leading-[0.9] pointer-events-none"
            style={{ WebkitTextStroke: "1.5px rgba(235, 0, 40, 0.35)", color: "transparent" }}
            aria-hidden="true"
          >
            Coming Soon
          </span>
        </div>

        {/* Primary solid text — center, fully visible */}
        <h2
          className="text-[2.5rem] sm:text-6xl md:text-8xl lg:text-9xl font-[900] uppercase tracking-tight text-ted-red leading-[0.9] drop-shadow-[0_0_40px_rgba(235,0,40,0.4)]"
        >
          Coming Soon
        </h2>

        {/* Bottom outlined text — shows bottom portion of letters, top clipped */}
        <div className="h-[1.2rem] sm:h-[1.8rem] md:h-[2.5rem] lg:h-[3.2rem] overflow-hidden">
          <span
            className="block text-[2.5rem] sm:text-6xl md:text-8xl lg:text-9xl font-[900] uppercase tracking-tight leading-[0.9] pointer-events-none translate-y-[-55%]"
            style={{ WebkitTextStroke: "1.5px rgba(235, 0, 40, 0.35)", color: "transparent" }}
            aria-hidden="true"
          >
            Coming Soon
          </span>
        </div>
      </div>

      {/* Event date */}
      <span className="text-2xl sm:text-3xl md:text-5xl font-black tracking-[0.3em] text-white/80">
        {siteConfig.eventDate}
      </span>

      {/* CTA Buttons — side by side */}
      <div className="flex flex-row items-start gap-3 sm:gap-4 mt-2">
        {/* Nominate a Speaker */}
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setActiveTooltip("nominate")}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          <a
            href={nominationFormUrl}
            data-tally-open={siteConfig.nominationFormId}
            data-tally-layout="modal"
            data-tally-width="500"
            data-tally-overlay="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="group relative flex items-center justify-center gap-2 sm:gap-2.5 rounded-full bg-ted-red/10 border-2 border-ted-red/60 px-5 sm:px-7 py-3 sm:py-3.5 text-white transition-all duration-300 hover:bg-ted-red hover:border-ted-red hover:scale-105 hover:shadow-[0_0_40px_rgba(235,0,40,0.5)] active:scale-95 shadow-[0_0_20px_rgba(235,0,40,0.12)]"
          >
            <Mic2
              size={16}
              className="text-ted-red group-hover:text-white transition-colors duration-300 shrink-0"
              strokeWidth={2.5}
            />
            <span className="text-[10px] sm:text-xs font-[900] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-ted-red group-hover:text-white transition-colors duration-300 whitespace-nowrap">
              Nominate Speaker
            </span>
          </a>

          {/* Tooltip below */}
          <AnimatePresence>
            {activeTooltip === "nominate" && (
              <motion.div
                initial={{ y: -6, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -4, opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="absolute top-full mt-3 z-10"
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-white" />
                <div className="rounded-xl bg-white px-4 py-2 text-[10px] sm:text-[11px] font-[900] tracking-wider text-black shadow-[0_10px_30px_rgba(255,255,255,0.2)] whitespace-nowrap">
                  Who needs to be heard? 🎤
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Join Waitlist */}
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setActiveTooltip("waitlist")}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          <a
            href={siteConfig.tallyFormUrl}
            data-tally-open={waitlistFormId}
            data-tally-layout="modal"
            data-tally-width="500"
            data-tally-overlay="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="group relative flex items-center justify-center gap-2 sm:gap-2.5 rounded-full bg-ted-red px-5 sm:px-7 py-3 sm:py-3.5 text-white shadow-[0_8px_25px_rgba(235,0,40,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_35px_rgba(235,0,40,0.55)] active:scale-95"
          >
            <Mail
              size={16}
              fill="white"
              strokeWidth={1}
              className="shrink-0"
            />
            <span className="text-[10px] sm:text-xs font-[900] uppercase tracking-[0.15em] sm:tracking-[0.2em] whitespace-nowrap">
              Join Waitlist
            </span>
          </a>

          {/* Tooltip below */}
          <AnimatePresence>
            {activeTooltip === "waitlist" && (
              <motion.div
                initial={{ y: -6, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -4, opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="absolute top-full mt-3 z-10"
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-white" />
                <div className="rounded-xl bg-white px-4 py-2 text-[10px] sm:text-[11px] font-[900] tracking-wider text-black shadow-[0_10px_30px_rgba(255,255,255,0.2)] whitespace-nowrap">
                  Be the first to know ✨
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
