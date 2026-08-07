import type { Metadata } from "next";
import { ServicesHero } from "@/sections/services/ServicesHero";
import { ServicesList } from "@/sections/services/ServicesList";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";
import { FAQ } from "@/sections/shared/FAQ";
import { SERVICES } from "@/content/services";
import { faqs } from "@/content/faq";
import { canonicalUrl } from "@/shared/lib/seo";

export const metadata: Metadata = {
  title: "Appliance Repair Services in Cleveland & Parma, OH",
  description:
    "Same-day appliance repair in Cleveland & Parma, OH. Refrigerators, washers, dryers, ovens & more. Honest pricing, 180-day warranty. Call (216) 304-0665.",
  openGraph: {
    title: "Appliance Repair Services in Cleveland & Parma, OH | Margus",
    description:
      "Same-day appliance repair in Cleveland & Parma, OH. Refrigerators, washers, dryers, ovens & more. Honest pricing, 180-day warranty. Call (216) 304-0665.",
    url: canonicalUrl("/services"),
    type: "website",
    images: [
      {
        url: "https://margusappliancerepair.com/images/services/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Margus Appliance repair services in Cleveland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Repair Services in Cleveland & Parma, OH | Margus",
    description:
      "Same-day appliance repair in Cleveland & Parma, OH. Refrigerators, washers, dryers, ovens & more. Honest pricing, 180-day warranty.",
  },
  alternates: {
    canonical: canonicalUrl("/services"),
  },
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
      name: "Services",
      item: "https://margusappliancerepair.com/services",
    },
  ],
};

const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: service.title,
    url: `https://margusappliancerepair.com/services/${service.id}`,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicesHero />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <ServicesList />
      <FAQ />
      <Blogs />
      <CTABanner />
    </>
  );
}
