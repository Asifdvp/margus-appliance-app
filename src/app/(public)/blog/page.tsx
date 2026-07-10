import type { Metadata } from "next";
import { BlogHero } from "@/sections/blog/BlogHero";
import { BlogList } from "@/sections/blog/BlogList";
import { CTABanner } from "@/sections/shared/CTABanner";

export const metadata: Metadata = {
  title: "Appliance Repair Tips & Expert Guides | Margus Appliance",
  description:
    "Practical appliance repair guides, troubleshooting tips, and expert advice from Margus Appliance — serving Cleveland, Parma, and surrounding areas.",
  openGraph: {
    title: "Appliance Repair Tips & Expert Guides | Margus Appliance",
    description:
      "Troubleshooting tips and repair guides from certified appliance technicians in Cleveland & Parma.",
    url: "https://margusappliancerepair.com/blog",
    type: "website",
    images: [
      {
        url: "https://margusappliancerepair.com/images/blog/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Appliance repair guides by Margus Appliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Repair Tips & Expert Guides | Margus Appliance",
    description:
      "Practical repair guides from certified technicians in Cleveland & Parma.",
  },
  alternates: {
    canonical: "https://margusappliancerepair.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
      <CTABanner />
    </>
  );
}
