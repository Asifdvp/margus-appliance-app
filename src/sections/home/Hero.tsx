import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/layout/Container";
import { cn } from "@/shared/lib/utils";
import { CONTACT_INFO } from "@/constants";
import PhoneIcon from "@/shared/icons/phone.svg";
import expertImg from "@/shared/icons/expert.png";
import rateImg from "@/shared/icons/rate.png";

export function Hero() {
  return (
    <section
      aria-label="Expert appliance repair in Cleveland and Parma"
      className="bg-[linear-gradient(99.72deg,#F8F7FF_0%,#E2F4FB_100%)] "
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-0 lg:grid-cols-[6.3fr_5.7fr]">
          {/* ── Content column ── */}
          <div className="flex flex-col  gap-8">
            {/* Heading + award badge side-by-side */}
            <div className="relative flex items-start justify-between gap-4 pt-12">
              <h1 className="font-work-sans font-bold text-[32px] leading-[42px] tracking-[0px] lg:text-[56px] lg:leading-[66px] text-dark">
                Expert Appliance Repair in Cleveland &amp; Parma — Fast, Same&#8209;Day
                Service
              </h1>
              <Image
                src={rateImg}
                alt="Best of 2026 — BusinessRate award"
                width={88}
                height={88}
                className="mt-1 h-20 w-auto shrink-0 absolute -top-1 -right-6  lg:top-27 lg:-right-6"
              />
            </div>

            <p className="max-w-lg text-base leading-[1.75] text-zinc-500">
              When your refrigerator, washer, or dryer breaks down, every hour
              counts. Margus Appliance delivers certified appliance repair
              across Cleveland, Parma, and surrounding areas — with transparent
              pricing and a 90&#8209;day parts &amp; labor warranty.
            </p>

            {/* CTA buttons — stacked on mobile, inline on sm+ */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Book Repair Now
                <span aria-hidden="true">↗</span>
              </Link>
              <a
                href={CONTACT_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand px-7 py-3.5 text-base font-semibold text-brand transition-colors hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <PhoneIcon aria-hidden="true" />
                {CONTACT_INFO.phone}
              </a>
            </div>

            {/* Social proof: stacked avatars + star rating */}
            <div className="flex items-center gap-3">
              <div className="flex shrink-0" aria-hidden="true">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-zinc-200",
                      i > 1 && "-ml-3",
                    )}
                  >
                    <Image
                      src={`/images/review-avatar-${i}.webp`}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div>
                <div
                  className="flex items-center gap-0.5 text-amber-400"
                  aria-label="Rated 4.9 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium text-zinc-600">
                  4.9/5 — 600+ Google Reviews
                </p>
              </div>
            </div>
          </div>

          {/* ── Technician image — desktop only ── */}
          <div className="hidden w-full lg:flex lg:justify-center lg:items-start">
            <Image
              src={expertImg}
              alt="Certified Margus Appliance technician in uniform, ready for service"
              priority
              className="h-auto w-full object-contain object-top drop-shadow-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
