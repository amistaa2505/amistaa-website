import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const siteConfig = {
  creatorUrl: "/creators",
  description:
    "Amistaa is a secure creator communication platform for premium one-to-one audio and video conversations.",
  downloadUrl: "#download",
  name: "Amistaa",
  url: siteUrl,
};

export const siteMetadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      {
        type: "image/svg+xml",
        url: "/favicon.svg",
      },
      {
        type: "image/x-icon",
        url: "/favicon.ico",
      },
    ],
    apple: [
      {
        sizes: "180x180",
        type: "image/png",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    description: siteConfig.description,
    images: [
      {
        alt: "Amistaa creator communication app preview",
        height: 916,
        url: "/images/hero-creator-app.png",
        width: 1717,
      },
    ],
    locale: "en_IN",
    siteName: siteConfig.name,
    title: "Amistaa — Connect. Talk. Earn.",
    type: "website",
    url: siteConfig.url,
  },
  robots: {
    follow: true,
    index: true,
  },
  title: {
    default: "Amistaa — Connect. Talk. Earn.",
    template: "%s | Amistaa",
  },
  twitter: {
    card: "summary_large_image",
    description: siteConfig.description,
    images: ["/images/hero-creator-app.png"],
    title: "Amistaa — Connect. Talk. Earn.",
  },
};
