import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { schedule } from "@/data/schedule";
import { Mic2, Coffee, PartyPopper, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "View the full event schedule for TEDxBhrikutiMandap 2026 — talks, networking sessions, and ceremonies throughout the day in Kathmandu.",
  alternates: { canonical: "/schedule" },
  openGraph: {
    title: "Schedule | TEDxBhrikutiMandap",
    description: "Full day schedule for TEDxBhrikutiMandap 2026.",
  },
};

const typeIcons = {
  talk: Mic2,
  break: Coffee,
  ceremony: PartyPopper,
  networking: Users,
};

const typeColors = {
  talk: "bg-ted-red/10 text-ted-red border-ted-red/30",
  break: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  ceremony: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  networking: "bg-blue-500/10 text-blue-400 border-blue-500/30",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        title="Schedule"
        subtitle="A day of inspiration, connection, and ideas worth spreading at Bhrikuti Mandap, Kathmandu."
      />

      <section className="pb-20 md:pb-32">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-px bg-white/[0.06]" />

              <div className="space-y-0">
                {schedule.map((item, i) => {
                  const Icon = typeIcons[item.type];
                  return (
                    <AnimatedSection key={i} delay={i * 0.05}>
                      <div className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0">
                        {/* Timeline dot */}
                        <div
                          className={`relative z-10 shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center border ${typeColors[item.type]}`}
                        >
                          <Icon size={18} />
                        </div>

                        {/* Content card */}
                        <div className="flex-1 bg-surface-card border border-white/[0.06] rounded-xl p-4 sm:p-5 hover:border-white/[0.1] transition-colors duration-300">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                                {item.time}
                              </span>
                              <h3 className="text-base sm:text-lg font-[900] text-white leading-tight mt-1">
                                {item.title}
                              </h3>
                            </div>
                            <span
                              className={`shrink-0 px-2.5 py-1 rounded-full text-[8px] font-bold uppercase tracking-wider border ${typeColors[item.type]}`}
                            >
                              {item.type}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                            {item.description}
                          </p>
                          {item.speaker && (
                            <p className="text-xs text-ted-red font-bold mt-2">
                              🎤 {item.speaker}
                            </p>
                          )}
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
