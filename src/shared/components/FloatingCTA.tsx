"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CONTACT_INFO } from "@/constants";
import PhoneWhiteIcon from "@/shared/icons/phone-white.svg";
import PhoneIcon from "@/shared/icons/phone.svg";
import RightArrowIcon from "@/shared/icons/right-arrow.svg";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = document.getElementById("hero-section");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
        if (entry.isIntersecting) setOpen(false);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  if (!visible) return null;

  return (
    <div
      ref={popupRef}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 animate-float-in"
    >
      {/* Popup */}
      <div
        className={`flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-xl border border-gray-100 transition-all duration-200 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          onClick={() => setOpen(false)}
        >
          Repair Now
          <RightArrowIcon aria-hidden="true" />
        </Link>
        <a
          href={CONTACT_INFO.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand px-5 py-3 text-[15px] font-semibold text-brand transition-colors hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <PhoneIcon aria-hidden="true" />
          {CONTACT_INFO.phone}
        </a>
      </div>

      {/* Trigger button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Contact us"
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:scale-95"
      >
        <PhoneWhiteIcon aria-hidden="true" />
      </button>
    </div>
  );
}
