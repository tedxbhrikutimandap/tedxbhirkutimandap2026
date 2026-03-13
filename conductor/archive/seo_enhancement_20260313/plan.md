# Implementation Plan: SEO Enhancement and Schema Markup

## Phase 1: Data Preparation
- [x] Task: Create central SEO configuration (8b9737c)
    - [ ] Create `src/data/seoConfig.ts`.
    - [ ] Consolidate metadata from `siteConfig.ts` and add missing SEO fields (Person, Org details).

## Phase 2: Schema.org Implementation
- [x] Task: Develop JSON-LD Components (47bd54f)
    - [ ] Create `src/components/JsonLd.tsx`.
    - [ ] Implement `Organization` schema.
    - [ ] Implement `Person` schema.

## Phase 3: Layout Integration
- [x] Task: Update Global Metadata (3b9a21c)
    - [ ] Refactor `app/layout.tsx` to use `seoConfig.ts`.
    - [ ] Add comprehensive Twitter and OpenGraph tags.
- [x] Task: Inject Structured Data (3b9a21c)
    - [ ] Add `JsonLd` components to `app/layout.tsx`.

## Phase 4: Finalization & Verification
- [x] Task: Validation & Quality Check (3b9a21c)
    - [ ] Run `pnpm build` to ensure no type errors.
    - [ ] Verify rendered meta tags in a local environment.

## Phase 5: SEO Refinement and Brand Visuals [checkpoint: 66a2d88]
- [x] Task: Update SEO Data (b96c378)
    - [ ] Update `seoConfig.ts` with correct Organizer name and Job Title (Technical Lead).
- [x] Task: Generate Brand Visual (NanoBanana) (Skipped due to quota, using existing logos)

## Phase 6: Dynamic SEO Assets [checkpoint: e222280]
- [x] Task: Update Production URL (59cd66f)
    - [ ] Update `seoConfig.ts` with `https://www.tedxbhirkutimandap.com/`.
- [x] Task: Implement Dynamic Sitemap (59cd66f)
    - [ ] Create `app/sitemap.ts` using `seoConfig.ts`.
- [x] Task: Implement Robots.txt (59cd66f)
    - [ ] Create `app/robots.ts` using `seoConfig.ts`.
- [ ] Task: Conductor - User Manual Verification 'Phase 6: Dynamic SEO Assets' (Protocol in workflow.md)
