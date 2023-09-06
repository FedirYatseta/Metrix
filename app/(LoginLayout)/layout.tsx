import '@/styles/globals.css'
import type { Metadata } from 'next'
import Providers from '@/components/Providers'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  return (
    <html lang="en" className={poppins.className}>
      <body className='bg-main flex  h-screen relative' >
        <ToastContainer />
        <Providers>
          {children}
        </Providers>
      </body>

    </html>
  )
}

export default RootLayout