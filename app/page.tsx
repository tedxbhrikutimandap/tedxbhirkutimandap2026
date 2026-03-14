import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { RibbonBanner } from "@/components/RibbonBanner";
import { ComingSoon } from "@/components/ComingSoon";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-between bg-black text-white px-4 relative overflow-hidden font-sans">
      {/* Animated Ribbon Banners */}
      <RibbonBanner />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-ted-red/10 rounded-full blur-[160px] pointer-events-none animate-pulse duration-7000" />

      <main className="max-w-5xl w-full text-center pt-28 md:pt-32 pb-6 flex flex-col items-center gap-6 md:gap-8 animate-in fade-in zoom-in-95 duration-1000 z-10 flex-1 justify-center">
        {/* Logo and Social Links Container */}
        <div className="flex flex-col items-center gap-6">
          <Logo
            theme="white"
            className="hover:scale-[1.02] transition-transform duration-500"
          />

          {/* Social Links moved under Logo */}
          <div className="scale-75 md:scale-90 origin-center -mt-2">
            <SocialLinks />
          </div>

          <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2" />
        </div>

        {/* Coming Soon — overlapping text + date + nominate CTA */}
        <ComingSoon />

        {/* Tagline + Description */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-[900] tracking-tight text-white leading-[0.95]">
            {siteConfig.tagline}
          </h1>
          <p className="text-[10px] sm:text-sm md:text-base font-light text-white/50 max-w-xl mx-auto leading-relaxed tracking-tight">
            {siteConfig.description}
          </p>
        </div>
      </main>

      <footer className="w-full pb-6 pt-4 text-center px-6 text-white/30 text-[8px] md:text-[10px] tracking-[0.4em] uppercase max-w-4xl mx-auto leading-loose font-bold z-10 border-t border-white/5">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. This independent
          TEDx event is operated under license from TED.
        </p>
      </footer>
    </div>
  );
}
