import type { MetadataRoute } from "next";
const U = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
// Explicitly welcome search + AI answer engines.
const bots = ["Googlebot", "Bingbot", "GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-Web", "PerplexityBot", "Google-Extended", "Applebot-Extended"];
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }, ...bots.map((userAgent) => ({ userAgent, allow: "/" }))], sitemap: `${U}/sitemap.xml` };
}
