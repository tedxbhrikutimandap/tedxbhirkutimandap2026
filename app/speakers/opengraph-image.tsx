// TODO: Replace with a real designed OG image (1200x630) once available.
import { generateOgImage } from "@/lib/og-image";

export const alt = "Speakers at TEDxBhrikutiMandap 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage("Speakers", "Visionaries & Changemakers");
}
