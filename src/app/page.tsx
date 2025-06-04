import { LandingPage } from "@/templates/landing-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site.Set",
  description: "Landing Page Blog",
  robots: "index, follow",
  openGraph: {
    title: "Site.Set",
    description: "Landing Page Blog",
    url: "https://jj-blog-eta.vercel.app/og-image.jpg",
    siteName: "Site.Set",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://jj-blog-eta.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
};

export default function HomePage() {
  return <LandingPage />;
}
