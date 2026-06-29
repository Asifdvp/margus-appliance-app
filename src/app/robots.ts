import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://margusappliance.com/sitemap.xml",
    host: "https://margusappliance.com",
  };
}
