"use client";

import { siteConfig } from "@/data/siteConfig";
import { Mail, Mic2 } from "lucide-react";

export const TallyWidget = () => {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 group">

        {/* Nominate Speaker Button */}
        <div className="flex flex-col items-end gap-2 group/nominate">
          <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg opacity-0 group-hover/nominate:opacity-100 transition-opacity duration-300 text-[9px] font-bold tracking-widest uppercase text-white/80 max-w-[200px] text-right">
            Who is the Voice Kathmandu Needs to Hear?
          </div>
          <button
            data-tally-open={siteConfig.nominationFormId}
            data-tally-layout="modal"
            data-tally-width="500"
            data-tally-overlay="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="flex items-center gap-3 px-5 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <Mic2 size={18} className="text-ted-red" strokeWidth={2} />
            <span className="font-black tracking-[0.2em] uppercase text-[10px]">
              Nominate Candidate
            </span>
          </button>
        </div>

        {/* Join Waitlist Button */}
        <div className="flex flex-col items-end gap-2 group/waitlist">
          <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg opacity-0 group-hover/waitlist:opacity-100 transition-opacity duration-300 text-[9px] font-bold tracking-widest uppercase text-white/80">
            Be the First to Know
          </div>
          <button
            data-tally-open={siteConfig.tallyFormUrl.split("/").pop()}
            data-tally-layout="modal"
            data-tally-width="500"
            data-tally-overlay="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="flex items-center gap-3 px-6 py-5 bg-ted-red text-white rounded-2xl shadow-[0_0_20px_rgba(235,0,40,0.4)] hover:shadow-[0_0_30px_rgba(235,0,40,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 animate-bounce-slow"
          >
            <Mail size={20} fill="white" strokeWidth={1} />
            <span className="font-black tracking-[0.2em] uppercase text-xs">
              Join waitlist
            </span>
          </button>
        </div>
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
        
        /* Tally custom styling to force bottom-right if possible via data-attributes */
        .tally-popup {
          right: 20px !important;
          bottom: 20px !important;
          left: auto !important;
          top: auto !important;
          transform: none !important;
        }
      `}</style>
    </>
  );
};
