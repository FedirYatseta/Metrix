import { inter } from "@/styles/fonts";
import React, { FC } from "react"
import ImageIcon from "../../image/ihone.png";
import Image from "next/image";

interface IOrderBlock {
    data: { title: string, date: string, price: string, status: string, }[];

}


const OrderBlock: FC<IOrderBlock> = ({ data }) => {
    return (
        <>
            {
                data.map((item, index) => (
                    <div className={`${inter.className} flex items-center border-b pb-3 border-stroke my-2`}>
                        <div className="rounded-lg border-stroke mr-3 h-full w-full max-h-[49px] max-w-[49px] ">
                            <Image src={ImageIcon} height={49} width={49} alt="Picture of the author" />
                        </div>
                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <p className="text-black-600">{item.title}</p>
                                <p className="text-xs text-black-200">{item.date}</p>
                            </div>
                            <div className="flex items-center justify-between" >
                                <p className="text-black-600 font-medium" >{item.price} x 1</p>
                                <p className="text-xs text-danger bg-bgRed px-3 py-0.5 rounded-lg">{item.status}</p>
                            </div>
                        </div>
                    </div>
                ))
            } </>
    )
};

export default OrderBlock;
