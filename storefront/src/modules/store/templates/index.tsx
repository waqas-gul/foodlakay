import { Suspense } from "react"
import { Heading, Text, clx} from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { listCategories } from "@lib/data/categories"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import PaginatedProducts from "./paginated-products"

  const productCategories = await listCategories()



const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-16 content-container"
      data-testid="category-container">
      <RefinementList sortBy={sort} />
      <div className="w-full">
        <div className="px-2 flex flex-col justify-center items-start" data-testid="empty-cart-message">
      <Heading
        level="h1"
        className="flex uppercase flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Au menu
      </Heading>
      <Text className="font-normal txt-medium text-xl text-ui-fg-subtle font-semiboldi">
        Uniquement de frais et cuisinés à la commande!
      </Text>
      <div>
      </div>
    </div>


<div className=" mb-8 text-2xl-semi flex flex-col w-full">
        <div className="flex flex-col gap-y-6   items-start justify-between  ">
          <div>

          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid ">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  
                </span>
                <ul
                  className="flex flex-wrap justify-between gap-2"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded 
                        p-2  hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            <div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>




        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
