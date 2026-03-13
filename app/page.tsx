import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { TallyWidget } from "@/components/TallyWidget";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ted-red/10 rounded-full blur-[120px] pointer-events-none" />

      <main className="max-w-4xl w-full text-center space-y-16 animate-in fade-in zoom-in-95 duration-1000 z-10">
        <div className="flex flex-col items-center space-y-8">
          <Logo theme="white" />
          <div className="h-px w-24 bg-white/20" />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            {siteConfig.tagline}
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        <div className="pt-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
            <div className="w-2.5 h-2.5 rounded-full bg-ted-red animate-pulse shadow-[0_0_12px_rgba(235,0,40,0.6)]" />
            <span className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-white/90">
              Coming Soon {siteConfig.eventDate}
            </span>
          </div>
        </div>

        <div className="pt-12">
          <SocialLinks />
        </div>
      </main>

      <footer className="absolute bottom-8 text-center w-full px-4 text-white/30 text-[10px] md:text-xs tracking-[0.2em] uppercase max-w-2xl mx-auto leading-loose">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. This independent TEDx event is operated under license from TED.</p>
      </footer>

      {/* Tally Registration Button/Modal */}
      <TallyWidget />
    </div>
  );
}
