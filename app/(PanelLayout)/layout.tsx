'use client';
import "@/styles/globals.css";
import type { Metadata } from "next";

import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/LeftNav/Header";
import ClientComponent from "@/components/TopNav/CurentSegment";
import Panel from "@/components/TopNav/Panel";
import Breadcrumbs from "@/components/TopNav/Breadcrumbs";
import { BurgerIcon } from "@/image/image";
import { useEffect, useState } from "react";
export const metadata: Metadata = {
  title: "Metrix",
  description: "Createt  by FedirY",
};

const PanelLayout = ({ children }: { children: React.ReactNode }) => {
  const [rollout, setRollout] = useState(true);
  const [showText, setShowText] = useState(true);

  // Add a delay before showing the text after the rollout animation
  useEffect(() => {
    const delay = rollout === false ? 400 : 0; // Adjust this to your animation duration
    setTimeout(() => {
      setShowText(!showText);
    }, delay);
  }, [rollout]);
  const handleOpen = () => {
    setRollout(!rollout);
  };
  return (
    <>
      <Header handleOpen={handleOpen} showText={showText} rollout={rollout} />
      <div className="flex flex-col w-full h-full">
        <section className="w-full bg-white">
          <div className="flex xs:px-2 lg:px-5  xs:py-1 lg:py-3 justify-between items-center">
            <button onClick={handleOpen} className="xs:flex lg:hidden items-center justify-center">
              <BurgerIcon />
            </button>
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
