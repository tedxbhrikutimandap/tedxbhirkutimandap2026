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
                  {/* Photo with masked sharp shape and blurred background */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-black">
                    {/* Blurred Background Layer */}
                    <div className="absolute inset-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover blur-md scale-110 opacity-50 transition-all duration-700 group-hover:opacity-70"
                      />
                    </div>

                    {/* Sharp Inner Clipped Layer */}
                    <div className="absolute inset-0 z-10 [clip-path:circle(50%_at_50%_50%)] transition-all duration-700">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
                    </div>

                    {/* Social links overlay sliding from right */}
                    <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
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
                  </div>

                  {/* Info below photo */}
                  <div className="pt-4 pb-2 px-1">
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
