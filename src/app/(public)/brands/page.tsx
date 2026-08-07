import type { Metadata } from "next";
import { PageHero } from "@/shared/ui/PageHero";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { BrandsList } from "@/sections/brands/BrandsList";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";
import { brands } from "@/content/brands";
import { canonicalUrl } from "@/shared/lib/seo";

export const metadata: Metadata = {
  title: "Appliance Brands We Repair — Whirlpool, Samsung, LG & More",
  description:
    "Margus Appliance repairs all major brands — Whirlpool, Samsung, LG, GE, Bosch, KitchenAid, and more. Certified technicians in Cleveland & Parma.",
  openGraph: {
    title: "Appliance Brands We Repair | Margus Appliance",
    description:
      "Certified repair for all major brands — Whirlpool, Samsung, LG, GE, Bosch, KitchenAid, Maytag, and more. Serving Cleveland & Parma.",
    url: canonicalUrl("/brands"),
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Appliance brands repaired by Margus Appliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Brands We Repair | Margus Appliance",
    description:
      "Certified repair for Whirlpool, Samsung, LG, GE, Bosch, and more in Cleveland & Parma.",
  },
  alternates: {
    canonical: canonicalUrl("/brands"),
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
      name: "Brands",
      item: "https://margusappliancerepair.com/brands",
    },
  ],
};

const brandsListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: brands.map((brand, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: brand.name,
    url: `https://margusappliancerepair.com/brands/${brand.id}`,
  })),
};

export default function BrandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandsListSchema) }}
      />
      <PageHero
        src="/service-hero.jpg"
        alt="Appliance brands repaired by Margus Appliance technicians"
        heading="Appliance Brands We Repair"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Brands" }]} />
      <BrandsList />
      <Blogs />
      <CTABanner />
    </>
  );
}
