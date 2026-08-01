import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Recent Jobs", href: "/jobs" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SITE_NAME = "Margus Appliance";
export const SITE_DESCRIPTION = "Professional appliance services and solutions";

export const CONTACT_INFO = {
  phone: "(216) 304-0665",
  phoneHref: "tel:+12163040665",
  email: "margusappliance@gmail.com",
  emailHref: "mailto:margusappliance@gmail.com",
} as const;

export const ADDRESS = {
  street: "6520 Broadview Rd",
  city: "Parma",
  state: "OH",
  zip: "44134",
  full: "6520 Broadview Rd, Parma, OH 44134",
  mapsHref: "https://maps.app.goo.gl/iCp4nBpYsp52zUmG7",
} as const;
