import { PageWrapper } from "@/shared/layout/PageWrapper";

export function ContactSection() {
  return (
    <PageWrapper>
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Get In Touch</h1>
          <p className="mt-4 text-zinc-600">
            Have a question or want to book a service? We&apos;d love to hear from you.
          </p>
        </div>
        <form className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-lg border border-black/[.15] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-lg border border-black/[.15] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-lg border border-black/[.15] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground resize-none"
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </PageWrapper>
  );
}
