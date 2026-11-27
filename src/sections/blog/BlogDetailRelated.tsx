import { Container } from "@/shared/layout/Container";
import { BlogCard } from "@/shared/ui/BlogCard";
import { blogPosts } from "@/content/blog";
import type { BlogPost } from "@/types";

type Props = { currentSlug: string };

export function BlogDetailRelated({ currentSlug }: Props) {
  const current = blogPosts.find((p) => p.slug === currentSlug);
  const index = blogPosts.findIndex((p) => p.slug === currentSlug);

  // A plain slice(0, 3) handed the same three posts to all 15 articles: the
  // first three by array order, regardless of topic. Prefer posts about the
  // same appliance (a real related-article signal), then rotate through the
  // rest starting after this one, so internal links spread across the blog
  // instead of piling onto whichever posts happen to be declared first.
  const rotated =
    index >= 0
      ? [...blogPosts.slice(index + 1), ...blogPosts.slice(0, index)]
      : blogPosts.filter((p) => p.slug !== currentSlug);

  const sameAppliance = current?.relatedServiceId
    ? rotated.filter((p) => p.relatedServiceId === current.relatedServiceId)
    : [];
  const rest = rotated.filter((p) => !sameAppliance.includes(p));

  const related: BlogPost[] = [...sameAppliance, ...rest].slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="bg-white pb-16 md:pb-24">
      <Container>
        <h2 className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[32px] lg:leading-10 mb-6 lg:mb-10">
          Recommended Articles
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {related.map((post) => (
            <BlogCard key={post.id} post={post} full />
          ))}
        </div>
      </Container>
    </section>
  );
}
