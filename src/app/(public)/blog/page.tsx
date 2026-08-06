import type { Metadata } from "next";
import { BlogHero } from "@/sections/blog/BlogHero";
import { BlogList } from "@/sections/blog/BlogList";
import { CTABanner } from "@/sections/shared/CTABanner";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Appliance Repair Tips & Expert Guides",
  description:
    "Practical appliance repair guides, troubleshooting tips, and expert advice from Margus Appliance — serving Cleveland, Parma, and surrounding areas.",
  openGraph: {
    title: "Appliance Repair Tips & Expert Guides | Margus Appliance",
    description:
      "Troubleshooting tips and repair guides from certified appliance technicians in Cleveland & Parma.",
    url: "https://margusappliancerepair.com/blog",
    type: "website",
    images: [
      {
        url: "https://margusappliancerepair.com/images/blog/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Appliance repair guides by Margus Appliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Repair Tips & Expert Guides | Margus Appliance",
    description:
      "Practical repair guides from certified technicians in Cleveland & Parma.",
  },
  alternates: {
    canonical: "https://margusappliancerepair.com/blog",
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
      name: "Blog",
      item: "https://margusappliancerepair.com/blog",
    },
  ],
};

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: blogPosts.map((post, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: post.title,
    url: `https://margusappliancerepair.com/blog/${post.slug}`,
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <BlogHero />
      <BlogList />
      <CTABanner />
    </>
  );
}
