import type { Metadata } from "next";
import { Hero } from "@/sections/home/hero";
import { Services } from "@/sections/home/Services";
import { ServiceAreas } from "@/sections/home/ServiceAreas";
import { Brands } from "@/sections/home/Brands";
import { RecentJobs } from "@/sections/home/RecentJobs";
import { Testimonials } from "@/sections/home/Testimonials";
import { FAQ } from "@/sections/shared/FAQ";
import { faqs } from "@/content/faq";
import { Blogs } from "@/sections/shared/Blogs";
import CompanyInfo from "@/sections/home/companyInfo";
import { canonicalUrl } from "@/shared/lib/seo";

export const metadata: Metadata = {
  description:
    "Same-day appliance repair in Cleveland & Parma, OH — 4.9★ (184 Google reviews). Honest, upfront pricing. 180-day warranty. Call (216) 304-0665.",
  openGraph: {
    title: "Appliance Repair Cleveland & Parma, OH | Margus",
    description:
      "Same-day appliance repair in Cleveland & Parma, OH — 4.9★ (184 Google reviews). Honest, upfront pricing. 180-day warranty. Call (216) 304-0665.",
    url: canonicalUrl("/"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Repair Cleveland & Parma, OH | Margus",
    description:
      "Same-day appliance repair in Cleveland & Parma, OH — 4.9★ (184 Google reviews). Honest, upfront pricing. 180-day warranty.",
  },
  alternates: {
    canonical: canonicalUrl("/"),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <CompanyInfo />
      {/* <Stats /> */}
      <Brands />
      <Services />
      <ServiceAreas />
      {/* <Steps /> */}
      <RecentJobs />
      <Blogs />
      <Testimonials />
      <FAQ />
      {/* <FloatingCTA /> */}
    </main>
  );
}
