import React, { FC } from "react";
import Select from "react-select";
import { inter } from "@/styles/fonts";

const customStyles = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    minHeight: 0,
    padding: "0 10px",
  }),
  indicatorsContainer: (baseStyles: any) => ({
    ...baseStyles,
    display: "flex",
  }),
  menu: (baseStyles: any) => ({
    ...baseStyles,
    zIndex: 50,
    background: "#fff",
    padding: "8px",
    fontSize: "12px",
    borderRadius: "8px",
    minWidth: "max-content",
    border: "1px solid #cdcdcd",
  }),
  option: (baseStyles: any) => ({
    ...baseStyles,
    padding: "5px",
    whiteSpace: "nowrap",

    ":hover": {
      background: "#cdcdcd",
      borderRadius: "8px",
    },
  }),
};

interface CountrySelectProps {
  id: string;
  name: string;
  options: any;
  defaultValue?: any;
  label?: string;
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
  onChange?: (selectedOption: any) => void;
}

const CSelect: FC<CountrySelectProps> = ({
  id,
  name,
  touched,
  errors,
  onChange,
  options,
  label,
  defaultValue,
}) => {



  return (
    <div className="w-full block">
      {label && (
        <span className={`${inter.className} flex text-xs text-black-200`}>
          {label}{" "}
        </span>
      )}
      <Select
        id={id}
        name={name}
        unstyled
        options={options}
        styles={customStyles}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`rounded-lg block py-3 my-2 min-w-fit text-black-200  focus-within:hover:bg-hov focus:outline-none ${touched[name] && errors[name] ? "bg-[#FCF3F2B2]" : "bg-black-950"
          }   `}
      />
    </div>
  );
};

export default CSelect;
