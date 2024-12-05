import { ReactNode } from 'react'
/* Components */
import { Footer, Header, Sidebar } from '@/components'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Sidebar />
      
      <main className='mt-28 w-full px-5 sm:px-0'>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default MainLayout
