import { profile } from "@/content/profile";
import { getSiteUrl, siteConfig } from "./metadata";

/**
 * JSON-LD builders. Each returns a plain object suitable for embedding via
 * `<script type="application/ld+json">{JSON.stringify(...)}</script>` in a
 * Server Component. Keeping these as plain functions (no React) means they
 * can also be unit tested or reused for sitemap/RSS generation.
 */

export interface PersonJsonLd {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  url: string;
  email: string;
  jobTitle: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressCountry: string;
  };
  sameAs: string[];
  alumniOf: {
    "@type": "CollegeOrUniversity";
    name: string;
  };
  knowsAbout: string[];
}

export function buildPersonJsonLd(): PersonJsonLd {
  const [locality, country] = profile.location.split(",").map((part) => part.trim());

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: getSiteUrl(),
    email: `mailto:${profile.links.email}`,
    jobTitle: "AI Systems Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: locality ?? profile.location,
      addressCountry: country ?? "",
    },
    sameAs: [profile.links.linkedin, profile.links.github],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.institution,
    },
    knowsAbout: [
      "Computer Vision",
      "Multimodal AI",
      "Intelligent Automation",
      "Mechatronics",
      "Software Engineering",
    ],
  };
}

export interface WebSiteJsonLd {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  author: {
    "@type": "Person";
    name: string;
  };
  inLanguage: string;
}

export function buildWebSiteJsonLd(): WebSiteJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: getSiteUrl(),
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: profile.name,
    },
    inLanguage: "en-US",
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface BreadcrumbJsonLd {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): BreadcrumbJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${getSiteUrl()}${item.path}`,
    })),
  };
}
