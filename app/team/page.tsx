import type { Metadata } from "next";
import Image from "next/image";
import { Linkedin, Instagram, Facebook, Github } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the passionate volunteers behind TEDxBhrikutiMandap 2026. Discover the leaders, creators, and technologists uniting ideas.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team | TEDxBhrikutiMandap 2026",
    description: "The visionary team organizing TEDxBhrikutiMandap.",
  },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="The passionate volunteers behind TEDxBhrikutiMandap 2026 — united by a shared mission to envision tomorrow, together."
      />

      {/* ── Team Grid ──────────────────────────────────────────────────── */}
      <section className="pb-20 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.05}>
                <div className="group relative">
                  {/* Card Container */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/5 group-hover:border-white/15 transition-colors duration-700 shadow-xl">
                    {/* Sleek Dark Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-ted-red/5 via-[#0a0a0a] to-[#050505] group-hover:from-ted-red/20 transition-all duration-700" />
                    {/* Subtle dot pattern or extra glow could go safely here if needed, but keeping it minimal */}

                    {/* Sharp Inner Shard Layer (The Person) */}
                    <div className="absolute inset-4 z-10 [clip-path:polygon(15%_0%,_100%_0%,_100%_85%,_85%_100%,_0%_100%,_0%_15%)] overflow-hidden transition-all duration-700">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 group-hover:contrast-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 opacity-70 group-hover:opacity-10 transition-opacity duration-500" />
                      {/* Top glossy reflection adapting to the shard on hover */}
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </div>

                    {/* Social links overlay sliding from right */}
                    <div className="absolute top-5 right-5 z-20 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                      {member.socials?.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-black/50 backdrop-blur-md rounded-full shadow-lg hover:bg-ted-red hover:scale-110 active:scale-95 transition-all duration-300"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin size={16} className="text-white" />
                        </a>
                      )}
                      {member.socials?.instagram && (
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-black/50 backdrop-blur-md rounded-full shadow-lg hover:bg-ted-red hover:scale-110 active:scale-95 transition-all duration-300"
                          aria-label={`${member.name} Instagram`}
                        >
                          <Instagram size={16} className="text-white" />
                        </a>
                      )}
                      {member.socials?.facebook && (
                        <a
                          href={member.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-black/50 backdrop-blur-md rounded-full shadow-lg hover:bg-ted-red hover:scale-110 active:scale-95 transition-all duration-300"
                          aria-label={`${member.name} Facebook`}
                        >
                          <Facebook size={16} className="text-white" />
                        </a>
                      )}
                      {member.socials?.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-black/50 backdrop-blur-md rounded-full shadow-lg hover:bg-ted-red hover:scale-110 active:scale-95 transition-all duration-300"
                          aria-label={`${member.name} Github`}
                        >
                          <Github size={16} className="text-white" />
                        </a>
                      )}
                    </div>

                    {/* Quote overlay sliding up from bottom */}
                    {member.quote && (
                      <div className="absolute bottom-8 left-6 right-6 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none text-center">
                        <p className="text-sm md:text-base font-[900] text-white italic drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-snug">
                          &quot;{member.quote}&quot;
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Info below photo */}
                  <div className="pt-4 pb-2 px-1 text-center">
                    <h3 className="text-lg lg:text-xl font-[900] text-white leading-tight group-hover:text-ted-red transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-white/50 mt-1 font-medium">
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
      {false && (
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
      )}
    </>
  );
}
