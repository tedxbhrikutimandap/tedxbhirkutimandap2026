import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";

export const Logo = ({ theme = "white" }: { theme?: "black" | "white" }) => {
  const src = theme === "white" ? siteConfig.logos.white : siteConfig.logos.black;
  
  return (
    <div className="relative w-64 h-16 md:w-80 md:h-20">
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
