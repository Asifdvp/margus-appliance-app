import type { Metadata } from "next";
import { PageHero } from "@/shared/ui/PageHero";
import { ContactSection } from "@/sections/contact/ContactSection";
import { CONTACT_INFO } from "@/constants";

export const metadata: Metadata = {
  title: "Contact Us — Book Same-Day Appliance Repair in Cleveland",
  description:
    "Contact Margus Appliance for same-day appliance repair in Cleveland, Parma, and surrounding areas. Call (216) 304-0665 or send a message — we respond fast.",
  openGraph: {
    title: "Contact Margus Appliance — Same-Day Appliance Repair",
    description:
      "Get in touch with Margus Appliance for fast, reliable appliance repair in Cleveland & Parma. Call or send a message.",
    url: "https://margusappliance.com/contact",
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Margus Appliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Margus Appliance — Same-Day Appliance Repair",
    description:
      "Book same-day appliance repair in Cleveland & Parma. Call or message us.",
  },
  alternates: {
    canonical: "https://margusappliance.com/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Margus Appliance",
  url: "https://margusappliance.com/contact",
  description:
    "Contact page for Margus Appliance — certified appliance repair in Cleveland, Parma, and surrounding areas.",
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": "https://margusappliance.com/#organization",
    name: "Margus Appliance",
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    url: "https://margusappliance.com",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <PageHero
        src="/service-hero.jpg"
        alt="Contact Margus Appliance for appliance repair services"
        heading="Contact Us"
      />
      <ContactSection />
    </>
  );
}
