import { Container } from "@/shared/layout/Container";
import { BlogCard } from "@/shared/ui/BlogCard";
import { blogPosts } from "@/content/blog";

export function BlogList() {
  return (
    <section aria-labelledby="blog-list-heading" className="bg-white pt-6 lg:pt-18">
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} full />
          ))}
        </div>
      </Container>
    </section>
  );
}
