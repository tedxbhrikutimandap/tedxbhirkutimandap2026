# Specification: UX Overhaul and Font Migration

## Overview
Enhance the user experience of the TEDxBhrikutiMandap 2026 website by improving the Tally form integration, implementing a more sophisticated mobile action system, and aligning typography with a modern, premium aesthetic using the Poppins font.

## Requirements

### 1. Typography Migration
- **Font:** Switch from Geist to **Poppins** (Google Fonts).
- **Weights:** 300 (Light), 400 (Regular), 700 (Bold), 900 (Black).
- **Implementation:** Integrate via `next/font/google` in `RootLayout`. Update Tailwind CSS 4 theme configuration (`globals.css`) to use Poppins as the primary sans-serif font.

### 2. Floating Action System (Mobile/Global)
- **Component:** Refactor `TallyWidget` into a `FloatingActions` component.
- **Layout (Mobile):** Replace full-width bottom buttons with floating pill-shaped buttons.
- **Behavior:**
  - **Scroll Awareness:** Buttons should hide on scroll down and show on scroll up/reaching page bottom to maximize screen real estate.
  - **Rotating Prompts:** Implement a message bubble that alternates every 2 seconds between:
    - *"Be the first to know"* (Highlighting 'Join Waitlist').
    - *"Who needs to be heard?"* (Highlighting 'Nominate Candidate').
  - **Interaction:** Pause rotation on hover/focus. Ensure high contrast and clear visibility.

### 3. Tally Performance & UX
- **Loading:** Improve script loading for `tally.so/widgets/embed.js`.
- **Feedback:** Add visual feedback (e.g., loading state) when a Tally button is clicked to indicate that the modal is being prepared.
- **Responsiveness:** Ensure Tally modals are correctly sized and centered across all breakpoints.

## Technical Details
- **Framework:** Next.js 16/19 (App Router).
- **Styling:** Tailwind CSS 4.
- **Components:** `Framer Motion` (optional, for smooth transitions) or CSS transitions for floating button behavior.

## Success Criteria
- Website uses Poppins font globally.
- Floating buttons are responsive and follow the scroll/rotation behavior on mobile.
- Tally forms load reliably with clear user feedback.
- Visuals are consistent with a "premium, modern" aesthetic.
- No regressions in performance or accessibility.
