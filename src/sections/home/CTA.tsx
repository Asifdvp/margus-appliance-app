import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/layout/Container";

export function CTA() {
  return (
    <section className="py-20 bg-foreground text-background">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-zinc-300 max-w-lg mx-auto">
            Book a service today and let our experts take care of your appliances.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="secondary">
              Book a Service
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
