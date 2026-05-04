import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name} — how we collect and use data, including Microsoft Clarity analytics.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="h-1 w-12 bg-ted-red rounded-full mb-6" />
            <h1 className="text-4xl md:text-6xl font-[900] uppercase tracking-tight text-white leading-[0.95] mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/40 text-sm">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-white/60 text-sm md:text-base leading-relaxed">

            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-white text-xl md:text-2xl font-[900] uppercase tracking-tight">
                Overview
              </h2>
              <p>
                {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy.
                This page explains what data we collect when you visit{" "}
                <span className="text-white/80">tedxbhrikutimandap.com</span>, how we use it,
                and your rights regarding that data.
              </p>
            </div>

            {/* Microsoft Clarity */}
            <div className="space-y-4 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <h2 className="text-white text-xl md:text-2xl font-[900] uppercase tracking-tight">
                Microsoft Clarity Analytics
              </h2>
              <p>
                We use{" "}
                <a
                  href="https://clarity.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ted-red hover:text-ted-red-light transition-colors underline underline-offset-4"
                >
                  Microsoft Clarity
                </a>{" "}
                to understand how visitors interact with our website. Clarity captures behavioural
                metrics, heatmaps, and session replays to help us improve the site experience.
              </p>
              <p>
                By using our site, you agree that we and Microsoft may collect and use this data.
                Website usage information is captured using first- and third-party cookies and
                other tracking technologies.
              </p>
              <p>
                For more information on how Microsoft collects and uses your data, please visit the{" "}
                <a
                  href="https://www.microsoft.com/privacy/privacystatement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ted-red hover:text-ted-red-light transition-colors underline underline-offset-4"
                >
                  Microsoft Privacy Statement
                </a>
                .
              </p>
            </div>

            {/* Google Analytics */}
            <div className="space-y-4">
              <h2 className="text-white text-xl md:text-2xl font-[900] uppercase tracking-tight">
                Google Analytics
              </h2>
              <p>
                We also use Google Analytics (via Google Tag Manager) to collect anonymised
                information about site traffic and usage patterns — such as pages visited,
                time spent on the site, and general geographic region. No personally
                identifiable information is collected.
              </p>
              <p>
                You can opt out of Google Analytics tracking by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ted-red hover:text-ted-red-light transition-colors underline underline-offset-4"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </div>

            {/* Cookies */}
            <div className="space-y-4">
              <h2 className="text-white text-xl md:text-2xl font-[900] uppercase tracking-tight">
                Cookies
              </h2>
              <p>
                Our site uses cookies placed by Microsoft Clarity and Google Analytics. These
                cookies do not identify you personally and are used solely for analytics
                and site improvement purposes. You may disable cookies through your browser
                settings, though some site features may not function as intended.
              </p>
            </div>

            {/* Data we don't collect */}
            <div className="space-y-4">
              <h2 className="text-white text-xl md:text-2xl font-[900] uppercase tracking-tight">
                Data We Do Not Collect
              </h2>
              <p>
                We do not collect, store, or sell any personally identifiable information
                (name, email, phone number) through this website unless you voluntarily
                submit it via our contact or ticket waitlist form. Any such submissions
                are used only to respond to your enquiry or manage your ticket registration.
              </p>
            </div>

            {/* Third party links */}
            <div className="space-y-4">
              <h2 className="text-white text-xl md:text-2xl font-[900] uppercase tracking-tight">
                Third-Party Links
              </h2>
              <p>
                Our website may contain links to external sites (TED.com, social media
                platforms, Tally.so forms). We are not responsible for the privacy practices
                of those sites and encourage you to review their policies independently.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4 p-6 rounded-2xl border border-ted-red/20 bg-ted-red/[0.04]">
              <h2 className="text-white text-xl md:text-2xl font-[900] uppercase tracking-tight">
                Questions?
              </h2>
              <p>
                If you have any questions about this privacy policy, please reach out via our{" "}
                <Link
                  href="/contact"
                  className="text-ted-red hover:text-ted-red-light transition-colors underline underline-offset-4"
                >
                  contact page
                </Link>
                .
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
