"use client";

import { ArrowRight, Ticket } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export default function TicketsPage() {
  const handleTicketClick = () => {
    if (typeof window !== "undefined") {
      // Log to Microsoft Clarity
      if (typeof window.clarity === "function") {
        window.clarity("event", "TicketClick");
      }
      
      // Log to Google Analytics
      if (typeof window.gtag === "function") {
        window.gtag("event", "click", {
          event_category: "Tickets",
          event_label: "Get Tickets - Khalti",
        });
      }
    }
  };

  return (
    <>
      <PageHero
        title="Get Tickets"
        subtitle="Secure your seat for TEDxBhrikutiMandap 2026, a day of bold ideas in the heart of Kathmandu."
      />

      <section className="pb-16 sm:pb-24 md:pb-36">
        <Container>
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-surface-card border border-white/10 rounded-xl sm:rounded-2xl px-5 py-7 sm:p-8 md:p-12">
                <div className="flex flex-col items-center gap-6 sm:gap-7">
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-black/25 border border-white/10 flex items-center justify-center">
                    <Ticket size={26} className="text-ted-red sm:w-7 sm:h-7" strokeWidth={1.5} />
                  </div>

                  {/* Headline */}
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] uppercase tracking-tight text-white leading-[0.95] font-heading">
                      Tickets Are <span className="text-ted-red">Live</span>
                    </h2>
                    <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-md mx-auto">
                      Don&apos;t miss out on this opportunity. Grab your tickets now before they sell out!
                    </p>
                  </div>

                  {/* Button */}
                  <div className="flex flex-col items-center gap-4 w-full mt-2">
                    <a
                      href="https://khalti.com/go?t=event&idx=ET26HWDQD7CQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleTicketClick}
                      className="inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#5E338D] px-6 py-3 text-[12px] font-[900] uppercase tracking-[0.16em] text-white transition-all hover:bg-[#4A2870] active:bg-[#3D215C] hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src="/khalti.png" 
                        alt="Khalti Logo" 
                        className="h-5 w-auto mr-1" 
                      />
                      Get Ticket
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Fine print */}
              <p className="mx-auto mt-5 max-w-xs text-xs leading-relaxed text-white/50 sm:mt-6 sm:max-w-none sm:tracking-wide">
                Transactions are processed securely via Khalti.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
