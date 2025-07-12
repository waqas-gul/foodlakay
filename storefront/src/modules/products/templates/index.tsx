import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"
import FoodBanner from "../components/FoodBanner"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div className="lg:px-[100px] sm:px-12 py-12  mx-2">
        {" "}
        <FoodBanner />
      </div>

      <div
        className="content-container grid grid-cols-1 lg:grid-cols-3 gap-8 lg:py-12 py-6 px-4 sm:px-8 lg:px-12 xl:px-24 bg-gradient-to-b from-gray-50 to-white"
        data-testid="product-container"
      >
        {/* Left Column - Product Info */}
        <div className="lg:sticky lg:top-28 lg:h-fit lg:py-4 space-y-8">
          <ProductInfo product={product} />
        </div>

        {/* Center Column - Image Gallery */}
        <div className="w-full h-full col-span-1 lg:col-span-1">
          <ImageGallery images={product?.images || []} />
        </div>

        {/* Right Column - Actions */}
        <div className="lg:sticky lg:top-28 lg:h-fit lg:py-4 space-y-8">
          <ProductOnboardingCta />
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>
      <div
        className="content-container lg:my-16 my-8 lg:px-[100px] px-4 "
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
