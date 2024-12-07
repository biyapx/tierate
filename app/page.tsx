import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import imagesetConfig from "@/imageset.config.json";
import ImageSetConfig from "@/models/ImageSet";
import {PlusCircledIcon} from "@radix-ui/react-icons";
import PackageCard from "@/components/PackageCard";
import {Separator} from "@/components/ui/separator";

const typedImageSetConfig = imagesetConfig as ImageSetConfig;

const FEATURED_SETS = {
  "video-games": [
    'all',
  ],
  "Video Games": [
    'all',
  ],
  "artists": [
    'all',
  ],
  "logos": [
    'all',
  ],
  "languages": [
    'all',
  ],
  // Add more packages and their featured sets here
};

const Home = () => {
  return (
    <div className="container mx-auto px-8 py-4">
      <div className="text-center mb-8 md:my-8">
        <div className="text-center">
          <h1 className="relative inline-block mb-4">
            <span className="text-4xl font-extrabold lg:text-5xl text-transparent bg-gradient-to-r from-emerald-500 to-orange-500 bg-clip-text">
              Make a Tier List easily
            </span>
            <span className="block text-xl text-muted-foreground mt-4 font-normal tracking-wide">
             Drag and drop the images to make  
             <span className='text-orange-700'> S </span> 
             <span className='text-orange-500'>A </span> 
             <span className='text-yellow-700'>B </span> 
             <span className='text-yellow-500'>C </span> 
             <span className='text-green-700'>D </span> 
             <span className='text-green-500'>E </span> 
             <span className='text-green-500'>F </span> tiers or rank with your own custom characters
            </span>
          </h1>
        </div>
        <Button asChild variant="outline" size="lg" className='bg-gradient-to-r from-emerald-500 to-orange-500 text-xl font-semibold'>
          <Link href={"/rank/"}>
            Get Started
          </Link>
        </Button>
      </div>
      <div className="flex justify-center items-center w-full my-10">
        <Separator className="w-1/4"/>
      </div>
      <div className='bg-gradient-to-r from-emerald-500 to-orange-500 p-10 rounded-3xl'>
        <video autoPlay={true} src="/tierlist.mp4" className='rounded-3xl'></video>
      </div>
      <span className="py-10 flex justify-center items-center text-3xl font-extrabold lg:text-4xl text-transparent bg-gradient-to-r from-emerald-500 to-orange-500 bg-clip-text">
              Or use free Templates
        </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured sets */}
        {Object.entries(FEATURED_SETS).map(([packageName, tags]) => {
          const packageData = typedImageSetConfig.packages[packageName];
          if (!packageData) return null;

          return <PackageCard key={packageName} packageData={packageData} tags={tags}/>
        })}    
      </div>
      <div className='w-full flex justify-center p-10'>
      <Button asChild className="" variant="outline">
        <Link href="/rank/">
          <PlusCircledIcon className="mr-2 h-4 w-4"/>
          Create Blank List
        </Link>
      </Button>
      </div>
    </div>
  );
};

export default Home;
