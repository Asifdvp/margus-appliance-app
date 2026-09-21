import type { Metadata } from "next";
import { PageHero } from "@/shared/ui/PageHero";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { ServiceAreasSection } from "@/sections/service-areas/ServiceAreasSection";
import { ServiceAreaHighlights } from "@/sections/service-areas/ServiceAreaHighlights";
import { FAQ } from "@/sections/shared/FAQ";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";
import { CONTACT_INFO } from "@/constants";
import { ALL_SERVICE_AREAS } from "@/content/service-areas";
import { canonicalUrl } from "@/shared/lib/seo";

const serviceAreaFaqs = [
  {
    id: "how-fast-response",
    question: "How quickly can you get to my area?",
    answer:
      "Same-day appointments are available across our entire service area. Parma and the immediately surrounding suburbs typically get the fastest response since that's where our shop is based; farther-out cities like Akron may be scheduled a bit later in the day.",
  },
  {
    id: "travel-fee",
    question: "Do you charge extra to come outside of Parma?",
    answer:
      "No. Our $89 diagnostic fee is the same everywhere in our service area — we don't add a separate trip or travel charge, and it's waived entirely once you move forward with the repair.",
  },
  {
    id: "city-not-listed",
    question: "What if I don't see my city listed?",
    answer:
      "We cover 57+ cities across Northeast Ohio, and the map above isn't necessarily exhaustive. If your city isn't shown, call us — there's a good chance we still service your area.",
  },
  {
    id: "apartments-condos",
    question: "Do you repair appliances in apartments and condos, not just houses?",
    answer:
      "Yes. We service appliances in single-family homes, apartments, condos, and rental units throughout our coverage area, including stacked and compact laundry units common in older buildings.",
  },
  {
    id: "same-technicians-everywhere",
    question: "Do all cities get the same technicians and warranty?",
    answer:
      "Yes. Every city in our service area gets the same certified technicians, honest upfront pricing, and 180-day parts and labor warranty — location only affects scheduling, not the quality of the repair.",
  },
];

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: serviceAreaFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        src="/service-hero.webp"
        alt="Appliance repair service areas in Cleveland and Parma"
        heading="Appliance Repair Service Areas Near Cleveland"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />
      <ServiceAreasSection />
      <ServiceAreaHighlights />
      <FAQ items={serviceAreaFaqs} heading="Service Area Questions" />
      <Blogs />
      <CTABanner />
    </>
  );
}
