import type { Metadata } from "next";

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

export default function SponsorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
