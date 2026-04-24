import { Navbar } from "@/shared/components/Navbar";
import { Footer } from "@/shared/components/Footer";
import { Emergency } from "@/shared/components/Emergency";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Emergency />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
