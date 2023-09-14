import { inter } from "@/styles/fonts";
import React from "react"

type BtnType = {
    name?: string,
    icon?: JSX.Element,
    handleClick?: () => void
    className?: string
}

const Button = ({ name, icon, handleClick, className }: BtnType) => {
    return (
        <button onClick={handleClick} className={`bg-primary-0 px-4 py-2 rounded-2xl flex items-center justify-center hover:bg-hover active:bg-pressed focus:outline-none ${className}`} >
            {icon}
            {name && (<span className={`${inter.className} ${icon && 'pl-2'}  text-sm text-white`}> {name}</span>)}
        </button>
    )
};

export default Button;
