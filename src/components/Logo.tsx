import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";

export const Logo = ({ isFooter = false, className = "" }: { isFooter?: boolean, className?: string }) => {
  const src = isFooter 
    ? siteConfig.logos.footer 
    : siteConfig.logos.white;
  
  return (
    <div className={`relative w-40 h-10 md:w-52 md:h-12 ${className}`}>
      <Image
        src={src}
        alt={siteConfig.name}
        fill
        className="object-contain"
        priority
        sizes="(max-width: 768px) 13rem, 28rem"
        unoptimized={isFooter}
      />
    </div>
  );
};
