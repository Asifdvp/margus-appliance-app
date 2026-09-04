import type { Metadata } from "next";
import { PageHero } from "@/shared/ui/PageHero";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { ServiceAreasSection } from "@/sections/service-areas/ServiceAreasSection";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";
import { CONTACT_INFO } from "@/constants";
import { ALL_SERVICE_AREAS } from "@/content/service-areas";
import { canonicalUrl } from "@/shared/lib/seo";

export const metadata: Metadata = {
  title: "Appliance Repair Service Areas — Cleveland, Parma & Surrounding Cities",
  description:
    "Margus Appliance serves Cleveland, Parma, Akron, Strongsville, Westlake, and 50+ surrounding cities. Same-day repair, certified technicians.",
  openGraph: {
    title: "Appliance Repair Service Areas | Margus Appliance",
    description:
      "Same-day appliance repair in Cleveland, Parma, Akron, Strongsville, Westlake, and 50+ surrounding cities.",
    url: canonicalUrl("/service-areas"),
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Margus Appliance service areas around Cleveland, Ohio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@margusappliance",
    title: "Appliance Repair Service Areas | Margus Appliance",
    description:
      "Same-day appliance repair in Cleveland, Parma, Akron, and 50+ surrounding cities.",
  },
  alternates: {
    canonical: canonicalUrl("/service-areas"),
  },
};

const serviceAreasSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://margusappliancerepair.com/#organization",
  name: "Margus Appliance",
  url: "https://margusappliancerepair.com/service-areas",
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
      name: "Service Areas",
      item: "https://margusappliancerepair.com/service-areas",
    },
  ],
};

const areasListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: ALL_SERVICE_AREAS.map((area, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: area.name,
  })),
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreasSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areasListSchema) }}
      />
      <PageHero
        src="/service-hero.webp"
        alt="Appliance repair service areas in Cleveland and Parma"
        heading="Appliance Repair Service Areas Near Cleveland"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />
      <ServiceAreasSection />
      <Blogs />
      <CTABanner />
    </>
  );
}
