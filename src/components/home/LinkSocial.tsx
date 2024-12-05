import { FC, ReactNode } from 'react'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href : string
  icon : ReactNode
  title: string
}

export const LinkSocial: FC<Props> = ({ href, icon: Icon, title, ...props }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 border border-gray-500 rounded-xl flex items-center justify-center hover:bg-gray-700 hover:text-white transition-colors duration-300"
      title={title}
      aria-label={title}
      {...props}
    >
      {Icon}
    </a>
  )
}
