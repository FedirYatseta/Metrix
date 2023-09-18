'use client';
import { ActiveIcon, InActiveIcon } from "@/image/image";
import { inter } from "@/styles/fonts";
import React, { FC } from "react"

interface IData {
    logoUsers: any,
    active: boolean,
    nameUser: string,
    newMessage: boolean,
    countNewMessage: number,
    lastMessage: string,
    time: string
}

type IProps = {
    data: IData[]
}


const ChatBlock: FC<IProps> = ({ data }) => {
    return (
        <> {data.map((item: any, index: any) => (
            <div className={` py-3 flex ${inter.className} border-b border-stroke`} key={index} >
                <div className="relative">
                    {item.logoUsers}
                    <div className=" absolute -right-1 top-0.5">
                        {item.active ? <ActiveIcon /> : <InActiveIcon />}
                    </div>
                </div>
                <div className="flex flex-col pl-3 flex-auto">
                    <div className="flex flex-auto items-center justify-between">
                        <span className="text-black-800 font-medium text-lg">{item.nameUser}</span>
                        <div className="flex">
                            <p className={`${item.newMessage ? 'block' : 'hidden'} font-normal text-sm mx-2 rounded-xl bg-secondary-200 px-2 py-0.5`}  >{'New'}</p>
                            <div className="rounded-full p-3 bg-secondary-0 relative">
                                <p className=" font-medium text-sm  absolute  inset-y-0.5 inset-x-0.5 ">{item.countNewMessage}</p>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-3 ">
                        <p className="col-span-2  text-black-200 font-normal text-sm truncate">{item.lastMessage}</p>
                        <p className=" text-black-700 font-normal text-sm ">{item.time}</p>
                    </div>
                </div>
            </div>
        )
        )}

        </>
    )
};

export default ChatBlock;
