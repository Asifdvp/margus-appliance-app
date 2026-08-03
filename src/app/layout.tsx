import type { Metadata } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/shared/components/Navbar";
import { Footer } from "@/shared/components/Footer";
import { Emergency } from "@/shared/components/Emergency";
import { BookingModalProvider } from "@/shared/components/book";
import { CONTACT_INFO } from "@/constants";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://margusappliancerepair.com"),
  title: {
    template: "%s | Margus Appliance",
    default: "Appliance Repair Cleveland & Parma, OH | Margus",
  },
  description:
    "Same-day appliance repair in Cleveland & Parma, OH — 4.9★ (184 Google reviews). Honest, upfront pricing. 180-day warranty. Call (216) 304-0665.",
  openGraph: {
    siteName: "Margus Appliance",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Margus Appliance — Expert Appliance Repair in Cleveland & Parma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@margusappliance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://margusappliancerepair.com/#organization",
  name: "Margus Appliance",
  url: "https://margusappliancerepair.com",
  logo: "https://margusappliancerepair.com/logo.png",
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "6520 Broadview Rd",
    addressLocality: "Parma",
    addressRegion: "OH",
    postalCode: "44134",
    addressCountry: "US",
  },
  description:
    "Certified appliance repair services in Cleveland, Parma, and surrounding areas. Same-day service with transparent pricing and a 180-day parts & labor warranty.",
  areaServed: [
    "Cleveland", "Parma", "Akron", "Lakewood", "Euclid", "Strongsville",
    "Cleveland Heights", "North Ridgeville", "Westlake", "North Royalton",
    "Avon Lake", "Avon", "Willoughby", "Solon", "Hudson", "South Euclid",
    "Rocky River", "Broadview Heights", "Twinsburg", "Brook Park", "Berea",
    "Aurora", "Fairview Park", "Bay Village", "Brecksville", "Beachwood",
    "Lyndhurst", "Wickliffe", "Macedonia", "Brooklyn", "Richmond Heights",
    "Columbia Station", "Sheffield Lake", "Olmsted Falls", "Hinckley",
    "Independence", "Elyria", "Cuyahoga Falls", "Brunswick", "Stow",
    "North Olmsted", "Garfield Heights", "Medina", "Wadsworth",
    "Maple Heights", "Tallmadge", "Streetsboro", "Eastlake", "Bedford",
    "Shaker Heights", "Kirtland", "Mentor", "Chagrin Falls", "Richfield",
    "Fairlawn", "Sagamore Hills", "Gates Mills",
  ].map((name) => ({ "@type": "City", name })),
  serviceType: "Appliance Repair",
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/share/19699YsqAt/?mibextid=wwXIfr",
    "https://www.instagram.com/margusappliancerepair",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${manrope.variable} ${workSans.variable}`}>
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DFS4YRDR0T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DFS4YRDR0T');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <BookingModalProvider>
          <Emergency />
          <Navbar />
          {children}
          <Footer />
        </BookingModalProvider>
      </body>
    </html>
  );
}
