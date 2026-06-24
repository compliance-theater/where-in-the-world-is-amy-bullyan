import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Gtm } from "@/components/Gtm";
import { Nav } from "@/components/Nav";
import { faqs } from "@/lib/faq";
import { releaseArtifacts } from "@/lib/releaseArtifacts";
import "./globals.css";

const description =
  "Redacted school-record packets, board receipt proofs, and FERPA/MGDPA tools for mapping who saw student records and why.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Mystery Compliance Theatre 2000",
      url: siteUrl,
      logo: `${siteUrl}/assets/nav-mark.png`
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Mystery Compliance Theatre 2000",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`
      },
      description,
      inLanguage: "en-US"
    },
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/#release-library`,
      name: "School Accountability Release Library",
      url: siteUrl,
      isPartOf: {
        "@id": `${siteUrl}/#website`
      },
      about: [
        "school board accountability",
        "student record access",
        "FERPA",
        "Minnesota Government Data Practices Act",
        "maltreatment reporting"
      ],
      hasPart: releaseArtifacts.map((artifact, index) => ({
        "@type": "DigitalDocument",
        position: index + 1,
        name: artifact.title,
        url: `${siteUrl}${artifact.href}`,
        datePublished: artifact.date,
        description: artifact.description,
        encodingFormat: "application/pdf",
        isPartOf: {
          "@id": `${siteUrl}/#release-library`
        }
      }))
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      isPartOf: {
        "@id": `${siteUrl}/#website`
      },
      mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true
  },
  title: {
    default: "Mystery Compliance Theatre 2000",
    template: "%s | Mystery Compliance Theatre 2000"
  },
  description,
  icons: {
    icon: "/assets/nav-mark.png",
    apple: "/assets/nav-mark.png"
  },
  openGraph: {
    title: "Mystery Compliance Theatre 2000",
    description,
    siteName: "Mystery Compliance Theatre 2000",
    type: "website",
    images: [
      {
        url: "/images/hero-amy-bullyan.jpg",
        width: 1774,
        height: 887,
        alt: "Where in the world is Amy Bullyan?"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mystery Compliance Theatre 2000",
    description,
    images: ["/images/hero-amy-bullyan.jpg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Gtm />
        <Nav />
        {children}
      </body>
    </html>
  );
}
