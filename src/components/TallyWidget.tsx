"use client";

import Script from "next/script";
import { siteConfig } from "@/data/siteConfig";
import { Mail } from "lucide-react";

export const TallyWidget = () => {
  return (
    <>
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 group">
        {/* Tooltip message */}
        <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-bold tracking-widest uppercase text-white/80">
          Wait for the event
        </div>
        
        <button
          data-tally-open={siteConfig.tallyFormUrl.split("/").pop()}
          data-tally-layout="modal"
          data-tally-emoji-text="👋"
          data-tally-emoji-animation="wave"
          className="flex items-center gap-3 px-6 py-5 bg-ted-red text-white rounded-2xl shadow-[0_0_20px_rgba(235,0,40,0.4)] hover:shadow-[0_0_30px_rgba(235,0,40,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 animate-bounce-slow"
        >
          <Mail size={20} fill="white" strokeWidth={1} />
          <span className="font-black tracking-[0.2em] uppercase text-xs">
            Register Interest
          </span>
        </button>
      </div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};
