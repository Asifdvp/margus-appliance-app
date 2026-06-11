import Link from "next/link";
import { Container } from "@/shared/layout/Container";
import ArrowIcon from "@/shared/icons/right-arrow.svg";
import { BlogsGrid } from "@/shared/ui/BlogsGrid";
import { blogPosts } from "@/content/blog";

const CTA_LABEL = "Read All Appliance Repair Guides";
const CTA_HREF = "/blog";

const ctaClasses =
  "inline-flex w-full items-center justify-center rounded-xl bg-brand px-5 py-2.5 lg:py-4 font-manrope text-[18px] font-semibold leading-7 text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 gap-1";

export function Blogs() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="bg-white" aria-labelledby="blogs-heading">
      <Container>
        <div className="mb-4 lg:mb-14">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 lg:items-center">
            <h2
              id="blogs-heading"
              className="font-work-sans font-bold text-dark text-[24px] leading-8 lg:text-[48px] lg:leading-14"
            >
              Appliance Repair Tips &amp; Expert Guides
            </h2>
            <div className="hidden lg:flex items-end justify-end mt-4">
              <Link href={CTA_HREF} className={ctaClasses}>
                {CTA_LABEL} <ArrowIcon aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <BlogsGrid posts={posts} />

        <div className="mt-7 lg:hidden">
          <Link href={CTA_HREF} className={ctaClasses}>
            {CTA_LABEL} <ArrowIcon aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
