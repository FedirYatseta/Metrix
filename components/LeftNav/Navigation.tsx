"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { inter } from "@/styles/fonts";

type NavLink = {
  label: string;
  href: string;
  image: any;
};

type Props = {
  navLinks: NavLink[];
  rollout: boolean;
  showText: boolean;
};

const Navigation = ({ navLinks, rollout, showText }: Props) => {
  const pathname = usePathname();

  return (
    <nav
      className={`w-full flex flex-col ${!rollout
        ? " justify-start  items-start"
        : " justify-center  items-center"
        }   xs:mt-2 lg:mt-7 `}
    >
      {navLinks.map((link) => {
        const isActive: boolean = pathname === link.href;

        return (
          <Link
            href={link.href}
            key={link.label}
            className={`${isActive ? "bg-primary-0 text-white" : "bg-white dark:bg-black-200 text-black"
              }
                        ${showText ? "justify-start" : "justify-center"}
                         text-xl  font-serif font-semibold  not-italic my-2
                          leading-normal tracking-normal flex items-center xs:px-2 lg:px-5 xs:py-2 lg:py-4
                           rounded-xl  max-w-xs xs:w-9/12 lg:w-full ease-in-out delay-150 duration-200`}
          >
            <div className="w-5 h-5">
              <link.image isActive={isActive} />
            </div>
            {showText && (
              <p className={`ml-4 ${inter.className} text-sm font-normal `}>
                {link.label}{" "}
              </p>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export { Navigation };
