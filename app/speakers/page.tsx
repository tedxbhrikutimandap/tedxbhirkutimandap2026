"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Twitter, Globe, Mic2 } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { speakers, type Speaker } from "@/data/speakers";
import { siteConfig } from "@/data/siteConfig";

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <>
      <PageHero
        title="Speakers"
        subtitle="Visionaries, innovators, and changemakers. Meet the voices of TEDxBhrikutiMandap 2026."
      />

      {/* ── Speaker Grid ───────────────────────────────────────────────── */}
      <section className="pb-20 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {speakers.map((speaker, i) => (
              <AnimatedSection key={speaker.id} delay={i * 0.08}>
                <button
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="group relative bg-surface-card border border-white/[0.06] rounded-2xl overflow-hidden hover:border-ted-red/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(235,0,40,0.15)] text-left w-full"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {speaker.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-ted-red text-white text-[8px] font-bold uppercase tracking-wider">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ted-red mb-1.5">
                      {speaker.title} · {speaker.organization}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-[900] text-white leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-xs text-white/50 mt-2 line-clamp-2">
                      &ldquo;{speaker.talkTitle}&rdquo;
                    </p>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Nominate CTA ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface border-t border-white/[0.04]">
        <Container className="text-center">
          <AnimatedSection>
            <Mic2 size={40} className="text-ted-red mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-4">
              Nominate a Speaker
            </h2>
            <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-8">
              Know someone whose idea deserves the TEDx stage? Nominate them for
              TEDxBhrikutiMandap 2026.
            </p>
            <a
              href={`https://tally.so/r/${siteConfig.nominationFormId}`}
              data-tally-open={siteConfig.nominationFormId}
              data-tally-layout="modal"
              data-tally-width="500"
              data-tally-overlay="1"
              className="inline-flex items-center gap-2.5 bg-ted-red px-7 py-3.5 rounded-full text-white text-xs font-[900] uppercase tracking-[0.15em] shadow-[0_8px_25px_rgba(235,0,40,0.4)] hover:shadow-[0_12px_35px_rgba(235,0,40,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Nominate Speaker
            </a>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── Speaker Modal ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-surface-card border border-white/[0.08] rounded-2xl overflow-hidden max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-ted-red transition-colors"
                aria-label="Close"
              >
                <X size={16} className="text-white" />
              </button>

              <div className="relative h-64 sm:h-80">
                <Image
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/50 to-transparent" />
              </div>

              <div className="p-6 sm:p-8 -mt-16 relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ted-red mb-2">
                  {selectedSpeaker.title} · {selectedSpeaker.organization}
                </p>
                <h3 className="text-2xl sm:text-3xl font-[900] text-white leading-tight mb-2">
                  {selectedSpeaker.name}
                </h3>
                <p className="text-sm text-ted-red/80 font-bold mb-4">
                  &ldquo;{selectedSpeaker.talkTitle}&rdquo;
                </p>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {selectedSpeaker.bio}
                </p>

                {/* Social links */}
                <div className="flex gap-3">
                  {selectedSpeaker.socials?.linkedin && (
                    <a
                      href={selectedSpeaker.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full hover:bg-ted-red hover:border-ted-red transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} className="text-white" />
                    </a>
                  )}
                  {selectedSpeaker.socials?.twitter && (
                    <a
                      href={selectedSpeaker.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full hover:bg-ted-red hover:border-ted-red transition-all"
                      aria-label="Twitter"
                    >
                      <Twitter size={16} className="text-white" />
                    </a>
                  )}
                  {selectedSpeaker.socials?.website && (
                    <a
                      href={selectedSpeaker.socials.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full hover:bg-ted-red hover:border-ted-red transition-all"
                      aria-label="Website"
                    >
                      <Globe size={16} className="text-white" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
