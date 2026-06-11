import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/content/services";
import { ServiceDetail } from "@/sections/services/ServiceDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Cleveland & Parma | Margus Appliance`,
    description: service.description ?? service.description,
    openGraph: {
      title: `${service.title} | Margus Appliance`,
      description: service.description,
      url: `https://margusappliance.com/services/${service.id}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Margus Appliance`,
      description: service.description,
    },
    alternates: {
      canonical: `https://margusappliance.com/services/${service.id}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
