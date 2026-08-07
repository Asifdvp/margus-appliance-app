import type { Metadata } from "next";
import { AboutHero } from "@/sections/about/AboutHero";
import { AboutStory } from "@/sections/about/AboutStory";
import { WhyChooseUs } from "@/sections/shared/WhyChooseUs";
import { AboutTrust } from "@/sections/about/AboutTrust";
import { AboutFeatures } from "@/sections/shared/AboutFeatures";
import { AboutCoverage } from "@/sections/about/AboutCoverage";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { canonicalUrl } from "@/shared/lib/seo";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://margusappliancerepair.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://margusappliancerepair.com/about",
    },
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Margus Appliance",
  url: "https://margusappliancerepair.com/about",
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": "https://margusappliancerepair.com/#organization",
    name: "Margus Appliance",
  },
};

export const metadata: Metadata = {
  title: "About Us | Cleveland & Parma, OH",
  description:
    "Margus Appliance Repair is a family-owned appliance repair company serving Cleveland & Parma, OH for 8+ years. Honest upfront pricing, 180-day warranty.",
  openGraph: {
    title: "About Margus Appliance Repair | Cleveland & Parma, OH",
    description:
      "Family-owned appliance repair serving Cleveland & Parma, OH for 8+ years. Honest upfront pricing, same-day service, 180-day warranty.",
    url: canonicalUrl("/about"),
    type: "website",
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
    title: "About Margus Appliance Repair | Cleveland & Parma, OH",
    description:
      "Family-owned appliance repair serving Cleveland & Parma, OH for 8+ years.",
  },
  alternates: {
    canonical: canonicalUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutHero />
      <AboutStory />
      <WhyChooseUs />
      <AboutTrust />
      <AboutFeatures />
      <AboutCoverage />
      <AboutCTA />
    </>
  );
}
