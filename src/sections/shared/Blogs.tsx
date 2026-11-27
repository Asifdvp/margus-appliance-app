import Link from "next/link";
import { Container } from "@/shared/layout/Container";
import ArrowIcon from "@/shared/icons/right-arrow.svg";
import { BlogsGrid } from "@/shared/ui/BlogsGrid";
import { blogPosts } from "@/content/blog";
import type { BlogPost } from "@/types";

const CTA_LABEL = "Read All Appliance Repair Guides";
const CTA_HREF = "/blog";

const ctaClasses =
  "inline-flex w-full items-center justify-center rounded-xl bg-brand px-5 py-2.5 lg:py-4 font-manrope text-[18px] font-semibold leading-7 text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 gap-1";

// Dates are authored DD.MM.YYYY, same parse as the sitemap uses.
function publishedAt(date: string) {
  return new Date(date.split(".").reverse().join("-")).getTime();
}

// One post per appliance first, so the teaser row doesn't show three posts
// about the same machine (the refrigerator cluster alone is five).
function spreadByAppliance(posts: BlogPost[]) {
  const seen = new Set<string | undefined>();
  const first: BlogPost[] = [];
  const rest: BlogPost[] = [];
  for (const post of posts) {
    // Posts with no appliance assigned don't get their own slot — otherwise a
    // single unassigned post wins a teaser spot on every page.
    if (!post.relatedServiceId || seen.has(post.relatedServiceId)) rest.push(post);
    else {
      seen.add(post.relatedServiceId);
      first.push(post);
    }
  }
  return [...first, ...rest];
}

type Props = { serviceId?: string };

export function Blogs({ serviceId }: Props = {}) {
  const byNewest = [...blogPosts].sort((a, b) => publishedAt(b.date) - publishedAt(a.date));
  const own = serviceId ? byNewest.filter((p) => p.relatedServiceId === serviceId) : [];
  const others = spreadByAppliance(byNewest.filter((p) => !own.includes(p)));
  const posts = [...own, ...others].slice(0, 3);

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
                {CTA_LABEL} <ArrowIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <BlogsGrid posts={posts} />

        <div className="mt-7 lg:hidden">
          <Link href={CTA_HREF} className={ctaClasses}>
            {CTA_LABEL} <ArrowIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
