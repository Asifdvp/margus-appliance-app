import { Container } from "@/shared/layout/Container";
import { BlogCard } from "@/shared/ui/BlogCard";
import { blogPosts } from "@/content/blog";
import type { BlogPost } from "@/types";

type Props = { currentSlug: string };

export function BlogDetailRelated({ currentSlug }: Props) {
  const related: BlogPost[] = blogPosts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

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
