import { Hero } from "@/sections/home/Hero";
import { ServicesPreview } from "@/sections/home/ServicesPreview";
import { Brands } from "@/sections/home/Brands";
import { CTA } from "@/sections/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Brands />
      <CTA />
    </>
  );
}
