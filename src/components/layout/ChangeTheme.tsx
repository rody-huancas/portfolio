import { RiMoonClearFill } from '@/utils'

export const ChangeTheme = () => {
  return (
      <button
        className="text-slate-700 hover:text-slate-900 transition-colors duration-300"
        aria-label="Cambiar tema"
      >
        <RiMoonClearFill size={25} />
      </button>
  )
}
