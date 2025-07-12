"use client"

import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import { useState } from "react"

type ImageGalleryProps = {
  images?: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images = [] }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  if (!images.length) {
    return (
      <Container className="relative aspect-square w-full rounded-xl bg-gray-50 flex items-center justify-center">
        <span className="text-gray-400 text-sm">No images available</span>
      </Container>
    )
  }

  const handleImageClick = () => {
    if (images.length > 1) {
      setIsZoomed(!isZoomed)
    }
  }

  return (
    <div className="relative">
      {/* Main Image Container */}
      <div 
        className={`relative aspect-square w-full rounded-xl bg-gray-100 overflow-hidden transition-all duration-300 ${
          isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
        }`}
        onClick={handleImageClick}
      >
        <Image
          src={images[selectedImage].url}
          priority
          className={`object-contain w-full h-full  transition-transform duration-300 ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          alt={`Product image ${selectedImage + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          quality={100}
        />
        
        {/* Image Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition-all"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
                setIsZoomed(false)
              }}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition-all"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev + 1) % images.length)
                setIsZoomed(false)
              }}
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
          {images.map((image, index) => (
            <button
              key={image.id || index}
              type="button"
              onClick={() => {
                setSelectedImage(index)
                setIsZoomed(false)
              }}
              className={`flex-shrink-0 relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? 'border-indigo-500'
                  : 'border-transparent hover:border-gray-200'
              }`}
            >
              <Image
                src={image.url}
                className="object-cover w-full h-full"
                alt={`Thumbnail ${index + 1}`}
                width={64}
                height={64}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// Simple arrow components (add these to your component file)
const ChevronLeft = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
  </svg>
)

const ChevronRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
  </svg>
)

export default ImageGallery