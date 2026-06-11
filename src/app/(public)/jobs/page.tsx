import type { Metadata } from "next";
import { AllJobsHero } from "@/sections/jobs/AllJobsHero";
import { AllJobsGrid } from "@/sections/jobs/AllJobsGrid";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";

export const metadata: Metadata = {
  title: "All Jobs Done | Margus Appliance",
  description:
    "Browse completed appliance repair jobs by Margus Appliance — serving Cleveland, Parma, and surrounding areas.",
  openGraph: {
    title: "All Jobs Done | Margus Appliance",
    description:
      "Real completed appliance repair jobs from certified technicians in Cleveland & Parma.",
    url: "https://margusappliance.com/jobs",
    type: "website",
  },
  alternates: {
    canonical: "https://margusappliance.com/jobs",
  },
};

export default function AllJobsPage() {
  return (
    <>
      <AllJobsHero />
      <AllJobsGrid />
      <Blogs />
      <CTABanner />
    </>
  );
}
