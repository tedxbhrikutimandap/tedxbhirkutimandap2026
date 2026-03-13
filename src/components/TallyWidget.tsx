"use client";

import Script from "next/script";
import { siteConfig } from "@/data/siteConfig";

export const TallyWidget = () => {
  return (
    <>
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      <button
        data-tally-open={siteConfig.tallyFormUrl.split("/").pop()}
        data-tally-layout="modal"
        data-tally-emoji-text="👋"
        data-tally-emoji-animation="wave"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-ted-red text-white rounded-full shadow-2xl hover:scale-105 transition-transform font-bold tracking-widest uppercase text-xs"
      >
        <span className="text-lg">👋</span>
        Register Interest
      </button>
    </>
  );
};
