"use client";
import React, { FC, use, useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import {
  Dash,
  Logo,
  Settings,
  Order,
  Customer,
  Inventory,
  Conversation,
  Logout,
  HeadPhones,
  Gift,
  BurgerIcon,
} from "@/image/image";
import Link from "next/link";
import { inter } from "@/styles/fonts";
import SwitchControl from "../SwitchControl/SwitchControl";

const navItems = [
  { label: "Dashboard", href: "/", image: Dash },
  { label: "Orders", href: "/order", image: Order },
  { label: "Inventory", href: "/inventory", image: Inventory },
  { label: "Customers", href: "/customer", image: Customer },
  { label: "Jobs", href: "/conversation", image: Conversation },
  { label: "Settings", href: "/settings", image: Settings },
];


const Header = () => {
  const [rollout, setRollout] = useState(true);
  const [showText, setShowText] = useState(true);

  const handleClick = () => {

    const setDarkTheme = () => {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";


    };

    const setLightTheme = () => {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";

    };
    console.log('localStorage', localStorage)
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {

      console.log('ADD dark')
      setLightTheme()
    } else {
      console.log('Remove dark')
      setDarkTheme()
    }
  };





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
    <div className="relative ">
      <button onClick={handleOpen} className="xs:flex lg:hidden items-center -mr-12 justify-center absolute top-2 right-3 z-10">
        <BurgerIcon />
      </button>
      <header
        className={`bg-white  dark:bg-black-500 h-full ease-in-out delay-150 duration-200   flex  flex-col  justify-between ${rollout
          ? "xs:w-20 lg:w-24 xs:px-1 lg:px-4 "
          : "xs:w-20 lg:w-96  xs:px-2 lg:px-8 xs:hidden lg:flex"
          }`}
      >
        <div>
          <div
            className={`flex items-center ${rollout && "justify-center"
              } cursor-pointer  py-3`}
            onClick={handleOpen}
          >
            <Logo color="" opacity={1} />
            {showText && (
              <h1 className="pl-3 ease-in-out delay-150 duration-200 font-bold  text-xl">
                Metrix
              </h1>
            )}
          </div>
          <Navigation navLinks={navItems} rollout={rollout} showText={showText} />
        </div>
        <div>
          <SwitchControl handleClick={handleClick} />
          <Link
            className={`py-3 px-4 flex items-center ${rollout && "justify-center"
              } bg-grey rounded-2xl  my-2`}
            href="#"
          >
            <HeadPhones />
            {showText && (
              <span className={`${inter.className} text-sm  pl-2`}>
                Contact Support
              </span>
            )}
          </Link>
          <Link
            className={`py-3 px-4 flex items-center ${rollout && "justify-center"
              } bg-white-yellow rounded-2xl my-2`}
            href="#"
          >
            <Gift />
            {showText && (
              <span className={`${inter.className} text-sm  pl-2`}>
                Free Gift Awaits You!
              </span>
            )}
          </Link>
          <Link
            className={`py-10 px-5 flex items-center ${rollout && "justify-center"
              }`}
            href="/api/auth/signout"
          >
            <Logout />
            {showText && (
              <span className={`${inter.className} text-sm text-danger pl-2`}>
                Logout
              </span>
            )}
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
