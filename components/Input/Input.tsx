import { Field, FieldAttributes } from "formik";
import React, { FC } from "react"
import { IInput } from "./interface";
import { inter } from "@/styles/fonts";
import InputMask from 'react-input-mask';

const Input: FC<IInput & FieldAttributes<any>> = ({ icon, id, type, name, label, placeholder, touched, errors, className }) => {

    return (
        <div className="w-full">
            {
                label && (
                    <span className={`${inter.className} flex text-xs text-black-400`}>{label} </span>
                )
            }
            <label className="relative block xs:w-full  my-2">
                <span className="absolute inset-y-0 left-0 flex items-center px-4">
                    {/* <Message color={""} opacity={0} /> */}
                    {icon}
                </span>
                {type === 'tel' ? (<Field
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={`rounded-lg block py-3 px-12 w-full focus-within:hover:bg-hov focus:outline-none ${(touched[name] && errors[name]) ? 'bg-[#FCF3F2B2]' : 'bg-black-950'} ${className}   `}
                >
                    {({ field }: any) => (
                        <InputMask
                            className={`rounded-lg block py-3 px-12 w-full focus-within:hover:bg-hov focus:outline-none ${(touched[name] && errors[name]) ? 'bg-[#FCF3F2B2]' : 'bg-black-950'} ${className}   `}

                            {...field}
                            mask="999-999-9999" // Define your phone number mask here
                            placeholder="232-456-7890"
                        >
                            {(inputProps: any) => <input {...inputProps} />}
                        </InputMask>
                    )}
                </Field>
                ) : (<Field
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={`rounded-lg block
                         py-3 px-12 w-full focus-within:hover:bg-hov
                          focus:outline-none ${(touched[name] && errors[name]) ? 'bg-[#FCF3F2B2]' : 'bg-black-950'} ${className}   `} />)}

                {touched[name] && errors[name] && (
                    <p className="text-danger align-start absolute text-xs py-1">{errors[name]}</p>
                )}
            </label>
        </div>
    )
};

export default Input;
