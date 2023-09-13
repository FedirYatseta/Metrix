import { FilterIcon } from "@/image/image";
import React from "react"

type BtnType = {
    name: string,
    icon: JSX.Element
}
const OutlineBtn = ({ icon, name }: BtnType) => {
    return (
        <button className="flex items-center justify-center border border-black-500 rounded-md px-2 py-1 ">
            {icon}
            <span className="pl-2">{name}</span>
        </button>
    )
};

export default OutlineBtn;
