import type { Metadata } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/shared/components/Navbar";
import { Footer } from "@/shared/components/Footer";
import { Emergency } from "@/shared/components/Emergency";
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
  metadataBase: new URL("https://margusappliance.com"),
  title: {
    template: "%s | Margus Appliance",
    default: "Expert Appliance Repair in Cleveland & Parma | Margus Appliance",
  },
  description:
    "Certified same-day appliance repair in Cleveland, Parma, and surrounding areas. Transparent pricing and a 90-day parts & labor warranty. Call us today.",
  openGraph: {
    siteName: "Margus Appliance",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-home.jpg",
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
  "@id": "https://margusappliance.com/#organization",
  name: "Margus Appliance",
  url: "https://margusappliance.com",
  logo: "https://margusappliance.com/logo.png",
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  description:
    "Certified appliance repair services in Cleveland, Parma, and surrounding areas. Same-day service with transparent pricing and a 90-day parts & labor warranty.",
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
  sameAs: ["https://www.facebook.com/margusappliance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${manrope.variable} ${workSans.variable}`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Emergency />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
