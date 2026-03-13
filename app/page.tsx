import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4">
      <main className="max-w-4xl w-full text-center space-y-12 animate-in fade-in duration-1000">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl md:text-7xl font-bold tracking-tighter text-ted-red">
              TEDx
            </span>
            <span className="text-2xl md:text-3xl font-light tracking-tight text-white">
              BhirkutiMandap
            </span>
          </div>
          <div className="h-px w-full max-w-[200px] bg-white/20" />
          <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-white/60">
            2026 EVENT
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Ideas Worth Spreading
          </h1>
          <p className="text-lg md:text-xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
            We are preparing something extraordinary. Join us in 2026 for a journey through inspiration, innovation, and impact.
          </p>
        </div>

        <div className="pt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-ted-red animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase text-white">
              Coming Soon
            </span>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-8 text-center w-full text-white/40 text-xs tracking-wider uppercase">
        <p>&copy; 2026 TEDxBhirkutiMandap. This independent TEDx event is operated under license from TED.</p>
      </footer>
    </div>
  );
}
