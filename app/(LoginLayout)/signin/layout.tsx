import '@/styles/globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import logo from "@/app/(PanelLayout)/next.svg"

export const metadata: Metadata = {
  title: 'Metrix',
  description: 'Login',
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
        <div className="bg-white p-9 rounded-xl  m-auto">
          {children}
        </div>
      </div>
    </section>
  )
}

export default LoginLayout