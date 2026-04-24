import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/layout/Container";

export function Hero() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Expert Appliance Services You Can Trust
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            From repairs to installations, our certified technicians are here to
            keep your home running smoothly.
          </p>
          <div className="mt-10 flex gap-4">
            <Button href="/services">Our Services</Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
