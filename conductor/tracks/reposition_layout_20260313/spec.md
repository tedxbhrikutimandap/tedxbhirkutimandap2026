# Specification: Reposition layout and adjust 'Coming Soon' text

## Context
The "Coming Soon" text and event date are currently located at the bottom of the page in a container with a border and backdrop blur.
The user wants to make "Coming Soon" more prominent (H2 style, bigger than other elements) and reposition it within the page hierarchy.

## Goal
Reposition the "Coming Soon" and event date to a centered hero position between the Logo and the main Tagline.
Increase the size and emphasis of the "Coming Soon" text.

## Requirements
- Move the "Coming Soon" (H2) and Event Date ("2026") directly between the **Logo** and the **Tagline**.
- Hierarchy: `Logo` -> `Coming Soon (H2) + Event Date` -> `Tagline (H1)` -> `Description (P)`.
- Use a massive, bold scale for "Coming Soon" (e.g., `text-6xl md:text-8xl`, `font-[900]`, `ted-red`, `italic`).
- Maintain the Event Date ("2026") grouped with "Coming Soon".
- Remove the existing "Coming Soon" container from the bottom.
- Ensure the layout remains responsive and aesthetically pleasing using Tailwind CSS 4.

## Technical Details
- **File:** `app/page.tsx`
- **Components:** React Server Component (default `Home`).
- **Styling:** Tailwind CSS 4 classes.

## Success Criteria
- "Coming Soon" is significantly larger and more prominent.
- The page hierarchy follows the new structure correctly.
- No regressions in other parts of the layout or functionality.
- Visual consistency with existing brand colors and styles.
