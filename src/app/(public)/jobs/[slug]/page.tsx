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

export function generateStaticParams() {
  return RECENT_JOBS.map((job) => ({ slug: job.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = RECENT_JOBS.find((j) => j.id === slug);
  if (!job) return {};

  const title = `${job.service ?? "Appliance Repair"} in ${job.location ?? "Cleveland"} | Margus Appliance`;
  const description = `${job.problem ? job.problem + ". " : ""}Certified appliance repair by Margus Appliance in ${job.location ?? "Cleveland"}, Ohio.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://margusappliance.com/jobs/${slug}`,
      type: "article",
      publishedTime: toISODate(job.date),
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
    alternates: { canonical: `https://margusappliance.com/jobs/${slug}` },
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = RECENT_JOBS.find((j) => j.id === slug);
  if (!job) notFound();

  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${job.service ?? "Appliance Repair"} in ${job.location ?? "Cleveland"}`,
    description: job.problem ?? "Certified appliance repair by Margus Appliance.",
    datePublished: toISODate(job.date),
    image: job.image ? `https://margusappliance.com${job.image}` : "https://margusappliance.com/og-home.jpg",
    author: {
      "@type": "Organization",
      "@id": "https://margusappliance.com/#organization",
      name: "Margus Appliance",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://margusappliance.com/#organization",
      name: "Margus Appliance",
      logo: {
        "@type": "ImageObject",
        url: "https://margusappliance.com/logo.png",
      },
    },
    about: {
      "@type": "Service",
      name: job.service ?? "Appliance Repair",
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://margusappliance.com/#organization",
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
      <div className="hidden lg:block">
        <JobDetailHero problem={job.problem} image={job.image} alt={job.alt} />
      </div>
      <JobDetailContent job={job} />
      <Blogs />
      <CTABanner />
    </>
  );
}
