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
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777046395/Nepal_Rising_gtn63g.avif", 
    url: "https://daayitwaus.org/", 
    tier: SPONSOR_TIERS.TITLE,
    partnerLabel: "Title Sponsor",
    description: "Nepal Rising (Daayitwa US) is a global collaborative campaign organized for providing relief, rebuilding, and resilience of communities in need in Nepal and elsewhere. Formed in the aftermath of the devastating earthquake on April 25, 2015, they seek to sustain the movement to empower Nepali communities to bounce back from adversities."
  },

  // --- Gold Sponsors ---
  { 
    name: "Leo Club of Kathmandu Bhrikuti", 
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1778408672/White_theme_logo_ikbca9.avif", 
    url: "https://www.instagram.com/lck_bhrikuti/", 
    tier: SPONSOR_TIERS.GOLD,
    partnerLabel: "Association Partner",
    description: "Leo Club of Kathmandu Bhrikuti (LCK Bhrikuti) is a dynamic youth organization dedicated to fostering positive change in society. Rooted in the core values of Leadership, Experience, and Opportunity (LEO), our mission is twofold: to uplift underserved communities and to empower young individuals aged 18 to 30 to grow personally and professionally through meaningful service and leadership."
  },

  // --- Silver Sponsors ---
  { 
    name: "Ather", 
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777046718/ather-logo_qbkk5a.avif", 
    url: "https://atherenergy.com.np/", 
    tier: SPONSOR_TIERS.SILVER,
    partnerLabel: "EV Mobility Partner",
    description: "Ather Energy, in partnership with Vaidya Energy, is a premium electric scooter brand operating in Nepal, focusing on high-performance EVs and an extensive fast-charging network (Ather Grid). Models like the 450X, 450S, and family-oriented Rizta are available, offering long range, smart connectivity via touchscreens, and durable IP67-rated batteries designed for Nepal's hilly, varied terrain."
  },
    {
    name: "Khalti",
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1778409071/Khalti_rwaotq.avif",
    url: "https://khaltibyime.khalti.com/",
    tier: SPONSOR_TIERS.SILVER,
    partnerLabel: "Ticketing Partner",
    description: "Khalti is a mobile wallet, payment gateway & service provider in Nepal. Launched in January 2017, Khalti is an emerging online payment solution in Nepal. It allows users to pay for a range of services like basic utility payments, hotel bookings, movie and domestic flight tickets, events and many more.",
  },

  // --- Bronze Sponsors ---
  { 
    name: "Naulo Koseli", 
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777046393/Naulo_Koseli_plobqp.avif", 
    url: "https://naulokoseli.com/", 
    tier: SPONSOR_TIERS.BRONZE,
    partnerLabel: "Kit Partner",
    description: "Naulo Koseli operates as a trusted online gift shop based in Kathmandu with a global reach. They specifically target the Nepali Diaspora in countries like India, Australia, the USA, Europe, Japan, and the Gulf, allowing them to send physical tokens of affection to over 100 locations within Nepal."
  },
  { 
    name: "I am The Gardener", 
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777046392/I_am_the_Gardener_qfimms.avif", 
    url: "https://www.iamthegardener.com/", 
    tier: SPONSOR_TIERS.BRONZE,
    partnerLabel: "Floral Partner",
    description: "A contemporary garden center to meet all of your plant needs. Whether you're looking to purchase indoor plants, outdoor plants, flowerpots, or any other nursery equipment, they have got you covered! Their mission is to lead the way to raise the horticulture standards in Nepal."
  },
  {
    name: "Lahana Lunch Box",
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1778408893/Lahana_Lunchbox_h2snrg.avif",
    url: "https://www.lahanalunchbox.com/",
    tier: SPONSOR_TIERS.BRONZE,
    partnerLabel: "Food Partner",
    description: `We have passion for great food. Lahana LunchBox was born out of a love for great food and a commitment to sustainability. Our founders envisioned a service that not only provided delicious meals but also promoted an eco-friendly lifestyle. We are here to provide a solution to the lunch dilemma of corporate staff, helping them enjoy affordable, delicious, and sustainable lunch options every day. With a focus on fresh ingredients, balanced nutrition, and eco-friendly practices, we aim to revolutionize the way you experience lunch.`,
  },

  // --- Community Partners ---
  { 
    name: "AK Printing Hub", 
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777046392/AK_Printing_Hub_uw2ahe.avif", 
    url: "https://www.instagram.com/akprinting.hub/", 
    tier: SPONSOR_TIERS.COMMUNITY,
    partnerLabel: "Printing Partner",
    description: "AK Printing Hub is a versatile printing solution provider in Kathmandu. They specialize in high-quality digital and offset printing, catering to both corporate and creative clients. They are known for handling everything from small-scale marketing materials to large-scale event branding."
  },
  { 
    name: "Himalayan Host", 
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1777046391/Himalayan_Host_hbulej.avif", 
    url: "https://www.himalayanhost.com/", 
    tier: SPONSOR_TIERS.COMMUNITY,
    partnerLabel: "Digital Support Partner",
    description: "Powering Nepal since 2007, Himalayan Host has been committed to delivering most affordable, high-quality web hosting solutions from Kathmandu, Nepal. They prioritize exceptional speed, robust security, and 24/7 local support for their clients."
  },
  {
    name: "Bibu Speaks",
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1778408937/Bibu_Speaks_acmvuo.avif",
    url: "https://www.instagram.com/bibuspeaks/",
    tier: SPONSOR_TIERS.COMMUNITY,
    partnerLabel: "Community Partner",
  },
  {
    name: "Edu Sanjal",
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1778408973/Edu_Sanjal_ldr3lc.avif",
    url: "https://edusanjal.com/",
    tier: SPONSOR_TIERS.COMMUNITY,
    partnerLabel: "Media Partner",
    description: "Edusanjal is established as Nepal's #1 education platform, dedicated to empowering students to make informed decisions about their education and career paths. Founded in 2010 \"by students for students,\" the organization has over 15 years of experience in the education sector.",
  },
  {
    name: "Nepal In Last 24 Hours",
    logo: "https://res.cloudinary.com/dgqtgob6n/image/upload/v1778409032/Nepal_in_Last_24_Hours_t80fp9.avif",
    url: "https://nepalinlast24hours.com/",
    tier: SPONSOR_TIERS.COMMUNITY,
    partnerLabel: "Media Partner",
    description: "Nepal in Last 24 Hours is the fastest growing news platform in Nepal, providing real-time updates and coverage of news in last 24 hours. Our goal is to deliver the most accurate, trending, and breaking Nepali news, covering politics, economy, sports, entertainment, culture, and trending stories across Nepal.",
  },

];
