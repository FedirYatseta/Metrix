import '@/styles/globals.css'
import type { Metadata } from 'next'
import Providers from '@/components/Providers'
import { poppins } from './fonts'

export const metadata: Metadata = {
  title: 'Metrix',
  description: 'Createt  by FedirY',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <html lang="en" className={poppins.className}>
      <body className='bg-main flex  h-screen relative' >
        <Providers>
          {children}
        </Providers>
        {/* <Image src={login} alt='pixel' className='absolute  inset-y-0 left-0 z-0 opacity-50' /> */}
      </body>

    </html>
  )
}

export default RootLayout