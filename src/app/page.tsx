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
import { canonicalUrl, SITE_URL } from "@/shared/lib/seo";
import { getRatingSummary } from "@/shared/lib/googleReviews";

export async function generateMetadata(): Promise<Metadata> {
  const { rating, reviewCount } = await getRatingSummary();
  const description = `Same-day appliance repair in Cleveland & Parma, OH — ${rating.toFixed(1)}★ (${reviewCount} Google reviews). Honest, upfront pricing. 180-day warranty. Call (216) 304-0665.`;
  const shortDescription = `Same-day appliance repair in Cleveland & Parma, OH — ${rating.toFixed(1)}★ (${reviewCount} Google reviews). Honest, upfront pricing. 180-day warranty.`;

  return {
    description,
    openGraph: {
      title: "Appliance Repair Cleveland & Parma, OH | Margus",
      description,
      url: canonicalUrl("/"),
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Margus Appliance — Expert Appliance Repair in Cleveland & Parma",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@margusappliance",
      title: "Appliance Repair Cleveland & Parma, OH | Margus",
      description: shortDescription,
    },
  };
}

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
    <>
      {/* Next.js's metadata API always collapses a root-path canonical to
          the bare origin (no trailing slash), so it's rendered manually here
          to match the homepage's real URL. */}
      <link rel="canonical" href={`${SITE_URL}/`} />
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
    </>
  );
}
