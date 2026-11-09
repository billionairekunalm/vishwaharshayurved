import type { MetadataRoute } from "next";
import { areas, services } from "@/data/pages";
import { abs } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly") => ({ url: abs(path), lastModified: now, changeFrequency, priority });
  return [
    page("/", 1, "weekly"),
    page("/services", 0.9, "monthly"),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9, "monthly")),
    page("/doctor", 0.8, "monthly"),
    page("/areas", 0.7, "monthly"),
    ...areas.map((a) => page(`/areas/${a.slug}`, 0.8, "monthly")),
  ];
}
