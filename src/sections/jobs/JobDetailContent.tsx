import Image from "next/image";
import { Container } from "@/shared/layout/Container";
import type { RecentJob } from "@/types";
import PointIcon from "@/shared/icons/jobs/point.svg";
import DateIcon from "@/shared/icons/jobs/date.svg";

type Props = { job: RecentJob };

export function JobDetailContent({ job }: Props) {
  return (
    <section className="bg-white pt-4 pb-10.5 lg:py-18 ">
      <Container>

        {/* Mobile: image + date at top */}
        <div className="lg:hidden mb-1">
          <div className="relative w-full h-60 rounded-3xl overflow-hidden">
            <Image
              src={job.image}
              alt={job.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          {job.date && (
            <p className="mt-3 font-manrope text-xs leading-4.5 text-grey">
              {job.date}
            </p>
          )}
        </div>

        {/* Problem heading — mobile only (desktop shows it in hero) */}
        {job.problem && (
          <h1 className="lg:hidden font-work-sans font-bold text-dark text-[30px] leading-8.75 mb-3">
            {job.problem}
          </h1>
        )}

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:gap-6">

          {/* Text column */}
          <div className=" lg:w-[66%]">
            {job.intro?.map((p, i) => (
              <p
                key={i}
                className="mb-3 md:mb-6 font-manrope text-xs lg:text-base leading-4.5 md:leading-6 text-secondary"
              >
                {p}
              </p>
            ))}

            {job.commonProblems && (
              <div className="my-4 md:my-6">
                <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mb-2">
                  Common {job.service} Problems We Fix
                </h2>
                <ul className="list-disc pl-5 flex flex-col gap-1.5">
                  {job.commonProblems.map((item) => (
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

            {job.whyChoosePoints && (
              <div className="mb-4 md:mb-6">
                <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mb-2">
                  Why Choose Our {job.service}?
                </h2>
                <ul className="list-disc pl-5 flex flex-col gap-1.5">
                  {job.whyChoosePoints.map((item) => (
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

            {job.closingText && (
              <div>
                <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mb-2">
                  {job.closingHeading ?? "Fast & Reliable Appliance Repair"}
                </h2>
                {job.closingText.map((p, i) => (
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

          {/* Desktop sidebar — sticky */}
          <div className=" flex-1 hidden lg:block lg:sticky lg:top-40 shrink-0">
            <div className=" relative w-full h-60 rounded-2xl overflow-hidden">
              <Image
                src={job.image}
                alt={job.alt}
                fill
                sizes="296px"
                className="object-cover object-center"
              />
            </div>

            <div className="mt-4 flex flex-col gap-2.5">
              {job.location && (
                <div className="flex items-center justify-between gap-8">
                  <span className="flex items-center gap-1 font-manrope text-base leading-6 text-grey">
                    <PointIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
                    Location
                  </span>
                  <span className="font-manrope text-base leading-6 text-dark font-normal">
                    {job.location}
                  </span>
                </div>
              )}
              {job.date && (
                <div className="flex items-center justify-between gap-8">
                  <span className="flex items-center gap-1 font-manrope text-base leading-6 text-grey">
                    <DateIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
                    Date
                  </span>
                  <span className="font-manrope text-base leading-6 text-dark font-normal">
                    {job.date}
                  </span>
                </div>
              )}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
