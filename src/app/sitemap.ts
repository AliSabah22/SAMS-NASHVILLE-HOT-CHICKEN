import type { MetadataRoute } from "next";
import { MENU_ITEMS } from "@/data/menu";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://samsnashvillehotchicken.com";
  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/menu`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.6 },
  ];
  const itemUrls: MetadataRoute.Sitemap = MENU_ITEMS.map((i) => ({
    url: `${base}/menu/${i.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));
  return [...staticUrls, ...itemUrls];
}
