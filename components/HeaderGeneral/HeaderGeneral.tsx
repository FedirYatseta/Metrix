import React, { FC } from "react"
import Button from "../Button";
import { inter } from "@/styles/fonts";

interface IHeaderGeneral {
    title: string;
    name: string;
    icon?: JSX.Element;
}

const HeaderGeneral: FC<IHeaderGeneral> = ({ name, icon, title }) => {
    return (
        <div className="flex items-center justify-between w-full ">
            <h5 className={`${inter.className} text-lg font-bolt `}>
                {title}
            </h5>
            <Button name={name} icon={icon} />
        </div>
    )
};

export default HeaderGeneral;
