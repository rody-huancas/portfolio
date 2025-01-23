import Link from 'next/link'
import { ReactNode } from 'react'
import { cn, IoIosArrowRoundForward } from '@/utils'

interface Props {
  children  : ReactNode
  nameLink? : string
  href?     : string
  title?    : string
  className?: string;
}

export const Card = (props: Props) => {
  const { children, nameLink, title, href, className } = props
  return (
    <div className={cn("bg-white dark:bg-dark p-5 shadow-nav rounded-xl text-gray-600 dark:text-light space-y-5 md:h-full", className)}>
      { title && (
        <div className="flex items-center justify-between">
          { title && <h3 className="text-lg font-semibold text-gray-700 dark:text-light font-secondary">{title}</h3> }

          {href && (
            <Link href={href} className="flex items-center text-xs text-blue-600 dark:text-blue-300 font-medium underline underline-offset-2 hover:text-blue-700">
              {nameLink}
              <IoIosArrowRoundForward size={20} />
            </Link>
          )}
        </div>
      ) }
      <div>{children}</div>
    </div>
  )
}
