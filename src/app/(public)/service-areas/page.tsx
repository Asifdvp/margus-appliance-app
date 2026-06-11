import type { Metadata } from "next";
import { PageHero } from "@/shared/ui/PageHero";
import { ServiceAreasSection } from "@/sections/service-areas/ServiceAreasSection";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";

export const metadata: Metadata = {
  title: "Appliance Repair Service Areas — Cleveland & Parma | Margus Appliance",
  description:
    "Margus Appliance serves Cleveland, Parma, Strongsville, Westlake, Brunswick, and surrounding areas. Same-day appliance repair with certified technicians.",
  openGraph: {
    title: "Appliance Repair Service Areas | Margus Appliance",
    description:
      "Same-day appliance repair in Cleveland, Parma, Strongsville, Westlake, and surrounding areas.",
    url: "https://margusappliance.com/service-areas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Repair Service Areas | Margus Appliance",
    description:
      "Same-day appliance repair in Cleveland, Parma, and surrounding areas.",
  },
  alternates: {
    canonical: "https://margusappliance.com/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        src="/service-hero.jpg"
        alt="Appliance repair service areas in Cleveland and Parma"
        heading="Appliance Repair Service Areas Near Cleveland"
      />
      <ServiceAreasSection />
      <Blogs />
      <CTABanner />
    </>
  );
}
