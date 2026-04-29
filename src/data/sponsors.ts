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
    name: "Nepal Rising", 
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777046395/Nepal_Rising_gtn63g.png", 
    url: "https://daayitwaus.org/", 
    tier: SPONSOR_TIERS.TITLE,
    partnerLabel: "Title Sponsor",
    description: "Nepal Rising (Daayitwa US) is a global collaborative campaign organized for providing relief, rebuilding, and resilience of communities in need in Nepal and elsewhere. Formed in the aftermath of the devastating earthquake on April 25, 2015, they seek to sustain the movement to empower Nepali communities to bounce back from adversities."
  },

  // --- Gold Sponsors ---
  { 
    name: "Leo Club of Kathmandu Bhrikuti", 
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777046393/White_theme_logo_ksljo0.png", 
    url: "https://www.instagram.com/lck_bhrikuti/", 
    tier: SPONSOR_TIERS.GOLD,
    partnerLabel: "Association Partner",
    description: "Leo Club of Kathmandu Bhrikuti (LCK Bhrikuti) is a dynamic youth organization dedicated to fostering positive change in society. Rooted in the core values of Leadership, Experience, and Opportunity (LEO), their mission is twofold: to uplift underserved communities and to empower young individuals aged 18 to 30 to grow personally and professionally through meaningful service and leadership."
  },

  // --- Silver Sponsors ---
  { 
    name: "Ather", 
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777046718/ather-logo_qbkk5a.svg", 
    url: "#", 
    tier: SPONSOR_TIERS.SILVER,
    partnerLabel: "EV Mobility Partner",
    description: "Ather is our EV Mobility Partner, driving the future of sustainable transportation and supporting innovation at TEDxBhrikutiMandap 2026."
  },

  // --- Bronze Sponsors ---
  { 
    name: "Naulo Koseli", 
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777046393/Naulo_Koseli_plobqp.png", 
    url: "https://naulokoseli.com/", 
    tier: SPONSOR_TIERS.BRONZE,
    partnerLabel: "Kit Partner",
    description: "Naulo Koseli operates as a trusted online gift shop based in Kathmandu with a global reach. They specifically target the Nepali Diaspora in countries like India, Australia, the USA, Europe, Japan, and the Gulf, allowing them to send physical tokens of affection to over 100 locations within Nepal."
  },
  { 
    name: "I am The Gardener", 
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777046392/I_am_the_Gardener_qfimms.png", 
    url: "https://www.iamthegardener.com/", 
    tier: SPONSOR_TIERS.BRONZE,
    partnerLabel: "Floral Partner",
    description: "A contemporary garden center to meet all of your plant needs. Whether you're looking to purchase indoor plants, outdoor plants, flowerpots, or any other nursery equipment, they have got you covered! Their mission is to lead the way to raise the horticulture standards in Nepal."
  },

  // --- Community Partners ---
  { 
    name: "AK Printing Hub", 
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777046392/AK_Printing_Hub_uw2ahe.png", 
    url: "https://www.instagram.com/akprinting.hub/", 
    tier: SPONSOR_TIERS.COMMUNITY,
    partnerLabel: "Printing Partner",
    description: "AK Printing Hub is a versatile printing solution provider in Kathmandu. They specialize in high-quality digital and offset printing, catering to both corporate and creative clients. They are known for handling everything from small-scale marketing materials to large-scale event branding."
  },
  { 
    name: "Himalayan Host", 
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777046391/Himalayan_Host_hbulej.png", 
    url: "https://www.himalayanhost.com/", 
    tier: SPONSOR_TIERS.COMMUNITY,
    partnerLabel: "Digital Support Partner",
    description: "Powering Nepal since 2007, Himalayan Host has been committed to delivering most affordable, high-quality web hosting solutions from Kathmandu, Nepal. They prioritize exceptional speed, robust security, and 24/7 local support for their clients."
  },
];
