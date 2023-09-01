import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/LeftNav/Header'
import ClientComponent from '@/components/TopNav/CurentSegment'
import Breadcrumbs from '@/components/TopNav/Breadcrumbs'
import Panel from '@/components/TopNav/Panel'



export const metadata: Metadata = {
  title: 'Metrix',
  description: 'Createt  by FedirY',
}

const MainLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <>
      <Header />
      <div className='flex flex-col w-full'>
        <section className='w-full bg-white'>
          <div className='flex px-5 py-3 justify-between items-center'>
            <ClientComponent />
            <Panel />
          </div>
          <Breadcrumbs />
        </section>
        {children}
      </div>
    </>
  )
}

export default MainLayout