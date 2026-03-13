import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-ted-red/10 rounded-full blur-[160px] pointer-events-none animate-pulse duration-7000" />

      <main className="max-w-5xl w-full text-center py-20 flex flex-col items-center space-y-24 animate-in fade-in zoom-in-95 duration-1000 z-10">
        <div className="flex flex-col items-center space-y-12">
          <Logo theme="white" className="hover:scale-[1.02] transition-transform duration-500" />
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="space-y-10">
          <h1 className="text-5xl md:text-9xl font-[900] tracking-tight text-white leading-[0.9]">
            {siteConfig.tagline}
          </h1>
          <p className="text-xl md:text-3xl font-light text-white/60 max-w-3xl mx-auto leading-relaxed tracking-tight">
            {siteConfig.description}
          </p>
        </div>

        <div className="pt-4">
          <div className="inline-flex flex-col items-center gap-6 px-12 py-8 border border-white/10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-t-white/20">
            <span className="text-sm md:text-lg font-[900] tracking-[0.6em] uppercase text-ted-red italic">
              Coming Soon
            </span>
            <div className="h-px w-16 bg-white/10" />
            <span className="text-3xl md:text-5xl font-light tracking-[0.2em] text-white/90">
              {siteConfig.eventDate}
            </span>
          </div>
        </div>

        <div className="pt-12 w-full">
          <SocialLinks />
        </div>
      </main>

      <footer className="w-full pb-12 pt-10 text-center px-6 text-white/40 text-[9px] md:text-xs tracking-[0.4em] uppercase max-w-4xl mx-auto leading-loose font-bold z-10 border-t border-white/10 mt-auto">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. This independent TEDx event is operated under license from TED.</p>
      </footer>

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
