'use client';
import { useState } from 'react';
import Image from 'next/image';

const reviews = [
  {
    image: "/ReviewSection/food1.png",
    title: "ASSIETTE ANTIPASTI + RIZ AU LAIT DE COCO ET MANGUE",
    text: "We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.",
    name: "Sarah Jenkins",
    stars: 5,
    avatarUrl:"/avatar2.png"
  },
  {
    image: "/ReviewSection/food2.png",
    title: "BURGER LIDIA",
    text: "We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.",
    name: "Sarah Jenkins",
    stars: 5,
     avatarUrl:"/avatar1.png"
  },
  {
    image: "/ReviewSection/food3.png",
    title: "GAMBAS FLAMBÉES AU PASTIS + TIRAMISU AUX SPÉCULOOS",
    text: "We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.",
    name: "Sarah Jenkins",
    stars: 5,
     avatarUrl:"/avatar3.png"
  },
  {
     image: "/ReviewSection/food3.png",
    title: "TACO VEGAN",
    text: "Organic ingredients and full of flavor for the conscious eater.",
    name: "Sarah Jenkins",
    stars: 5,
     avatarUrl:"/avatar2.png"
  },
  {
      image: "/ReviewSection/food2.png",
    title: "PIZZA 4 FROMAGES",
    text: "Delicious and crispy pizza with 4 rich cheeses.",
    name: "Sarah Jenkins",
    stars: 5,
     avatarUrl:"/avatar3.png"
  },
  {
      image: "/ReviewSection/food1.png",
    title: "SUSHI BOX MIXTE",
    text: "Fresh sushi with a combination of flavors.",
    name: "Sarah Jenkins",
    stars: 5,
     avatarUrl:"/avatar1.png"
  },
];

export default function ReviewSection() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };


  return (
    <section className="bg-gray-100 py-8 px-4 sm:py-12 sm:px-8 lg:px-[110px]">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 py-8 sm:py-16">
        {/* Left side - Avis */}
        <div className="flex-1 w-full ">
          <h2 className="text-3xl sm:text-4xl  lg:text-[48px] font-semibold mb-4 sm:mb-6 font-Jakarta">
            Avis
          </h2>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 w-full max-w-3xl font-Jakarta">
          <p className="text-gray-500 text-base sm:text-lg mb-4 sm:mb-6">
            We are the top digital marketing agency for branding corp. We offer
            a full range of services to help clients improve their search engine
            rankings and drive more traffic to their websites.
          </p>
          <button className="border mt-6 border-[#4F4B41] px-7 sm:px-10 py-2 sm:py-3 rounded-full font-medium hover:bg-[#4F4B41] hover:text-white transition text-sm sm:text-base">
            ADD
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {reviews.slice(0, visibleCount).map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col justify-between"
          >
            {/* Top Row: Image and Title */}
            <div className="flex items-center gap-3 mb-3 bg-gray-50 p-2 sm:p-3 rounded-lg">
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative rounded-full overflow-hidden">
                <Image
                  src={review.image}
                  alt={review.title}
                  fill
                  sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm sm:text-base">
                {review.title}
              </h3>
            </div>

            {/* Middle Text */}
            <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed sm:leading-loose">
              {review.text}
            </p>

            {/* Bottom: Stars + Avatar + Name */}
            <div className="flex items-center justify-between gap-2 mt-auto pt-3 sm:pt-4">
              <div className="flex items-center gap-2">
                <Image
                  src={review.avatarUrl}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
                <span className="text-xs sm:text-sm text-gray-700">
                  {review.name}
                </span>
              </div>
              <div className="text-yellow-500 text-xs sm:text-sm">
                {Array(review.stars).fill("⭐").join("")}
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < reviews.length && (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="text-xs sm:text-sm text-gray-600 hover:underline flex items-center justify-center gap-1 mx-auto"
          >
            Voir plus ↓
          </button>
        </div>
      )}
    </section>
  )
}
