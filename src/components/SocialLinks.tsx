import { siteConfig } from "@/data/siteConfig";
import { Instagram, Facebook, Linkedin, type LucideIcon } from "lucide-react";

const IconMap: Record<string, LucideIcon> = {
  Instagram: Instagram,
  Facebook: Facebook,
  LinkedIn: Linkedin,
};

export const SocialLinks = ({ vertical = false }: { vertical?: boolean }) => {
  return (
    <div className={`flex ${vertical ? "flex-col items-start gap-4" : "gap-6"}`}>
      {siteConfig.socials.map((social) => {
        const Icon = IconMap[social.name];
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 text-white/50 hover:text-white transition-all duration-300 ${
              vertical ? "w-full" : ""
            }`}
            aria-label={social.name}
          >
            <div className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] group-hover:border-ted-red/50 group-hover:bg-ted-red/10 group-hover:text-ted-red transition-all duration-500 shadow-lg">
              {Icon && <Icon size={18} strokeWidth={1.5} />}
            </div>
            {vertical && (
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 group-hover:text-white transition-colors">
                {social.name}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
};
