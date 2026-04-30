import Link from "next/link";
import { Container } from "@/shared/layout/Container";
import ArrowIcon from "@/shared/icons/right-arrow.svg";
import { BlogCard } from "@/shared/ui/BlogCard";
import { BlogsCarousel } from "./BlogsCarousel";
import { blogPosts } from "@/content/blog";

const CTA_LABEL = "How we work";
const CTA_HREF = "/about";

const ctaClasses =
  "inline-flex w-full items-center justify-center rounded-xl bg-brand px-5 py-2.5  lg:py-4 font-manrope text-[18px] font-semibold leading-7 text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 flex items-center gap-1";

export function Blogs() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section
      className="py-14 pb-6 lg:py-30 bg-white "
      aria-labelledby="services-heading"
    >
      <Container>
        {/* Header row */}
        <div className="mb-4 lg:mb-14">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8  lg:items-center">
            <h2
              id="services-heading"
              className="font-work-sans font-bold text-dark text-[24px] leading-8 lg:text-[48px] lg:leading-14"
            >
             Appliance Repair Tips & Expert Guides
            </h2>

            <div>
              <div className=" items-end justify-end mt-4 hidden lg:flex">
                <Link
                  href={CTA_HREF}
                  className={`${ctaClasses} hidden lg:inline-flex`}
                >
                  {CTA_LABEL} <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* Desktop CTA */}
          </div>
        </div>

        {/* Mobile: Embla auto-scroll carousel */}
        <div className="lg:hidden -mx-4 sm:-mx-6">
          <BlogsCarousel posts={posts} />
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-7 lg:hidden">
          <Link href={CTA_HREF} className={`${ctaClasses} w-full`}>
            {CTA_LABEL} <ArrowIcon />
          </Link>
        </div>
      </Container>
    </section>
  );
}
