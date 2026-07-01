"use client";

import Image from "next/image";
import { Container } from "@/shared/layout/Container";
import ArrowIcon from "@/shared/icons/right-arrow.svg";
import { BookNowButton } from "@/shared/components/book";
import type { BlogPost } from "@/types";

type Props = { post: BlogPost };

export function BlogDetailContent({ post }: Props) {
  return (
    <section className="bg-white pb-12 lg:pb-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
          {/* ── Article body ─────────────────────────────── */}
          <article className="flex-1 min-w-0">
            {post.excerpt && (
              <p className="font-manrope text-xs leading-4.5 md:text-base md:leading-6 text-secondary font-normal mb-3">
                {post.excerpt}
              </p>
            )}

            {post.content?.map((section, i) => (
              <div key={i} className="mb-6">
                {section.heading && (
                  <h2 className="font-work-sans font-bold text-dark text-lg leading-6 lg:text-2xl  lg:leading-8 mb-2">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="font-manrope text-xs leading-4.5 md:text-base md:leading-6  text-secondary mb-3"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </article>

          {/* ── Sidebar CTA — desktop only, sticky ───────── */}
          <aside className="block lg:w-101 lg:shrink-0">
            <div className="sticky top-28 pt-15">
              <div className="relative overflow-visible bg-amber-400 rounded-3xl pb-6 px-3 flex flex-col items-center">
                {/* Technician image — overflows above card */}
                <div className="relative w-75 h-60 -mt-15">
                  <Image
                    src="/about-man.png"
                    alt="Margus Appliance technician"
                    fill
                    className="object-cover object-top"
                    sizes="300px"
                  />
                </div>
                <h3 className="font-work-sans font-bold text-white text-[18px] leading-6 mb-4 text-center">
                  Reliable Appliance Repair From the First Call to the Final Fix
                </h3>
                <BookNowButton className="inline-flex items-center gap-1 bg-white text-dark font-manrope font-semibold text-[18px] leading-7 px-16 py-2.5 rounded-xl hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-400">
                  Book Services
                  <ArrowIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
                </BookNowButton>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
