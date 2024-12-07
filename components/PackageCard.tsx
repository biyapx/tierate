import React from 'react';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {slugify, cn, createSEOFriendlyTagSlug} from "@/lib/utils";
import {getFont, FontName} from '@/lib/fonts';
import Image from 'next/image';

interface PackageCardProps {
  packageData: {
    displayName: string;
    googleFont?: FontName;
    backgroundImage?: string;
    tags: Record<string, { title: string }>;
  };
  tags: string[];
}

const PackageCard: React.FC<PackageCardProps> = ({packageData, tags}) => {
  const font = packageData.googleFont ? getFont(packageData.googleFont) : null;

  return (
    <Card className="group relative overflow-hidden transition-all duration-220">
      {/* Background image (visible on hover) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          backgroundImage: packageData.backgroundImage ? `url(${packageData.backgroundImage})` : undefined,
        }}
      />
      {/* Gradient overlay (visible on hover) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent opacity-0
        group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

      {/* Card content */}
      <div className="relative z-10">
        <CardHeader>
          <CardTitle className={cn("transition-colors duration-300 group-hover:text-white group-hover:drop-shadow-lg"
          )}>
            {packageData.displayName}
          </CardTitle>
          <Separator
            style={{
              backgroundImage: packageData.backgroundImage ? `url(${packageData.backgroundImage})` : undefined,
            }}
          />
        </CardHeader>
        <CardContent className="space-y-2">
          {tags.map((tagName) => (
            <div key={tagName.length}>
               <Link href={`/rank/${slugify(packageData.displayName)}/${createSEOFriendlyTagSlug(tagName)}`}>
              <Image alt='' src={'/sample.png'} width={400} height={400} />
                {tagName === 'all' ? 'All Items' : packageData.tags[tagName]?.title || tagName}
              </Link>
            </div>
          ))}
        </CardContent>
      </div>
    </Card>
  );
};

export default PackageCard;
