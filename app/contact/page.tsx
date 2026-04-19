"use client";

import { useState } from "react";
import { Mail, Send, Plus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SocialLinks } from "@/components/SocialLinks";

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
            {/* ── Contact Form ──────────────────────────────────────────── */}
            <AnimatedSection direction="left">
              <form
                action="https://formspree.io/f/xvzvjrnz"
                method="POST"
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-ted-red px-7 py-3.5 rounded-full text-white text-xs font-[900] uppercase tracking-[0.15em] shadow-[0_8px_25px_rgba(235,0,40,0.4)] hover:shadow-[0_12px_35px_rgba(235,0,40,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
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

                  <div className="pt-2 border-t border-white/[0.04]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-3">
                      Follow Us
                    </p>
                    <SocialLinks />
                  </div>
                </div>


              </div>
            </AnimatedSection>
          </div>

          {/* ── FAQ Section ────────────────────────────────────────────── */}
          <div className="mt-20 md:mt-32">
            <AnimatedSection>
              <div className="flex flex-col items-center text-center mb-12">
                <div className="h-1 w-12 bg-ted-red rounded-full mb-4" />
                <h2 className="text-3xl md:text-4xl font-[900] uppercase tracking-tight text-white leading-tight">
                  Frequently Asked <span className="text-ted-red">Questions</span>
                </h2>
                <p className="text-white/50 text-sm md:text-base mt-4 max-w-xl">
                  Quick answers to common inquiries about the event, speaking opportunities, and more.
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} delay={i * 0.05} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

const FAQItem = ({ question, answer, delay }: { question: string, answer: string, delay: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <AnimatedSection delay={delay}>
      <div className="border border-white/[0.08] rounded-2xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
        >
          <span className="text-sm md:text-base font-bold text-white/90 group-hover:text-white transition-colors">{question}</span>
          <Plus 
            size={18} 
            className={`text-ted-red shrink-0 transition-transform duration-500 ease-out ${isOpen ? 'rotate-45' : ''}`} 
          />
        </button>
        <div 
          className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-white/50 leading-relaxed border-t border-white/[0.04] pt-4">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const faqs = [
  {
    question: "What is TEDxBhrikutiMandap?",
    answer: "TEDxBhrikutiMandap is an independently organized event licensed by TED, dedicated to sharing ideas that matter within our local community. We bring together diverse speakers and curious minds to explore the theme 'Envisioning Tomorrow'."
  },
  {
    question: "Can I be a speaker or nominate someone?",
    answer: "Absolutely! We're always looking for unconventional thinkers with an 'Idea Worth Spreading'. You can nominate yourself or someone else using the form above by selecting 'Speaker Nomination' from the topic dropdown."
  },
  {
    question: "How can I get tickets for the 2026 event?",
    answer: "Tickets will be available through our official registration platform. You can use the 'Get Tickets' link in the navigation menu to join the priority list or purchase available seats as they are released."
  },
  {
    question: "How can my organization partner with you?",
    answer: "We offer various sponsorship tiers for organizations aligned with our mission. Please use the contact form or email us directly at info@tedxbhrikutimandap.com for our partnership prospectus and opportunities."
  },
  {
    question: "Are there volunteer opportunities?",
    answer: "Yes, our events are powered by volunteers. Applications for various teams including logistics, media, and curation will open as we get closer to the event date. Stay tuned to our social media for announcements."
  }
];
