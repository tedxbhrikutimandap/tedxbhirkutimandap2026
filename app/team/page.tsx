import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { teamMembers, TeamMember } from "@/data/team";
import { MemberCard } from "./MemberCard";

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
