"use client";

import { useState } from "react";
import { faqs } from "@/content/faq";
import { Container } from "@/shared/layout/Container";
import { cn } from "@/shared/lib/utils";
import type { FaqItem } from "@/types";
import FaqPlusIcon from "@/shared/icons/faq-plus.svg";
import FaqMinusIcon from "@/shared/icons/faq-minus.svg";

function FaqRow({ faq, isOpen, onToggle }: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={cn("bg-[#F6F6F6] transition-colors mt-4")}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        className="flex w-full items-center justify-between gap-4 p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <span className={cn(
          "font-bold text-base leading-5.5 font-work-sans transition-all lg:text-[24px] lg:leading-7.5",
          isOpen ? "text-dark" : "text-grey"
        )}>
          {faq.question}
        </span>

        <span aria-hidden className="shrink-0">
          {isOpen ? <FaqMinusIcon /> : <FaqPlusIcon />}
        </span>
      </button>

      {/* smooth height via grid trick — no JS height calc needed */}
      <div
        id={`faq-answer-${faq.id}`}
        role="region"
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-4  text-base leading-6 text-secondary font-manrope">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="py-14 bg-white lg:py-20" aria-labelledby="faq-heading">
      <Container>
        <h2
          id="faq-heading"
          className="font-work-sans font-bold text-dark text-[24px] leading-8 text-center mx-auto max-w-[343px] lg:text-[48px] lg:leading-14 lg:max-w-[846px]"
        >
Frequently Asked Questions About Appliance Repair        </h2>

        <div className="mt-4 mx-auto max-w-[846px] lg:mt-14">
          {faqs.map((faq) => (
            <FaqRow
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
