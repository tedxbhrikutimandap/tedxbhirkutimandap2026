"use client";

import { useState, useEffect } from "react";
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

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedSpeaker) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedSpeaker]);

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
                    {speaker.image && (
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
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

      {/* ── Speaker Modal (Cinematic Takeover) ─────────────────────────── */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-hidden"
            onClick={() => setSelectedSpeaker(null)}
          >
            {/* Ambient Red Glow in Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(235,0,40,0.12)_0%,transparent_100%)] pointer-events-none" />

            {/* Massive Floating Cinematic Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[1400px] h-[85vh] md:h-auto md:max-h-[85vh] bg-surface-card border border-white/[0.08] rounded-3xl md:rounded-[2rem] flex flex-col md:flex-row overflow-hidden shadow-[0_0_80px_rgba(235,0,40,0.15)]"
            >
              {/* Close Button - Floats top right of entire card */}
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-3 md:p-4 bg-black/40 md:bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full hover:bg-ted-red hover:border-ted-red hover:rotate-90 transition-all duration-500 group"
                aria-label="Close"
              >
                <X size={20} className="text-white/70 group-hover:text-white transition-colors" />
              </button>

              {/* Left Side: Massive Clipped Image */}
              <div className="relative w-full h-[35vh] md:h-[85vh] md:min-h-[600px] md:w-[45%] lg:w-[40%] shrink-0 [clip-path:polygon(0_0,_100%_0,_100%_100%,_0%_100%)] md:[clip-path:polygon(0_0,_100%_0,_85%_100%,_0%_100%)] bg-black/20">
                {selectedSpeaker.image && (
                  <Image
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-surface-card via-surface-card/60 to-transparent md:hidden" />
                <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-surface-card via-surface-card/40 to-transparent hidden md:block" />
              </div>

              {/* Right Side: Editorial Content */}
              <div className="relative flex-1 h-[50vh] md:h-full md:max-h-[85vh] overflow-y-auto px-6 py-6 md:py-12 md:px-12 lg:px-20 flex flex-col pt-0 md:justify-center z-10 -mt-10 md:mt-0 pb-12">
              <div className="max-w-2xl relative z-10 mx-auto md:mx-0 w-full">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-[900] text-white leading-[0.9] md:leading-[0.85] mb-4 md:mb-6 font-heading tracking-tighter"
                >
                  {selectedSpeaker.name}
                </motion.h3>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-8"
                >
                  <p className="text-lg md:text-xl font-bold text-white/90 font-sans tracking-wide">
                    {selectedSpeaker.title}
                  </p>
                  <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-ted-red/60" />
                  <p className="text-base md:text-lg text-white/50 font-sans">
                    {selectedSpeaker.organization}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="h-[2px] w-24 bg-ted-red mb-10 origin-left"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-xl md:text-3xl font-bold text-white/90 italic leading-snug mb-8 font-heading">
                    <span className="text-ted-red opacity-60 mr-2">"</span>
                    {selectedSpeaker.talkTitle}
                    <span className="text-ted-red opacity-60 ml-2">"</span>
                  </p>
                </motion.div>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm md:text-lg text-white/50 leading-relaxed mb-12 font-sans"
                >
                  {selectedSpeaker.bio}
                </motion.p>

                {/* Social links */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-4"
                >
                  {selectedSpeaker.socials?.linkedin && (
                    <a
                      href={selectedSpeaker.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-white focus:bg-white transition-colors group"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} className="text-white/50 group-hover:text-black transition-colors" />
                    </a>
                  )}
                  {selectedSpeaker.socials?.twitter && (
                    <a
                      href={selectedSpeaker.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-white focus:bg-white transition-colors group"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} className="text-white/50 group-hover:text-black transition-colors" />
                    </a>
                  )}
                  {selectedSpeaker.socials?.website && (
                    <a
                      href={selectedSpeaker.socials.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-white focus:bg-white transition-colors group"
                      aria-label="Website"
                    >
                      <Globe size={20} className="text-white/50 group-hover:text-black transition-colors" />
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
