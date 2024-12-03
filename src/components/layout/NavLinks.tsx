import { NavLink } from '@/components'
import { MenuLinks } from '@/constants'

export const NavLinks = () => {
  return (
    <nav className="flex space-x-1" aria-label="Primary Navigation">
      {MenuLinks.map(({ href, description, title, icon: Icon }) => (
        <NavLink key={title} href={href} title={description}>
          <Icon className="inline-block text-lg" aria-hidden="true" />
          {title}
        </NavLink>
      ))}
    </nav>
  )
}
