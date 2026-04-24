import type { Metadata } from "next";
import { BrandsList } from "@/sections/brands/BrandsList";

export const metadata: Metadata = {
  title: "Brands | Margus Appliance",
  description: "Brands we work with at Margus Appliance",
};

export default function BrandsPage() {
  return <BrandsList />;
}
