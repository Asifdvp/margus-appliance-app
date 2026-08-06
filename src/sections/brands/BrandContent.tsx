import Image from "next/image";
import { Container } from "@/shared/layout/Container";
import { InfoSection } from "@/shared/ui/InfoSection";
import { ServicesGrid } from "@/shared/ui/ServicesGrid";
import type { Brand } from "@/types";

type Props = { brand: Brand };

export function BrandContent({ brand }: Props) {
  return (
    <section className="bg-white py-3 lg:pt-18 lg:pb-18">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-0">
          {/* Text column */}
          <div className="w-full lg:max-w-[55%]">
            {/* Intro paragraphs */}
            {brand.intro?.map((p, i) => (
              <p
                key={i}
                className="mb-2 md:mb-3 font-manrope text-xs lg:text-base leading-4.5 md:leading-6 text-secondary"
              >
                {p}
              </p>
            ))}

            {/* Sections before the problems list */}
            {brand.preProblemsSections?.map((section, i) => (
              <InfoSection key={section.heading ?? i} section={section} />
            ))}

            {/* Common Problems */}
            {brand.commonProblems && (
              <div className="my-3 md:my-6">
                <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mb-2">
                  Common {brand.name} Appliance Problems We Fix
                </h2>
                {brand.commonProblemsIntro && (
                  <p className="mb-2 font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary">
                    {brand.commonProblemsIntro}
                  </p>
                )}
                <ul className="list-disc pl-5 flex flex-col gap-1.5">
                  {brand.commonProblems.map((item) => (
                    <li
                      key={item}
                      className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {brand.commonProblemsNote && (
                  <p className="mt-2 font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary italic">
                    {brand.commonProblemsNote}
                  </p>
                )}
              </div>
            )}

            {/* Additional info sections */}
            {brand.sections?.map((section, i) => (
              <InfoSection key={section.heading ?? i} section={section} />
            ))}

            {/* Closing CTA line */}
            {brand.closingText && (
              <div className="mt-3 md:mt-6">
                {brand.closingHeading && (
                  <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mb-2">
                    {brand.closingHeading}
                  </h2>
                )}
                {brand.closingText.map((p, i) => (
                  <p
                    key={i}
                    className="font-manrope text-sm lg:text-base leading-6 text-secondary font-semibold"
                  >
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Logo badge column — desktop only, sticky */}
          <div className="hidden lg:block lg:sticky lg:top-40">
            <div className="w-74 h-102 rounded-3xl bg-[#F6F6F6] flex items-center justify-center p-10">
              <div className="relative w-full h-24">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} appliance repair`}
                  fill
                  sizes="280px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cross-link: all services we offer for this brand */}
        <div className="mt-10 lg:mt-16">
          <h2 className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[24px] lg:leading-8 mb-4 lg:mb-6">
            {brand.name} Appliance Repair Services
          </h2>
          <ServicesGrid />
        </div>
      </Container>
    </section>
  );
}
