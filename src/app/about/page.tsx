import type { Metadata } from "next";
import { AboutHero } from "@/sections/about/AboutHero";
import { AboutStory } from "@/sections/about/AboutStory";
import { WhyChooseUs } from "@/sections/shared/WhyChooseUs";
import { AboutTrust } from "@/sections/about/AboutTrust";
import { AboutFeatures } from "@/sections/shared/AboutFeatures";
import { AboutCoverage } from "@/sections/about/AboutCoverage";
import { AboutCTA } from "@/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Margus Appliance Repair | Cleveland & Parma, OH",
  description:
    "Margus Appliance Repair is a family-owned appliance repair company serving Cleveland & Parma, OH for 8+ years. Honest upfront pricing, 180-day warranty.",
  openGraph: {
    title: "About Margus Appliance Repair | Cleveland & Parma, OH",
    description:
      "Family-owned appliance repair serving Cleveland & Parma, OH for 8+ years. Honest upfront pricing, same-day service, 180-day warranty.",
    url: "https://margusappliancerepair.com/about",
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
    canonical: "https://margusappliancerepair.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
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
