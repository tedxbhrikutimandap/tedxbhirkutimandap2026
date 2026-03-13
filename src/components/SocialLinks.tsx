import { siteConfig } from "@/data/siteConfig";

export const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">
        Follow Us
      </span>
      <div className="flex gap-6">
        {siteConfig.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-ted-red transition-colors text-sm font-medium tracking-widest uppercase"
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
};
