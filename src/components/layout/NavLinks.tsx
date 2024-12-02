import { NavLink } from '@/components'
import { MenuLinks } from '@/constants'

export const NavLinks = () => {
  return (
    <nav className="flex space-x-5" aria-label="Primary Navigation">
      {MenuLinks.map(({href, description, title, icon: Icon}) => (
        <NavLink href={href} title={description} key={title}>
          <Icon className="inline-block text-lg" aria-hidden="true" />
          {title}
        </NavLink>
      ))}
    </nav>
  )
}
