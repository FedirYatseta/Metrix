import { inter } from "@/styles/fonts";
import React from "react";

type BtnType = {
  name?: string;
  icon?: JSX.Element;
  handleClick?: (e:any) => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
};

const Button = ({ name, icon, handleClick, className,type, children }: BtnType) => {
  return (
    <button type={type}
      onClick={handleClick}
      className={`bg-primary-0 px-3 py-2 rounded-2xl flex items-center justify-center hover:bg-hover active:bg-pressed focus:outline-none ${className}`}
    >
      {icon}
      {name && (
        <span
          className={`${inter.className} ${icon && "pl-2"}  text-sm text-white`}
        >
          {" "}
          {name}
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
