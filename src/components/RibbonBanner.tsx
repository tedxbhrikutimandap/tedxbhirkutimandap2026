"use client";

interface RibbonProps {
  text?: string;
  separator?: string;
  repeat?: number;
  className?: string;
}

const RibbonStrip = ({
  text = "COMING SOON",
  separator = "★",
  repeat = 12,
  direction = "left",
  className = "",
}: RibbonProps & { direction?: "left" | "right" }) => {
  const content = Array.from({ length: repeat })
    .map(() => `${text} ${separator}`)
    .join(" ");

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`inline-flex ${
          direction === "left" ? "animate-ribbon-scroll-left" : "animate-ribbon-scroll-right"
        }`}
      >
        {/* Two identical spans for seamless loop */}
        <span className="inline-block px-4 text-[11px] sm:text-sm md:text-base font-[900] tracking-[0.35em] uppercase">
          {content}
        </span>
        <span className="inline-block px-4 text-[11px] sm:text-sm md:text-base font-[900] tracking-[0.35em] uppercase">
          {content}
        </span>
      </div>
    </div>
  );
};

export const RibbonBanner = ({
  text,
  separator,
  repeat,
  className = "",
}: RibbonProps) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full pointer-events-none select-none z-20 ${className}`}
      aria-hidden="true"
    >
      {/* Ribbon 1 — angled left-to-right */}
      <div
        className="relative -left-[10%] w-[120%]"
        style={{ transform: "rotate(-12deg)", transformOrigin: "center top" }}
      >
        <div className="bg-ted-red text-white py-2.5 md:py-3 shadow-[0_4px_30px_rgba(235,0,40,0.5),0_0_60px_rgba(235,0,40,0.2)]">
          <RibbonStrip
            text={text}
            separator={separator}
            repeat={repeat}
            direction="left"
          />
        </div>
      </div>

      {/* Ribbon 2 — angled right-to-left */}
      <div
        className="relative -left-[10%] w-[120%] -mt-4 md:-mt-2"
        style={{ transform: "rotate(12deg)", transformOrigin: "center top" }}
      >
        <div className="bg-black text-white/90 py-2.5 md:py-3 border-y border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
          <RibbonStrip
            text={text}
            separator={separator}
            repeat={repeat}
            direction="right"
          />
        </div>
      </div>
    </div>
  );
};
