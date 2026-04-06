"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SocialLinks } from "@/components/SocialLinks";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have questions about TEDxBhrikutiMandap 2026? We'd love to hear from you."
      />

      <section className="pb-20 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {/* ── Contact Form ──────────────────────────────────────────── */}
            <AnimatedSection direction="left">
              {submitted ? (
                <div className="bg-surface-card border border-ted-red/20 rounded-2xl p-8 md:p-10 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-ted-red/10 flex items-center justify-center">
                    <CheckCircle size={32} className="text-ted-red" />
                  </div>
                  <h3 className="text-xl font-[900] text-white uppercase tracking-tight">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-white/50 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-bold text-ted-red hover:text-ted-red-light transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-surface-card border border-white/[0.06] rounded-2xl p-6 md:p-8 space-y-5"
                >
                  <div className="h-1 w-12 bg-ted-red rounded-full mb-2" />
                  <h2 className="text-xl sm:text-2xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-6">
                    Send a Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-ted-red/50 focus:bg-white/[0.05] transition-all duration-300 outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-ted-red/50 focus:bg-white/[0.05] transition-all duration-300 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:border-ted-red/50 focus:bg-white/[0.05] transition-all duration-300 outline-none appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-black text-white/50">
                        Select a topic
                      </option>
                      <option value="general" className="bg-black">
                        General Inquiry
                      </option>
                      <option value="speaker" className="bg-black">
                        Speaker Nomination
                      </option>
                      <option value="sponsorship" className="bg-black">
                        Sponsorship
                      </option>
                      <option value="volunteer" className="bg-black">
                        Volunteering
                      </option>
                      <option value="media" className="bg-black">
                        Media & Press
                      </option>
                      <option value="other" className="bg-black">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-ted-red/50 focus:bg-white/[0.05] transition-all duration-300 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-ted-red px-7 py-3.5 rounded-full text-white text-xs font-[900] uppercase tracking-[0.15em] shadow-[0_8px_25px_rgba(235,0,40,0.4)] hover:shadow-[0_12px_35px_rgba(235,0,40,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* ── Contact Info + Map ────────────────────────────────────── */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                {/* Contact details */}
                <div className="bg-surface-card border border-white/[0.06] rounded-2xl p-6 space-y-5">
                  <h3 className="text-lg font-[900] text-white uppercase tracking-tight">
                    Contact Info
                  </h3>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-ted-red/10 border border-ted-red/20 flex items-center justify-center">
                      <MapPin size={16} className="text-ted-red" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-0.5">Venue</p>
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
                      <p className="text-sm font-bold text-white mb-0.5">Email</p>
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
                      <p className="text-sm font-bold text-white mb-0.5">Phone</p>
                      <a
                        href="tel:+9779864782896"
                        className="text-xs text-white/50 hover:text-ted-red transition-colors"
                      >
                        +977 9864782896
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/[0.04]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-3">
                      Follow Us
                    </p>
                    <SocialLinks />
                  </div>
                </div>

                {/* Map */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.06]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.456!2d85.3206!3d27.7042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa!2sBhrikuti%20Mandap!5e0!3m2!1sen!2snp!4v1"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.7)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bhrikuti Mandap location"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
