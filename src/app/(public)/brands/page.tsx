import type { Metadata } from "next";
import { BrandsList } from "@/sections/brands/BrandsList";

export const metadata: Metadata = {
  title: "Appliance Brands We Repair — Whirlpool, Samsung, LG & More",
  description:
    "Margus Appliance repairs all major appliance brands including Whirlpool, Samsung, LG, GE, Bosch, KitchenAid, Maytag, and more. Certified technicians in Cleveland & Parma.",
  openGraph: {
    title: "Appliance Brands We Repair | Margus Appliance",
    description:
      "Certified repair for all major brands — Whirlpool, Samsung, LG, GE, Bosch, KitchenAid, Maytag, and more. Serving Cleveland & Parma.",
    url: "https://margusappliance.com/brands",
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Appliance brands repaired by Margus Appliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Brands We Repair | Margus Appliance",
    description:
      "Certified repair for Whirlpool, Samsung, LG, GE, Bosch, and more in Cleveland & Parma.",
  },
  alternates: {
    canonical: "https://margusappliance.com/brands",
  },
};

export default function BrandsPage() {
  return <BrandsList />;
}
