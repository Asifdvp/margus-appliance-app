import Image from "next/image";
import { Container } from "@/shared/layout/Container";
import type { BlogPost } from "@/types";

type Props = { post: BlogPost };

export function BlogDetailHero({ post }: Props) {
  const coverSrc = post.coverImage ?? "/images/blogs/blog.jpg";

  return (
    <section
      aria-labelledby="blog-detail-title"
      className="bg-white pt-3 pb-3 md:pt-12 md:pb-12 lg:pb-24"
    >
      <Container>
        <div className="flex flex-col gap-0 lg:flex-row lg:justify-between lg:gap-12">
          {/* Text */}
          <div className="order-2 md:order-1 mt-3 md:mt-0 md:max-w-[45%] flex flex-col-reverse lg:flex-col lg:justify-between">
            <h1
              id="blog-detail-title"
              className="font-work-sans font-bold text-dark text-[30px] leading-8.75 md:text-[48px] md:leading-14"
            >
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="font-manrope text-[12px] leading-4.5 md:text-[18px] md:leading-6 text-grey"
            >
              {post.date}
            </time>
          </div>

          {/* Cover image */}
          <div className="order-1 lg:order-2 w-full lg:flex-1">
            <div className="relative w-full h-60 lg:h-90 rounded-3xl overflow-hidden">
              <Image
                src={coverSrc}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
