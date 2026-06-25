import type { MetadataRoute } from "next";
import { releaseArtifacts } from "@/lib/releaseArtifacts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://plsas.compliance-theater.org";
const releaseTimestamp = new Date("2026-06-23T00:00:00.000Z");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: releaseTimestamp,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/plsas`,
      lastModified: releaseTimestamp,
      changeFrequency: "weekly",
      priority: 0.95
    },
    {
      url: `${siteUrl}/hopkins`,
      lastModified: releaseTimestamp,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/plpd`,
      lastModified: releaseTimestamp,
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/mde`,
      lastModified: new Date("2026-06-25T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: releaseTimestamp,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/form-builder`,
      lastModified: releaseTimestamp,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/form-builder/request`,
      lastModified: releaseTimestamp,
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: `${siteUrl}/form-builder/correction`,
      lastModified: releaseTimestamp,
      changeFrequency: "monthly",
      priority: 0.75
    }
  ];

  const pdfs: MetadataRoute.Sitemap = releaseArtifacts.map((artifact) => ({
    url: `${siteUrl}${artifact.href}`,
    lastModified: new Date(`${artifact.date}T00:00:00.000Z`),
    changeFrequency: "monthly",
    priority: artifact.lane === "PLSAS" ? 0.7 : 0.65
  }));

  return [...pages, ...pdfs];
}
