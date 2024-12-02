import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link href="/" className="relative w-16 h-16" title="Inicio">
      <Image
        src="/logo.webp"
        alt="Logo Rody"
        fill
        className="object-contain opacity-100 filter-none"
      />
    </Link>
  )
}
