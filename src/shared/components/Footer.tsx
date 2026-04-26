import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE_NAME, CONTACT_INFO } from "@/constants";
import { Container } from "@/shared/layout/Container";
import { cn } from "@/shared/lib/utils";
import FacebookIcon from "@/shared/icons/facebook.svg";
import XIcon from "@/shared/icons/x-twitter.svg";
import LinkedInIcon from "@/shared/icons/linkedin.svg";
import InstagramIcon from "@/shared/icons/instagram.svg";

interface FooterProps {
  className?: string;
}

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com/margusappliance", Icon: FacebookIcon },
  { label: "X (Twitter)", href: "https://x.com/margusappliance", Icon: XIcon },
  { label: "LinkedIn", href: "https://linkedin.com/company/margusappliance", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://instagram.com/margusappliance", Icon: InstagramIcon },
];

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-brand text-white", className)}>
      <Container>
        {/* Top row: Logo + Nav links */}
        <div className="flex flex-col items-center gap-8 py-10 md:flex-row md:items-center md:justify-between md:py-12">
          <Link href="/" aria-label="Margus Appliance – Go to homepage">
            <Image
              src="/logo.png"
              alt="Margus Appliance logo"
              width={140}
              height={90}
              className="h-auto w-[120px] object-contain"
            />
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] font-semibold text-white/80 transition-colors hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="border-white/20" />

        {/* Bottom row: Contact info + Social links */}
        <div className="flex flex-col items-center gap-6 py-8 md:flex-row md:items-start md:justify-between">
          <address className="flex flex-col items-center gap-1 not-italic md:items-start">
            <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/50">
              Contact {SITE_NAME}
            </span>
            <a
              href={CONTACT_INFO.phoneHref}
              className="text-[15px] font-medium transition-colors hover:text-white/70 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {CONTACT_INFO.phone}
            </a>
            <a
              href={CONTACT_INFO.emailHref}
              className="text-[15px] font-medium transition-colors hover:text-white/70 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {CONTACT_INFO.email}
            </a>
          </address>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Follow Us
            </span>
            <ul className="flex items-center gap-2" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Margus Appliance on ${label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
