import { User } from "@/image/image";
import React, { FC } from "react"
import OutlineSelect from "../Select/outline";
import { poppins } from "@/styles/fonts";

interface IInfoBlock {
    data: { label: string, value: number }[];
    options: { value: string, label: string }[];
    icon: JSX.Element;
    bgIcon: string;
    textColor?: string;
}


const InfoBlock: FC<IInfoBlock> = ({ data, options, icon, bgIcon, textColor }) => {
    return (
        <div className="flex flex-col h-full justify-between ">
            <div className="flex items-center justify-between">
                <div className={`rounded-lg ${bgIcon} p-2`}>
                    {icon}
                </div>
                <OutlineSelect
                    handleChangeFc={() => ({})}
                    name="This Week"
                    options={options}
                    className="text-black-200  text-sm"
                />
            </div>
            <div className={`grid grid-cols-${data.length}`}>
                {data.map((item, index) => (<div key={index}>
                    <p className={`text-black-300 ${index === 0 ? textColor : 'text-black-300'} text-start text-sm`} >{item.label}</p>
                    <div className="flex items-center ">
                        <p className={`${poppins.className} text-xl font-medium   pr-1`}>0</p>
                        <p className=" text-xs text-success">+0.00%</p>
                    </div>
                </div>))}

            </div>
        </div>
    )
};

export default InfoBlock;
