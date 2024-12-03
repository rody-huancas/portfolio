import { Header } from '@/components'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      
      <main className='mt-32 w-full'>{children}</main>
    </>
  )
}

export default MainLayout
