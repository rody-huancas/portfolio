import { Footer, Header } from '@/components'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      
      <main className='mt-28 w-full px-5 md:px-0'>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default MainLayout
