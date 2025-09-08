import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://samsnashvillehotchicken.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#menu`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/#about`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/#gallery`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/#location`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/#order`, changeFrequency: "weekly", priority: 0.9 },
  ];
}
