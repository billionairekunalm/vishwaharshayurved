import type { MetadataRoute } from "next";
const U = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: U, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
