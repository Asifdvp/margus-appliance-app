import type { Metadata } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/shared/components/Navbar";
import { Footer } from "@/shared/components/Footer";
import { Emergency } from "@/shared/components/Emergency";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Margus Appliance",
  description: "Professional appliance services and solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${manrope.variable} ${workSans.variable}`}>
      <body className="min-h-full flex flex-col">
        <Emergency/>
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  );
}
