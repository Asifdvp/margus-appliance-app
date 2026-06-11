import type { Metadata } from "next";
import { ServicesHero } from "@/sections/services/ServicesHero";
import { ServicesList } from "@/sections/services/ServicesList";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";
import { CONTACT_INFO } from "@/constants";

export const metadata: Metadata = {
  title: "Appliance Repair Services — Cleveland & Parma | Margus Appliance",
  description:
    "Refrigerator, washer, dryer, oven, dishwasher & more — same-day appliance repair in Cleveland, Parma, and surrounding areas. Certified technicians, upfront pricing.",
  openGraph: {
    title: "Appliance Repair Services — Cleveland & Parma | Margus Appliance",
    description:
      "Same-day appliance repair in Cleveland & Parma. Certified technicians, transparent pricing, 90-day warranty.",
    url: "https://margusappliance.com/services",
    type: "website",
    images: [
      {
        url: "https://margusappliance.com/images/services/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Margus Appliance repair services in Cleveland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Repair Services | Margus Appliance",
    description:
      "Same-day appliance repair in Cleveland & Parma. 90-day warranty.",
  },
  alternates: {
    canonical: "https://margusappliance.com/services",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Margus Appliance",
  url: "https://margusappliance.com",
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  description:
    "Professional appliance repair services in Cleveland, Parma, and surrounding areas.",
  areaServed: [
    { "@type": "City", name: "Cleveland" },
    { "@type": "City", name: "Parma" },
  ],
  serviceType: "Appliance Repair",
  priceRange: "$$",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesHero />
      <ServicesList />
      <Blogs />
      <CTABanner />
    </>
  );
}
