import type { Metadata } from "next";

import "./globals.css";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "FABRICON",
  description:
    "FABRICON - Engineering, infrastructure and industrial solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}