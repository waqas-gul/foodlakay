"use client"

import { useState } from "react"

const leftFilters = ["Plats de la semaine", "Populaires"]
const rightFilters = [
  "Plats",
  "Nos pâtes",
  "Salades",
  "Menus Enfants",
  "desserts",
]

export default function FilterBar() {
  const [active, setActive] = useState("Populaires")

  return (
    <div className="flex items-center justify-between flex-wrap lg:gap-3 gap-2 pb-4 mb-8">
      {/* Left-aligned filters */}
      <div className="flex gap-3 flex-wrap">
        {leftFilters.map((filter) => {
          const isActive = filter === active
          return (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`lg:px-7 px-2 py-3 lg:text-sm text-[14px] rounded-full whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-[#D0CCBE] font-semibold text-black"
                  : "bg-white border border-gray-400 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>

      {/* Right-aligned filters */}
      <div className="flex lg:gap-3 gap-2 flex-wrap">
        {rightFilters.map((filter) => {
          const isActive = filter === active
          return (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`lg:px-7 px-2 py-3 text-sm rounded-full whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-[#D0CCBE] font-semibold text-black"
                  : "bg-white border border-gray-400 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>
    </div>
  )
}
