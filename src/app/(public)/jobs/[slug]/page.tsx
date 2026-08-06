import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { RECENT_JOBS } from "@/content/recent-jobs";
import { JobDetailHero } from "@/sections/jobs/JobDetailHero";
import { JobDetailContent } from "@/sections/jobs/JobDetailContent";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";
import { CONTACT_INFO } from "@/constants";

type Props = { params: Promise<{ slug: string }> };

function toISODate(dateStr: string): string {
  const [day, month, year] = dateStr.split(".");
  return `${year}-${month}-${day}T00:00:00Z`;
}

// Extra photos are dropped straight into public/images/recent-jobs/{id}/
// alongside cover.jpg — no data entry needed, they're picked up automatically.
function getGalleryImages(jobId: string): string[] {
  const dir = path.join(process.cwd(), "public", "images", "recent-jobs", jobId);
  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return files
    .filter((f) => !/^cover\./i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `/images/recent-jobs/${jobId}/${f}`);
}

export function generateStaticParams() {
  return RECENT_JOBS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = RECENT_JOBS.find((j) => j.slug === slug);
  if (!job) return {};

  const title =
    job.metaTitle ??
    `${job.service ?? "Appliance Repair"} in ${job.location ?? "Cleveland"}`;
  const description =
    job.metaDescription ??
    `${job.problem ? job.problem + ". " : ""}See how our certified technicians diagnosed and repaired it in ${job.location ?? "Cleveland"}, Ohio. Same-day appliance repair — call today.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://margusappliancerepair.com/jobs/${slug}`,
      type: "article",
      publishedTime: job.date ? toISODate(job.date) : undefined,
      images: [
        {
          url: job.image ?? "/og-home.jpg",
          width: 1200,
          height: 630,
          alt: job.alt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: { canonical: `https://margusappliancerepair.com/jobs/${slug}` },
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = RECENT_JOBS.find((j) => j.slug === slug);
  if (!job) notFound();

  const gallery = getGalleryImages(job.id);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://margusappliancerepair.com" },
      { "@type": "ListItem", position: 2, name: "Recent Jobs", item: "https://margusappliancerepair.com/jobs" },
      {
        "@type": "ListItem",
        position: 3,
        name: `${job.service ?? "Appliance Repair"} in ${job.location ?? "Cleveland"}`,
        item: `https://margusappliancerepair.com/jobs/${job.slug}`,
      },
    ],
  };

  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${job.service ?? "Appliance Repair"} in ${job.location ?? "Cleveland"}`,
    description: job.problem ?? "Certified appliance repair by Margus Appliance.",
    datePublished: job.date ? toISODate(job.date) : undefined,
    image: job.image ? `https://margusappliancerepair.com${job.image}` : "https://margusappliancerepair.com/og-home.jpg",
    author: {
      "@type": "Organization",
      "@id": "https://margusappliancerepair.com/#organization",
      name: "Margus Appliance",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://margusappliancerepair.com/#organization",
      name: "Margus Appliance",
      logo: {
        "@type": "ImageObject",
        url: "https://margusappliancerepair.com/logo.png",
      },
    },
    about: {
      "@type": "Service",
      name: job.service ?? "Appliance Repair",
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://margusappliancerepair.com/#organization",
        name: "Margus Appliance",
        telephone: CONTACT_INFO.phone,
      },
      areaServed: { "@type": "City", name: job.location ?? "Cleveland" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="hidden lg:block">
        <JobDetailHero
          problem={job.problem}
          service={job.service}
          location={job.location}
          heroTitle={job.heroTitle}
          badges={job.badges}
        />
      </div>
      <JobDetailContent job={job} gallery={gallery} />
      <Blogs />
      <CTABanner />
    </>
  );
}
