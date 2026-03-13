import { siteConfig } from "@/data/siteConfig";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const IconMap: Record<string, any> = {
  Instagram: Instagram,
  Facebook: Facebook,
  LinkedIn: Linkedin,
};

export const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <span className="text-[10px] font-black tracking-[0.6em] uppercase text-white/60 italic">
        Connect With Us
      </span>
      <div className="flex gap-10">
        {siteConfig.socials.map((social) => {
          const Icon = IconMap[social.name];
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 text-white/70 hover:text-ted-red transition-all duration-300"
              aria-label={social.name}
            >
              <div className="p-3 rounded-full bg-white/10 border border-white/20 group-hover:border-ted-red/50 group-hover:bg-ted-red/10 transition-all duration-300">
                {Icon && <Icon size={20} strokeWidth={1.5} />}
              </div>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.name}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};
