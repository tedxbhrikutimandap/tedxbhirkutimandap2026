import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TEDxBhrikutiMandap — an independently organized TEDx event in Kathmandu, Nepal. Discover our story, our mission, and the venue.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About TEDxBhrikutiMandap",
    description:
      "An independently organized TEDx event bringing ideas worth spreading to Kathmandu, Nepal.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="TEDxBhrikutiMandap is an independently organized TEDx event, bringing the spirit of ideas worth spreading to the heart of Kathmandu."
      />

      {/* ── Our Story ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/event-atmosphere.png"
                  alt="TEDxBhrikutiMandap event"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="h-1 w-12 bg-ted-red rounded-full mb-6" />
              <h2 className="text-3xl sm:text-4xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed">
                <p>
                  TEDxBhrikutiMandap was born from a simple belief: Nepal is home to extraordinary
                  ideas that deserve a global platform. Named after the iconic Bhrikuti Mandap
                  exhibition hall in Kathmandu, our event bridges local innovation with global inspiration.
                </p>
                <p>
                  We bring together thinkers, creators, and doers — from climate scientists to
                  social entrepreneurs, digital artists to mountaineers — all united by a
                  commitment to ideas that challenge, inspire, and transform.
                </p>
                <p>
                  Our 2026 event marks a new chapter, as we aim to amplify voices from Nepal
                  and the broader South Asian region on the world stage.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ── What is TEDx ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface border-y border-white/[0.04]">
        <Container>
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-8">
              What is <span className="text-ted-red">TEDx</span>?
            </h2>
            <div className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed">
              <p>
                In the spirit of ideas worth spreading, TED has created a program called TEDx.
                TEDx is a program of local, self-organized events that bring people together to
                share a TED-like experience.
              </p>
              <p>
                At a TEDx event, TED Talks video and live speakers combine to spark deep
                discussion and connection. These local, self-organized events are branded TEDx,
                where <strong className="text-white">x = independently organized TED event</strong>.
              </p>
              <p>
                The TED Conference provides general guidance for the TEDx program, but individual
                TEDx events are self-organized. (Subject to certain rules and regulations.)
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── The Venue ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="h-1 w-12 bg-ted-red rounded-full mb-6" />
              <h2 className="text-3xl sm:text-4xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-6">
                The Venue
              </h2>
              <div className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed">
                <p>
                  <strong className="text-white">Bhrikuti Mandap</strong> is one of Kathmandu&apos;s
                  most iconic event spaces, located in the heart of the city near the Tundikhel
                  parade ground.
                </p>
                <p>
                  With its spacious halls and central location, it provides the perfect setting
                  for an event that brings together diverse minds from across Nepal and beyond.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://maps.google.com/?q=Bhrikuti+Mandap+Kathmandu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-ted-red hover:text-ted-red-light transition-colors group"
                >
                  View on Google Maps
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.06]">
                <Image
                  src="/images/venue-hero.png"
                  alt="Bhrikuti Mandap, Kathmandu"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ── Meet the Team CTA ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-card border-y border-white/[0.04]">
        <Container className="text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-4">
              Meet the Team
            </h2>
            <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-8">
              The passionate volunteers making TEDxBhrikutiMandap 2026 a reality.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-2.5 bg-ted-red px-7 py-3.5 rounded-full text-white text-xs font-[900] uppercase tracking-[0.15em] shadow-[0_8px_25px_rgba(235,0,40,0.4)] hover:shadow-[0_12px_35px_rgba(235,0,40,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              View Team
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
