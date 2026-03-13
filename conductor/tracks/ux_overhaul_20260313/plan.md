# Implementation Plan: UX Overhaul and Font Migration (ux_overhaul_20260313)

## Phase 1: Typography Migration
- [ ] Task: Integrate **Poppins** font via `next/font/google` in `app/layout.tsx`.
- [ ] Task: Update Tailwind CSS 4 theme configuration in `app/globals.css` to use Poppins as the primary sans-serif font.
- [ ] Task: Refactor `app/page.tsx` to use the `H1` tag for the main title with the **Poppins Black (900)** weight.
- [ ] Task: Conductor - User Manual Verification 'Typography Migration' (Protocol in workflow.md)

## Phase 2: Refactor Tally Action System
- [ ] Task: Create a new `src/components/FloatingActions.tsx` component and migrate the Tally button logic from `src/components/TallyWidget.tsx`.
- [ ] Task: Implement **Threshold-based** scroll detection to hide/show the floating action system.
- [ ] Task: Implement a rotating prompt bubble with **Cross-fade** transitions (alternating every 2 seconds).
- [ ] Task: Add a 'loading' state that changes the button text to **'Opening...'** when a Tally modal is being prepared.
- [ ] Task: Conductor - User Manual Verification 'Tally Action System' (Protocol in workflow.md)

## Phase 3: Polish and Verification
- [ ] Task: Optimize the Tally script loading strategy in `app/layout.tsx` (using `next/script` with `afterInteractive`).
- [ ] Task: Conduct a final responsive design audit to ensure the floating buttons and Poppins font work beautifully on mobile, tablet, and desktop.
- [ ] Task: Verify that the main title (`H1`) with Poppins Black 900 meets SEO and design requirements.
- [ ] Task: Conductor - User Manual Verification 'Final Polish' (Protocol in workflow.md)
