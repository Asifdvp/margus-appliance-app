import type { Metadata } from "next";
import { AllJobsHero } from "@/sections/jobs/AllJobsHero";
import { AllJobsGrid } from "@/sections/jobs/AllJobsGrid";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";
import { RECENT_JOBS } from "@/content/recent-jobs";
import { canonicalUrl } from "@/shared/lib/seo";

export const metadata: Metadata = {
  title: "Completed Appliance Repair Jobs — Cleveland & Parma",
  description:
    "Browse real completed appliance repair jobs by Margus Appliance in Cleveland, Parma & Greater Cleveland. See our certified technicians' work.",
  openGraph: {
    title: "Completed Appliance Repair Jobs | Margus Appliance",
    description:
      "Real completed appliance repair jobs from certified technicians in Cleveland & Parma.",
    url: canonicalUrl("/jobs"),
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Completed appliance repair jobs by Margus Appliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Completed Appliance Repair Jobs | Margus Appliance",
    description:
      "Real completed appliance repair jobs from certified technicians in Cleveland & Parma.",
  },
  alternates: {
    canonical: canonicalUrl("/jobs"),
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
      name: "Recent Jobs",
      item: "https://margusappliancerepair.com/jobs",
    },
  ],
};

const jobsListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: RECENT_JOBS.map((job, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${job.service ?? "Appliance Repair"} in ${job.location ?? "Cleveland"}`,
    url: `https://margusappliancerepair.com/jobs/${job.slug}`,
  })),
};

export default function AllJobsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobsListSchema) }}
      />
      <AllJobsHero />
      <AllJobsGrid />
      <Blogs />
      <CTABanner />
    </>
  );
}
