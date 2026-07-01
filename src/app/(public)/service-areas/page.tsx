import type { Metadata } from "next";
import { PageHero } from "@/shared/ui/PageHero";
import { ServiceAreasSection } from "@/sections/service-areas/ServiceAreasSection";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";
import { CONTACT_INFO } from "@/constants";
import { ALL_SERVICE_AREAS } from "@/content/service-areas";

export const metadata: Metadata = {
  title: "Appliance Repair Service Areas — Cleveland, Parma & Surrounding Cities",
  description:
    "Margus Appliance serves Cleveland, Parma, Akron, Strongsville, Westlake, Brunswick, Berea, Lakewood, and 50+ surrounding cities. Same-day appliance repair with certified technicians.",
  openGraph: {
    title: "Appliance Repair Service Areas | Margus Appliance",
    description:
      "Same-day appliance repair in Cleveland, Parma, Akron, Strongsville, Westlake, and 50+ surrounding cities.",
    url: "https://margusappliance.com/service-areas",
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Margus Appliance service areas around Cleveland, Ohio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Repair Service Areas | Margus Appliance",
    description:
      "Same-day appliance repair in Cleveland, Parma, Akron, and 50+ surrounding cities.",
  },
  alternates: {
    canonical: "https://margusappliance.com/service-areas",
  },
};

const serviceAreasSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://margusappliance.com/#organization",
  name: "Margus Appliance",
  url: "https://margusappliance.com/service-areas",
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  description:
    "Certified appliance repair company serving Cleveland and 57+ cities across Northeast Ohio.",
  areaServed: ALL_SERVICE_AREAS.map((area) => ({
    "@type": "City",
    name: area.name,
  })),
  serviceType: "Appliance Repair",
  priceRange: "$$",
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreasSchema) }}
      />
      <PageHero
        src="/service-hero.jpg"
        alt="Appliance repair service areas in Cleveland and Parma"
        heading="Appliance Repair Service Areas Near Cleveland"
      />
      <ServiceAreasSection />
      <Blogs />
      <CTABanner />
    </>
  );
}
