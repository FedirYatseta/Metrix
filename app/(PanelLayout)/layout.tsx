import '@/styles/globals.css'
import type { Metadata } from 'next'
import Providers from '@/components/Providers'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/LeftNav/Header';
import ClientComponent from '@/components/TopNav/CurentSegment';
import Panel from '@/components/TopNav/Panel';
import Breadcrumbs from '@/components/TopNav/Breadcrumbs';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authConfig } from '@/configs/auth';
import { poppins } from '@/styles/fonts';
export const metadata: Metadata = {
  title: 'Metrix',
  description: 'Createt  by FedirY',
}

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const session = await getServerSession(authConfig)
  console.log('session', session)


  return (
    <html lang="en" className={poppins.className}>
      <body className='bg-main flex  h-screen relative' >
        <ToastContainer />
        <Providers>
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
        </Providers>
        {/* <Image src={login} alt='pixel' className='absolute  inset-y-0 left-0 z-0 opacity-50' /> */}
      </body>

    </html>
  )
}

export default RootLayout