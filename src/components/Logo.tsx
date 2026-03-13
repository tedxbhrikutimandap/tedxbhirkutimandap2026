import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";

export const Logo = ({ theme = "white", className = "" }: { theme?: "black" | "white", className?: string }) => {
  const src = theme === "white" ? siteConfig.logos.white : siteConfig.logos.black;
  
  return (
    <div className={`relative w-80 h-24 md:w-[450px] md:h-32 ${className}`}>
      <Image
        src={src}
        alt={siteConfig.name}
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};
