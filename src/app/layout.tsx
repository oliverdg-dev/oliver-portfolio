import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { MotionProvider } from "@/components/motion-provider";
import { themeBootScript } from "@/lib/theme";
import { site } from "@/content/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const title = `${site.shortName} | ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: title, template: `%s | ${site.shortName}` },
  description: site.description,
  applicationName: site.shortName,
  authors: [{ name: site.name, url: site.links.github || undefined }],
  creator: site.name,
  keywords: [
    "Oliver Garcia",
    "software developer",
    "full-stack developer",
    "AI automation",
    "workflow automation",
    "Next.js",
    "Python",
    "Philippines",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.shortName,
    title,
    description: site.description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#f3f2ed" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  image: `${site.siteUrl}/images/oliver-garcia.jpg`,
  email: `mailto:${site.email}`,
  url: site.siteUrl,
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Santo Tomas" },
  sameAs: [site.links.github, site.links.linkedin].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <Script id="theme-boot" strategy="beforeInteractive">
          {themeBootScript}
        </Script>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
