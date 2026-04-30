import { Hero } from "@/sections/home/Hero";
import { Services } from "@/sections/home/Services";
import { Brands } from "@/sections/home/Brands";
import { BlogPreview } from "@/sections/home/Blog";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Brands />
      <BlogPreview />
    </>
  );
}
