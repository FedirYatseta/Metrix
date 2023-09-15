'use client'
import Button from "@/components/Button";
import Input from "@/components/Input/Input";
import React, { use } from "react";
import FormAccount from "./FormAccount";

const Account = () => {

  const handleSubmit = (e: any) => {
   
    console.log(e);
  };
  return (
    <div className="h-full">
      
      <div className="flex py-2 justify-between items-center">
        <h5 className="text-xl font-medium"> Account Settings</h5>
        <Button  name="Update" type='submit' className="w-[148px] py-3" />
      </div>

      <div className="grid gap-2 xs:grid-col lg:grid-cols-2">
        <div className="grid gap-2 xs:grid-col lg:grid-cols-3">
          <div className="col-span-2 ">
            <FormAccount handleSubmit={handleSubmit} />
          </div>
          <div> Photo</div>
        </div>
        <div> 0</div>
      </div>
    </div>
  );
};

export default Account;
