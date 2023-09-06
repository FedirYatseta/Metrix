import React from "react"
import logo from "@/app/(PanelLayout)/next.svg"
import Image from 'next/image'
import Register from "@/components/Auth/Register";

const SignIn = async () => {
    return (
        <>
            <h1 className="pt-4 text-lg font-medium  "> Get Started with Metrix</h1>
            <p className="text-black-300 pt-2 text-sm "> Create your free account</p>
            <Register />
        </>
    )
};

export default SignIn;
