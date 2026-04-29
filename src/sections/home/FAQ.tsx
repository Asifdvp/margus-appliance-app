"use client";

import { useState } from "react";
import { faqs } from "@/content/faq";
import { Container } from "@/shared/layout/Container";
import { cn } from "@/shared/lib/utils";
import type { FaqItem } from "@/types";

function FaqRow({ faq, isOpen, onToggle }: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={cn("border-b border-zinc-200 transition-colors", isOpen && "bg-zinc-50")}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        className="flex w-full items-center justify-between gap-6 px-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <span className={cn(
          "text-sm leading-snug text-dark transition-all lg:text-base",
          isOpen && "font-semibold"
        )}>
          {faq.question}
        </span>

        <span
          aria-hidden
          className={cn(
            "shrink-0 text-xl font-light leading-none text-dark transition-transform duration-200",
            isOpen && "rotate-45"
          )}
        >
          +
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
          <p className="px-4 pb-5 text-sm leading-relaxed text-zinc-500 lg:text-base">
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
    <section className="py-12 bg-white lg:py-20" aria-labelledby="faq-heading">
      <Container>
        <h2
          id="faq-heading"
          className="font-work-sans font-bold text-dark text-[24px] leading-8 text-center mx-auto max-w-sm lg:text-[40px] lg:leading-12 lg:max-w-xl"
        >
          Frequently Asked Questions About Appliance Repair
        </h2>

        <div className="mt-8 mx-auto max-w-2xl border-t border-zinc-200 lg:mt-12">
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
