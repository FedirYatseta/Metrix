import { Location } from "@/image/image";
import { inter } from "@/styles/fonts";
import React from "react"

const AddressUser = ({ user }: any) => {
    return (
        <div className="bg-white rounded-xl xs:px-2 lg:px-4 xs:py-2 lg:py-3">
            <div className="flex items-center justify-between">
                <div className="p-2 bg-secondary-400 rounded-md">
                    {<Location />}
                </div>

            </div>
            <div
                className={`grid  grid-cols-2
                            gap-4 xs:pt-2 lg:pt-8`}
            >
                <div className="flex flex-col text-start">
                    <span
                        className={` ${inter.className} ${user.username ? "text-black-300" : "text-danger"
                            } xs:text-sm lg:text-md`}
                    >
                        Home Address
                    </span>{" "}
                    <span className="xs:text-sm lg:text-sm font-medium"> {user?.address?.city + user?.address?.street || "No Name"}</span>
                </div>
                <div className="flex flex-col text-start">
                    {" "}
                    <span
                        className={` ${inter.className} xs:text-sm lg:text-md text-black-300`}
                    >
                        Billing Address
                    </span>{" "}
                    <span className="xs:text-sm lg:text-sm font-medium"> {user?.address?.city + user?.address?.street || "No Name"}</span>
                </div>

            </div>
        </div>
    )
};

export default AddressUser;
