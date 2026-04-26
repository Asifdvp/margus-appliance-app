"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import { Container } from "@/shared/layout/Container";
import PhoneIcon from "@/shared/icons/phone.svg";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[linear-gradient(99.72deg,#F8F7FF_0%,#E2F4FB_100%)] pb-1">
      <Container>
        <nav className="flex pt-4 md:pt-[27px] items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Margus Appliance – Home" className="relative block h-[40px] w-[70px] md:h-19 md:w-35">
            <Image
              src="/logo.png"
              alt="Margus Appliance logo"
              width={140}
              height={90}
              priority
              className="md:absolute md:-top-1.75 h-[40px] md:h-22.5 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center  md:py-[14px] ">
            {NAV_LINKS.map((link) => (
              <li key={link.href} >
                <Link
                  href={link.href}
                  className="block py-3 px-6 text-[16px] font-semibold leading-6 text-black transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop phone button + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+1234567890"
              className="hidden md:inline-flex items-center gap-0.5 rounded-xl bg-brand px-5 py-3 text-[16px] font-semibold leading-6 text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <PhoneIcon />
              +1 (234) 567-890
            </a>

            <button
              className="md:hidden flex flex-col justify-center items-center w-6 h-6 gap-[7px] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
            >
              <span
                className={`block h-0.5 w-full bg-black transition-transform duration-300 ${open ? "translate-y-[9px] rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-black transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-black transition-transform duration-300 ${open ? "-translate-y-[9px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/[.08] bg-[linear-gradient(99.72deg,#F8F7FF_0%,#E2F4FB_100%)]">
          <Container>
            <ul className="flex flex-col py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[16px] font-semibold leading-6 text-black transition-colors hover:text-black/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-0.5 w-full rounded-xl bg-brand px-5 py-3 mb-4 text-[16px] font-semibold leading-6 text-white transition-colors hover:bg-brand/90"
            >
              <PhoneIcon />
              +1 (234) 567-890
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
