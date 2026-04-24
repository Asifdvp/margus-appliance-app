import type { Metadata } from "next";
import { ServicesList } from "@/sections/services/ServicesList";

export const metadata: Metadata = {
  title: "Services | Margus Appliance",
  description: "Explore our professional appliance services",
};

export default function ServicesPage() {
  return <ServicesList />;
}
