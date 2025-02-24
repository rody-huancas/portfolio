'use client'

import Image from 'next/image'
import { useState } from 'react'
/* Hooks */
import { useBodyScrollLock } from '@/hooks'
/* Icons */
import { GoPlus } from '@/utils'

export const ImagePreview: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const toggleExpand = () => setIsExpanded((prev) => !prev)

  useBodyScrollLock(isExpanded)

  return (
    <div className="relative group">
      <Image
        src="https://res.cloudinary.com/dmgazox1n/image/upload/v1740382956/Portafolio/Projects/novtiq-dashboard.png"
        alt="Preview"
        width={400}
        height={300}
        className="w-full h-auto cursor-pointer rounded-xl object-contain"
      />

      <button
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
        onClick={toggleExpand}
      >
        <span className="bg-white shadow-sm text-2xl font-bold text-slate-800 p-1 rounded-full">
          <GoPlus />
        </span>
      </button>

      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={toggleExpand}
        >
          <div
            className="relative px-5 lg:px-0"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="https://res.cloudinary.com/dmgazox1n/image/upload/v1740382956/Portafolio/Projects/novtiq-dashboard.png"
              alt="Expanded"
              width={1000}
              height={700}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}
