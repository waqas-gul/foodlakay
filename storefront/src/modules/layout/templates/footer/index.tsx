"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Mail,
  ChevronDown,
  ChevronUp,
  Clock,
  Instagram,
  Music,
  PhoneCall,
  Phone,
} from "lucide-react"

const businessHours = [
  { day: "Lundi", hours: "07 H00 à 21H00" },
  { day: "Mardi", hours: "07 H00 à 21H00" },
  { day: "Mercredi", hours: "07 H00 à 21H00" },
  { day: "Jeudi", hours: "07 H00 à 21H00" },
  { day: "Vendredi", hours: "07 H00 à 21H00" },
  { day: "Samedi", hours: "09 H00 à 18H00" },
  { day: "Dimanche", hours: "Fermé" },
]

export default function Footer() {
  const [showAllHours, setShowAllHours] = useState(false)
  const visibleHours = showAllHours ? businessHours : businessHours.slice(0, 5)

  return (
    // <footer className="bg-gray-100 px-4 sm:px-8 lg:px-[100px] py-8 sm:py-12">
    //   {/* Banner */}
    //   <div className="relative w-full h-48 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden my-8 sm:mb-10">
    //     <Image
    //       src="/footer/header-dish.png"
    //       alt="Dish"
    //       fill
    //       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //       className="object-cover"
    //     />
    //     <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    //       <h2 className="text-white text-2xl sm:text-4xl lg:text-[48px] font-semibold text-center px-4">
    //         À très bientôt dans vos assiettes...!
    //       </h2>
    //     </div>
    //   </div>

    //   {/* Main Content */}
    //   <div className="flex flex-col lg:flex-row gap-6 py-10">
    //     {/* Left Column */}
    //     <div className="w-full lg:w-1/3 flex flex-col">
    //       <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4">
    //         <div className="w-full py-4 bg-white rounded-lg sm:rounded-xl px-4 sm:px-5 lg:py-5 text-sm  flex items-center justify-between gap-2 shadow">
    //           Instagram <Instagram size={16} />
    //         </div>
    //         <div className="w-full bg-white rounded-lg sm:rounded-xl px-4 text-sm sm:px-5 lg:py-5 py-4 flex items-center justify-between gap-2 shadow">
    //           TikTok <Music size={16} />
    //         </div>
    //       </div>
    //       <div className="w-full bg-[#4F4B41] mt-4 rounded-xl text-white flex items-center justify-between text-sm border-b border-[#4F4B41] lg:p-5 sm:pb-4 px-4 py-4 sm:px-5">
    //         <span>Book a Call</span>
    //         <PhoneCall size={20} />
    //       </div>
    //       <div className="bg-[#4F4B41] text-white flex flex-col items-center rounded-xl justify-between p-4 sm:p-6 mt-4">
    //         <div className="flex flex-col items-center justify-center flex-1 my-4 sm:my-6">
    //           <div className="w-30 h-30 sm:w-32 sm:h-32 lg:w-full lg:h-full rounded-full bg-[#4F4B41] flex items-center justify-center mb-3 sm:mb-4">
    //             <img
    //               src="footer//footer-logo.png"
    //               alt="Logo"
    //               className="w-50 h-30 sm:w-30 sm:h-30 lg:w-[283px] lg:h-[174px]"
    //             />
    //           </div>
    //         </div>
    //         <div className="text-xs text-[#FFFFFF99]">© By AQIN IO</div>
    //       </div>
    //     </div>

    //     {/* Middle Column */}
    //     <div className="w-full lg:w-1/3 rounded-xl">
    //       <div className="flex flex-col sm:flex-row w-full items-stretch justify-between text-[14px] gap-3 sm:gap-4 lg:mb-4 sm:mb-6">
    //         <div className="bg-white rounded-lg sm:rounded-xl lg:py-5 sm:p-3 py-4 flex items-center justify-center shadow">
    //           <ChevronDown size={16} />
    //         </div>
    //         <div className="bg-white text-[14px] rounded-lg sm:rounded-xl  sm:px-5 lg:py-5 py-5 flex items-center gap-2 justify-center shadow">
    //           <Clock size={16} className="text-green-500" />
    //           <span className="text-green-600">Ouvert</span>
    //           <span className="text-black ml-1">Vendredi</span>
    //         </div>
    //         <div className="bg-white text-[14px] py-4 mb-2 lg:mb-0 rounded-lg sm:rounded-xl lg:px-4 sm:px-5 lg:py-5 sm:py-3 flex items-center justify-center shadow">
    //           07h00 à 20h00
    //         </div>
    //       </div>

    //       <div className="space-y-3 sm:space-y-4">
    //         {visibleHours.map((h, idx) => (
    //           <div key={idx} className="flex flex-col sm:flex-row gap-4">
    //             <div className="w-full flex items-center py-4 justify-around gap-2 sm:gap-3 bg-white rounded-lg sm:rounded-xl lg:px-5 sm:px-5 lg:py-5 sm:py-3 shadow">
    //               <Clock className="text-green-500" size={18} />
    //               <span className="text-sm sm:text-base">{h.day}</span>
    //             </div>
    //             <span className="w-full flex items-center py-4 justify-center text-xs sm:text-sm text-gray-700 bg-white rounded-lg sm:rounded-xl lg:px-4 sm:px-5 lg:py-5 sm:py-3 shadow">
    //               {h.hours}
    //             </span>
    //           </div>
    //         ))}
    //       </div>

    //       <div className="mt-4 sm:mt-6 text-center">
    //         <button
    //           onClick={() => setShowAllHours(!showAllHours)}
    //           className="text-gray-800 text-sm flex items-center justify-center gap-1 mx-auto"
    //         >
    //           {showAllHours ? "Voir moins" : "Voir plus"}
    //           {showAllHours ? (
    //             <ChevronUp size={16} />
    //           ) : (
    //             <ChevronDown size={16} />
    //           )}
    //         </button>
    //       </div>
    //     </div>

    //     {/* Right Column */}
    //     <div className="w-full lg:w-1/3">
    //       <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
    //         <div className="w-full flex items-center py-4 justify-center bg-white rounded-lg sm:rounded-xl px-4 sm:px-5 lg:py-5 sm:py-3 shadow text-gray-600 gap-2">
    //           <Phone size={16} />
    //           <span>06 98 85 86 63</span>
    //         </div>
    //         <div className="w-full flex items-center py-4 justify-center bg-white rounded-lg sm:rounded-xl px-4 sm:px-5 lg:py-5 sm:py-3 shadow text-gray-600">
    //           Contact@lidialakay.fr
    //         </div>
    //       </div>

    //       <form className="bg-[#D0CCBE] rounded-lg sm:rounded-xl lg:p-12 p-6">
    //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:mb-8 mb-4">
    //           <input
    //             type="text"
    //             name="name"
    //             placeholder="Your Name"
    //             className="p-4 bg-white placeholder-black rounded-md outline-none text-sm sm:text-base"
    //             required
    //           />
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="Your Email"
    //             className="p-4 bg-white placeholder-black rounded-md outline-none text-sm sm:text-base"
    //             required
    //           />
    //         </div>
    //         <textarea
    //           name="message"
    //           placeholder="Your Message"
    //           rows={4}
    //           className="w-full p-4 sm:p-3 mb-4  bg-white placeholder-black rounded-md outline-none lg:mb-6 sm:mb-4 text-sm sm:text-base"
    //           required
    //         />
    //         <button
    //           type="submit"
    //           className="bg-[#3f3a32] text-white py-4 rounded-md w-full hover:bg-[#2a2720] transition-colors text-sm sm:text-base"
    //         >
    //           Send Message
    //         </button>
    //       </form>
    //     </div>
    //   </div>

    //   <div className="text-center text-xs text-gray-500 mt-8 sm:mt-10">
    //     © {new Date().getFullYear()} Lidia Lakay. All rights reserved.
    //   </div>
    // </footer>

   <footer className=" bg-gray-100 text-white py-6 px-4 sm:px-6 lg:px-[110px]">
  {/* Top Info Boxes */}
  <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 md:mb-10">
    {/* First empty box - hidden on mobile */}
    <div className="hidden md:flex w-full md:w-auto items-center gap-2 bg-white text-black shadow-md rounded-lg px-4 py-3 min-w-[160px] justify-center">
      <ChevronDown className="w-6 h-6" />
    </div>
    
    {/* Ouvert + Day */}
    <div className="col-span-1 flex items-center gap-2 bg-white text-black shadow-md rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[120px] sm:min-w-[160px] justify-center">
      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
      <span className="text-green-600 font-semibold text-xs sm:text-base">Ouvert</span>
      <span className="text-xs sm:text-base">Vendredi</span>
    </div>

    {/* Hours */}
    <div className="col-span-1 flex items-center gap-2 bg-white text-black shadow-md rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[120px] sm:min-w-[160px] justify-center">
      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
      <span className="text-xs sm:text-base">07h00 à 20h00</span>
    </div>

    {/* Instagram */}
    <div className="flex items-center gap-2 bg-white text-black shadow-lg rounded-md px-3 py-2 sm:px-4 sm:py-3 min-w-[40px] sm:min-w-[50px] justify-center">
      <Instagram className="w-4 h-4 sm:w-6 sm:h-6" />
    </div>
    
    {/* Pinterest */}
    <div className="flex items-center gap-2 bg-white text-black shadow-lg rounded-md px-3 py-2 sm:px-4 sm:py-3 min-w-[40px] sm:min-w-[50px] justify-center">
      <img src="/footer/ph_pinterest-logo-light.png" alt="" className="w-4 h-4 sm:w-6 sm:h-6" />
    </div>

    {/* Phone - shown on larger screens */}
    <div className="hidden sm:flex items-center gap-2 bg-white text-black shadow-md rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[140px] sm:min-w-[180px] justify-center">
      <Phone className="w-3 h-3 sm:w-5 sm:h-5" />
      <span className="text-xs sm:text-base">06 98 85 86 63</span>
    </div>

    {/* Email - shown on larger screens */}
    <div className="hidden md:flex items-center gap-2 bg-white text-black shadow-md rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[180px] sm:min-w-[220px] justify-center">
      <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
      <span className="text-xs sm:text-base">Contact@lidialakay.fr</span>
    </div>

    {/* Mobile-only row for phone and email */}
    <div className="col-span-2 flex sm:hidden gap-2 w-full mt-2">
      <div className="w-full flex items-center gap-2 bg-white text-black shadow-md rounded-lg px-3 py-2 justify-center">
        <Phone className="w-3 h-3" />
        <span className="text-xs">06 98 85 86 63</span>
      </div>
      <div className="w-full flex items-center gap-2 bg-white text-black shadow-md rounded-lg px-3 py-2 justify-center">
        <Mail className="w-3 h-3" />
        <span className="text-xs">Contact</span>
      </div>
    </div>
  </div>

  {/* Logo and Bottom Text */}
  <div className="w-full flex flex-col items-center px-4 py-6 sm:py-10 space-y-4 bg-[#4F4B41]  rounded-xl ">
    <Image
      src="/footer/footer-logo.png"
      alt="Lidia Lakay Logo"
      width={174}
      height={174}
      className="w-32 h-20 sm:w-32 sm:h-32 lg:w-60 lg:h-48 md:w-60 md:h-60"
    />
    <p className="text-xs sm:text-sm text-gray-300">© By AQIN IO</p>
  </div>
</footer>
  )
}
