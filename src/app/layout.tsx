import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'BrandLaunch Pro | Professional Brand Identity Design',
  description: 'Get complete brand identity design, logo creation, poster templates, and social-ready content for your retail or service business. Professional design made accessible.',
  keywords: ["brand identity, logo design, poster templates, promotional content, branding solutions, small business branding, marketing managers, entrepreneurs, professional design"],
  openGraph: {
    "title": "BrandLaunch Pro | Professional Brand Identity Design",
    "description": "Complete logo, posters, and social-ready content to launch your brand with confidence. Professional design made accessible.",
    "url": "/",
    "siteName": "BrandLaunch Pro",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/draft-design-line-outline-sketch-style-graphic-concept_53876-137601.jpg",
        "alt": "Modern logo design and branding elements"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "BrandLaunch Pro | Professional Brand Identity Design",
    "description": "Complete logo, posters, and social-ready content to launch your brand with confidence. Professional design made accessible.",
    "images": [
      "http://img.b2bpic.net/free-photo/draft-design-line-outline-sketch-style-graphic-concept_53876-137601.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
