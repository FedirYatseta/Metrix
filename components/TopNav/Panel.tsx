"use client";
import Image from "next/image";
import React from "react";
import Profile from "@/image/man.jpg";
import { Logo, Ring } from "@/image/image";
import { inter } from "@/styles/fonts";
import OutlineSelect from "../Select/outline";
import { useSession } from "next-auth/react";

const Panel = () => {
  const { data: session } = useSession();
  console.log("session", session);

  return (
    <div className="flex items-center">
      <div className="flex w-full  bg-secondary-200 rounded-xl px-3">
        <OutlineSelect
          name={"Nanny’s Shop"}
          handleChangeFc={() => { }}
          options={[{ value: "Nanny’s Shop", label: "Nanny’s Shop" }]}
          className={`${inter.className}  text-sm  py-1    whitespace-nowrap`}
        />
      </div>

      <div className="px-4">
        {" "}
        <Ring />{" "}
      </div>

      <Image
        src={session?.user?.image || Profile}
        alt="profile"
        width={32}
        height={32}
        className="rounded-md"
      />
    </div>
  );
};

export default Panel;
