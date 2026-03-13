import { MetadataRoute } from "next";
import { seoConfig } from "@/data/seoConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${seoConfig.url}/sitemap.xml`,
  };
}
