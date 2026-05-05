import type { Metadata } from "next";
import { Red_Hat_Display, Figtree } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Recupero Robotics — Smart Robotics. Smarter Recovery.",
    template: "%s | Recupero Robotics",
  },
  description:
    "Affordable, accessible rehabilitation robotics for stroke recovery. Born out of the University of Pennsylvania, backed by NIH, with a 2.5-year clinical trial complete.",
  keywords: [
    "rehabilitation robotics",
    "stroke recovery",
    "THEAbot",
    "TrVr",
    "upper limb rehabilitation",
    "haptic feedback",
    "gamified therapy",
    "University of Pennsylvania",
    "NIH funded",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Recupero Robotics",
    title: "Recupero Robotics — Smart Robotics. Smarter Recovery.",
    description:
      "Affordable rehabilitation robotics for stroke recovery. UPenn-born, NIH-backed, clinically proven.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalDevice",
    name: "Recupero Robotics",
    description:
      "Affordable rehabilitation robotics for upper-limb stroke recovery, combining haptic feedback, biometric sensing, and gamified therapy.",
    manufacturer: {
      "@type": "Organization",
      name: "Recupero Robotics LLC",
      url: "https://recuperorobotics.com",
      foundingDate: "2018",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Philadelphia",
        addressRegion: "PA",
        addressCountry: "US",
      },
    },
  };

  return (
    <html lang="en" className={`${redHat.variable} ${figtree.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="pt-20 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
