import type { Metadata } from "next";
import Image from "next/image";
import { Linkedin, Instagram, Facebook, Github } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { teamMembers, TeamMember } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the passionate volunteers behind TEDxBhrikutiMandap 2026. Discover the leaders, creators, and technologists uniting ideas.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team | TEDxBhrikutiMandap 2026",
    description: "The visionary team organizing TEDxBhrikutiMandap.",
  },
};

const MemberCard = ({ member, i, aspect = "aspect-[4/5]" }: { member: TeamMember, i: number, aspect?: string }) => (
  <AnimatedSection key={member.name} delay={i * 0.05} className="h-full">
    <div className="group relative h-full flex flex-col">
      {/* Card Container */}
      <div className={`relative ${aspect} w-full overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/5 group-hover:border-white/15 transition-colors duration-700 shadow-xl`}>
        {/* Sleek Dark Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-ted-red/5 via-[#0a0a0a] to-[#050505] group-hover:from-ted-red/20 transition-all duration-700" />
        
        {/* Sharp Inner Shard Layer (The Person) */}
        <div className="absolute inset-4 z-10 [clip-path:polygon(15%_0%,_100%_0%,_100%_85%,_85%_100%,_0%_100%,_0%_15%)] overflow-hidden transition-all duration-700">
          {member.image && (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 group-hover:contrast-110"
            />
          )}
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
      <div className="pt-4 pb-2 px-1 text-center mt-auto">
        <h3 className="text-lg lg:text-xl font-[900] text-white leading-tight group-hover:text-ted-red transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-xs lg:text-sm text-white/50 mt-1 font-medium">
          {member.role}
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default function TeamPage() {
  const organizer = teamMembers.find(m => m.name === "Dipesh Thapa");
  
  const level2Ordered = [
    teamMembers.find(m => m.name === "Prisha Jalan"),
    teamMembers.find(m => m.name === "Upasana Pandey"),
    teamMembers.find(m => m.name === "Richa Thapa"),
  ].filter(Boolean) as TeamMember[];

  const level3Ordered = [
    teamMembers.find(m => m.name === "Mala Rijal"),
    teamMembers.find(m => m.name === "Apil Khadka"),
    teamMembers.find(m => m.name === "Niva Maharjan"),
    teamMembers.find(m => m.name === "Aayush Sah"),
  ].filter(Boolean) as TeamMember[];

  const level4Ordered = [
    teamMembers.find(m => m.name === "Pankaj Poudel"),
    teamMembers.find(m => m.name === "Aditya Jha"),
  ].filter(Boolean) as TeamMember[];

  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="The passionate volunteers behind TEDxBhrikutiMandap 2026 — united by a shared mission to envision tomorrow, together."
      />

      {/* ── Team Layout ──────────────────────────────────────────────────── */}
      <section className="pb-20 md:pb-32">
        <Container>
          <div className="flex flex-col gap-12 md:gap-20">
            
            {/* Level 1: Organizer */}
            {organizer && (
              <div className="max-w-md mx-auto w-full">
                <MemberCard member={organizer} i={0} aspect="aspect-[4/5]" />
              </div>
            )}

            {/* Level 2: Co-Organizer, Curator, Treasurer */}
            {level2Ordered.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {level2Ordered.map((member, i) => (
                  <MemberCard key={member.name} member={member} i={i + 1} aspect="aspect-[4/5]" />
                ))}
              </div>
            )}

            {/* Level 3: Leads */}
            {level3Ordered.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                {level3Ordered.map((member, i) => (
                  <MemberCard key={member.name} member={member} i={i + 4} aspect="aspect-[4/5]" />
                ))}
              </div>
            )}

            {/* Level 4: Managers */}
            {level4Ordered.length > 0 && (
              <div className="max-w-3xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                {level4Ordered.map((member, i) => (
                  <MemberCard key={member.name} member={member} i={i + 8} aspect="aspect-[4/5]" />
                ))}
              </div>
            )}

          </div>
        </Container>
      </section>
    </>
  );
}
