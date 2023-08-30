import React from "react"
import { Navigation } from "./Navigation";
import logo from '@/image/Logo.svg'
import Image from "next/image";
const navItems = [
    { label: "Product", href: "/" },
    { label: "Use cases", href: "/usecases" },
    { label: "Learn", href: "/learn" },
    { label: "About", href: "/about" },
    { label: "Jobs", href: "/jobs" },
    { label: "Log Out", href: "/api/auth/signout" },
]
const Header = () => {

    return (
        <header className="container">
            <Navigation navLinks={navItems} />
        </header>
    )
};

export default Header;
