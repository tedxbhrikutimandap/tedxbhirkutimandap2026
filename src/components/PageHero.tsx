import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const PageHero = ({ title, subtitle, children }: PageHeroProps) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 hidden h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-ted-red/8 blur-[120px] pointer-events-none md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="h-1 w-12 bg-ted-red rounded-full mb-6 mx-auto" />
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-[900] uppercase tracking-tight text-white leading-[0.95]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-sm md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};
