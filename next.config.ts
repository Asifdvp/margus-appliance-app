import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.margusappliancerepair.com" }],
        destination: "https://margusappliancerepair.com/:path*",
        permanent: true,
      },
      // GSC reported Googlebot still requesting this old URL (404). The
      // job's id is "job-4" but its route is built from its slug, so
      // /jobs/job-4 never resolved. Send it to the job's real current URL.
      {
        source: "/jobs/job-4",
        destination: "/jobs/oven-repair-parma",
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  allowedDevOrigins: ["192.168.83.112", "192.168.83.107"],
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
