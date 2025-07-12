import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import ChefIntro from "@modules/home/components/ChefIntro"
import MenuSection from "@modules/home/components/ReviewSection"
import DataLogger from "@modules/home/components/DataLogger"


export const metadata: Metadata = {
  title: "LIDIA LAKAY | Cuisine du monde fait maison à VILLEPREUX",
  description:
    "Cuisine du monde fait maison avec des produits frais. A emporter.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>

    
      

      <Hero />
      <ChefIntro />
      <FeaturedProducts collections={collections} region={region} />
      <MenuSection />
    </>
  )
}
