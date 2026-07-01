"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import { Container } from "@/shared/layout/Container";
import PhoneIcon from "@/shared/icons/phone.svg";
import RightArrowIcon from "@/shared/icons/right-arrow.svg";
import { BookNowButton } from "@/shared/components/book";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-main-gradient">
      <Container>
        <nav className="flex pt-2 lg:pt-6.75 items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Margus Appliance – Home" className="relative block h-10 w-17.5 lg:h-22.5 lg:w-39.5">
            <Image
              src="/logo.png"
              alt="Margus Appliance logo"
              width={158}
              height={90}
              priority
              className="lg:absolute lg:-top-1.75 h-10 lg:h-22.5 w-auto object-contain" style={{ width: "auto" }}
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

          {/* Buttons + Mobile hamburger */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Book Now — desktop: full label, mobile: short */}
            <BookNowButton className="inline-flex items-center gap-1 font-manrope rounded-xl bg-brand px-3 py-2 text-[13px] font-semibold leading-5 text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 lg:px-6 lg:py-3 lg:text-[16px] lg:leading-6">
              Book Now
              <RightArrowIcon className="w-3.5 h-3.5 lg:w-4 lg:h-4" aria-hidden="true" />
            </BookNowButton>

            {/* Phone — desktop: full, mobile: icon only */}
            <a
              href="tel:+12163040665"
              aria-label="Call us"
              className="inline-flex items-center justify-center gap-1 font-manrope font-semibold rounded-xl border border-brand px-2.5 py-2 text-[13px] leading-5 text-brand transition-colors hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 lg:px-6 lg:py-3 lg:text-[16px] lg:leading-6"
            >
              <PhoneIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
           <span className="hidden md:inline"> (216) 304-0665  </span>   
            </a>

            <button
              className="lg:hidden cursor-pointer flex flex-col justify-center items-center w-6 h-6 gap-1.75 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
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
        <div className="lg:hidden min-h-dvh border-t border-black/8 bg-main-gradient">
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
              href="tel:+12163040665"
              className="flex items-center justify-center gap-1 w-full rounded-xl bg-brand px-5 py-3 mb-3 text-[16px] font-semibold leading-6 text-white transition-colors hover:bg-brand/90"
            >
              <PhoneIcon className="w-5 h-5 shrink-0 [&_path]:stroke-white" aria-hidden="true" />
              (216) 304-0665
            </a>
            <BookNowButton
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1 w-full rounded-xl border border-brand px-5 py-3 mb-4 text-[16px] font-semibold leading-6 text-brand transition-colors hover:bg-brand/10"
            >
              Book Now
              <RightArrowIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
            </BookNowButton>
          </Container>
        </div>
      )}
    </header>
  );
}
