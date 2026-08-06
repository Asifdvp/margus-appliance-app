import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/layout/Container";
import { InfoSection } from "@/shared/ui/InfoSection";
import { linkifyBrandNames } from "@/shared/lib/linkifyBrandNames";
import type { Service } from "@/types";

type Props = { service: Service };

export function ServiceContent({ service }: Props) {
  const imageSrc = service.detailImage ?? service.icon;

  return (
    <section className="bg-white py-3 lg:pt-18 lg:pb-18">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-0">
          {/* Text column */}
          <div className="w-full lg:max-w-[55%]">
            {/* Intro paragraphs */}
            {service.intro?.map((p, i) => (
              <p
                key={i}
                className="mb-2 md:mb-3 font-manrope text-xs lg:text-base leading-4.5 md:leading-6 text-secondary "
              >
                {p}
              </p>
            ))}

            {/* Sections before the problems list */}
            {service.preProblemsSections?.map((section, i) => (
              <InfoSection key={section.heading ?? i} section={section} />
            ))}

            {/* Common Problems */}
            {service.commonProblems && (
              <div className="my-3 md:my-6">
                <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8  mb-2">
                  Common {service.title} Problems We Fix
                </h2>
                <ul className="list-disc pl-5 flex flex-col gap-1.5">
                  {service.commonProblems.map((item) => (
                    <li
                      key={item}
                      className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {service.commonProblemsNote && (
                  <p className="mt-2 font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary italic">
                    {service.commonProblemsNote}
                  </p>
                )}
              </div>
            )}

            {/* Brands We Repair */}
            {service.brandsText && (
              <div className="mb-3 md:mb-6">
                <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mb-2">
                  {service.title.replace(/ Repair$/, "")} Brands We Repair
                </h2>
                <p className="mb-2 font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary">
                  {linkifyBrandNames(service.brandsText)}
                </p>
                <p className="mb-2 font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary">
                  Whatever brand you own, our technicians carry the
                  diagnostic knowledge and common parts to fix most problems
                  on the first visit.
                </p>
                <p className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary">
                  Don&apos;t see your brand?{" "}
                  <Link
                    href="/brands"
                    className="font-semibold text-brand underline underline-offset-2 hover:text-brand/80"
                  >
                    View all brands we service
                  </Link>
                  .
                </p>
              </div>
            )}

            {/* Additional info sections */}
            {service.sections?.map((section, i) => (
              <InfoSection key={section.heading ?? i} section={section} />
            ))}

            {/* Why Choose */}
            {service.whyChoosePoints && (
              <div className="mb-3 md:mb-6">
                <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8  mb-2">
                  Why Choose Our {service.title}?
                </h2>
                <ul className="list-disc pl-5 flex flex-col gap-1.5">
                  {service.whyChoosePoints.map((item) => (
                    <li
                      key={item}
                      className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Closing */}
            {service.closingText && (
              <div >
                <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8  mb-2">
                  {service.closingHeading ?? "Fast & Reliable Appliance Repair"}
                </h2>
                {service.closingText.map((p, i) => (
                  <p
                    key={i}
                    className="font-manrope text-sm lg:text-base leading-6 text-secondary mb-2 md:mb-3"
                  >
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Image column â€” desktop only, sticky */}
          <div className="hidden lg:block lg:sticky lg:top-40">
            <Image
              src={imageSrc}
              alt={service.title}
              width={296}
              height={408}
              className="w-74 h-102 object-contain"
              sizes="320px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

