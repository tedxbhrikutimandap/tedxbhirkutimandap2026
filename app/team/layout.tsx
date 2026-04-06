import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the passionate team behind TEDxBhrikutiMandap 2026 — organizers, designers, developers, and volunteers making ideas worth spreading a reality in Kathmandu.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team | TEDxBhrikutiMandap",
    description: "Meet the organizing team behind TEDxBhrikutiMandap 2026.",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
