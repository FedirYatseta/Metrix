import React, { FC, useState } from "react"
import Button from "../Button";
import { Cancel, Close, Delete, Plus } from "@/image/image";
import { inter } from "@/styles/fonts";
import { Form, Formik, FormikHelpers } from "formik";
import Input from "../Input/Input";
import CSelect from "../Select/select";
import { COUNTRIES } from "../Select/config";

import Image from "next/image";
import SwitchControl from "../SwitchControl/SwitchControl";
import { state } from "../Tabs/Account/state";
import { useCreateUserMutation } from "@/store/api/api";
import QuillEditor from "../QuillEditor/QuillEditor";

interface IModal {

    createUser?: (values: any) => void;
}
const FormInventory: FC<IModal> = ({ createUser }) => {
    const [showAddress, setShowAddress] = React.useState<boolean>(false);
    const [v, setV] = useState(1);
    const [value, setValue] = useState("");

    const vf = { value: 1 };


    return (


        <Formik
            initialValues={{
                name: "",
                category: "",
                phone: "",
                code: "",
                country: "",
                state: "",
                address: "",
                city: "",
            }}

            onSubmit={(values: any, { setSubmitting }: FormikHelpers<any>) => {

                console.log('values', values)

            }}
        >
            {({ errors, touched, setFieldValue, values, resetForm }) => {
                const handleCountryChange = (selectedOption: any, name: string) => {
                    if (!selectedOption) return;
                    setFieldValue(name, selectedOption.value);
                };
                const options = [{
                    label: 'phone',
                    values: 'phone'
                }]

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
                    <Form className="grid grid-cols-3 gap-4 py-2 h-full">
                        <div className="col-span-2 bg-white rounded-md p-6">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col gap-2">
                                    <Input
                                        id={"name"}
                                        name={"name"}
                                        errors={errors}
                                        touched={touched}
                                        placeholder={"Product Name"}
                                    />
                                    <CSelect
                                        placeholder="Select Product Category"
                                        id={"category"}
                                        name={"category"}

                                        errors={errors}
                                        touched={touched}
                                        options={options}
                                    />
                                    <div className="grid grid-cols-2 gap-2 items-end">
                                        <div>
                                            <Input
                                                id={"price"}
                                                name={"price"}
                                                errors={errors}
                                                touched={touched}
                                                placeholder={"Selling Price"}
                                            />
                                        </div>
                                        <div >
                                            <Input
                                                id={"cost"}
                                                name={"cost"}
                                                errors={errors}
                                                touched={touched}
                                                placeholder={"Cost Price"}
                                            />
                                        </div>
                                    </div>
                                    <Input
                                        id={"stock"}
                                        name={"stock"}
                                        type="number"
                                        errors={errors}
                                        touched={touched}
                                        placeholder={"Quantity in Stock"}
                                    />
                                    <CSelect
                                        placeholder="Order Type"
                                        id={"type"}
                                        name={"type"}
                                        errors={errors}
                                        touched={touched}
                                        options={options}
                                    />
                                    <div className="flex justify-between">
                                        <p className={`${inter.className} xs:text-xs lg:text-lg text-black-300 mr-2 my-3`}>Discount</p>
                                        <div className="flex items-center">
                                            <p className={`${inter.className} text-black-300 text-sm px-2`}>Add Discount</p>
                                            <SwitchControl handleClick={handleAddress} />
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className={`${inter.className} xs:text-xs lg:text-lg text-black-300 mr-2 my-3`}>Expiry Date</p>
                                        <div className="flex items-center">
                                            <p className={`${inter.className} text-black-300 text-sm px-2`}>Add Expiry Date</p>
                                            <SwitchControl handleClick={handleAddress} />
                                        </div>

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
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Input
                                        id={"description"}
                                        name={"description"}
                                        type="textarea"
                                        errors={errors}
                                        touched={touched}
                                        placeholder={"Short Description"}
                                    />
                                    <QuillEditor />
                                </div>
                            </div>

                        </div>
                        <div className="bg-white rounded-md p-6">2

                        </div>
                    </Form>
                )
            }}
        </Formik>

    )
};

export default FormInventory;
