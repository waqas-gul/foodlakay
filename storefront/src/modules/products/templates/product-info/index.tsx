import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  // Safe access to variant and price data
  const firstVariant = product.variants?.[0]
  const firstPrice = firstVariant?.prices?.[0]
  const originalPrice = firstVariant?.original_price
  
  // Calculate variant count safely
  const variantCount = product.variants?.length || 0

  return (
    <div id="product-info" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex flex-col gap-y-6">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        
        <Heading
          level="h2"
          className="text-4xl font-bold text-gray-900 tracking-tight"
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        {variantCount > 1 && (
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-green-500"></span>
            <span className="text-sm text-gray-600">
              Available in {variantCount} options
            </span>
          </div>
        )}

        <Text
          className="text-lg text-gray-700 leading-relaxed"
          data-testid="product-description"
        >
          {product.description}
        </Text>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            {firstPrice ? (
              <>
                <span className="text-2xl font-bold text-gray-900">
                  ${firstPrice.amount / 100}
                </span>
                {originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${originalPrice / 100}
                  </span>
                )}
              </>
            ) : (
              <span className="text-lg text-gray-500"></span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo