import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/content/services";
import { ServiceDetail } from "@/sections/services/ServiceDetail";
import { CONTACT_INFO } from "@/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) return {};
  const title =
    service.metaTitle ?? `${service.title} in Cleveland & Parma`;
  const description = service.metaDescription ?? service.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://margusappliancerepair.com/services/${service.id}`,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${service.title} — Margus Appliance`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://margusappliancerepair.com/services/${service.id}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `https://margusappliancerepair.com/services/${service.id}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://margusappliancerepair.com/#organization",
      name: "Margus Appliance",
      telephone: CONTACT_INFO.phone,
      url: "https://margusappliancerepair.com",
    },
    areaServed: [
      { "@type": "City", name: "Cleveland" },
      { "@type": "City", name: "Parma" },
      { "@type": "City", name: "Strongsville" },
      { "@type": "City", name: "Westlake" },
      { "@type": "City", name: "Brunswick" },
      { "@type": "City", name: "Berea" },
    ],
    serviceType: service.title,
  };

  const faqSchema = service.faqs && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
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
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://margusappliancerepair.com/services/${service.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ServiceDetail service={service} />
    </>
  );
}
