import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://margusappliancerepair.com/sitemap.xml",
    host: "https://margusappliancerepair.com",
  };
}
