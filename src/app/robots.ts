import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
// Explicitly welcome search + AI answer engines.
const bots = ["Googlebot", "Bingbot", "GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-Web", "PerplexityBot", "Google-Extended", "Applebot-Extended"];
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }, ...bots.map((userAgent) => ({ userAgent, allow: "/" }))], sitemap: `${SITE_URL}/sitemap.xml` };
}
