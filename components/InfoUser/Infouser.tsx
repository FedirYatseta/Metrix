import { ManIcon } from "@/image/image";
import { inter } from "@/styles/fonts";
import React from "react"

const InfoUser = ({ user }: any) => {
    return (
        <div className="bg-white dark:bg-black-600 rounded-xl xs:px-2 lg:px-4 xs:py-2 lg:py-3">
            <div className="flex items-center justify-between">
                <div className="p-2 bg-secondary-400 rounded-md">
                    {<ManIcon />}
                </div>
                <div className="flex flex-col text-start w-full mx-5">
                    <p className="xs:text-sm lg:text-xl font-medium">{user.name}</p>
                    <p className="xs:text-xs lg:text-md text-black-300">Last Order{user?.date || 'No date'}</p>
                </div>
                <p className="bg-lightGrin rounded-lg text-success px-2 text-sm"> Active</p>

            </div>
            <div
                className={`grid  grid-cols-2
                            gap-4 xs:pt-2 lg:pt-8`}
            >
                <div className="flex flex-col text-start">
                    <span className={` ${inter.className} ${user.username ? "text-black-300" : "text-danger"
                        } xs:text-sm lg:text-md`}
                    >
                        Phone
                    </span>{" "}
                    <span className="xs:text-sm lg:text-sm font-medium"> {user.phone || "No Name"}</span>
                </div>
                <div className="flex flex-col text-start">
                    {" "}
                    <span
                        className={` ${inter.className} xs:text-sm lg:text-md text-black-300`}
                    >
                        Email
                    </span>{" "}
                    <span className="xs:text-sm lg:text-sm font-medium"> {user.email || "No Name"}</span>
                </div>

            </div>
        </div>
    )
};

export default InfoUser;
