import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Get Tickets",
  description: "Secure your spot at TEDxBhrikutiMandap 2026. Join us for a day of sharing ideas, inspiration, and networking in the heart of Kathmandu.",
};

export default function TicketsPage() {
  return (
    <>
      <PageHero
        title="Get Tickets"
        subtitle="Be part of the conversation. Secure your seat for TEDxBhrikutiMandap 2026 and join a community of visionary thinkers."
      />

      <section className="pb-20 md:pb-32">
        <Container>
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              {/* Tally Form Placeholder Container */}
              <div className="relative w-full aspect-[4/5] md:aspect-[4/3] lg:aspect-[16/10] bg-surface-card border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8 text-center group">
                
                {/* Visual Ambient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-ted-red/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-ted-red/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                  }}
                />
                
                <div className="relative z-10 max-w-md">
                  {/* Icon Placeholder */}
                  <div className="w-24 h-24 rounded-3xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:border-ted-red/30 group-hover:bg-ted-red/5 transition-all duration-700 shadow-xl">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-ted-red"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <line x1="10" y1="9" x2="8" y2="9" />
                    </svg>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-[900] text-white uppercase tracking-tight mb-4 font-heading">
                    Registration Form
                  </h2>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8">
                    Our attendee registration portal powered by Tally.so will load here once the event configuration is finalized. 
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-ted-red animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                      System Ready for Integration
                    </span>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-white/5 rounded-tl-xl" />
                <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-white/5 rounded-br-xl" />
              </div>

              {/* Security/Trust Badges */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-30">
                 <div className="flex items-center justify-center gap-3 grayscale">
                    <div className="h-px flex-1 bg-white/20" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] whitespace-nowrap text-white">Secure HTTPS</span>
                    <div className="h-px flex-1 bg-white/20" />
                 </div>
                 <div className="flex items-center justify-center gap-3 grayscale">
                    <div className="h-px flex-1 bg-white/20" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] whitespace-nowrap text-white">Private & Encrypted</span>
                    <div className="h-px flex-1 bg-white/20" />
                 </div>
                 <div className="flex items-center justify-center gap-3 grayscale">
                    <div className="h-px flex-1 bg-white/20" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] whitespace-nowrap text-white">TEDx Policy Compliant</span>
                    <div className="h-px flex-1 bg-white/20" />
                 </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
