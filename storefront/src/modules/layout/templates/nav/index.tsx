import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Button from "@modules/elements/button"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
   <div className="sticky top-0 inset-x-0 z-50  ">
  <header className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base relative  mx-auto duration-200 bg-white px-4 lg:px-[80px] lg:py-[30px]  h-[110px]">
    <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular ">
      <div className="flex-1 basis-0 h-full flex items-center">
        <div className="h-full">
          <SideMenu regions={regions} />
        </div>
      </div>

      <div className="flex items-center h-full">
        <LocalizedClientLink
          href="/"
          className="txt-compact-xlarge-plus hover:text-ui-fg-base"
          data-testid="nav-store-link"
        >
          <div className="flex gap-1 text-2xl leading-[100%]">
            <p className="font-light">LIDIA</p>
            <p className="font-bold">LAKAY</p>
          </div>
        </LocalizedClientLink>
      </div>

      <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
        <div className="hidden small:flex items-center gap-x-6 h-full">
          <div className="hidden small:flex items-center gap-x-6 h-full w-full max-w-xs">
      <LocalizedClientLink
        className="txt-compact-xlarge-plus py-[13px] px-[16px] text-ui-fg-subtle hover:text-ui-fg-base border border-[#010205] rounded-full  hover:bg-[#4d473d] hover:text-white transition-colors duration-200 font-semibold"
        href="/search"
        scroll={false}
      >
        Recherche
      </LocalizedClientLink>
    </div>
          
         <LocalizedClientLink
      className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base border border-[#010205] rounded-full py-[13px] px-[16px] hover:bg-[#4d473d] hover:text-white transition-colors duration-200 font-semibold"
      href="/account"
      data-testid="nav-account-link"
    >
      Compte
    </LocalizedClientLink>
        </div>
        <Suspense
          fallback={
            <LocalizedClientLink
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base flex gap-2"
              href="/cart"
              data-testid="nav-cart-link"
            >
              Panier (0)
            </LocalizedClientLink>
          }
        >
          <CartButton />
        </Suspense>
      </div>
    </nav>
  </header>
</div>
  )
}
