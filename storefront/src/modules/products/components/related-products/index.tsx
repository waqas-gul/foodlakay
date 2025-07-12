// ✅ File: app/components/related-products.tsx (Server Component)

import Product from "../product-preview"
import { getRegion } from "@lib/data/regions"
import { getProductsList } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import FilterBar from "./FilterBar"


const FILTERS = [
  "Plats de la semaine",
  "Populaires",
  "Plats",
  "Nos pâtes",
  "Salades",
  "Menus Enfants",
  "desserts",
] as const

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)
  if (!region) return null

  const queryParams = {
    region_id: region.id,
    is_giftcard: false,
    limit: 12,
    fields: "id,title,thumbnail,handle,price,tags",
    ...(product.collection_id && { collection_id: [product.collection_id] }),
    ...(product.tags && {
      tags: product.tags.map((t) => t.value).filter(Boolean),
    }),
  }

  const { response } = await getProductsList({ queryParams, countryCode })
  const products = response.products.filter((p) => p.id !== product.id)

  if (!products.length) return null

  return (
    <div className="product-page-constraint ">
      {/* Client Component */}
      <FilterBar />

      <ul className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:gap-6 gap-2 ">
        {products.map((product) => (
          <li key={product.id}>
            <Product region={region} product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}
