import { siteConfig } from "./siteConfig";

export const seoConfig = {
  title: siteConfig.name,
  description: siteConfig.description,
  url: "https://tedxbhirkutimandap.com",
  siteName: siteConfig.name,
  locale: "en_US",
  type: "website",
  
  // Twitter
  twitter: {
    handle: "@tedxbhirkutimandap", // Placeholder
    site: "@tedxbhirkutimandap",
    cardType: "summary_large_image",
  },

  // Images
  images: {
    og: siteConfig.logos.white,
    twitter: siteConfig.logos.white,
  },

  // Organization Schema
  organization: {
    name: siteConfig.name,
    url: "https://tedxbhirkutimandap.com",
    logo: siteConfig.logos.white,
    sameAs: [
      "https://www.instagram.com/tedxbhirkutimandap/",
      "https://www.facebook.com/profile.php?id=61586610127547",
      "https://www.linkedin.com/company/tedxbhirkutimandap/",
    ],
    contactPoint: {
      telephone: "", // TODO: Add event contact if available
      contactType: "customer service",
    },
  },

  // Person Schema (Example for Lead Organizer)
  organizer: {
    name: "Organizer Name", // Placeholder
    url: "https://tedxbhirkutimandap.com",
    jobTitle: "Licensee & Lead Organizer",
    sameAs: [],
  },
};
