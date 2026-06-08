import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/layout/Container";
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
          <div className="flex items-start pt-4 lg:pt-10 mb-3 md:mb-8">
            <h1 className="font-work-sans font-bold text-[30px] leading-8.75 lg:text-[57px] lg:leading-16.5 text-dark">
              Expert Appliance Repair in{" "}
              <span className="text-brand">
                Cleveland &amp; Parma — Fast, Same&#8209;Day Service{" "}
              </span>
            </h1>
          </div>

          <p className="max-w-lg text-[12px] leading-4.5 lg:text-[18px] lg:leading-7 text-secondary font-manrope font-normal mb-1 md:mb-2">
            When your refrigerator, washer, or dryer breaks down, every hour
            counts. Margus Appliance delivers certified appliance repair across
            Cleveland, Parma, and surrounding areas — with transparent pricing
            and a 90&#8209;day parts &amp; labor warranty.
          </p>
          <p className="text-brand text-[10px] leading-4 md:text-[16px] md:leading-5 font-bold font-manrope mb-5 md:mb-12">
            No service call fee with repair{" "}
            <span className="text-brand inline-block w-1 h-1 rounded-full mx-2">
              {" "}
            </span>{" "}
            90 day warranty
          </p>

          <div className="block lg:hidden my-5 ">
            <StarRating />
          </div>

          {/* CTA buttons */}
          <div className="pb-2 lg:pb-0 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1 rounded-xl bg-brand py-3 text-[14px] md:text-[18px] leading-5.5 md:leading-7 px-3 lg:px-14 font-semibold text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Repair Now
              <RightArrowIcon aria-hidden="true" />
            </Link>
            <a
              href={CONTACT_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-1 border rounded-xl border-brand px-7 py-3 md:py-3.5 text-[14px] leading-5.5 md:text-base md:leading-6 font-semibold text-brand transition-colors hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <PhoneIcon aria-hidden="true" />
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Star rating */}
          <div className="hidden lg:block mt-8 pb-12">
            <StarRating />
          </div>
        </div>

        <div>
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
