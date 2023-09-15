import "@/styles/globals.css";
import type { Metadata } from "next";
import Providers from "@/components/Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/LeftNav/Header";
import ClientComponent from "@/components/TopNav/CurentSegment";
import Panel from "@/components/TopNav/Panel";
import Breadcrumbs from "@/components/TopNav/Breadcrumbs";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "@/configs/auth";
import { poppins } from "@/styles/fonts";
export const metadata: Metadata = {
  title: "Metrix",
  description: "Createt  by FedirY",
};

const PanelLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full h-full">
        <section className="w-full bg-white">
          <div className="flex xs:px-2 lg:px-5  xs:py-1 lg:py-3 justify-between items-center">
            <ClientComponent />
            <Panel />
          </div>
          <Breadcrumbs />
        </section>
        <main className="flex-col w-full h-full overflow-hidden">
          {children}
        </main>
      </div>
    </>
  );
};

export default PanelLayout;
