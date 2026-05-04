// Server Component — no "use client" so hero renders on SSR and LCP fires immediately
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mic2, Calendar } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ctaNav } from "@/data/navigation";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import CountdownTimer from "@/components/CountdownTimer";

// ─── Home Page ─────────────────────────────────────────────────────────────────

export default function Home() {

  return (
    <>
      {/* ── Hero Section ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/event-atmosphere.png"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        {/* Animated glow */}
        <div className="absolute top-1/2 left-1/2 hidden h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ted-red/10 blur-[160px] pointer-events-none animate-glow-pulse md:block" />

        <Container className="relative z-10 text-center py-20 md:py-0">
          <div className="flex flex-col items-center gap-6 md:gap-8">

            {/* Main title — rendered immediately for LCP, no JS animation */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-[900] uppercase tracking-tight text-white leading-[0.9]">
              Envisioning
              <br />
              <span className="text-ted-red">Tomorrow</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium tracking-wide max-w-lg">
              {siteConfig.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4">
              <Link
                href={ctaNav.href}
                className="inline-flex items-center gap-2.5 bg-ted-red/15 border border-ted-red/30 px-7 py-3.5 rounded-full text-ted-red text-xs font-[900] uppercase tracking-[0.15em] hover:bg-ted-red hover:text-white hover:shadow-[0_12px_35px_rgba(235,0,40,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                {ctaNav.label}
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/speakers"
                className="inline-flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.1] px-7 py-3.5 rounded-full text-white/80 text-xs font-[900] uppercase tracking-[0.15em] hover:bg-white/[0.1] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Mic2 size={14} />
                View Speakers
              </Link>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── Countdown Section ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-y border-white/[0.04]">
        <Container>
          <AnimatedSection className="flex flex-col items-center gap-8">
            <p className="text-2xl md:text-3xl font-heading font-bold text-white/90 uppercase tracking-wide">
              June 6, 2026
            </p>
            <CountdownTimer />

            <div className="flex flex-col items-center gap-4">
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=TEDxBhrikutimandap+2026&dates=20260606T041500Z/20260606T111500Z&details=TEDxBhrikutiMandap+2026+%E2%80%94+Envisioning+Tomorrow.+Get+ready+for+a+day+of+bold+ideas!+Visit+our+website%3A+https%3A%2F%2Fwww.tedxbhrikutimandap.com%2F&location=Kathmandu,+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.1] px-6 py-3 rounded-full text-white/80 text-sm font-bold hover:bg-white/[0.1] hover:text-white transition-colors hover:scale-105 active:scale-95"
              >
                <Calendar size={16} className="text-ted-red" />
                Add to Google Calendar
              </a>

              <p className="text-sm text-ted-red/80 font-medium text-center max-w-sm">
                Set a reminder! Ticket sales will open a few weeks before the event.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── What is TEDxBhrikutimandap? ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 border-y border-white/[0.04]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/50 border border-white/[0.06] flex items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/dgqtgob6n/image/upload/v1775806692/Theme_logo_ocwrwz.png"
                  alt="TEDxBhrikutiMandap - Envisioning Tomorrow"
                  width={280}
                  height={280}
                  className="opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-ted-red/10 to-transparent pointer-events-none" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="h-1 w-12 bg-ted-red rounded-full mb-6" />
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-[900] uppercase tracking-tight text-white leading-[0.95] mb-6">
                What is{" "}
                <span className="text-ted-red">TEDxBhrikutimandap</span>?
              </h2>
              <div className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed">
                <p>
                  It is our solemn conviction that the future is not something we blindly drift towards, but an era we purposefully design. &quot;Envisioning Tomorrow&quot; serves as a clarion call to the brilliant change makers of Kathmandu city, beckoning them to transcend the ordinary and contemplate the possibilities of change that shall come. We assemble to ignite the spark of that change and that idea and weave the threads of progress for the future endeavors.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-ted-red hover:text-ted-red-light transition-colors group"
              >
                Learn more about us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ── CTA Band ────────────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ted-red/15 blur-[160px] pointer-events-none md:block" />
        <div className="absolute top-[-20%] right-[-10%] hidden h-[400px] w-[400px] rounded-full bg-ted-red/10 blur-[120px] pointer-events-none md:block" />

        <Container className="relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-6">
              Be Part of the
              <br />
              <span className="text-ted-red">Conversation</span>
            </h2>
            <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto mb-8 leading-relaxed">
              Join hundreds of curious minds at TEDxBhrikutiMandap 2026. Limited seats available.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={ctaNav.href}
                className="inline-flex items-center gap-2.5 bg-ted-red/15 border border-ted-red/30 px-7 py-3.5 rounded-full text-ted-red text-xs font-[900] uppercase tracking-[0.15em] hover:bg-ted-red hover:text-white hover:shadow-[0_12px_35px_rgba(235,0,40,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                {ctaNav.label}
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.1] px-7 py-3.5 rounded-full text-white/70 text-xs font-[900] uppercase tracking-[0.15em] hover:bg-white/[0.1] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
