import Link from 'next/link'
import { ReactNode } from 'react'
import { IoIosArrowRoundForward } from '@/utils'

interface Props {
  children : ReactNode
  nameLink?: string
  href    ?: string
  title    : string
}

export const Card = (props: Props) => {
  const { children, nameLink, title, href } = props
  return (
    <div className="bg-white p-5 shadow-nav rounded-xl text-gray-600 space-y-5 h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>

        {href && (
          <Link href={href} className="flex items-center gap-2 text-xs text-blue-600 font-medium underline underline-offset-2 hover:text-blue-700">
            {nameLink}
            <IoIosArrowRoundForward size={20} />
          </Link>
        )}
      </div>
      <div>{children}</div>
    </div>
  )
}