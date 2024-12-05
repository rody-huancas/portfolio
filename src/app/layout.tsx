import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
/* Components */
import { Background } from '@/components'
/* Utils */
import { cn } from '@/utils'
/* Styles */
import '@/styles/globals.css'

const poppins = Poppins({ 
  weight: ['400', '500', '700', '900'], 
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Rody Huancas',
  description: 'Desarrollador Web',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={cn("container lg:w-main mx-auto py-10 bg-light", poppins.className)}>
        {children}
        <Background />
      </body>
    </html>
  )
}
