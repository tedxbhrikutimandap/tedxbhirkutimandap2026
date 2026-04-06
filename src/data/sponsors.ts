export interface Sponsor {
  name: string;
  logo: string;
  url: string;
  tier: SponsorTier;
}

export type SponsorTier = "Platinum" | "Gold" | "Silver" | "Community";

export const sponsorTiers: SponsorTier[] = ["Platinum", "Gold", "Silver", "Community"];

export const sponsors: Sponsor[] = [
  // Placeholder sponsors — replace with real data
  { name: "Sponsor One", logo: "/images/speaker-placeholder.png", url: "#", tier: "Platinum" },
  { name: "Sponsor Two", logo: "/images/speaker-placeholder.png", url: "#", tier: "Platinum" },
  { name: "Sponsor Three", logo: "/images/speaker-placeholder.png", url: "#", tier: "Gold" },
  { name: "Sponsor Four", logo: "/images/speaker-placeholder.png", url: "#", tier: "Gold" },
  { name: "Sponsor Five", logo: "/images/speaker-placeholder.png", url: "#", tier: "Gold" },
  { name: "Sponsor Six", logo: "/images/speaker-placeholder.png", url: "#", tier: "Silver" },
  { name: "Sponsor Seven", logo: "/images/speaker-placeholder.png", url: "#", tier: "Silver" },
  { name: "Sponsor Eight", logo: "/images/speaker-placeholder.png", url: "#", tier: "Community" },
  { name: "Sponsor Nine", logo: "/images/speaker-placeholder.png", url: "#", tier: "Community" },
  { name: "Sponsor Ten", logo: "/images/speaker-placeholder.png", url: "#", tier: "Community" },
];
