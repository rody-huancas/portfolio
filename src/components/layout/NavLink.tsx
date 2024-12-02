import Link from 'next/link'
import { ReactNode } from 'react'

interface NavLinkProps {
  href     : string
  title   ?: string
  children : ReactNode
}

export const NavLink = ({ href, title, children }: NavLinkProps) => (
  <Link
    href={href}
    className="hover:underline text-slate-700 flex items-center justify-center gap-1"
    title={title}
  >
    {children}
  </Link>
)
