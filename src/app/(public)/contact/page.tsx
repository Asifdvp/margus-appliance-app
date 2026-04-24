import type { Metadata } from "next";
import { ContactSection } from "@/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Margus Appliance",
  description: "Get in touch with Margus Appliance",
};

export default function ContactPage() {
  return <ContactSection />;
}
