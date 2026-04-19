export const SPONSOR_TIERS = {
  TITLE: "Title",
  GOLD: "Gold",
  SILVER: "Silver",
  BRONZE: "Bronze",
  COMMUNITY: "Community",
} as const;

export type SponsorTier = typeof SPONSOR_TIERS[keyof typeof SPONSOR_TIERS];

export interface Sponsor {
  name: string;
  logo: string;
  url: string;
  tier: SponsorTier;
  partnerLabel?: string; // Optional label for specific roles like "Official Beverage Partner"
  description?: string; // Creative description for the modal
}

export const sponsorTiers: SponsorTier[] = [
  SPONSOR_TIERS.TITLE,
  SPONSOR_TIERS.GOLD,
  SPONSOR_TIERS.SILVER,
  SPONSOR_TIERS.BRONZE,
  SPONSOR_TIERS.COMMUNITY,
];

export const sponsors: Sponsor[] = [
  // --- Title Sponsor ---
  { 
    name: "Avantech Solutions", 
    logo: "/images/sponsors/title-sponsor.png", 
    url: "#", 
    tier: SPONSOR_TIERS.TITLE,
    description: "Avantech Solutions is a global leader in sustainable technology, dedicated to bridging the digital divide through innovative infrastructure and community-driven AI initiatives. Their support as our Title Sponsor enables the very core of TEDxBhrikutiMandap 2026."
  },

  // --- Gold Sponsors ---
  { 
    name: "Synergia Global", 
    logo: "/images/sponsors/gold-sponsor.png", 
    url: "#", 
    tier: SPONSOR_TIERS.GOLD,
    description: "Synergia Global specializes in strategic consulting and cross-border investment, fostering entrepreneurship across South Asia. They believe in the power of local ideas to drive global change."
  },
  { 
    name: "Nexus Ventures", 
    logo: "/images/sponsors/gold-sponsor.png", 
    url: "#", 
    tier: SPONSOR_TIERS.GOLD,
    description: "Nexus Ventures is a venture capital firm focusing on early-stage tech startups in Kathmandu. They are committed to empowering the next generation of Nepali innovators."
  },

  // --- Silver Sponsors ---
  { 
    name: "Aurora Logistics", 
    logo: "/images/sponsors/silver-sponsor.png", 
    url: "#", 
    tier: SPONSOR_TIERS.SILVER,
    description: "Aurora Logistics is Nepal's most reliable supply chain partner, ensuring seamless connectivity from the Himalayas to the world. They handle the complex logistics that make large-scale events possible."
  },
  { 
    name: "Zenith Media", 
    logo: "/images/sponsors/silver-sponsor.png", 
    url: "#", 
    tier: SPONSOR_TIERS.SILVER,
    description: "Zenith Media is a full-service creative agency that helps brands tell their stories with depth and impact. They are the creative force behind much of the visual storytelling for this event."
  },

  // --- Bronze Sponsors ---
  { 
    name: "Stellar Cloud", 
    logo: "/images/sponsors/default-logo.png", 
    url: "#", 
    tier: SPONSOR_TIERS.BRONZE,
    description: "Stellar Cloud provides secure, scalable cloud infrastructure for enterprises. They ensure our digital presence remains robust and accessible to all."
  },
  { 
    name: "Pulse Analytics", 
    logo: "/images/sponsors/default-logo.png", 
    url: "#", 
    tier: SPONSOR_TIERS.BRONZE,
    description: "Pulse Analytics uses advanced data science to provide actionable insights for NGOs and social enterprises, maximizing their community impact."
  },
  { 
    name: "Vanguard Tech", 
    logo: "/images/sponsors/default-logo.png", 
    url: "#", 
    tier: SPONSOR_TIERS.BRONZE,
    description: "Vanguard Tech focuses on cybersecurity education, protecting the digital future of Nepal's growing tech ecosystem."
  },

  // --- Community Partners ---
  { 
    name: "Coca Cola", 
    logo: "/images/sponsors/default-logo.png", 
    url: "#", 
    tier: SPONSOR_TIERS.COMMUNITY,
    partnerLabel: "Official Beverage Partner",
    description: "As our Official Beverage Partner, Coca-Cola refreshes our attendees and speakers alike, supporting the vibrant energy of the TEDx community."
  },
  { 
    name: "Nepal Education Board", 
    logo: "/images/sponsors/default-logo.png", 
    url: "#", 
    tier: SPONSOR_TIERS.COMMUNITY,
    partnerLabel: "Education Partner",
    description: "The NEB partners with us to bring 'Ideas Worth Spreading' directly into schools and universities, fostering a culture of curiosity among students."
  },
  { 
    name: "Kwality Ice Cream", 
    logo: "/images/sponsors/default-logo.png", 
    url: "#", 
    tier: SPONSOR_TIERS.COMMUNITY,
    partnerLabel: "Ice Cream Partner",
    description: "Sweetening the deal, Kwality Ice Cream provides delightful treats for our mid-day breaks, creating perfect moments for networking and reflection."
  },
  { 
    name: "Himalayan Java", 
    logo: "/images/sponsors/default-logo.png", 
    url: "#", 
    tier: SPONSOR_TIERS.COMMUNITY,
    partnerLabel: "Taste Partner",
    description: "Himalayan Java brings the world-famous Nepali coffee experience to TEDx, ensuring our guests stay fueled with the finest local brews."
  },
  { 
    name: "Foodmandu", 
    logo: "/images/sponsors/default-logo.png", 
    url: "#", 
    tier: SPONSOR_TIERS.COMMUNITY,
    partnerLabel: "Food Partner",
    description: "Official Food Partner, Foodmandu manages the culinary experience of the event, coordinating with top local restaurants to provide diverse menus."
  },
  { 
    name: "Volunteer Nepal", 
    logo: "/images/sponsors/default-logo.png", 
    url: "#", 
    tier: SPONSOR_TIERS.COMMUNITY,
    partnerLabel: "Supporting Partner",
    description: "Volunteer Nepal coordinates our dedicated team of 100+ volunteers, the backbone of the entire event operation."
  },
];
