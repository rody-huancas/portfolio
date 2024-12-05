import Link from 'next/link'
/* Utils */
import { TbArrowElbowRight } from '@/utils'

export const ButtonContact = () => {
  return (
    <Link
      href="/contact"
      className="py-3.5 px-5 bg-slate-800 rounded-lg text-white font-medium text-md flex items-center justify-center gap-2 hover:bg-slate-950 transition-colors duration-300"
      title="Contáctame"
    >
      Contacto
      <TbArrowElbowRight size={20} />
    </Link>
  )
}
