import React from 'react';
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import Image from "next/image";
import otbLogo from "@/public/brand/otb-logo-wide.webp";
import {FaDiscord} from "react-icons/fa6";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Metadata} from "next";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator/>
          <BreadcrumbItem>
            <BreadcrumbLink href="/about">about</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl md:text-3xl font-light mb-12 flex flex-col justify-center">
          <div className="flex justify-center mb-6 max-w-[600]">
            <Image src={otbLogo} alt="AmazingTier" priority/>
          </div>
          Craft, rank and share your passion - the open-source way!
        </h1>
      </section>

    </div>
  );
};

export async function generateMetadata(): Promise<Metadata> {
  let baseUrl = 'https://AmazingTier.com';

  // If VERCEL_PROJECT_PRODUCTION_URL is defined and valid, prepend it to the ogImageUrl
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    try {
      baseUrl = new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`).toString().replace(/\/$/, '');
    } catch (error) {
      console.warn('Invalid VERCEL_PROJECT_PRODUCTION_URL in the About page');
    }
  }

  const title = "About AmazingTier - Craft, Rank, and Share Your Passion";
  const description = "AmazingTier is a free, open-source platform for creating and sharing tier lists. Learn about our mission, community-driven approach, and how you can contribute.";
  const canonicalUrl = `${baseUrl}/about`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: canonicalUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'AmazingTier',
      url: baseUrl,
    },
    about: {
      '@type': 'SoftwareApplication',
      name: 'AmazingTier',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
    },
  };

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'AmazingTier',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/brand/otb-logo-wide.webp`,
          width: 600,
          height: 190,
          alt: 'AmazingTier Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/brand/otb-logo-wide.webp`],
    },
    alternates: {
      canonical: canonicalUrl,
      types: {
        'application/ld+json': JSON.stringify(jsonLd),
      },
    },
    other: {
      'application-name': 'AmazingTier',
    },
  };
}

export default AboutPage;
