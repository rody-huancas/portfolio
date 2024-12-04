import { Footer, Header } from '@/components'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      
      <main className='mt-28 w-full'>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default MainLayout
