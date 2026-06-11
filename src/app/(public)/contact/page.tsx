import type { Metadata } from "next";
import { PageHero } from "@/shared/ui/PageHero";
import { ContactSection } from "@/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Margus Appliance",
  description:
    "Contact Margus Appliance for same-day appliance repair in Cleveland, Parma, and surrounding areas. Call us or send a message.",
  openGraph: {
    title: "Contact Us | Margus Appliance",
    description:
      "Get in touch with Margus Appliance for fast, reliable appliance repair in Cleveland & Parma.",
    url: "https://margusappliance.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://margusappliance.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        src="/service-hero.jpg"
        alt="Contact Margus Appliance for appliance repair services"
        heading="Contact Us"
      />
      <ContactSection />
    </>
  );
}
