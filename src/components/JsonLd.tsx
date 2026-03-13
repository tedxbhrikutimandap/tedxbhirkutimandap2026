import { seoConfig } from "@/data/seoConfig";

export const OrganizationJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": seoConfig.organization.name,
    "url": seoConfig.organization.url,
    "logo": seoConfig.organization.logo,
    "sameAs": seoConfig.organization.sameAs,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": seoConfig.organization.contactPoint.telephone,
      "contactType": seoConfig.organization.contactPoint.contactType,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const PersonJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": seoConfig.organizer.name,
    "url": seoConfig.organizer.url,
    "jobTitle": seoConfig.organizer.jobTitle,
    "sameAs": seoConfig.organizer.sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
