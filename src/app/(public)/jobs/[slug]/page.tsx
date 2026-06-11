import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { RECENT_JOBS } from "@/content/recent-jobs";
import { JobDetailHero } from "@/sections/jobs/JobDetailHero";
import { JobDetailContent } from "@/sections/jobs/JobDetailContent";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return RECENT_JOBS.map((job) => ({ slug: job.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = RECENT_JOBS.find((j) => j.id === slug);
  if (!job) return {};

  return {
    title: `${job.service ?? "Appliance Repair"} — ${job.location ?? "Cleveland"} | Margus Appliance`,
    description: job.problem ?? "Certified appliance repair by Margus Appliance.",
    alternates: { canonical: `https://margusappliance.com/jobs/${slug}` },
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = RECENT_JOBS.find((j) => j.id === slug);
  if (!job) notFound();

  return (
    <>
      <div className="hidden lg:block">
        <JobDetailHero problem={job.problem} image={job.image} alt={job.alt} />
      </div>
      <JobDetailContent job={job} />
      <Blogs />
      <CTABanner />
    </>
  );
}
