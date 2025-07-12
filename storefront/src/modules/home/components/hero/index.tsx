'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="bg-white px-4 sm:px-6 py-8 sm:py-12 lg:px-[100px]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
    {/* Left Content */}
    <div className="flex flex-col justify-between h-full md:min-h-[300px] lg:min-h-[350px] order-1 md:order-none">
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-semibold leading-tight">
          Cuisine du monde fait maison à Villepreux.
        </h1>
        <p className="text-gray-500 mt-3 sm:mt-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
          Fraîchement cuisinés par une cheffe. Et à emporter.
        </p>
      </div>

      {/* Customer Rating */}
      <div className="relative lg:top-10 xl:-top-32 mt-6 sm:mt-8 md:mt-0">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex -space-x-2">
            <Image
              src="/avatar1.png"
              width={48}
              height={48}
              alt="customer1"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white"
            />
            <Image
              src="/avatar2.png"
              width={48}
              height={48}
              alt="customer2"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white"
            />
            <Image
              src="/avatar3.png"
              width={48}
              height={48}
              alt="customer3"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800 text-sm sm:text-base">
              Our Happy Customer
            </span>
            <div className="text-xs sm:text-sm text-gray-600">
              <span className="font-semibold">4.8</span> (12.5k Reviews)
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right Image Section */}
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[300px] lg:h-[400px] xl:h-[550px] order-2 md:order-none">
      <div className="absolute right-0 h-full w-full md:w-[100%] z-20">
        <Image
          src="/group-dish.png"
          alt="Main Dish"
          fill
          className="object-contain object-right"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="absolute bottom-16 sm:bottom-24 md:bottom-14 lg:bottom-32 -left-6 sm:-left-8 md:-left-12 lg:-left-16 rotate-45 bg-[#91835F] p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-md z-30">
        <Image
          src="/clock.png"
          width={60}
          height={60}
          alt="Clock Icon"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        />
      </div>
    </div>
  </div>

  {/* Bottom Steps Section */}
  <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:-mt-10 z-50 bg-white rounded-xl shadow-lg sm:shadow-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left relative">
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex-shrink-0">
        <Image
          src="/choose-icon.png"
          width={64}
          height={64}
          alt="Choose Icon"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
          Choisissez vos plats
        </h3>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-1">
          Parmi une carte renouvelée.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex-shrink-0">
        <Image
          src="/cook-icon.png"
          width={64}
          height={64}
          alt="Cook Icon"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl">Je cuisine</h3>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-1">
          Vos plats à la commande.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex-shrink-0">
        <Image
          src="/pickup-icon.png"
          width={64}
          height={64}
          alt="Pickup Icon"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
          Retirer vos plats
        </h3>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-1">
          Réchauffez & régalez-vous.
        </p>
      </div>
    </div>
  </div>
</div>
  )
}