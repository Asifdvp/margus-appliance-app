import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brands } from "@/content/brands";
import { BrandDetail } from "@/sections/brands/BrandDetail";
import { CONTACT_INFO } from "@/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.id === slug);
  if (!brand) return {};
  const title =
    brand.metaTitle ??
    `${brand.name} Appliance Repair in Cleveland & Parma | Margus Appliance`;
  const description =
    brand.metaDescription ??
    brand.description ??
    `Certified ${brand.name} appliance repair in Cleveland & Parma, OH. Same-day service, honest upfront pricing, 180-day parts & labor warranty. Call today!`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://margusappliancerepair.com/brands/${brand.id}`,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${brand.name} appliance repair — Margus Appliance`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://margusappliancerepair.com/brands/${brand.id}`,
    },
  };
}

export default async function BrandDetailPage({ params }: Props) {
  const { slug } = await params;
  const brand = brands.find((b) => b.id === slug);
  if (!brand) notFound();

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${brand.name} Appliance Repair`,
    description:
      brand.description ??
      `Certified ${brand.name} appliance repair in Cleveland & Parma, OH.`,
    brand: { "@type": "Brand", name: brand.name },
    url: `https://margusappliancerepair.com/brands/${brand.id}`,
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
    ],
    serviceType: "Appliance Repair",
  };

  const faqSchema = brand.faqs && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: brand.faqs.map((f) => ({
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
        name: "Brands",
        item: "https://margusappliancerepair.com/brands",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brand.name,
        item: `https://margusappliancerepair.com/brands/${brand.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
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
      <BrandDetail brand={brand} />
    </>
  );
}
