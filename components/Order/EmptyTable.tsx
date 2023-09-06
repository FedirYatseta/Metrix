import { inter } from "@/styles/fonts";
import { Bag, Plus } from "@/image/image";
import React from "react"
import Button from "../Button";

const EmptyTable = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <div className="bg-main rounded-full border-2 border-grey-1 flex items-center justify-center p-9">
                <Bag />
            </div>
            <h4 className="text-xl font-medium pt-9 ">No Orders Yet?</h4>
            <h6 className={` ${inter.className} text-black-300 text-md font-normal w-72 pt-3 pb-6`}>Add products to your store and start selling to see orders here.</h6>
            <Button name=" New Product" icon={<Plus />} />
        </div>
    )
};

export default EmptyTable;
