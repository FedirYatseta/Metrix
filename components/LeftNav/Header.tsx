"use client";
import React, { useEffect, useState } from "react";
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
} from "@/image/image";
import Link from "next/link";
import { inter } from "@/styles/fonts";

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
    <header
      className={`bg-white h-full ease-in-out delay-150 duration-200  flex flex-col  justify-between ${
        rollout
          ? "xs:w-20 lg:w-24 xs:px-1 lg:px-4"
          : "xs:w-48 lg:w-96  xs:px-2 lg:px-8"
      }`}
    >
      <div>
        <div
          className={`flex items-center ${
            rollout && "justify-center"
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
        <Link
          className={`py-3 px-4 flex items-center ${
            rollout && "justify-center"
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
          className={`py-3 px-4 flex items-center ${
            rollout && "justify-center"
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
          className={`py-10 px-5 flex items-center ${
            rollout && "justify-center"
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
  );
};

export default Header;
