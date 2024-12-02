import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
/* Components */
import { Background } from '@/components'
/* Styles */
import '@/styles/globals.css'
import { cn } from '@/utils'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rody Huancas',
  description: 'Desarrollador Web',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={cn("w-main mx-auto p-10", poppins.className)}>
        {children}
        <Background />
      </body>
    </html>
  )
}
