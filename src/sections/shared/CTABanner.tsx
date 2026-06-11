import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/layout/Container";
import ArrowIcon from "@/shared/icons/right-arrow.svg";

export function CTABanner() {
  return (
    <section className="mb-8 lg:mb-18">
      <Container>
        <div className="pt-14 lg:pt-32.5">
          <div className="relative overflow-visible bg-amber-400 rounded-3xl">

            {/* ── Desktop ─────────────────────────────────────── */}
            <div className="hidden lg:flex items-center justify-between p-14 pr-0">
              <div className="max-w-143">
                <h2 className="font-work-sans font-bold text-white text-[32px] leading-12 mb-6">
                  Reliable Appliance Repair From the First Call to the Final Fix
                </h2>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 bg-white text-dark font-manrope font-semibold text-[18px] leading-7 px-16 py-2.5 rounded-xl hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-400"
                >
                  Book Services
                  <ArrowIcon aria-hidden="true" />
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-120 h-[calc(100%+8rem)]">
                <Image
                  src="/about-man.png"
                  alt="Margus Appliance certified technician ready for service"
                  fill
                  className="object-cover object-top"
                  sizes="320px"
                />
              </div>
            </div>

            {/* ── Mobile ──────────────────────────────────────── */}
            <div className="lg:hidden flex flex-col items-center pt-0 pb-3 px-3">
              <div className="relative w-75 h-60 -mt-15">
                <Image
                  src="/about-man.png"
                  alt="Margus Appliance certified technician ready for service"
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                />
              </div>
              <h2 className="font-work-sans font-bold text-white text-[18px] leading-6 mb-4 text-center">
                Reliable Appliance Repair From the First Call to the Final Fix
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 bg-white text-dark font-manrope font-semibold text-[18px] leading-7 px-16 py-2.5 rounded-xl hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-400"
              >
                Book Services
                <ArrowIcon aria-hidden="true" />
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
