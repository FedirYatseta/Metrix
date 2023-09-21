'use client';
import { ActiveIcon, BagIcon, InActiveIcon, Plus, SendMessage, SmileIcon } from "@/image/image";
import { inter } from "@/styles/fonts";
import { Field } from "formik";
import Link from "next/link";
import React from "react"
//

const ChatDashboard = ({ name }: any) => {



    return (
        <div className="flex flex-col h-full">
            <div className={` pb-3 mb-3 flex ${inter.className} border-b border-stroke`}   >
                <div className="relative">
                    {name.logoUsers}
                </div>
                <div className="flex flex-col pl-3 flex-auto">
                    <div className="flex flex-auto items-center justify-between">
                        <span className="text-black-800 font-medium text-lg">{name.nameUser}</span>
                        <div className="flex items-center">
                            <p className={`${name.newMessage ? 'block' : 'hidden'} font-normal text-sm mx-2 rounded-xl bg-secondary-200 px-2 py-0.5`}  >{'New Customer'}</p>
                            <Link href="/#" className='text-sm text-primary-0'>View Profile </Link>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            {name.active ? <ActiveIcon /> : <InActiveIcon />}
                            <p className="mx-1">
                                {name.active ? 'Active' : 'Inactive'}
                            </p>
                            <p className=" text-black-700 font-normal text-sm ">{name.time}</p>
                        </div>
                        <div className="flex items-center">
                            <BagIcon />
                            <span className="text-black-200 text-sm ml-2" > 0 Orders</span>
                        </div>

                    </div>

                </div>
            </div>
            <div className="flex flex-initial h-full max-h-[calc(100vh-362px)] overflow-auto">
                <div className="grid grid-cols-1 space-y-12  w-full mx-auto overflow-y-auto">
                    <div className="place-self-start w-1/2">
                        <div className="p-4 bg-primary-0 text-white text-start rounded-tl-lg rounded-tr-lg
rounded-br-lg ">Hello, I want to make enquiries about your product
                        </div>
                        <p className="text-start ">12:55 am</p>
                    </div>
                    <div className="place-self-end text-right w-1/2">
                        <div className="p-4 bg-secondary-500 text-start rounded-l-lg
rounded-tr-lg">Hello Janet, thank you for reaching out
                        </div>
                        <p className="text-start ">12:55 am</p>
                    </div>
                    <div className="place-self-end text-right w-1/2">
                        <div className="p-4 bg-secondary-500 text-start rounded-l-lg
rounded-tr-lg">What do you need to know?
                        </div>
                        <p className="text-start ">12:55 am</p>
                    </div>
                    <div className="place-self-start w-1/2">
                        <div className="p-4 bg-primary-0 text-white text-start rounded-tl-lg rounded-tr-lg
rounded-br-lg ">I want to know if the price is negotiable, i need about 2 Units
                        </div>
                        <p className="text-start ">12:55 am</p>
                    </div>
                    <div className="place-self-start w-1/2">
                        <div className="p-4 bg-primary-0 text-white text-start rounded-tl-lg rounded-tr-lg
rounded-br-lg ">I want to know if the price is negotiable, i need about 2 Units
                        </div>
                        <p className="text-start ">12:55 am</p>
                    </div>
                    <div className="place-self-start w-1/2">
                        <div className="p-4 bg-primary-0 text-white text-start rounded-tl-lg rounded-tr-lg
rounded-br-lg ">I want to know if the price is negotiable, i need about 2 Units
                        </div>
                        <p className="text-start ">12:55 am</p>
                    </div>
                    <div className="place-self-start w-1/2">
                        <div className="p-4 bg-primary-0 text-white text-start rounded-tl-lg rounded-tr-lg
rounded-br-lg ">I want to know if the price is negotiable, i need about 2 Units
                        </div>
                        <p className="text-start ">12:55 am</p>
                    </div>
                    <div className="place-self-start w-1/2">
                        <div className="p-4 bg-primary-0 text-white text-start rounded-tl-lg rounded-tr-lg
rounded-br-lg ">I want to know if the price is negotiable, i need about 2 Units
                        </div>
                        <p className="text-start ">12:55 am</p>
                    </div>
                </div>
            </div>
            <div>
                <label className="relative block xs:w-full  my-2 border rounded-md border-grey-1">
                    <span className="absolute inset-y-0 left-0 flex items-center px-4">
                        <div className="bg-secondary-300 p-1 rounded-md cursor-pointer">
                            <Plus color={'#000'} />
                        </div>

                    </span>
                    <input
                        id={'message'}
                        type={'message'}
                        name={'message'}
                        placeholder={'message'}
                        className={`rounded-lg block
                         py-3 px-14 w-full focus-within:hover:bg-hov
                          focus:outline-none  "bg-black-950"
                               `}
                    />
                    <span className="absolute flex items-center right-0 inset-y-0 px-4">
                        <div className="px-4 cursor-pointer">        <SmileIcon /> </div>

                        <div className="flex px-4 py-1 bg-secondary-300 items-center rounded-md cursor-pointer">
                            <p className="px-1">Send   </p>
                            <SendMessage />
                        </div></span>

                </label>

            </div>
        </div>
    )
};

export default ChatDashboard;
