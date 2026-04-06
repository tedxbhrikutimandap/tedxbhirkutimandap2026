import type { MetadataRoute } from "next";

const BASE_URL = "https://www.tedxbhrikutimandap.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/speakers",
    "/team",
    "/schedule",
    "/sponsors",
    "/contact",
  ];

  return routes.map((route): MetadataRoute.Sitemap[number] => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
