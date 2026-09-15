import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 1,
      url: siteConfig.url,
    },
    ...["/about", "/contact", "/creators", "/faq", "/feedback", "/privacy", "/security", "/terms"].map((path) => ({
      changeFrequency: "monthly" as const,
      lastModified: new Date(),
      priority: 0.7,
      url: `${siteConfig.url}${path}`,
    })),
  ];
}
