# Specification: SEO Enhancement and Schema Markup

## Overview
Improve the website's SEO by implementing structured data (JSON-LD), refining metadata management, and optimizing social media tags (Twitter, OpenGraph). All SEO-related data must be stored in modular data files to avoid hardcoding in components.

## Requirements
- **Structured Data (Schema.org):**
  - `Organization` schema for TEDxBhirkutiMandap.
  - `Person` schema for key event organizers/leads (placeholders/configurable).
- **Metadata Management:**
  - Create a central `src/data/seo.ts` (or expand `siteConfig.ts`) to manage all SEO strings.
  - Implement dynamic metadata in `app/layout.tsx`.
- **Social Media Optimization:**
  - Complete Twitter card configuration.
  - Comprehensive OpenGraph tags.
- **Modularity:** Use a dedicated component for JSON-LD injection.

## Technical Details
- **JSON-LD:** Use Next.js `metadata` API and direct script injection for complex schemas.
- **Data Source:** `src/data/seoConfig.ts`.

## Success Criteria
- Validated JSON-LD schemas (no errors in Schema Markup Validator).
- Meta tags correctly rendered in the `<head>`.
- Social media previews correctly configured.
