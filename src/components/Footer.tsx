import Link from "next/link";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Red glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-ted-red/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Logo isFooter className="!w-48 !h-12" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-[900] uppercase tracking-[0.25em] text-white/60 mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social / Connect */}
          <div>
            <h4 className="text-[11px] font-[900] uppercase tracking-[0.25em] text-white/60 mb-5">
              Connect With Us
            </h4>
            <SocialLinks vertical />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/25 text-center sm:text-left leading-relaxed font-bold">
            &copy; {new Date().getFullYear()} {siteConfig.name}. This
            independent TEDx event is operated under license from TED.
          </p>
          <Link
            href="/privacy"
            className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-white/25 hover:text-white/50 transition-colors duration-300 font-bold shrink-0"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
