import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "All Jobs", href: "/jobs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SITE_NAME = "Margus Appliance";
export const SITE_DESCRIPTION = "Professional appliance services and solutions";

export const CONTACT_INFO = {
  phone: "+789 458 78 78",
  phoneHref: "tel:+78945787878",
  email: "info@margusappliance.com",
  emailHref: "mailto:info@margusappliance.com",
} as const;
