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
    <header className="sticky top-0 z-50 bg-main-gradient">
      <Container>
        <nav className="flex pt-4 lg:pt-6.75 items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Margus Appliance – Home" className="relative block h-10 w-17.5 lg:h-19 lg:w-35">
            <Image
              src="/logo.png"
              alt="Margus Appliance logo"
              width={140}
              height={90}
              priority
              className="lg:absolute lg:-top-1.75 h-10 lg:h-22.5 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center  lg:py-3.5 ">
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
              className="hidden lg:inline-flex items-center gap-1 font-manrope rounded-xl bg-brand px-6 py-3 text-[16px] font-semibold leading-6 text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <PhoneIcon />
             +123 456  78 90
            </a>

            <button
              className="lg:hidden flex flex-col justify-center items-center w-6 h-6 gap-1.75 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
            >
              <span
                className={`block h-0.5 w-full bg-black transition-transform duration-300 ${open ? "translate-y-2.25 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-black transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-black transition-transform duration-300 ${open ? "-translate-y-2.25 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-black/8 bg-main-gradient">
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
              className="flex items-center justify-center gap-1 w-full rounded-xl bg-brand px-5 py-3 mb-4 text-[16px] font-semibold leading-6 text-white transition-colors hover:bg-brand/90"
            >
              <PhoneIcon />
              +123 456  78 90
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
