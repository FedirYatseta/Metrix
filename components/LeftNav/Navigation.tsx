"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { inter } from '@/app/fonts';



type NavLink = {
    label: string;
    href: string;
    image: any
}

type Props = {
    navLinks: NavLink[]
    rollout: boolean
    showText: boolean
}

const Navigation = ({ navLinks, rollout, showText }: Props) => {
    const pathname = usePathname()



    return (
        <nav className={`w-full flex flex-col ${!rollout ? ' justify-start' : ' justify-center'}  items-start mt-7 `}>{
            navLinks.map(link => {
                const isActive: boolean = pathname === link.href

                return (
                    <Link
                        href={link.href}
                        key={link.label}
                        className={`${isActive ? 'bg-primary text-white' : 'bg-white text-black'}
                        ${showText ? 'justify-start' : 'justify-center'}
                         text-xl  font-serif font-semibold  not-italic my-2
                          leading-normal tracking-normal flex items-center px-5 py-4
                           rounded-xl  max-w-xs w-full ease-in-out delay-150 duration-200`} >
                        <link.image isActive={isActive} />
                        {showText && <p className={`ml-4 ${inter.className} text-sm font-normal `}>{link.label}  </p>}
                    </Link>
                )
            })
        }

        </nav>
    )
}

export { Navigation }