import type { Metadata } from 'next'
/* Components */
import { Background } from '@/components'
/* Styles */
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Rody Huancas',
  description: 'Desarrollador Web',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <Background />
      </body>
    </html>
  )
}
