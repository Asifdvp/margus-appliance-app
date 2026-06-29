import type { Metadata } from "next";
import { AllJobsHero } from "@/sections/jobs/AllJobsHero";
import { AllJobsGrid } from "@/sections/jobs/AllJobsGrid";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";

export const metadata: Metadata = {
  title: "Completed Appliance Repair Jobs — Cleveland & Parma | Margus Appliance",
  description:
    "Browse real completed appliance repair jobs by Margus Appliance — serving Cleveland, Parma, Strongsville, Westlake, and surrounding areas. See our certified technicians' work.",
  openGraph: {
    title: "Completed Appliance Repair Jobs | Margus Appliance",
    description:
      "Real completed appliance repair jobs from certified technicians in Cleveland & Parma.",
    url: "https://margusappliance.com/jobs",
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
