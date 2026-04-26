import type { Metadata } from "next";
import { Hero } from "@/sections/home/Hero";
import { Stats } from "@/sections/home/Stats";
import { Services } from "@/sections/home/Services";
import { ServiceAreas } from "@/sections/home/ServiceAreas";
import { Brands } from "@/sections/home/Brands";

export const metadata: Metadata = {
  title: "Expert Appliance Repair in Cleveland & Parma | Margus Appliance",
  description:
    "Certified same-day appliance repair in Cleveland, Parma, and surrounding areas. Transparent pricing and a 90-day parts & labor warranty. Call us today.",
  openGraph: {
    title: "Expert Appliance Repair in Cleveland & Parma | Margus Appliance",
    description:
      "Certified same-day appliance repair in Cleveland, Parma, and surrounding areas. Transparent pricing and a 90-day parts & labor warranty.",
    url: "https://margusappliance.com",
    type: "website",
    images: [
      {
        url: "https://margusappliance.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Margus Appliance — Expert Appliance Repair in Cleveland & Parma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Appliance Repair in Cleveland & Parma | Margus Appliance",
    description:
      "Certified same-day appliance repair in Cleveland, Parma, and surrounding areas.",
  },
  alternates: {
    canonical: "https://margusappliance.com",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Brands />

      <Services />
      <ServiceAreas />
    </main>
  );
}
