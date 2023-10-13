import { Location, PieChart } from "@/image/image";
import { inter } from "@/styles/fonts";
import React from "react"

const AddressUser = ({ user }: any) => {
    return (
        <div className="bg-white dark:bg-black-600 rounded-xl xs:px-2 lg:px-4 xs:py-2 lg:py-3">
            <div className="flex items-center justify-between">
                <div className="p-2 bg-primary-100 rounded-md">
                    {<PieChart />}
                </div>

            </div>
            <div
                className={`grid  grid-cols-2
                            gap-4 xs:pt-2 lg:pt-8`}
            >
                <div className="flex flex-col text-start">
                    <span
                        className={` ${inter.className}  text-black-300
                           xs:text-sm lg:text-md`}
                    >
                        Orders
                    </span>{" "}
                    <span className="xs:text-sm lg:text-sm font-medium">₦25,000.00</span>
                </div>
                <div className="flex flex-col text-start">
                </div>

            </div>
        </div>
    )
};

export default AddressUser;
