import Link from "next/link";
import { Container } from "@/shared/layout/Container";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = { items: BreadcrumbItem[] };

export function Breadcrumbs({ items }: Props) {
  return (
    <div className="bg-white py-4 lg:py-5">
      <Container>
        <nav aria-label="Breadcrumb">
          <ol className="inline-flex items-center gap-2 rounded-full bg-[#F6F6F6] px-4 py-2 lg:px-5 lg:py-2.5 font-manrope text-xs lg:text-sm">
            {items.map((item, i) => {
              const isLast = i === items.length - 1;
              return (
                <li key={item.label} className="flex items-center gap-2">
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="font-medium text-secondary hover:text-brand transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      aria-current={isLast ? "page" : undefined}
                      className={isLast ? "font-semibold text-dark" : "font-medium text-secondary"}
                    >
                      {item.label}
                    </span>
                  )}
                  {!isLast && (
                    <span aria-hidden="true" className="text-grey">
                      ›
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
