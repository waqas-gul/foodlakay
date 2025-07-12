'use client'
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { HttpTypes } from "@medusajs/types"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { getProductsById } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"

export default function ProductRail({
  collections,
  region,
}: {
  collections: HttpTypes.StoreCollection[]
  region: HttpTypes.StoreRegion
}) {
  const [activeFilter, setActiveFilter] = useState("Tous")
  const [products, setProducts] = useState<HttpTypes.StoreProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [pricedProducts, setPricedProducts] = useState<
    Record<string, HttpTypes.StoreProduct>
  >({})

  // Flatten all products from all collections
  const allProducts = collections.flatMap((col) => col.products || [])

  // Filter products based on selection
  const filteredProducts =
    activeFilter === "Tous"
      ? allProducts
      : allProducts.filter((product) => {
          return activeFilter === "Plats de la semaine"
            ? product.tags?.some((tag) => tag.value === "weekly-special")
            : activeFilter === "Populaires"
            ? product.tags?.some((tag) => tag.value === "popular")
            : true
        })

  // Fetch region-specific priced products
  useEffect(() => {
    const fetchPricedProducts = async () => {
      setLoading(true)
      const ids = filteredProducts.map((p) => p.id!)
      const priced = await getProductsById({ ids, regionId: region.id })

      const pricedMap = priced.reduce((acc, product) => {
        acc[product.id!] = product
        return acc
      }, {} as Record<string, HttpTypes.StoreProduct>)

      setPricedProducts(pricedMap)
      setProducts(filteredProducts)
      setLoading(false)
    }

    if (filteredProducts.length) {
      fetchPricedProducts()
    } else {
      setProducts([])
      setPricedProducts({})
      setLoading(false)
    }
  }, [activeFilter, collections, region.id])

  const PreviewPrice = ({
    price,
  }: {
    price: { calculated_price: string; original_price?: string }
  }) => {
    const hasReduction =
      price.original_price && price.original_price !== price.calculated_price

    return (
      <div className="flex flex-col items-end">
        {hasReduction && (
          <span className="text-gray-500 line-through text-sm">
            {price.original_price}
          </span>
        )}
        <span className="text-white text-[40px] font-bold">
          {price.calculated_price}
        </span>
      </div>
    )
  }

  return (
    <div className="content-container rounded-2xl  pt-8 px-4 sm:pt-10 sm:px-6 lg:pt-12 lg:px-8 my-4 max-w-screen-xl mx-auto overflow-hidden relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/ProductBackground.png"
          alt="Decorative background"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="text-center mb-12 sm:mb-16 lg:mb-24 relative px-2 sm:px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold mb-12 sm:mb-16 lg:mb-20 text-white font-serif">
          Découvrez le menu
        </h1>

        {/* Category Filters - Mobile Scrollable */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 w-full">
          <div className="flex gap-2 sm:gap-4 md:gap-2 overflow-x-auto pb-2 w-full sm:w-auto scrollbar-hide">
            {["Tous", "Plats de la semaine", "Populaires"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`whitespace-nowrap px-4 py-2 sm:px-6 md:px-3 sm:py-3 rounded-full border border-white transition-all text-sm sm:text-base ${
                  activeFilter === category
                    ? "bg-[#D0CCBE] text-black font-medium"
                    : "text-white hover:text-black hover:bg-[#D0CCBE]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 w-full sm:w-auto scrollbar-hide">
            {["Plats", "Salades", "Desserts"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`whitespace-nowrap px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white transition-all text-sm sm:text-base ${
                  activeFilter === category
                    ? "bg-[#D0CCBE] text-black font-medium"
                    : "text-white hover:text-black hover:bg-[#D0CCBE]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative group px-2 sm:px-4">
        {loading ? (
          <div className="text-center text-gray-300 py-12">
            Chargement des produits...
          </div>
        ) : products.length === 0 ? (
          <div className="text-center text-white py-12">
            Aucun produit trouvé
          </div>
        ) : (
          <div className="overflow-visible">
            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1.2}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              breakpoints={{
                480: { slidesPerView: 1.5, spaceBetween: 16 },
                640: { slidesPerView: 2.2, spaceBetween: 20 },
                768: { slidesPerView: 2.5, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 3.5, spaceBetween: 24 },
              }}
              className="!pb-8 sm:!pb-12 !overflow-visible"
            >
              {products.map((product) => {
                const pricedProduct = pricedProducts[product.id!]
                const { cheapestPrice } = pricedProduct
                  ? getProductPrice({ product: pricedProduct })
                  : { cheapestPrice: null }

                return (
                  <SwiperSlide key={product.id} className="!overflow-visible">
                    <LocalizedClientLink
                      href={`/products/${product.handle}`}
                      className="group"
                    >
                      <div
                        className="relative h-[320px] sm:h-[400px] lg:h-[521px] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-cover bg-center flex flex-col justify-end"
                        style={{
                          backgroundImage: `url(${
                            product.thumbnail || "/placeholder-food.jpg"
                          })`,
                        }}
                      >
                        <div className="w-full absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>

                        <div className="relative z-10 p-4 sm:p-6 text-white">
                          <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold tracking-wide uppercase mb-2">
                            {product.title}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="text-lg sm:text-xl">
                              {cheapestPrice ? (
                                <PreviewPrice price={cheapestPrice} />
                              ) : (
                                "€0.00"
                              )}
                            </span>
                            <button
                              className="bg-[#4F4B41] w-10 h-10 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px] text-xl sm:text-2xl rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                              onClick={(e) => {
                                e.preventDefault()
                                // Add to cart logic here
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </LocalizedClientLink>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        )}

        {/* Custom navigation arrows - visible on all screens */}
        <button
          className="custom-prev absolute left-0 sm:-left-3 top-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 -translate-y-1/2 bg-[#4F4B41] rounded-full flex items-center justify-center opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#3A3630] cursor-pointer"
          aria-label="Produit précédent"
        >
          <ArrowLeft className="text-xl sm:text-2xl text-white" />
        </button>
        <button
          className="custom-next absolute right-0 sm:-right-3 top-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 -translate-y-1/2 bg-[#4F4B41] rounded-full flex items-center justify-center opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#3A3630] cursor-pointer"
          aria-label="Produit suivant"
        >
          <ArrowRight className="text-xl sm:text-2xl text-white" />
        </button>
      </div>

      <div className="mt-8 sm:mt-12 text-center px-2 sm:px-4">
        <InteractiveLink
          href={`/collections`}
          className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
        >
          CONSULTER TOUS LES PLATS
        </InteractiveLink>
      </div>
    </div>
  )
}