import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { blogPosts } from "@/content/blog";
import { RECENT_JOBS } from "@/content/recent-jobs";
import { brands } from "@/content/brands";
import { SITE_URL as BASE_URL } from "@/shared/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/jobs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/service-areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/brands`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(
      post.date.split(".").reverse().join("-")
    ),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const jobPages: MetadataRoute.Sitemap = RECENT_JOBS.map((job) => ({
    url: `${BASE_URL}/jobs/${job.slug}`,
    lastModified: job.date
      ? new Date(job.date.split(".").reverse().join("-"))
      : new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  // Only brands with authored detail content have a page — see the
  // matching `dynamicParams = false` guard in brands/[slug]/page.tsx.
  const brandPages: MetadataRoute.Sitemap = brands
    .filter((b) => b.intro)
    .map((brand) => ({
      url: `${BASE_URL}/brands/${brand.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticPages, ...servicePages, ...blogPages, ...jobPages, ...brandPages];
}
