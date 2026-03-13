# Specification: Coming Soon Ribbon Banner Effect

## Context
The TEDxBhrikutiMandap2026 landing page needs a visually striking, premium "Coming Soon" announcement. Inspired by diagonal scrolling ribbon banners (like the Black Friday sale style), this adds two animated ribbons at the top of the page that scroll infinitely in opposite directions.

## Goal
Add two diagonal ribbon banners with infinitely scrolling "COMING SOON" text at the top of the page, creating a premium, eye-catching visual that reinforces the event's upcoming status.

## Requirements
- Two diagonal ribbons crossing the page at the top (rotated ~12° and ~-12°)
- Each ribbon scrolls text infinitely in opposite directions (pure CSS keyframes)
- Text: "COMING SOON" repeated with TEDx-branded separators (★ or •)
- TEDx Red (#EB0028) background on ribbons with white bold uppercase text
- Premium feel: subtle glow/shadow on ribbons, refined letter-spacing, smooth animation
- Ribbons overflow viewport edges, clipped by the parent `overflow-hidden`
- Modular component with configurable props (`text`, `separator`, `speed`, `className`)
- Fully responsive (mobile + desktop)

## Technical Details
- **Component:** `src/components/RibbonBanner.tsx` (client component for animation)
- **Animations:** CSS `@keyframes` in `app/globals.css`
- **Integration:** Rendered at the top of `app/page.tsx`
- **Styling:** Tailwind CSS 4 + custom CSS for keyframes

## Success Criteria
- Ribbons are visually premium with smooth, seamless infinite scrolling
- No jank, tearing, or visible reset on loop
- Layout does not overflow or break other page elements
- Responsive across mobile and desktop viewports
- Brand-consistent colors (TED Red, white, black)
