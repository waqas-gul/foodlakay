'use client';

import Image from 'next/image';

export default function ChefIntro() {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:py-16 lg:py-20 lg:px-[70px]">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-12 sm:mb-20">
          {/* Left: Profile + Text */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Image
              src="/avatar2.png"
              alt="Cheffe Lidia"
              width={100}
              height={100}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover"
            />
            <h2
              style={{ fontFamily: "'Poiret One', cursive" }}
              className="text-2xl sm:text-3xl text-center md:text-left text-[#010205] font-extralight subpixel-antialiased"
            >
              Salut, à tous ! je suis la cheffe Lidia.
            </h2>
          </div>

          {/* Right: Paragraph + Button */}
          <div className="text-center md:text-left max-w-md sm:max-w-xl">
            <p className="text-gray-500 mb-4 text-base sm:text-lg lg:text-[20px] leading-relaxed">
              Forte d'une expérience de plus de 15 ans dans le monde fou et
              savoureux de la restauration parisienne. <br /> <br /> Je
              m'installe aujourd'hui derrière mes propres fourneaux pour régaler
              vos papilles.
            </p>
            <button className="px-6 py-2 sm:px-8 sm:py-3 border border-[#4F4B41] lg:mt-8 sm:mt-4 rounded-full hover:bg-[#4F4B41] hover:text-white transition text-sm sm:text-base">
              En savoir plus
            </button>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: Dessert (smaller) */}
          <div
            className="relative md:h-64 lg:h-[382px] w-full rounded-2xl sm:rounded-3xl overflow-hidden md:col-span-1"
            style={{ boxShadow: "inset 0 0 25px rgba(0, 0, 0, 0.4)" }}
          >
            <Image
              src="/dessert.png"
              alt="Dessert"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <span className="text-4xl sm:text-6xl lg:text-[84px] font-bold py-2 sm:py-6">
                920 <span className="text-[#99CF63]">+</span>
              </span>
              <p className="text-gray-300 text-sm sm:text-base lg:text-[19px]">
                Project finish with superbly
              </p>
            </div>
          </div>

          {/* Card 2: Burger Lidia (wider) */}
          <div
            className="relative md:h-64 lg:h-[382px] w-full rounded-2xl sm:rounded-3xl overflow-hidden md:col-span-2"
            style={{ boxShadow: "inset 0 0 25px rgba(0, 0, 0, 0.4)" }}
          >
            <Image
              src="/burger-lidia.png"
              alt="Burger Lidia"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl sm:text-3xl lg:text-[48px] font-semibold tracking-wider sm:tracking-widest text-center px-2">
                B U R G E R L I D I A
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
