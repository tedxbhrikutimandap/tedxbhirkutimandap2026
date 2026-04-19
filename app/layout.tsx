import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { siteConfig } from "@/data/siteConfig";
import { seoConfig } from "@/data/seoConfig";
import { OrganizationJsonLd, PersonJsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";



export const metadata: Metadata = {
  title: {
    default: `${seoConfig.title} — Ideas Worth Spreading | Kathmandu Nepal`,
    template: `%s | ${seoConfig.siteName}`,
  },
  description: seoConfig.description,
  metadataBase: new URL(seoConfig.url),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "TEDx",
    "TEDxBhrikutiMandap",
    "TED talks",
    "Kathmandu",
    "Nepal",
    "ideas worth spreading",
    "conference",
    "innovation",
    "Bhrikuti Mandap",
    "TEDx Nepal",
    "TEDx Kathmandu",
  ],
  authors: [{ name: "TEDxBhrikutiMandap" }],
  creator: "TEDxBhrikutiMandap",
  publisher: "TEDxBhrikutiMandap",
  openGraph: {
    title: `${seoConfig.title} — Ideas Worth Spreading`,
    description: seoConfig.description,
    url: seoConfig.url,
    siteName: seoConfig.siteName,
    locale: seoConfig.locale,
    type: "website",
    images: [
      {
        url: seoConfig.images.og,
        width: 1200,
        height: 630,
        alt: `${seoConfig.title} — Ideas Worth Spreading`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${seoConfig.title} — Ideas Worth Spreading`,
    description: seoConfig.description,
    images: [seoConfig.images.twitter],
    creator: seoConfig.twitter.handle,
    site: seoConfig.twitter.site,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/favicon/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/favicon/android-chrome-512x512.png" },
    ],
  },
  other: {
    "geo.region": "NP-03",
    "geo.placename": "Kathmandu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://tally.so" />
        <link rel="dns-prefetch" href="https://tally.so" />
        <link rel="preload" href="https://tally.so/widgets/embed.js" as="script" />
        <OrganizationJsonLd />
        <PersonJsonLd />

        {/* WebSite JSON-LD for sitelinks search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TEDxBhrikutiMandap",
              url: seoConfig.url,
            }),
          }}
        />

        {/* Tally embed script */}
        <Script id="tally-embed" src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleId}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteConfig.analytics.googleId}');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${siteConfig.analytics.clarityId}");
            `,
          }}
        />
      </head>
      <body
        className="antialiased bg-black text-white font-sans"
      >
        <BackgroundEffects />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
