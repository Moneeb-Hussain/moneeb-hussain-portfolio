import type { Metadata } from "next";
import { profile } from "@/content/profile";

/**
 * Site-wide constants used to build metadata and JSON-LD across the app.
 */
export const siteConfig = {
  name: profile.name,
  title: "Moneeb Hussain — AI Systems Engineer",
  description: profile.support,
  locale: "en_US",
  ogImage: "/og-image.png",
  keywords: [
    "Moneeb Hussain",
    "AI systems engineer",
    "computer vision engineer",
    "mechatronics engineer",
    "multimodal AI",
    "intelligent automation",
    "Lahore Pakistan software engineer",
  ],
} as const;

/**
 * Resolves the canonical site URL, preferring an explicit env var so the
 * production domain can be configured without code changes, then falling
 * back to the Vercel preview URL, then localhost for development.
 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) {
    return configured.replace(/\/$/, "");
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
}

/** Turns a site-relative path into a fully-qualified absolute URL. */
export function absoluteUrl(path: string = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export interface PageMetadataOptions {
  /** Page-specific title. Rendered as "Title | Moneeb Hussain" via the layout template. */
  title: string;
  description: string;
  /** Site-relative path, e.g. "/projects/aegisops-ai" */
  path: string;
  /** Override the default OG image for this page */
  ogImage?: string;
  keywords?: string[];
  /** Set true for content pages that reference a specific point in time */
  publishedTime?: string;
  noIndex?: boolean;
}

/**
 * Builds a consistent `Metadata` object for a route, including canonical URL
 * and Open Graph/Twitter tags. Intended for use in each route's exported
 * `metadata` or `generateMetadata`.
 */
export function buildPageMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    ogImage = siteConfig.ogImage,
    keywords,
    publishedTime,
    noIndex = false,
  } = options;

  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(ogImage);

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: publishedTime ? "article" : "website",
      ...(publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

/** The root, site-wide default metadata for the app's root layout. */
export function buildDefaultMetadata(): Metadata {
  return {
    ...buildPageMetadata({
      title: `${siteConfig.name} — ${siteConfig.title.split("—")[1]?.trim() ?? ""}`.trim(),
      description: siteConfig.description,
      path: "/",
    }),
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    authors: [{ name: siteConfig.name, url: getSiteUrl() }],
    creator: siteConfig.name,
  };
}
