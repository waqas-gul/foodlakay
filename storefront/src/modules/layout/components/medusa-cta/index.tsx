import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        Conditions
      </a>
      <a href="https://www.medusajs.com" target="_blank" rel="noreferrer">
        Confidentialité
      </a>
      
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        Cookies
      </a>
    </Text>
  )
}

export default MedusaCTA
