import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the TEDxBhrikutiMandap 2026 team. Reach out for partnerships, speaker nominations, press inquiries, or general questions about our event in Kathmandu, Nepal.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | TEDxBhrikutiMandap",
    description:
      "Have questions about TEDxBhrikutiMandap 2026? We'd love to hear from you.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
