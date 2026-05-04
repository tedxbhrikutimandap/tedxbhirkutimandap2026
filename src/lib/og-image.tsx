import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

let interFont: Buffer | null = null;
let frauncesFont: Buffer | null = null;

async function loadFonts() {
  if (!interFont) {
    interFont = await readFile(
      join(process.cwd(), "public/fonts/Inter_18pt-SemiBold.ttf")
    );
  }
  if (!frauncesFont) {
    frauncesFont = await readFile(
      join(process.cwd(), "public/fonts/Fraunces_72pt_SuperSoft-Bold.ttf")
    );
  }
  return { interFont, frauncesFont };
}

export async function generateOgImage(
  title: string,
  subtitle?: string
): Promise<ImageResponse> {
  const { interFont, frauncesFont } = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "rgba(235, 0, 40, 0.12)",
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, transparent, #eb0028, transparent)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            zIndex: 1,
            padding: "40px",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 1.1,
              textAlign: "center",
              fontFamily: "Fraunces",
            }}
          >
            {title}
          </div>
          <div
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#eb0028",
              borderRadius: "2px",
            }}
          />
          {subtitle && (
            <div
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.8)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textAlign: "center",
                fontFamily: "Fraunces",
              }}
            >
              {subtitle}
            </div>
          )}
          <div
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textAlign: "center",
              marginTop: "16px",
              fontFamily: "Inter",
            }}
          >
            June 6, 2026 &middot; Kathmandu, Nepal
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interFont,
          weight: 600,
          style: "normal",
        },
        {
          name: "Fraunces",
          data: frauncesFont,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
