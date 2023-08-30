"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';




type NavLink = {
    label: string;
    href: string;
}

type Props = {
    navLinks: NavLink[]
}

const Navigation = ({ navLinks }: Props) => {

    return (
        <nav className='w-full flex justify-start ml-20 items-center'>{
            navLinks.map(link => {
                return (
                    <Link href={link.href} key={link.label} className='text-xl text-black font-serif font-semibold mx-7 not-italic leading-normal tracking-normal' > {link.label}</Link>
                )
            })
        }

        </nav>
    )
}

export { Navigation }