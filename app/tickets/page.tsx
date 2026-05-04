"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Ticket, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

// ─── Waitlist Form ─────────────────────────────────────────────────────────────

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/ticket-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit waitlist signup.");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="flex flex-col items-center gap-3 py-1 sm:py-2"
      >
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-ted-red/10 border border-ted-red/25 flex items-center justify-center">
          <Mail size={19} className="text-ted-red" />
        </div>
        <p className="text-white font-[900] uppercase tracking-wide text-sm">
          You&apos;re on the list.
        </p>
        <p className="text-white/45 text-xs tracking-wide text-center max-w-[18rem]">
          We&apos;ll notify you as soon as tickets go live.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row"
    >
      <input
        id="ticket-waitlist-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="min-h-12 min-w-0 w-full flex-1 bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-base sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-ted-red/70 focus:bg-black/40 transition-colors"
      />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-ted-red px-5 py-3 text-[10px] font-[900] uppercase tracking-[0.12em] text-white transition-colors hover:bg-ted-red-light active:bg-ted-red-dark disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-36"
      >
        {loading ? (
          <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            Join Waitlist
            <ArrowRight size={12} />
          </>
        )}
      </button>
      {error ? (
        <p className="text-center text-xs font-bold text-ted-red sm:basis-full">
          {error}
        </p>
      ) : null}
    </form>
  );
}

// ─── Tickets Page ──────────────────────────────────────────────────────────────

export default function TicketsPage() {
  return (
    <>
      <PageHero
        title="Get Tickets"
        subtitle="Secure your seat for TEDxBhrikutiMandap 2026, a day of bold ideas in the heart of Kathmandu."
      />

      <section className="pb-16 sm:pb-24 md:pb-36">
        <Container>
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-surface-card border border-white/10 rounded-xl sm:rounded-2xl px-5 py-7 sm:p-8 md:p-12">
                <div className="flex flex-col items-center gap-6 sm:gap-7">

                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-black/25 border border-white/10 flex items-center justify-center">
                    <Ticket size={26} className="text-ted-red sm:w-7 sm:h-7" strokeWidth={1.5} />
                  </div>

                  {/* Headline */}
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] uppercase tracking-tight text-white leading-[0.95] font-heading">
                      Tickets Open <span className="text-ted-red">Soon</span>
                    </h2>
                    <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-md mx-auto">
                      Ticket sales aren&apos;t live yet. Join the waitlist and we&apos;ll email you the moment they open, so you don&apos;t miss your spot.
                    </p>
                  </div>

                  {/* Form */}
                  <div className="flex flex-col items-center gap-4 w-full">
                    <p className="max-w-full text-center text-[10px] font-[900] uppercase tracking-[0.12em] sm:tracking-[0.16em] text-white/40">
                      Notify me when tickets go live
                    </p>
                    <WaitlistForm />
                  </div>

                </div>
              </div>

              {/* Fine print */}
              <p className="mx-auto mt-5 max-w-xs text-xs leading-relaxed text-white/50 sm:mt-6 sm:max-w-none sm:tracking-wide">
                No spam. Just one email when tickets open.
              </p>

            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
