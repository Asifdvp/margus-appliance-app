import Link from "next/link";
import { SERVICES } from "@/content/services";
import { Container } from "@/shared/layout/Container";
import ArrowIcon from "@/shared/icons/right-arrow.svg";

type Props = { serviceId: string };

export function BlogRelatedService({ serviceId }: Props) {
  const service = SERVICES.find((s) => s.id === serviceId);
  if (!service) return null;

  return (
    <section className="bg-[#F6F6F6] py-8 lg:py-12">
      <Container>
        <div className="flex flex-col gap-4 rounded-2xl bg-white border border-dark/10 p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8">
          <div>
            <p className="font-manrope text-xs lg:text-sm text-secondary mb-1">
              Need this fixed today?
            </p>
            <h2 className="font-work-sans font-bold text-dark text-lg leading-6 lg:text-2xl lg:leading-8">
              {service.title} in Cleveland &amp; Parma
            </h2>
          </div>
          <Link
            href={service.href}
            className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-brand px-6 py-3 font-manrope text-sm font-semibold text-white transition-colors hover:bg-brand/90 lg:text-base"
          >
            View {service.title}
            <ArrowIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
