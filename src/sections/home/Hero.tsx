import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/layout/Container";
import { cn } from "@/shared/lib/utils";
import { CONTACT_INFO } from "@/constants";
import PhoneIcon from "@/shared/icons/phone.svg";
import expertImg from "@/shared/icons/expert.png";
import RightArrowIcon from "@/shared/icons/right-arrow.svg";
import StarRating from "./StarRating";
export function Hero() {
  return (
    <section
      id="hero-section"
      aria-label="Expert appliance repair in Cleveland and Parma"
      className="relative overflow-hidden bg-main-gradient"
    >
      <Container className="relative">
        <div className="md:w-[53%]">
          {/* Heading */}
          <div className="flex items-start pt-13 lg:pt-12 mb-8">
            <h1 className="font-work-sans font-bold text-[32px] leading-10.5 lg:text-[57px] lg:leading-16.5 text-dark">
              Expert Appliance Repair in Cleveland &amp; Parma — Fast,
              Same&#8209;Day Service
            </h1>
          </div>

          <p className="max-w-lg text-[14px] leading-5.5 lg:text-[18px] lg:leading-7 text-secondary font-manrope font-normal lg:mb-12">
            When your refrigerator, washer, or dryer breaks down, every hour
            counts. Margus Appliance delivers certified appliance repair across
            Cleveland, Parma, and surrounding areas — with transparent pricing
            and a 90&#8209;day parts &amp; labor warranty.
          </p>

          <div className="block lg:hidden my-8 ">
            <StarRating />
          </div>

          {/* CTA buttons */}
          <div className="pb-12 lg:pb-0 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1 rounded-xl bg-brand py-3 text-[18px] leading-7 px-3 lg:px-14 font-semibold text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
               Repair Now
              <RightArrowIcon aria-hidden="true" />
            </Link>
            <a
              href={CONTACT_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-1 border rounded-xl border-brand px-7 py-3.5 text-base leading-6 font-semibold text-brand transition-colors hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <PhoneIcon aria-hidden="true" />
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Star rating */}
          <div className="hidden lg:block mt-12 pb-12">
            <StarRating />
          </div>
        </div>
        <div className="">
          <div className="hidden md:block absolute top-0 bottom-0 right-0 w-[47%]">
            <Image
              src={expertImg}
              alt="Certified Margus Appliance technician in uniform, ready for service"
              fill
              priority
              className="object-contain object-top"
            />
          </div>
        </div>
      </Container>

      {/* Technician image — section-relative, mirrors container padding */}
    </section>
  );
}
