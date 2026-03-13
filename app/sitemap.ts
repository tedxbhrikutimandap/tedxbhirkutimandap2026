import { MetadataRoute } from "next";
import { seoConfig } from "@/data/seoConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.url;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
