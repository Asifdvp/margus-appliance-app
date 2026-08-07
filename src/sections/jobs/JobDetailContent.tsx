import Link from "next/link";
import { Container } from "@/shared/layout/Container";
import { JobGallery } from "@/shared/ui/JobGallery";
import { SERVICES } from "@/content/services";
import { brands } from "@/content/brands";
import type { RecentJob } from "@/types";
import PointIcon from "@/shared/icons/jobs/point.svg";
import DateIcon from "@/shared/icons/jobs/date.svg";

type Props = { job: RecentJob; gallery?: string[] };

export function JobDetailContent({ job, gallery = [] }: Props) {
  const relatedService = SERVICES.find((s) => s.title === job.service);
  const relatedBrand = brands.find((b) => b.id === job.brand && b.intro);

  return (
    <section className="bg-white pt-4 pb-10.5 lg:py-18 ">
      <Container>

        {/* Mobile: image + date at top */}
        <div className="lg:hidden mb-1">
          <JobGallery
            images={[job.image, ...gallery]}
            alt={job.alt}
            mainClassName="w-full h-60 rounded-3xl"
            sizes="100vw"
          />
          {job.date && (
            <p className="mt-3 font-manrope text-xs leading-4.5 text-grey">
              {job.date}
            </p>
          )}
        </div>

        {/* Problem heading — mobile only (desktop shows it in hero) */}
        <div className="lg:hidden mb-3">
          {job.location && (
            <p className="font-manrope font-semibold text-xs uppercase tracking-wide text-brand mb-1">
              Recent Job · {job.location}, OH
            </p>
          )}
          {(job.heroTitle ?? job.problem) && (
            <h2 className="font-work-sans font-bold text-dark text-[30px] leading-8.75">
              {job.heroTitle ?? job.problem}
            </h2>
          )}
          {job.badges && job.badges.length > 0 && (
            <p className="mt-2 font-manrope text-xs text-grey">
              {job.badges.join(" · ")}
            </p>
          )}
        </div>

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

            {(job.diagnosis || job.repairAction || job.result) && (
              <div className="mb-3 md:mb-6 flex flex-col gap-2">
                {job.diagnosis && (
                  <p className="font-manrope text-xs lg:text-base leading-4.5 md:leading-6 text-secondary">
                    <span className="font-semibold text-dark">The diagnosis:</span>{" "}
                    {job.diagnosis}
                  </p>
                )}
                {job.repairAction && (
                  <p className="font-manrope text-xs lg:text-base leading-4.5 md:leading-6 text-secondary">
                    <span className="font-semibold text-dark">The repair:</span>{" "}
                    {job.repairAction}
                  </p>
                )}
                {job.result && (
                  <p className="font-manrope text-xs lg:text-base leading-4.5 md:leading-6 text-secondary">
                    <span className="font-semibold text-dark">The result:</span>{" "}
                    {job.result}
                  </p>
                )}
              </div>
            )}

            {relatedService && (
              <p className="mb-3 md:mb-6 font-manrope text-xs lg:text-base leading-4.5 md:leading-6 text-secondary">
                {job.learnMoreIntro ?? "Need the same kind of repair?"} Learn more about our{" "}
                <Link
                  href={relatedService.href}
                  className="text-brand font-semibold hover:underline"
                >
                  {job.service}
                </Link>{" "}
                services
                {job.learnMoreSuffixText ? (
                  <>
                    , or see{" "}
                    <Link
                      href="/brands"
                      className="text-brand font-semibold hover:underline"
                    >
                      {job.learnMoreSuffixText}
                    </Link>
                  </>
                ) : (
                  relatedBrand && (
                    <>
                      , or see our{" "}
                      <Link
                        href={`/brands/${relatedBrand.id}`}
                        className="text-brand font-semibold hover:underline"
                      >
                        {relatedBrand.name} Appliance Repair
                      </Link>{" "}
                      page
                    </>
                  )
                )}
                .
              </p>
            )}

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
                  {job.whyChooseHeading ?? `Why Choose Our ${job.service}?`}
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
            <JobGallery
              images={[job.image, ...gallery]}
              alt={job.alt}
              mainClassName="w-full h-60 rounded-2xl"
              sizes="296px"
            />

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
