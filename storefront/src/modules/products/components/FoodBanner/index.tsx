import React from 'react';
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';

// Configure the Plus Jakarta Sans font
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
});

const FoodBanner = () => {
  return (
    <div
      className={`relative w-full lg:h-[70vh] sa:h-[60vh] rounded-2xl overflow-hidden shadow-lg px-4 sm:px-6 lg:px-[90px] ${jakarta.variable} font-sans`}
    >
      {/* Background image container with centered positioning */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/food-banner-bg.png"
          alt="Cuisine background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="object-center"
          priority
        />
      </div>

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20 z-10"></div>

      {/* Left-aligned content */}
      <div className="relative z-20 h-full  flex flex-col justify-center text-left text-white px-6 sm:px-8 md:px-12 lg:px-16 ">
        <h1 className="  md:text-4xl lg:text-[72px] text-2xl xl:text-[80px] pt-2 lg:pt-0 font-semibold mb-6 leading-tight">
          Cuisine du monde fait
          <br />
          <span className="text-white">maison à Villepreux.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 lg:text-[32px] font-medium max-w-2xl pb-2 lg:pb-0">
          Fraîchement cuisinés par une cheffe. Et à emporter.
        </p>
      </div>
    </div>
  )
};

export default FoodBanner;