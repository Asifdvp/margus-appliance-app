import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/shared/ui/PageHero";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { CityPageContent } from "@/sections/service-areas/CityPageContent";
import { FAQ } from "@/sections/shared/FAQ";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";
import { CONTACT_INFO } from "@/constants";
import { SERVICE_AREA_FAQS } from "@/content/service-areas";
import { SERVICE_AREA_HIGHLIGHTS } from "@/content/service-area-highlights";
import { canonicalUrl, SITE_URL } from "@/shared/lib/seo";

type Props = { params: Promise<{ slug: string }> };

// Only cities with real, authored content (a highlight blurb, usually backed
// by an actual completed job) get a page — the rest stay on the single
// /service-areas list instead of becoming thin, duplicate-content pages.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_AREA_HIGHLIGHTS.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = SERVICE_AREA_HIGHLIGHTS.find((c) => c.slug === slug);
  if (!city) return {};

  const title = `Appliance Repair in ${city.name}, OH | Same-Day Service`;
  const description = `Same-day appliance repair in ${city.name}, Ohio. Certified technicians, honest upfront pricing, and a 180-day parts & labor warranty. Call (216) 304-0665.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl(`/service-areas/${slug}`),
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `Appliance repair in ${city.name}, Ohio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@margusappliance",
      title,
      description,
    },
    alternates: { canonical: canonicalUrl(`/service-areas/${slug}`) },
  };
}

export default async function CityServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const city = SERVICE_AREA_HIGHLIGHTS.find((c) => c.slug === slug);
  if (!city) notFound();

  const nearbyCities = SERVICE_AREA_HIGHLIGHTS.filter((c) => c.slug !== slug).slice(0, 6);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://margusappliancerepair.com/#organization",
    name: "Margus Appliance",
    url: canonicalUrl(`/service-areas/${slug}`),
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    description: `Certified appliance repair serving ${city.name}, Ohio — same-day service, honest upfront pricing, 180-day parts & labor warranty.`,
    areaServed: { "@type": "City", name: city.name },
    serviceType: "Appliance Repair",
    priceRange: "$$",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/service-areas` },
      {
        "@type": "ListItem",
        position: 3,
        name: `${city.name} Appliance Repair`,
        item: canonicalUrl(`/service-areas/${slug}`),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        src="/service-hero.webp"
        alt={`Appliance repair in ${city.name}, Ohio`}
        heading={`Appliance Repair in ${city.name}, Ohio`}
        eyebrow="Same-Day Service"
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: city.name },
        ]}
      />
      <CityPageContent city={city} nearbyCities={nearbyCities} />
      <FAQ items={SERVICE_AREA_FAQS} heading={`${city.name} Service Questions`} />
      <Blogs />
      <CTABanner />
    </>
  );
}
