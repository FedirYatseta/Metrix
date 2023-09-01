import React from "react"
import logo from "@/app/next.svg"
import Image from 'next/image'
import Login from "@/components/Auth/Login";

const SignIn = async () => {
    return (
        <>
            <Image priority src={logo} alt='logo' className="m-auto my-3 " width={55} height={55} />
            <h1 className="pt-4 text-lg font-medium  "> Welcome back!</h1>
            <p className="text-black-300 pt-2 text-sm "> Login to your account</p>
            <Login />
        </>
    )
};

export default SignIn;
