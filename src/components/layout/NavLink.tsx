'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
/* Utils */
import { cn } from '@/utils'

interface NavLinkProps extends LinkProps {
  href     : string
  title   ?: string
  children : ReactNode
}

export const NavLink = ({ href, title, children, ...props }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'hover:bg-gray-100 p-2.5 text-sm rounded-md text-slate-600 dark:hover:bg-gray-50/95 dark:text-white dark:hover:text-gray-800 hover:text-slate-800 flex items-center justify-start md:justify-center gap-2 transition-colors duration-300',
        isActive && 'bg-gray-100 dark:bg-gray-100/95 text-slate-800 dark:text-gray-800',
      )}
      title={title}
      {...props}
    >
      {children}
    </Link>
  )
}
