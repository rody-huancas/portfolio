import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link
      href="/"
      className="relative w-16 h-16"
      title="Inicio"
      aria-label="Inicio"
    >
      <Image
        src="/logo.webp"
        alt="Logo de Rody Huancas, desarrollador web Full Stack"
        fill
        unoptimized
        className="object-contain opacity-100 filter-none"
      />
    </Link>
  )
}
