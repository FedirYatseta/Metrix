'use client'
import React from "react"
import logo from "@/app/(PanelLayout)/next.svg"
import Image from 'next/image'
import Login from "@/components/Auth/Login";
import Button from "@/components/Button";
import { Google } from "@/image/image";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const SignIn = async () => {

    const searchParams = useSearchParams()

    const callbackUrl = searchParams.get('callbackUrl') || '/'
    return (
        <>
            <h1 className="pt-4 text-lg font-medium  "> Welcome back!</h1>
            <p className="text-black-300 pt-2 text-sm "> Login to your account</p>
            <Login />
            <div className="m-1">
                <Button handleClick={() => signIn('google', { callbackUrl })} icon={<Google />} />
            </div>
        </>
    )
};

export default SignIn;
