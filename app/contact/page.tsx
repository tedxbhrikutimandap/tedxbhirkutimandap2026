import type { Metadata } from "next";
import { MapPin, Mail, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SocialLinks } from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the TEDxBhrikutiMandap team. We're located at Bhrikuti Mandap, Kathmandu, Nepal. Reach us for inquiries, sponsorships, or volunteering.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | TEDxBhrikutiMandap",
    description: "Reach the TEDxBhrikutiMandap team in Kathmandu, Nepal.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have questions about TEDxBhrikutiMandap 2026? We'd love to hear from you."
      />

      <section className="pb-20 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {/* ── Contact Info ──────────────────────────────────────────── */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div>
                  <div className="h-1 w-12 bg-ted-red rounded-full mb-6" />
                  <h2 className="text-2xl sm:text-3xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Whether you&apos;re interested in attending, speaking, sponsoring, or
                    volunteering — we&apos;d love to connect with you.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-ted-red/10 border border-ted-red/20 flex items-center justify-center">
                      <MapPin size={16} className="text-ted-red" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">Venue</p>
                      <p className="text-xs text-white/50 leading-relaxed">
                        Bhrikuti Mandap, Exhibition Road
                        <br />
                        Kathmandu, 44600, Nepal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-ted-red/10 border border-ted-red/20 flex items-center justify-center">
                      <Mail size={16} className="text-ted-red" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">Email</p>
                      <a
                        href="mailto:info@tedxbhrikutimandap.com"
                        className="text-xs text-white/50 hover:text-ted-red transition-colors"
                      >
                        info@tedxbhrikutimandap.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-ted-red/10 border border-ted-red/20 flex items-center justify-center">
                      <Phone size={16} className="text-ted-red" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">Phone</p>
                      <a
                        href="tel:+9779864782896"
                        className="text-xs text-white/50 hover:text-ted-red transition-colors"
                      >
                        +977 9864782896
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-3">
                    Follow Us
                  </p>
                  <SocialLinks />
                </div>
              </div>
            </AnimatedSection>

            {/* ── Map ──────────────────────────────────────────────────── */}
            <AnimatedSection direction="right">
              <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/[0.06]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.456!2d85.3206!3d27.7042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa!2sBhrikuti%20Mandap!5e0!3m2!1sen!2snp!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.7)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bhrikuti Mandap location on Google Maps"
                  className="absolute inset-0"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
