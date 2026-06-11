import type { Metadata } from "next";
import { AboutHero } from "@/sections/about/AboutHero";
import { WhyChooseUs } from "@/sections/about/WhyChooseUs";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { CONTACT_INFO } from "@/constants";
import { AboutFeatures } from "@/sections/about/AboutFeatures";

export const metadata: Metadata = {
  title: "About Margus Appliance — Trusted Appliance Repair in Cleveland & Parma",
  description:
    "Margus Appliance is a certified appliance repair company serving Cleveland, Parma, and surrounding areas. Honest pricing, same-day service, and a 90-day parts & labor warranty.",
  openGraph: {
    title: "About Margus Appliance — Trusted Appliance Repair in Cleveland & Parma",
    description:
      "Certified appliance repair in Cleveland & Parma. Transparent pricing, same-day service, and a 90-day parts & labor warranty.",
    url: "https://margusappliance.com/about",
    type: "website",
    images: [
      {
        url: "https://margusappliance.com/images/about/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Margus Appliance — Expert Appliance Repair Team in Cleveland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Margus Appliance — Trusted Appliance Repair",
    description:
      "Certified appliance repair in Cleveland & Parma. Same-day service and 90-day warranty.",
  },
  alternates: {
    canonical: "https://margusappliance.com/about",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Margus Appliance",
  url: "https://margusappliance.com",
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  description:
    "Certified appliance repair services in Cleveland, Parma, and surrounding areas. Same-day service with transparent pricing and a 90-day parts & labor warranty.",
  areaServed: [
    { "@type": "City", name: "Cleveland" },
    { "@type": "City", name: "Parma" },
  ],
  serviceType: "Appliance Repair",
  priceRange: "$$",
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <AboutHero />
      <WhyChooseUs />
      <AboutFeatures />
      <AboutCTA />
    </>
  );
}
