import CredentialForm from "@/components/CredentialForm";
import React from "react"
import logo from "@/app/next.svg"
import Image from 'next/image'

const SignIn = async () => {
    return (
        <div className="h-full w-full ">
            <div className="py-3 px-20 bg-white absolute w-full ">
                <Image priority src={logo} alt='logo' width={50} height={50} />
            </div>
            <div className="h-full flex items-center justify-center ">
                <div className="bg-white p-9 rounded-xl  m-auto">
                    <Image priority src={logo} alt='logo' className="m-auto my-3 " width={55} height={55} />
                    <h1 className="pt-4 text-lg font-medium  "> Welcome back!</h1>
                    <p className="text-black-300 pt-2 text-sm "> Login to your account</p>
                    <CredentialForm />
                </div>

            </div>
        </div>
    )
};

export default SignIn;
