"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Mic2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { speakers } from "@/data/speakers";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";

// ─── Countdown Timer ──────────────────────────────────────────────────────────

const CountdownTimer = () => {
  const targetDate = new Date("2026-12-15T09:00:00+05:45");

  const calculateTimeLeft = () => {
    const diff = targetDate.getTime() - new Date().getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft), 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-5">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="bg-surface-card border border-white/[0.06] rounded-xl px-3 py-3 sm:px-5 sm:py-4 min-w-[60px] sm:min-w-[80px] text-center backdrop-blur-sm">
            <span className="text-2xl sm:text-4xl font-[900] text-white tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

// ─── Home Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  const featuredSpeakers = speakers.filter((s) => s.featured).slice(0, 4);

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
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        {/* Animated glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-ted-red/10 rounded-full blur-[160px] pointer-events-none animate-glow-pulse" />

        <Container className="relative z-10 text-center py-20 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col items-center gap-6 md:gap-8"
          >
            {/* Event badge */}
            <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-full px-4 py-1.5">
              <div className="w-2 h-2 bg-ted-red rounded-full animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                TEDx Event — Kathmandu, Nepal
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-[900] uppercase tracking-tight text-white leading-[0.9]">
              Ideas
              <br />
              <span className="text-ted-red">Worth</span>
              <br />
              Spreading
            </h1>

            {/* Event info */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-white/50">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-ted-red" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                  {siteConfig.eventDate}
                </span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-ted-red" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                  Bhrikuti Mandap, Kathmandu
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4">
              <Link
                href="#register"
                className="inline-flex items-center gap-2.5 bg-ted-red px-7 py-3.5 rounded-full text-white text-xs font-[900] uppercase tracking-[0.15em] shadow-[0_8px_25px_rgba(235,0,40,0.4)] hover:shadow-[0_12px_35px_rgba(235,0,40,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Get Tickets
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
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ── Countdown Section ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface border-y border-white/[0.04]">
        <Container>
          <AnimatedSection className="flex flex-col items-center gap-8">
            <h2 className="text-xs sm:text-sm font-[900] uppercase tracking-[0.3em] text-white/40">
              The countdown begins
            </h2>
            <CountdownTimer />
          </AnimatedSection>
        </Container>
      </section>

      {/* ── Featured Speakers ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <Container>
          <AnimatedSection>
            <SectionHeading
              title="Featured Speakers"
              subtitle="Visionaries, innovators, and changemakers taking the TEDxBhrikutiMandap stage."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {featuredSpeakers.map((speaker, i) => (
              <AnimatedSection key={speaker.id} delay={i * 0.1}>
                <div className="group relative bg-surface-card border border-white/[0.06] rounded-2xl overflow-hidden hover:border-ted-red/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(235,0,40,0.15)]">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ted-red mb-1">
                      {speaker.organization}
                    </p>
                    <h3 className="text-lg font-[900] text-white leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-xs text-white/50 mt-1 line-clamp-2">
                      {speaker.talkTitle}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/speakers"
              className="inline-flex items-center gap-2 text-sm font-bold text-ted-red hover:text-ted-red-light transition-colors group"
            >
              View all speakers
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── What is TEDx? ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-surface border-y border-white/[0.04]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images/venue-hero.png"
                  alt="TEDxBhrikutiMandap venue"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ted-red/10" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="h-1 w-12 bg-ted-red rounded-full mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-6">
                What is{" "}
                <span className="text-ted-red">TEDx</span>?
              </h2>
              <div className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed">
                <p>
                  In the spirit of ideas worth spreading, TED has created a program called TEDx.
                  TEDx is a program of local, self-organized events that bring people together
                  to share a TED-like experience.
                </p>
                <p>
                  At a TEDx event, TED Talks video and live speakers combine to spark deep
                  discussion and connection. These local, self-organized events are branded TEDx,
                  where x = independently organized TED event.
                </p>
                <p>
                  TEDxBhrikutiMandap brings this global movement to the heart of Kathmandu,
                  creating a platform for Nepal&apos;s brightest minds to share ideas that matter.
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
      <section id="register" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-ted-red" />
        <div className="absolute inset-0 bg-gradient-to-r from-ted-red-dark via-ted-red to-ted-red-light opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[160px] pointer-events-none" />

        <Container className="relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-6">
              Be Part of the
              <br />
              Conversation
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Join hundreds of curious minds at TEDxBhrikutiMandap 2026. Limited seats available.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.tallyFormUrl}
                data-tally-open={siteConfig.tallyFormUrl.split("/").pop()}
                data-tally-layout="modal"
                data-tally-width="500"
                data-tally-overlay="1"
                className="inline-flex items-center gap-2.5 bg-white px-7 py-3.5 rounded-full text-black text-xs font-[900] uppercase tracking-[0.15em] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                Join Waitlist
                <ArrowRight size={14} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-white/10 border border-white/30 px-7 py-3.5 rounded-full text-white text-xs font-[900] uppercase tracking-[0.15em] hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300"
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
