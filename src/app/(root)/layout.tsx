import { Header } from '@/components'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      
      <main>{children}</main>
    </>
  )
}

export default MainLayout
