# Implementation Plan: SEO Enhancement and Schema Markup

## Phase 1: Data Preparation
- [ ] Task: Create central SEO configuration
    - [ ] Create `src/data/seoConfig.ts`.
    - [ ] Consolidate metadata from `siteConfig.ts` and add missing SEO fields (Person, Org details).

## Phase 2: Schema.org Implementation
- [ ] Task: Develop JSON-LD Components
    - [ ] Create `src/components/JsonLd.tsx`.
    - [ ] Implement `Organization` schema.
    - [ ] Implement `Person` schema.

## Phase 3: Layout Integration
- [ ] Task: Update Global Metadata
    - [ ] Refactor `app/layout.tsx` to use `seoConfig.ts`.
    - [ ] Add comprehensive Twitter and OpenGraph tags.
- [ ] Task: Inject Structured Data
    - [ ] Add `JsonLd` components to `app/layout.tsx`.

## Phase 4: Finalization & Verification
- [ ] Task: Validation & Quality Check
    - [ ] Run `pnpm build` to ensure no type errors.
    - [ ] Verify rendered meta tags in a local environment.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Finalization & Verification' (Protocol in workflow.md)
