import { inter } from "@/app/fonts";
import { Plus } from "@/image/image";
import React from "react"

type BtnType = {
    name: string,
    icon: JSX.Element
}

const Button = ({ name, icon }: BtnType) => {
    return (
        <button className='bg-primary px-4 py-2 rounded-2xl flex items-center hover:bg-hover active:bg-pressed focus:outline-none' >
            {icon}
            <span className={`${inter.className} pl-2 text-sm text-white`}> {name}</span>
        </button>
    )
};

export default Button;
