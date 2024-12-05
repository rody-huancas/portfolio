'use client'

import Link from 'next/link'
/* Components */
import { ChangeTheme, Logo, NavLinks } from '@/components'
/* Utils */
import { cn, TbArrowElbowRight } from '@/utils'
/* Hooks */
import { useScroll } from '@/hooks'

export const Header = () => {
  const isScrolled = useScroll(20);

  return (
    <header
      className={cn(
        'bg-white flex items-center justify-between py-2 px-5 rounded-lg shadow-nav fixed left-1/2 transform -translate-x-1/2 container lg:w-main z-40 transition-all duration-300',
        isScrolled ? 'top-0' : 'top-10'
      )}
    >
      <Logo />

      <NavLinks />

      <div className="flex items-center gap-5">
        <ChangeTheme />

        <Link
          href="/contact"
          className="py-3.5 px-5 bg-slate-800 rounded-lg text-white font-medium text-md flex items-center gap-2 hover:bg-slate-950 transition-colors duration-300"
          title="Contáctame"
        >
          Contacto
          <TbArrowElbowRight size={20} />
        </Link>
      </div>
    </header>
  )
}
