import Link from 'next/link'
/* Components */
import { ChangeTheme, Logo, NavLinks } from '@/components'
/* Utils */
import { TbArrowElbowRight } from '@/utils'

export const Header = () => {
  return (
    <header className="bg-white flex items-center justify-between py-3 px-5 rounded-lg shadow-nav fixed top-12 left-1/2 transform -translate-x-1/2 container lg:w-main">
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
