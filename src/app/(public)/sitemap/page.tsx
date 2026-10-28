import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/shared/layout/Container";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { SERVICES } from "@/content/services";
import { SERVICE_AREA_HIGHLIGHTS } from "@/content/service-area-highlights";
import { RECENT_JOBS } from "@/content/recent-jobs";
import { blogPosts } from "@/content/blog";
import { brands } from "@/content/brands";
import { canonicalUrl } from "@/shared/lib/seo";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every page on the Margus Appliance Repair website, grouped by section.",
  alternates: { canonical: canonicalUrl("/sitemap") },
  robots: { index: true, follow: true },
};

type LinkItem = { label: string; href: string };

function LinkGroup({ heading, items }: { heading: string; items: LinkItem[] }) {
  return (
    <div>
      <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mb-3">
        {heading}
      </h2>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="font-manrope text-sm lg:text-base text-secondary hover:text-brand hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteMapPage() {
  const pages: LinkItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Services", href: "/services" },
    { label: "Recent Jobs", href: "/jobs" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Blog", href: "/blog" },
    { label: "Brands We Repair", href: "/brands" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  const servicePages: LinkItem[] = SERVICES.map((s) => ({ label: s.title, href: s.href }));

  const cityPages: LinkItem[] = SERVICE_AREA_HIGHLIGHTS.map((c) => ({
    label: `${c.name} Appliance Repair`,
    href: `/service-areas/${c.slug}`,
  }));

  const jobPages: LinkItem[] = RECENT_JOBS.map((j) => ({
    label: j.heroTitle ?? `${j.service ?? "Appliance Repair"} in ${j.location ?? "Cleveland"}`,
    href: `/jobs/${j.slug}`,
  }));

  const blogPages: LinkItem[] = blogPosts.map((p) => ({ label: p.title, href: `/blog/${p.slug}` }));

  const brandPages: LinkItem[] = brands
    .filter((b) => b.intro)
    .map((b) => ({ label: `${b.name} Appliance Repair`, href: `/brands/${b.id}` }));

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Site Map" }]} />
      <section className="bg-white pt-4 pb-10.5 lg:py-18">
        <Container>
          <h1 className="font-work-sans font-bold text-dark text-[22px] leading-7 lg:text-[40px] lg:leading-12 mb-2">
            Site Map
          </h1>
          <p className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary mb-8 lg:mb-12 max-w-211.5">
            Every page on the Margus Appliance Repair website, in one place.
          </p>

          <div className="flex flex-col gap-8 lg:gap-12">
            <LinkGroup heading="Main Pages" items={pages} />
            <LinkGroup heading="Services" items={servicePages} />
            <LinkGroup heading="Service Areas" items={cityPages} />
            <LinkGroup heading="Recent Jobs" items={jobPages} />
            <LinkGroup heading="Blog" items={blogPages} />
            <LinkGroup heading="Brands" items={brandPages} />
          </div>
        </Container>
      </section>
    </>
  );
}
