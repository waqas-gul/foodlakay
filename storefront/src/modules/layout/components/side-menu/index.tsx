"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"
import { Phone } from 'lucide-react';
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"
import UnderlineLink from "@modules/common/components/interactive-link"
import { Button, Heading } from "@medusajs/ui"
const SideMenuItems = {
  
  MENU: "/store",
  CONCEPT: "/search",
  SERVICES: "/search",
  COMPTE: "/account",
  Recherche: "/search",


}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
     <div className="flex items-center h-full">
  <Popover className="h-full gap-x-6 flex">
    {({ open, close }) => (
      <>
        <div className="lg:hidden inset-x-0 bottom-0 relative flex h-full">
          <Popover.Button
            data-testid="nav-menu-button"
            className="relative h-full flex items-center transition-all txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base ease-out duration-200 focus:outline-none"
          >
            Menu
          </Popover.Button>
        </div>

        <div className="hidden small:flex items-center gap-x-6 h-full">
      <LocalizedClientLink href="/store">
<Button className="font-manrope bg-white border py-[13px] px-[16px] border-1 border-[#010205] text-[#010205] hover:text-white hover:border-[#4d473d] relative inline-flex items-center justify-center overflow-hidden rounded-full outline-none disabled:bg-ui-bg-disabled disabled:border-ui-border-base disabled:text-ui-fg-disabled disabled:shadow-buttons-neutral disabled:after:hidden after:transition-fg after:absolute after:inset-0 after:content-[''] shadow-buttons-inverted after:button-inverted-gradient hover:bg-[#4d473d] hover:after:button-inverted-hover-gradient active:bg-ui-button-inverted-pressed active:after:button-inverted-pressed-gradient focus:!shadow-buttons-inverted-focus txt-compact-small-plus gap-x-1.5 h-12 uppercase transition-colors duration-200 text-base font-semibold">
  Commander en ligne
</Button>
</LocalizedClientLink>
          
   <a 
  href="tel:0698858663" 
  className="group flex items-center justify-center p-2 w-[49px] h-[49px] rounded-full bg-[#4F4B41] hover:bg-gray-100 transition-colors duration-200"
  aria-label="Call 06 98 85 86 63"
  title="Call 06 98 85 86 63"
>
  <Phone className="w-6 h-6 text-white transition-colors duration-200 group-hover:text-[#4d473d]" />
</a>
        </div>

        <Transition
          show={open}
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100 backdrop-blur-2xl"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 backdrop-blur-2xl"
          leaveTo="opacity-0"
        >
          <Popover.Panel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
            <div
              data-testid="nav-menu-popup"
              className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6"
            >
              <div className="flex justify-end" id="xmark">
                <button data-testid="close-menu-button" onClick={close}>
                  <XMark />
                </button>
              </div>

              <ul className="flex flex-col gap-6 items-start justify-start">
                {Object.entries(SideMenuItems).map(([name, href]) => {
                  return (
                    <li key={name}>
                      <LocalizedClientLink
                        href={href}
                        className="text-3xl leading-10 hover:text-ui-fg-disabled transition-colors duration-200"
                        onClick={close}
                        data-testid={`${name.toLowerCase()}-link`}
                      >
                        {name}
                      </LocalizedClientLink>
                    </li>
                  )
                })}
              </ul>
              
              <div className="flex flex-col gap-y-6">
                <Text className="flex justify-between txt-compact-small">
                  © {new Date().getFullYear()} LIDIA LAKAY. Tous droits réservés
                </Text>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
</div>
    </div>
  )
}

export default SideMenu
