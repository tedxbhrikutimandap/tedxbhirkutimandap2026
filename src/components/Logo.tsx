import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";

export const Logo = ({ isFooter = false, className = "" }: { isFooter?: boolean, className?: string }) => {
  const src = isFooter 
    ? siteConfig.logos.footer 
    : siteConfig.logos.white;
  
  return (
    <div className={`relative w-80 h-24 md:w-[450px] md:h-32 ${className}`}>
      <Image
        src={src}
        alt={siteConfig.name}
        fill
        className="object-contain"
        priority
        unoptimized={isFooter}
      />
    </div>
  );
};
