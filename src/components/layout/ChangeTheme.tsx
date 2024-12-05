'use client'

import { useEffect } from 'react'
import { useThemeStore } from '@/store'
import { RiMoonClearFill, RiSunFill } from '@/utils'

export const ChangeTheme = () => {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    const body = document.body
    if (theme) {
      body.classList.add('dark', 'bg-gray-800')
      body.classList.remove('bg-light')
    } else {
      body.classList.remove('dark')
      body.classList.remove('bg-gray-800')
      body.classList.add('bg-light')
    }
  }, [theme])

  const handleThemeChange = () => setTheme(!theme)

  return (
    <button
      className="text-slate-700 hover:text-slate-900 transition-colors duration-300 flex items-center justify-center gap-3"
      aria-label="Cambiar tema"
      onClick={handleThemeChange}
    >
      {theme ? (
        <RiSunFill size={25} className="icon-rotate" />
      ) : (
        <RiMoonClearFill size={25} className="icon-rotate" />
      )}
      <span className="text-sm md:hidden">Cambiar Modo</span>
    </button>
  )
}
