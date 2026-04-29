/**
 * TEDxBhrikutiMandap 2026 — Central Design System
 *
 * This is the SINGLE SOURCE OF TRUTH for all design tokens.
 * Every component should import from here instead of hardcoding values.
 *
 * To update the site's look & feel, edit ONLY this file.
 */

// ─── Colors ───────────────────────────────────────────────────────────────────

export const colors = {
  // Primary brand
  tedRed: "#eb0028",
  tedRedDark: "#b80020",
  tedRedLight: "#ff1a3d",
  tedRedMuted: "rgba(235, 0, 40, 0.15)",
  tedRedGlow: "rgba(235, 0, 40, 0.4)",

  // Surfaces (dark theme)
  background: "#000000",
  surface: "#0a0a0a",
  surfaceElevated: "#111111",
  surfaceCard: "#141414",
  surfaceOverlay: "#1a1a1a",

  // Text
  textPrimary: "#ffffff",
  textSecondary: "rgba(255, 255, 255, 0.7)",
  textMuted: "rgba(255, 255, 255, 0.4)",
  textDisabled: "rgba(255, 255, 255, 0.2)",

  // Borders & dividers
  border: "rgba(255, 255, 255, 0.08)",
  borderHover: "rgba(255, 255, 255, 0.15)",
  borderActive: "rgba(235, 0, 40, 0.5)",

  // Gradients
  gradientRedStart: "#eb0028",
  gradientRedEnd: "#ff1a3d",

  // Overlays
  overlayDark: "rgba(0, 0, 0, 0.6)",
  overlayDarker: "rgba(0, 0, 0, 0.85)",
} as const;

// ─── Typography ───────────────────────────────────────────────────────────────

export const typography = {
  fontFamily: {
    primary: "var(--font-poppins), 'Poppins', sans-serif",
  },
  fontSize: {
    // Display (hero, main headings)
    displayXl: "clamp(3rem, 8vw, 7rem)",
    displayLg: "clamp(2.5rem, 6vw, 5rem)",
    displayMd: "clamp(2rem, 4vw, 3.5rem)",

    // Headings
    h1: "clamp(1.75rem, 3.5vw, 3rem)",
    h2: "clamp(1.5rem, 3vw, 2.25rem)",
    h3: "clamp(1.25rem, 2vw, 1.75rem)",
    h4: "clamp(1.1rem, 1.5vw, 1.25rem)",

    // Body
    bodyLg: "1.125rem",
    body: "1rem",
    bodySm: "0.875rem",

    // Caption / Small
    caption: "0.75rem",
    captionSm: "0.625rem",
  },
  fontWeight: {
    light: "300",
    regular: "400",
    bold: "700",
    black: "900",
  },
  lineHeight: {
    tight: "0.95",
    snug: "1.1",
    normal: "1.5",
    relaxed: "1.75",
  },
  letterSpacing: {
    tight: "-0.02em",
    normal: "0",
    wide: "0.05em",
    wider: "0.1em",
    widest: "0.2em",
    ultraWide: "0.35em",
  },
} as const;

// ─── Spacing ──────────────────────────────────────────────────────────────────

export const spacing = {
  sectionPaddingX: "clamp(1rem, 5vw, 6rem)",
  sectionPaddingY: "clamp(3rem, 8vh, 8rem)",
  containerMaxWidth: "1280px",
  containerMaxWidthWide: "1440px",
  navHeight: "80px",
  navHeightMobile: "64px",
} as const;

// ─── Shadows ──────────────────────────────────────────────────────────────────

export const shadows = {
  card: "0 4px 24px rgba(0, 0, 0, 0.4)",
  cardHover: "0 8px 40px rgba(0, 0, 0, 0.6)",
  glow: "0 0 40px rgba(235, 0, 40, 0.3)",
  glowStrong: "0 0 60px rgba(235, 0, 40, 0.5)",
  button: "0 8px 25px rgba(235, 0, 40, 0.4)",
  buttonHover: "0 12px 35px rgba(235, 0, 40, 0.55)",
  nav: "0 2px 20px rgba(0, 0, 0, 0.5)",
} as const;

// ─── Border Radius ────────────────────────────────────────────────────────────

export const radii = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
  full: "9999px",
} as const;

// ─── Transitions ──────────────────────────────────────────────────────────────

export const transitions = {
  fast: "150ms ease",
  normal: "300ms ease",
  slow: "500ms ease",
  spring: { type: "spring", stiffness: 260, damping: 20 },
  springGentle: { type: "spring", stiffness: 200, damping: 25 },
  springSnappy: { type: "spring", stiffness: 300, damping: 22 },
} as const;

// ─── Breakpoints ──────────────────────────────────────────────────────────────

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// ─── Z-Index ──────────────────────────────────────────────────────────────────

export const zIndex = {
  base: 0,
  content: 10,
  ribbon: 20,
  nav: 50,
  modal: 100,
  toast: 200,
} as const;

// ─── Combined export ─────────────────────────────────────────────────────────

export const designSystem = {
  colors,
  typography,
  spacing,
  shadows,
  radii,
  transitions,
  breakpoints,
  zIndex,
} as const;

export default designSystem;
