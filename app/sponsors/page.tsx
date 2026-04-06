import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { sponsors, sponsorTiers } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Our sponsors make TEDxBhrikutiMandap 2026 possible. Learn about sponsorship opportunities and join us in spreading ideas worth sharing in Kathmandu, Nepal.",
  alternates: { canonical: "/sponsors" },
  openGraph: {
    title: "Sponsors | TEDxBhrikutiMandap",
    description: "Sponsorship opportunities at TEDxBhrikutiMandap 2026.",
  },
};

const tierStyles = {
  Platinum: "border-white/20 bg-white/[0.03]",
  Gold: "border-amber-500/20 bg-amber-500/[0.03]",
  Silver: "border-gray-400/20 bg-gray-400/[0.03]",
  Community: "border-ted-red/20 bg-ted-red/[0.03]",
};

const tierLabelStyles = {
  Platinum: "text-white",
  Gold: "text-amber-400",
  Silver: "text-gray-400",
  Community: "text-ted-red",
};

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        title="Our Sponsors"
        subtitle="TEDxBhrikutiMandap 2026 is made possible by the generous support of our sponsors and partners."
      />

      {/* ── Sponsor Tiers ──────────────────────────────────────────────── */}
      <section className="pb-20 md:pb-32">
        <Container>
          {sponsorTiers.map((tier) => {
            const tierSponsors = sponsors.filter((s) => s.tier === tier);
            if (tierSponsors.length === 0) return null;

            return (
              <AnimatedSection key={tier} className="mb-16 last:mb-0">
                <SectionHeading
                  title={`${tier} Sponsors`}
                  className="mb-8"
                />
                <div
                  className={`grid gap-4 md:gap-6 ${
                    tier === "Platinum"
                      ? "grid-cols-1 sm:grid-cols-2"
                      : tier === "Gold"
                      ? "grid-cols-2 sm:grid-cols-3"
                      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                  }`}
                >
                  {tierSponsors.map((sponsor) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-center border rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] ${tierStyles[tier]}`}
                    >
                      <div className="relative w-full aspect-[3/1] opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </a>
                  ))}
                </div>
                <p
                  className={`text-center mt-4 text-[10px] font-bold uppercase tracking-[0.25em] ${tierLabelStyles[tier]}`}
                >
                  {tier}
                </p>
              </AnimatedSection>
            );
          })}
        </Container>
      </section>

      {/* ── Become a Sponsor CTA ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface border-t border-white/[0.04]">
        <Container className="text-center">
          <AnimatedSection>
            <Mail size={40} className="text-ted-red mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-4">
              Become a Sponsor
            </h2>
            <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-8">
              Partner with TEDxBhrikutiMandap and connect with Nepal&apos;s most
              innovative community. Multiple sponsorship tiers available.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:sponsors@tedxbhrikutimandap.com"
                className="inline-flex items-center gap-2.5 bg-ted-red px-7 py-3.5 rounded-full text-white text-xs font-[900] uppercase tracking-[0.15em] shadow-[0_8px_25px_rgba(235,0,40,0.4)] hover:shadow-[0_12px_35px_rgba(235,0,40,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Contact for Sponsorship
                <ArrowRight size={14} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.1] px-7 py-3.5 rounded-full text-white/80 text-xs font-[900] uppercase tracking-[0.15em] hover:bg-white/[0.1] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300"
              >
                General Inquiries
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
