import { inter } from "@/styles/fonts";
import { Bag, Plus } from "@/image/image";
import React, { FC } from "react";
import Button from "../Button";

interface IEmptyElement {
  icon?: JSX.Element;
  title: string;
  describe: string;
  name: string;
  iconBtn?: JSX.Element;
}

const EmptyElement: FC<IEmptyElement> = ({ icon, title, describe, name, iconBtn }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="bg-main rounded-full border-2 border-grey-1 flex items-center justify-center p-9">
        {icon}
      </div>
      <h4 className="text-xl font-medium pt-9 ">{title}</h4>
      <h6
        className={` ${inter.className} text-black-300 text-md font-normal w-72 pt-3 pb-6`}
      >
        {describe}
      </h6>
      <Button name={name} icon={iconBtn} />
    </div>
  );
};

export default EmptyElement;
