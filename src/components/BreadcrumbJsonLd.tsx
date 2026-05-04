"use client";

import { usePathname } from "next/navigation";

const routeLabels: Record<string, string> = {
  "": "Home",
  about: "About",
  speakers: "Speakers",
  sponsors: "Sponsors",
  team: "Team",
  schedule: "Schedule",
  contact: "Contact",
  tickets: "Tickets",
};

export const BreadcrumbJsonLd = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const items = [
    {
      "@type": "ListItem" as const,
      position: 1,
      name: "Home",
      item: "https://www.tedxbhrikutimandap.com/",
    },
    ...segments.map((segment, i) => ({
      "@type": "ListItem" as const,
      position: i + 2,
      name: routeLabels[segment] || segment,
      item: `https://www.tedxbhrikutimandap.com/${segments.slice(0, i + 1).join("/")}`,
    })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
