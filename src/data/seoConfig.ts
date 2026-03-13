import { siteConfig } from "./siteConfig";

export const seoConfig = {
  title: siteConfig.name,
  description: siteConfig.description,
  url: "https://tedxbhirkutimandap.com",
  siteName: "TedxBhirkutimandap",
  locale: "en_US",
  type: "website",
  
  // Twitter
  twitter: {
    handle: "@tedxbhirkutimandap", 
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
    name: "TedxBhirkutimandap",
    url: "https://tedxbhirkutimandap.com",
    logo: siteConfig.logos.white,
    sameAs: [
      "https://www.instagram.com/tedxbhirkutimandap/",
      "https://www.facebook.com/profile.php?id=61586610127547",
      "https://www.linkedin.com/company/tedxbhirkutimandap/",
    ],
    contactPoint: {
      telephone: "+977 9864782896",
      contactType: "technical support",
    },
  },

  // Person Schema (Technical Lead)
  technicalLead: {
    name: "Apil Khadka",
    url: "https://apilkhadka.com.np",
    jobTitle: "Technical Lead",
    email: "apil@apilkhadka.com.np",
    telephone: "+977 9864782896",
    image: "https://res.cloudinary.com/dglsdyi9e/image/upload/v1766247919/qpcmhwwohdu77mjf33v1.jpg",
    address: "Dhobighat, Lalitpur",
    sameAs: [
      "https://www.linkedin.com/in/apil-khadka/",
      "https://github.com/Apil-Khadka",
      "https://www.instagram.com/apil.me/",
      "https://www.facebook.com/apil.me",
      "https://blog.apilkhadka.com.np/",
      "https://apil-khadka.medium.com/",
      "https://happenstance.ai/invite/friend/VnHlo9ESkDGjCFLiyjLNKL5uPAj"
    ],
  },
};
