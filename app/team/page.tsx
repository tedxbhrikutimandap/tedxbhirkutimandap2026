"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { teamMembers, departments, type Department } from "@/data/team";

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState<Department | "All">("All");

  const filteredMembers =
    activeFilter === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.department === activeFilter);

  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="The passionate volunteers behind TEDxBhrikutiMandap 2026 — united by a shared mission to spread ideas worth sharing."
      />

      {/* ── Department Filter ──────────────────────────────────────────── */}
      <section className="pb-8 md:pb-12">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                activeFilter === "All"
                  ? "bg-ted-red text-white shadow-[0_4px_15px_rgba(235,0,40,0.4)]"
                  : "bg-white/[0.04] border border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              All
            </button>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveFilter(dept)}
                className={`px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeFilter === dept
                    ? "bg-ted-red text-white shadow-[0_4px_15px_rgba(235,0,40,0.4)]"
                    : "bg-white/[0.04] border border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Team Grid ──────────────────────────────────────────────────── */}
      <section className="pb-20 md:pb-32">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.05}>
                <div className="group relative bg-surface-card border border-white/[0.06] rounded-2xl overflow-hidden hover:border-ted-red/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(235,0,40,0.12)]">
                  {/* Photo */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Social links overlay */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.socials?.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-ted-red transition-colors"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin size={12} className="text-white" />
                        </a>
                      )}
                      {member.socials?.instagram && (
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-ted-red transition-colors"
                          aria-label={`${member.name} Instagram`}
                        >
                          <Instagram size={12} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-ted-red/10 text-ted-red text-[8px] sm:text-[9px] font-bold uppercase tracking-wider mb-2">
                      {member.department}
                    </span>
                    <h3 className="text-sm sm:text-base font-[900] text-white leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-white/40 mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Join Us CTA ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface border-t border-white/[0.04]">
        <Container className="text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-4">
              Join Our Team
            </h2>
            <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-8">
              Want to be part of TEDxBhrikutiMandap? We&apos;re always looking for passionate
              volunteers to help make ideas worth spreading a reality.
            </p>
            <a
              href="mailto:info@tedxbhrikutimandap.com"
              className="inline-flex items-center gap-2.5 bg-ted-red px-7 py-3.5 rounded-full text-white text-xs font-[900] uppercase tracking-[0.15em] shadow-[0_8px_25px_rgba(235,0,40,0.4)] hover:shadow-[0_12px_35px_rgba(235,0,40,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Get in Touch
            </a>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
