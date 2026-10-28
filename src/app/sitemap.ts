import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { blogPosts } from "@/content/blog";
import { RECENT_JOBS } from "@/content/recent-jobs";
import { brands } from "@/content/brands";
import { SERVICE_AREA_HIGHLIGHTS } from "@/content/service-area-highlights";
import { SITE_URL as BASE_URL } from "@/shared/lib/seo";

// lastModified is intentionally omitted below wherever there's no real
// per-item content date to report — a build-time `new Date()` for every
// entry is indistinguishable from a fake "everything just changed" signal
// (see commit history for the bug this replaced). blogPages/jobPages have
// real per-post/per-job dates, so those keep lastModified.

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/jobs`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/service-areas`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/brands`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms-of-service`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/sitemap`, changeFrequency: "monthly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.id}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date.split(".").reverse().join("-")),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const jobPages: MetadataRoute.Sitemap = RECENT_JOBS.map((job) => ({
    url: `${BASE_URL}/jobs/${job.slug}`,
    ...(job.date
      ? { lastModified: new Date(job.date.split(".").reverse().join("-")) }
      : {}),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  // Only brands with authored detail content have a page — see the
  // matching `dynamicParams = false` guard in brands/[slug]/page.tsx.
  const brandPages: MetadataRoute.Sitemap = brands
    .filter((b) => b.intro)
    .map((brand) => ({
      url: `${BASE_URL}/brands/${brand.id}`,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const cityPages: MetadataRoute.Sitemap = SERVICE_AREA_HIGHLIGHTS.map((city) => ({
    url: `${BASE_URL}/service-areas/${city.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages, ...jobPages, ...brandPages, ...cityPages];
}
