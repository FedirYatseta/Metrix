import Button from "@/components/Button";
import Input from "@/components/Input/Input";
import React from "react"
import FormAccount from "./FormAccount";

const Account = () => {
    return (
        <>
            <div className="flex py-2 justify-between items-center">
                <h5 className="text-xl font-medium"> Account Settings</h5>
                <Button name="Update" className="w-[148px] py-3" />
            </div>

            <div className="grid gap-2 xs:grid-col lg:grid-cols-2">
                <div className="grid gap-2 xs:grid-col lg:grid-cols-3">
                    <div className="col-span-2 ">
                        <FormAccount />
                    </div>
                    <div> Photo</div>
                </div>
                <div> 0</div>
            </div>
        </>
    )
};

export default Account;
