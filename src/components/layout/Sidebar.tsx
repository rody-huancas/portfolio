'use client'

/*Components */
import { ButtonContact, Logo, NavLink } from '@/components'
/*Utils */
import { cn } from '@/utils'
/*Constants */
import { MenuLinks } from '@/constants'
/*Store */
import { useThemeStore } from '@/store'
/*Hooks */
import { useBodyScrollLock } from '@/hooks'

export const Sidebar = () => {
  const { menuIsOpen, setMenuIsOpen } = useThemeStore()

  useBodyScrollLock(menuIsOpen)

  return (
    <>
      <aside
        className={cn(
          'fixed top-0 left-0 w-72 h-screen bg-white z-50 transition-all duration-500 p-5 flex flex-col justify-between md:hidden',
          !menuIsOpen && '-left-full',
        )}
      >
        <div className="flex flex-col gap-8">
          <Logo />

          <nav
            className="flex-col items-center space-y-3 "
            aria-label="Primary Navigation"
          >
            {MenuLinks.map(({ href, description, title, icon: Icon }) => (
              <NavLink
                key={title}
                href={href}
                title={description}
                onClick={() => setMenuIsOpen(false)}
              >
                <Icon className="inline-block text-lg" aria-hidden="true" />
                {title}
              </NavLink>
            ))}
          </nav>
        </div>

        <div>
          <ButtonContact />
        </div>
      </aside>

      {menuIsOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMenuIsOpen(false)}
        />
      )}
    </>
  )
}
