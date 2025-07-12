import { Text } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductsById } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
  })

  return (
 <LocalizedClientLink
  href={`/products/${product.handle}`}
  className="group relative block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
>
  <div className="relative w-full aspect-square">
    {/* Product Image */}
    <Thumbnail
      thumbnail={product.thumbnail}
      images={product.images}
      size="full"
      isFeatured={isFeatured}
    />

    {/* Bottom overlay with text moved up */}
    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 pt-8 sm:pt-10 md:pt-12">
      <div className="flex justify-between items-end w-full">
        {/* Text content with full visibility */}
        <div className="flex flex-col mr-2 sm:mr-3 flex-grow">
          <Text className="text-white   text-md md:text-xl lg:text-[26px] font-semibold md:font-medium leading-snug tracking-tight">
            {product.title}
          </Text>
          {cheapestPrice && (
            <div className="mt-2 sm:my-2">
              <PreviewPrice price={cheapestPrice} />
            </div>
          )}
        </div>

        {/* Plus button - responsive sizing */}
        <div className="flex-shrink-0 mb-0 sm:mb-1">
          <div className="bg-[#4F4B41] text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px] flex items-center justify-center hover:bg-[#3a3630] transition-colors">
            <span className="text-xl sm:text-2xl font-medium">+</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</LocalizedClientLink>

  )
}
