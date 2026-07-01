import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { blogPosts } from "@/content/blog";
import { RECENT_JOBS } from "@/content/recent-jobs";

const BASE_URL = "https://margusappliance.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
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
    url: `${BASE_URL}/jobs/${job.id}`,
    lastModified: job.date
      ? new Date(job.date.split(".").reverse().join("-"))
      : new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticPages, ...servicePages, ...blogPages, ...jobPages];
}
