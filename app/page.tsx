import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { TallyWidget } from "@/components/TallyWidget";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ted-red/10 rounded-full blur-[140px] pointer-events-none" />

      <main className="max-w-4xl w-full text-center space-y-20 animate-in fade-in zoom-in-95 duration-1000 z-10">
        <div className="flex flex-col items-center space-y-10">
          <Logo theme="white" />
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        <div className="space-y-8">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-tight">
            {siteConfig.tagline}
          </h1>
          <p className="text-xl md:text-3xl font-light text-white/70 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        <div className="pt-8">
          <div className="inline-flex flex-col items-center gap-4 px-10 py-6 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-xl shadow-2xl">
            <span className="text-sm md:text-base font-black tracking-[0.5em] uppercase text-ted-red">
              Coming Soon
            </span>
            <div className="h-px w-12 bg-white/20" />
            <span className="text-2xl md:text-3xl font-light tracking-widest text-white/90">
              {siteConfig.eventDate}
            </span>
          </div>
        </div>

        <div className="pt-16">
          <SocialLinks />
        </div>
      </main>

      <footer className="absolute bottom-8 text-center w-full px-6 text-white/20 text-[10px] md:text-xs tracking-[0.3em] uppercase max-w-3xl mx-auto leading-loose font-medium">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. This independent TEDx event is operated under license from TED.</p>
      </footer>

      {/* Tally Registration Button/Modal */}
      <TallyWidget />
    </div>
  );
}
