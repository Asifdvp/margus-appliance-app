import { Container } from "./Container";

type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <section className={`py-16 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
