import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Gtm } from "@/components/Gtm";
import { Nav } from "@/components/Nav";
import "./globals.css";

const description =
  "Records raise questions: catastrophic record integrity, FERPA mapping definitions, all responsive data provided, complaint dismissed, and board receipt with no visible substantive response.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mystery Compliance Theatre 2000",
    template: "%s | Mystery Compliance Theatre 2000"
  },
  description,
  openGraph: {
    title: "Mystery Compliance Theatre 2000",
    description,
    type: "website",
    images: [
      {
        url: "/images/hero-amy-bullyan.png",
        width: 1792,
        height: 1024,
        alt: "Where in the world is Amy Bullyan?"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mystery Compliance Theatre 2000",
    description,
    images: ["/images/hero-amy-bullyan.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Gtm />
        <Nav />
        {children}
      </body>
    </html>
  );
}
