import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/retail-checkout", changeFrequency: "monthly", priority: 0.85 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
