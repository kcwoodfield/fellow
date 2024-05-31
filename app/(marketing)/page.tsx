import Link from "next/link";
import localFont from "next/font/local";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"

/**
 * Defines the font for the heading element.
 * @param {string} src - The path to the font file.
 * @returns {string} The font value for the heading element.
 */
const headingFont = localFont({
  src: "../../public/fonts/Geist-Black.woff2"
});

const MarketingPage = () => {
    return (
      <div className="flex items-center justify-center flex-col">
        <div className={cn(
            "flex items-center justify-center flex-col",
            headingFont.className
            )}>
          <div className="mb-4 flex items-center border shadow-sm p-4 text-amber-700 rounded-full uppercase">
            <Medal className="h-6 w-6 mr-2" />Fellow
          </div>
          <h1 className="text-3xl md:text-4xl text-center text-neutral-800 mb-6">Organize your chaos...</h1>
          <div className="text-3xl md:text-4xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-2 w-fit">or at least pretend to.</div>
        </div>
        <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
          Collaborate on tasks, track progress, and get more done with Fellow. From high rises to the home office, the way your team works is unique, accomplish it all with Fellow.
        </div>
        <div>
          <Button className="mt-6" size="lg" asChild>
            <Link href="/signup" className="">Get Started</Link>
          </Button>
        </div>
      </div>
    );
  };

  export default MarketingPage;