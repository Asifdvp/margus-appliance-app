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
  {
    label: "Facebook",
    href: "https://facebook.com/margusappliance",
    Icon: FacebookIcon,
  },
  { label: "X (Twitter)", href: "https://x.com/margusappliance", Icon: XIcon },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/margusappliance",
    Icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/margusappliance",
    Icon: InstagramIcon,
  },
];

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn("pt-8 pb-14 md:p-5", className)}
      style={{ background: "linear-gradient(99.72deg, #F8F7FF 0%, #E2F4FB 100%)" }}
    >
      <Container>
        <div className="flex flex-col items-center gap-4 mb-4 md:mb-3 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label="Margus Appliance – Go to homepage">
            <Image
              src="/logo.png"
              alt="Margus Appliance logo"
              width={160}
              height={90}
              className="h-auto w-40 object-contain"
            />
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-10.5 md:gap-x-14.5 gap-y-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base leading-6 md:text-[18px] md:leading-7 font-normal text-[#141414] transition-colors hover:text-dark/70 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark font-manrope"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="hidden md:block border-[#141414]/15" />

        <div className="flex flex-col items-center gap-8 py-8 md:flex-row md:items-start md:justify-between">
          <address className="flex flex-col items-center gap-1 not-italic md:items-start">
            <span className="mb-2 md:mb-3 text-sm leading-5.5 font-semibold tracking-widest text-[#141414]/60">
              Contact {SITE_NAME}
            </span>
            <a
              href={CONTACT_INFO.phoneHref}
              className="text-base leading-6 md:text-[20px] md:leading-7.5 font-normal text-[#141414] transition-colors hover:text-dark/70 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark"
            >
              {CONTACT_INFO.phone}
            </a>
            <a
              href={CONTACT_INFO.emailHref}
              className="text-base leading-6 md:text-[20px] md:leading-7.5 font-normal text-[#141414] transition-colors hover:text-dark/70 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark"
            >
              {CONTACT_INFO.email}
            </a>
          </address>

          <div className="flex flex-col items-center gap-5 md:items-end">
            <span className="text-sm leading-5.5 font-manrope tracking-widest text-[#141414]/60">
              Follow Us
            </span>
            <ul
              className="flex items-center gap-10 md:gap-6"
              aria-label="Social media links"
            >
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Margus Appliance on ${label}`}
                    className="flex h-5.25 w-4.5 md:w-4 md:h-4.5 text-[#141414] transition-colors hover:text-dark/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark"
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
