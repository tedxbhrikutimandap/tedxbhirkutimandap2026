import { seoConfig } from "@/data/seoConfig";
import { teamMembers } from "@/data/team";

export const OrganizationJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.organization.name,
    url: seoConfig.organization.url,
    logo: seoConfig.organization.logo,
    sameAs: seoConfig.organization.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: seoConfig.organization.contactPoint.telephone,
      contactType: seoConfig.organization.contactPoint.contactType,
    },
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      sameAs: member.socials ? Object.values(member.socials).filter(Boolean) : [],
    })),
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
    "name": seoConfig.technicalLead.name,
    "url": seoConfig.technicalLead.url,
    "jobTitle": seoConfig.technicalLead.jobTitle,
    "email": seoConfig.technicalLead.email,
    "telephone": seoConfig.technicalLead.telephone,
    "image": seoConfig.technicalLead.image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": seoConfig.technicalLead.address,
    },
    "sameAs": seoConfig.technicalLead.sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
