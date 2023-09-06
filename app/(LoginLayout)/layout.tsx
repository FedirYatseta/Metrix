import '@/styles/globals.css'
import type { Metadata } from 'next'
import Providers from '@/components/Providers'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { poppins } from '@/styles/fonts';
import logo from '@/app/(PanelLayout)/next.svg'
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Metrix',
  description: 'Createt  by FedirY',
}

const LoginLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <section className="h-full w-full ">
      <div className="py-3 px-20 bg-white absolute w-full ">
        <Image priority src={logo} alt='logo' width={50} height={50} />
      </div>
      <div className="h-full flex items-center justify-center ">
        <div className="bg-white p-9 rounded-xl  m-auto flex flex-col items-center">
          <Image priority src={logo} alt='logo' className="m-auto my-3 " width={55} height={55} />

          {children}
        </div>
      </div>
    </section>
  )
}

export default LoginLayout