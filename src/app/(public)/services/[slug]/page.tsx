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
  return {
    title: `${service.title} in Cleveland & Parma | Margus Appliance`,
    description: service.description,
    openGraph: {
      title: `${service.title} in Cleveland & Parma | Margus Appliance`,
      description: service.description,
      url: `https://margusappliance.com/services/${service.id}`,
      type: "website",
      images: [
        {
          url: "/og-home.jpg",
          width: 1200,
          height: 630,
          alt: `${service.title} — Margus Appliance`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} in Cleveland & Parma | Margus Appliance`,
      description: service.description,
    },
    alternates: {
      canonical: `https://margusappliance.com/services/${service.id}`,
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
    url: `https://margusappliance.com/services/${service.id}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://margusappliance.com/#organization",
      name: "Margus Appliance",
      telephone: CONTACT_INFO.phone,
      url: "https://margusappliance.com",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetail service={service} />
    </>
  );
}
