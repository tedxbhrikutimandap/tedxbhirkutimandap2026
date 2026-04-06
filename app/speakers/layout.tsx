import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers",
  description:
    "Meet the speakers of TEDxBhrikutiMandap 2026 — visionaries, innovators, and changemakers from Nepal and beyond, sharing ideas worth spreading in Kathmandu.",
  alternates: { canonical: "/speakers" },
  openGraph: {
    title: "Speakers | TEDxBhrikutiMandap",
    description: "Discover the lineup of speakers at TEDxBhrikutiMandap 2026.",
  },
};

export default function SpeakersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
