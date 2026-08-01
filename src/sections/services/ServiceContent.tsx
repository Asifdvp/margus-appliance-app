import Image from "next/image";
import { Container } from "@/shared/layout/Container";
import type { BlogSection, Service } from "@/types";

function InfoSection({ section }: { section: BlogSection }) {
  return (
    <div className="mb-3 md:mb-6">
      {section.heading && (
        <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mb-2">
          {section.heading}
        </h2>
      )}
      {section.paragraphs.map((p, i) => (
        <p
          key={i}
          className="mb-2 md:mb-3 font-manrope text-xs lg:text-base leading-4.5 md:leading-6 text-secondary"
        >
          {p}
        </p>
      ))}
      {section.list && (
        <ul className="list-disc pl-5 flex flex-col gap-1.5 mb-2 md:mb-3">
          {section.list.map((item) => (
            <li
              key={item}
              className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {section.note && (
        <p className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary italic">
          {section.note}
        </p>
      )}
    </div>
  );
}

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

