import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tickets",
  description:
    "Secure your seat at TEDxBhrikutiMandap 2026 — Envisioning Tomorrow. Join us in Kathmandu on June 6, 2026 for a day of bold ideas and inspiring speakers.",
  alternates: { canonical: "/tickets" },
  openGraph: {
    title: "Tickets | TEDxBhrikutiMandap 2026",
    description:
      "Book your ticket for TEDxBhrikutiMandap 2026. Join us in Kathmandu on June 6, 2026.",
  },
};

export default function TicketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
