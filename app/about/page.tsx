import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lightbulb, Users, Globe, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TEDxBhrikutiMandap 2026 — Envisioning Tomorrow. An independently organized TEDx event in Kathmandu, Nepal, bringing together bold ideas shaping the future.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About TEDxBhrikutiMandap — Envisioning Tomorrow",
    description:
      "An independently organized TEDx event bringing ideas worth spreading to Kathmandu, Nepal. Our 2026 theme: Envisioning Tomorrow.",
  },
};

const pillars = [
  {
    icon: Lightbulb,
    title: "Challenging the Prejudice",
    description:
      "We believe that true progress begins when we build the courage to question the prevailing biases.",
  },
  {
    icon: Users,
    title: "Humility over Arrogance",
    description:
      "We would rather endure the string of humiliation than poison ourselves with arrogance.",
  },
  {
    icon: Sparkles,
    title: "Integrity of the Impact",
    description:
      "The idea has no worth if it does not leave the world better than what we found.",
  },
  {
    icon: Globe,
    title: "Stewardship of the Future",
    description:
      "We believe we are not the viewers of the present, but the guardians of the future. It is our solemn duty to come up with ideas to protect it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        subtitle="TEDxBhrikutiMandap is an independently organized TEDx event, bringing the spirit of ideas worth spreading to the heart of Kathmandu."
      />

      {/* ── Theme Section ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-y border-white/[0.04]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.06]">
                <Image
                  src="/images/event-atmosphere.png"
                  alt="TEDxBhrikutiMandap — Envisioning Tomorrow"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-ted-red/10 to-transparent" />
                {/* Theme overlay text */}
                <div className="absolute bottom-6 left-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50 mb-1">
                    2026 Theme
                  </p>
                  <p className="text-2xl sm:text-3xl font-[900] text-white uppercase tracking-tight leading-[0.95]">
                    Envisioning
                    <br />
                    <span className="text-ted-red">Tomorrow</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="h-1 w-12 bg-ted-red rounded-full mb-6" />
              <h2 className="text-3xl sm:text-4xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-6">
                The Theme
              </h2>
              <div className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed">
                <p>
                  In this present year of 2026, we find ourselves standing at the edge of a brand new era and perceive the undefined potential within our society. Which requires a strong combination of courage and imagination to ask questions that will bring a change.
                </p>
                <p>
                  Through this conference, we are keen to create an environment of intellectual curiosity where the questions asked today bloom into a legacy of profound discovery. By gathering the most elite and forward-thinking individuals we aim to lead with quiet wisdom and a sharp eye for the future in a present full of noise.
                </p>
                <p>
                  We are dedicated to building a new legacy of enlightenment for those who follow. We welcome the restless and brave to join us in shaping a brand new chapter.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ── Our Pillars ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              title="What We Stand For"
              subtitle="The principles that guide every TEDxBhrikutiMandap experience."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <AnimatedSection key={pillar.title} delay={i * 0.1}>
                  <div className="bg-surface-card border border-white/[0.06] rounded-2xl p-6 h-full hover:border-ted-red/20 hover:-translate-y-1 transition-all duration-500 group cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-ted-red/10 border border-ted-red/20 flex items-center justify-center mb-5 group-hover:bg-ted-red/20 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                      <Icon size={20} className="text-ted-red group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base font-[900] text-white uppercase tracking-wide mb-3 group-hover:text-ted-red transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                      {pillar.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Our Story ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-y border-white/[0.04]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="h-1 w-12 bg-ted-red rounded-full mb-6" />
              <h2 className="text-3xl sm:text-4xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed">
                <p>
                  <strong className="text-white text-lg">Beyond the Horizon</strong><br/>
                  We gather to move beyond the surface of the day and center our efforts on the enduring. Under the banner of &quot;Envisioning Tomorrow,&quot; we seek to replace the prejudices of old with a new clarity of thought, bequeathing a brighter world to those who follow in our footsteps.
                </p>
                <p>
                  This event is rooted in the history of Bhrikutimandap, a place that has watched Kathmandu grow and change for years. Like the great gatherings of the past, we created this event to be a space for honest talk and big ideas.
                </p>
                <p>
                  Our goal is simple: to keep that tradition alive and make sure Kathmandu&apos;s voice is heard clearly by the rest of the world.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.06]">
                <Image
                  src="/images/venue-hero.png"
                  alt="Bhrikuti Mandap, Kathmandu — TEDxBhrikutiMandap venue"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ── What is TEDx ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
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
                TEDx events are self-organized, subject to certain rules and regulations.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── Venue + Team CTA ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-y border-white/[0.04]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Speakers Card */}
            <AnimatedSection direction="left">
              <div className="bg-surface border border-white/[0.06] rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-[900] text-white uppercase tracking-tight mb-3">
                    🎤 The Speakers
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    Meet the visionaries, explorers, and builders sharing their stories on the
                    TEDxBhrikutiMandap stage this year.
                  </p>
                </div>
                <Link
                  href="/speakers"
                  className="inline-flex items-center gap-2 text-sm font-bold text-ted-red hover:text-ted-red-light transition-colors group"
                >
                  View Speakers
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Meet the Team Card */}
            <AnimatedSection direction="right">
              <div className="bg-surface border border-white/[0.06] rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-[900] text-white uppercase tracking-tight mb-3">
                    🧑‍🤝‍🧑 The Team
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    A diverse group of passionate volunteers from across Kathmandu, working
                    together to bring TEDxBhrikutiMandap 2026 to life.
                  </p>
                </div>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 text-sm font-bold text-ted-red hover:text-ted-red-light transition-colors group"
                >
                  Meet the team
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
