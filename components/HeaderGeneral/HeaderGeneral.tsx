import React, { FC } from "react"
import Button from "../Button";
import { inter } from "@/styles/fonts";

interface IHeaderGeneral {
    title: string;
    name: string;
    icon?: JSX.Element;
    handleOpen?: () => void;
}

const HeaderGeneral: FC<IHeaderGeneral> = ({ name, icon, title, handleOpen }) => {
    return (
        <div className="flex items-center justify-between w-full ">
            <h5 className={`${inter.className} text-lg font-bolt `}>
                {title}
            </h5>
            <Button name={name} icon={icon} handleClick={handleOpen} className="px-3 py-2 rounded-xl text-white" />
        </div>
    )
};

export default HeaderGeneral;
