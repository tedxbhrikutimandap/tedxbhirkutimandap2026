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

      {/* ── Speaker List (Cinema Strip) ────────────────────────────────── */}
      <section className="pb-20 md:pb-32 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {speakers.map((speaker, i) => (
              <AnimatedSection key={speaker.id} delay={i * 0.1}>
                <button
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="group relative w-full h-56 md:h-72 bg-white/[0.03] rounded-[2rem] overflow-hidden cursor-pointer flex border border-white/[0.05] hover:border-ted-red/50 hover:bg-ted-red/[0.05] transition-all duration-500 text-left shadow-lg hover:shadow-[0_15px_50px_rgba(235,0,40,0.15)] hover:-translate-y-2"
                >
                  {/* Clipped Image */}
                  <div className="w-[40%] sm:w-[45%] h-full relative [clip-path:polygon(0_0,_100%_0,_85%_100%,_0%_100%)] shrink-0">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  {/* Content */}
                  <div className="w-[60%] sm:w-[55%] h-full px-5 py-6 md:p-8 flex flex-col justify-center flex-grow">
                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-ted-red mb-2 line-clamp-1">
                      {speaker.title}
                    </p>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-[900] text-white leading-tight mb-2 md:mb-3 font-heading tracking-tight line-clamp-2 md:line-clamp-none">
                      {speaker.name}
                    </h3>
                    <p className="text-xs md:text-sm text-white/50 italic line-clamp-2 md:line-clamp-3">
                      &ldquo;{speaker.talkTitle}&rdquo;
                    </p>
                    
                    <div className="mt-4 md:mt-6 flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-ted-red opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      View details <span aria-hidden="true">&rarr;</span>
                    </div>
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
