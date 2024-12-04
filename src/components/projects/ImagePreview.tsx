'use client'

import { useState } from 'react'
import Image from 'next/image'

export const ImagePreview = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="relative group">
      <Image
        src="/project.png"
        alt="Preview"
        width={400}
        height={300}
        className="w-full h-auto cursor-pointer rounded-lg"
      />

      <button
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={toggleExpand}
      >
        <span className="text-white text-4xl font-bold">+</span>
      </button>

      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={toggleExpand}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/project.png"
              alt="Expanded"
              width={1000}
              height={700}
              className="w-[1000px] h-[700px] object-cover rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}
