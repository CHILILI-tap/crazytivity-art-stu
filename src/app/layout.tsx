import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Crazytivity Art Stu | Contemporary Art & Original Paintings",
    template: "%s | Crazytivity Art Stu",
  },
  description: site.description,
  keywords: [
    "contemporary art",
    "original paintings",
    "abstract art",
    "commission an artist",
    "art for sale",
    "Crazytivity Art Stu",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    title: "Crazytivity Art Stu | Contemporary Art & Original Paintings",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crazytivity Art Stu contemporary paintings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crazytivity Art Stu | Contemporary Art & Original Paintings",
    description: site.description,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: "#0E0D0C",
  width: "device-width",
  initialScale: 1,
};

const artistSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Crazytivity Art Stu",
  jobTitle: "Contemporary Artist",
  url: site.url,
  email: site.email,
  sameAs: Object.values(site.socials),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-ink text-ivory font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ivory focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <CustomCursor />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(artistSchema) }}
        />
      </body>
    </html>
  );
}