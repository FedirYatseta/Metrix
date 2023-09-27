import React, { FC } from "react"
import Button from "../Button";
import { Close, Delete } from "@/image/image";
import { inter } from "@/styles/fonts";
import { Form, Formik, FormikHelpers } from "formik";
import Input from "../Input/Input";
import CSelect from "../Select/select";
import { COUNTRIES } from "../Select/config";

import Image from "next/image";
import SwitchControl from "../SwitchControl/SwitchControl";
import { state } from "../Tabs/Account/state";
import { useCreateUserMutation } from "@/store/api/api";

interface IModal {
    handleOpen: () => void;
    createUser: (values: any) => void;
}
const Modal: FC<IModal> = ({ handleOpen, createUser }) => {
    const [showAddress, setShowAddress] = React.useState<boolean>(false);



    return (
        <div className="fixed w-full h-full  top-0 left-0 backdrop-blur-sm z-[100] flex items-center justify-center	">
            <div className="flex flex-col  max-w-[423px]  p-5  z-[101] bg-white rounded-md w-full ">

                <div className="flex justify-between w-full items-center">
                    <p className="font-medium text-xl text-black-0 mr-2">Add a New Customer</p>
                    <Button
                        handleClick={handleOpen}
                        icon={<Close />}
                        className="p-1.5 rounded-lg bg-secondary-300 hover:bg-secondary-500 active:bg-secondary-700 " />
                </div>
                <div className="text-start my-5">
                    <p className={`${inter.className} text-lg text-black-300 font-medium`}> Customer Information</p>
                </div>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        code: "",
                        country: "",
                        state: "",
                        address: "",
                        city: "",
                    }}

                    onSubmit={(values: any, { setSubmitting }: FormikHelpers<any>) => {

                        console.log('values', values)
                        createUser(values)
                    }}
                >
                    {({ errors, touched, setFieldValue, values, resetForm }) => {
                        const handleCountryChange = (selectedOption: any, name: string) => {
                            if (!selectedOption) return;
                            setFieldValue(name, selectedOption.value);
                        };
                        const options = Object.keys(COUNTRIES).map((countryCode) => {
                            const country = COUNTRIES[countryCode];
                            return {
                                label: (
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <Image
                                            src={country.image}
                                            alt={`${country.name} flag`}
                                            width={24}
                                            height={24}
                                            style={{ marginRight: "8px" }}
                                        />
                                        {` (${country.phone[0]})`}
                                    </div>
                                ),
                                value: country.phone[0],
                            };
                        });

                        const item = state.map((item) => { return { value: item.country, label: item.country } })
                        const stateItem = state.filter(country => country.country === values.country).map((item) => {
                            const val = item.states.map((state) => { return { value: state, label: state } })
                            return [...val]
                        })


                        const handleAddress = () => {
                            setShowAddress(!showAddress)
                            if (showAddress === true) {

                                console.log('clear state')
                                setFieldValue("address", "")
                                setFieldValue("city", "")
                                setFieldValue("country", "")
                                setFieldValue("state", "")
                            }
                        }
                        return (
                            <Form className=" flex flex-col max-w-lg w-full m-auto ">
                                <Input
                                    id={"name"}
                                    name={"name"}
                                    errors={errors}
                                    touched={touched}
                                    placeholder={"Customer Name"}

                                />
                                <Input
                                    id={"email"}
                                    name={"email"}
                                    errors={errors}
                                    touched={touched}
                                    placeholder={"Email"}

                                />
                                <div className="grid grid-cols-3 gap-4 items-end">
                                    <div className="col-span-1">
                                        <CSelect
                                            id={"code"}
                                            name={"code"}
                                            onChange={(e) => handleCountryChange(e, "code")}
                                            errors={errors}
                                            touched={touched}
                                            options={options}
                                            defaultValue={options[0]}
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <Input
                                            id={"phone"}
                                            name={"phone"}
                                            type={"tel"}
                                            errors={errors}
                                            touched={touched}
                                        />
                                    </div>
                                </div>
                                <div className="flex">
                                    <p className={`${inter.className} text-black-300 mr-2 my-3`}>Add Address</p>
                                    <SwitchControl handleClick={handleAddress} />
                                </div>
                                {showAddress && (<>
                                    <Input
                                        id={"address"}
                                        name={"address"}
                                        errors={errors}
                                        touched={touched}
                                        placeholder={"Address"}

                                    />
                                    <Input
                                        id={"city"}
                                        name={"city"}
                                        errors={errors}
                                        touched={touched}
                                        placeholder={"City"}
                                    />
                                    <div className="grid grid-cols-2 gap-4 items-center">
                                        <CSelect
                                            id={"country"}
                                            name={"country"}
                                            errors={errors}
                                            touched={touched}
                                            options={item}
                                            onChange={(e) => {
                                                setFieldValue("country", e.value)
                                            }}
                                            defaultValue={item[0]}
                                        />
                                        <CSelect
                                            id={"state"}
                                            name={"state"}
                                            errors={errors}
                                            touched={touched}
                                            options={stateItem[0]}
                                            onChange={(e) => setFieldValue("state", e.value)}
                                            defaultValue={stateItem[0]}
                                        />

                                    </div>
                                </>)}
                                <div className="flex justify-between">

                                    <Button name="Cancel" type="button" className="w-[148px] py-3 rounded-xl mt-5 border border-primary-0 rounded-xl bg-white text-primary-0 hover:bg-white active:border-primary-500 active:bg-white" />
                                    <Button name="Add " type="submit" className="w-[148px] py-3 rounded-xl mt-5 text-white" />
                                </div>

                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
};

export default Modal;
