import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";
import { BlogDetailHero } from "@/sections/blog/BlogDetailHero";
import { BlogDetailContent } from "@/sections/blog/BlogDetailContent";
import { BlogDetailRelated } from "@/sections/blog/BlogDetailRelated";
import { CTABanner } from "@/sections/shared/CTABanner";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const description = post.excerpt ?? post.title;
  const ogImage = post.coverImage
    ? `https://margusappliance.com${post.coverImage}`
    : "https://margusappliance.com/images/blogs/blog.jpg";

  return {
    title: `${post.title} | Margus Appliance`,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `https://margusappliance.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
    alternates: {
      canonical: `https://margusappliance.com/blog/${slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <BlogDetailHero post={post} />
      <BlogDetailContent post={post} />
      <BlogDetailRelated currentSlug={slug} />
    </>
  );
}
