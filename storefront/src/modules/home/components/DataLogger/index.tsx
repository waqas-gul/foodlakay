'use client'

import { useEffect } from "react"

type Props = {
  collections: any
  region: any
}

const DataLogger = ({ collections, region }: Props) => {
  useEffect(() => {
    if (Array.isArray(collections)) {
      collections.forEach((collection, index) => {
        console.log(`📦 Collection [${index}]: ${collection.title || collection.id || "Untitled"}`)

        if (Array.isArray(collection.products)) {
          collection.products.forEach((product, pIndex) => {
            console.log(`  🛒 Product [${pIndex}]:`, product)
          })
        } else {
          console.log("  ⚠️ No products found or 'products' is not an array.")
        }
      })
    } else {
      console.log("❌ 'collections' is not an array:", collections)
    }
  }, [collections])

  return null
}

export default DataLogger
