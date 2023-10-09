'use client'
import React, { FC, } from "react"
import { inter } from "@/styles/fonts";
import { Form, Formik, FormikHelpers } from "formik";
import Input from "../Input/Input";
import CSelect from "../Select/select";
import SwitchControl from "../SwitchControl/SwitchControl";
import { state } from "../Tabs/Account/state";
import TextEditor from "../QuillEditor/QuillEditor";
import dynamic from "next/dynamic";
import HeaderGeneral from "../HeaderGeneral/HeaderGeneral";
import { Plus, PreviewIcon } from "@/image/image";
import Button from "../Button";
import AddImageProd from "../AddImageProd/AddImageProd";
import Image from "next/image";
const NoSSRDatePiker = dynamic(() => import('@/components/CDatePicker/CDatePicker'), { ssr: false })
const NoSSRTimePiker = dynamic(() => import('@/components/CTimePicker/CTimePicker'), { ssr: false })
interface IModal {

    createUser?: (values: any) => void;
}

interface IForm {
    name: string;
    category: string;
    phone: string;
    code: string;
    country: string;
    state: string;
    address: string;
    city: string;
    date: Date | null;
    time: string;
    desc: string;
    image: object | null;
}
const FormInventory: FC<IModal> = ({ createUser }) => {
    const [showAddress, setShowAddress] = React.useState<{ discount: boolean, expiry: boolean, return: boolean }>({ discount: false, expiry: false, return: false });

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
                date: null,
                time: "",
                type: '',
                desc: "",
                image: null
            }}

            onSubmit={(values: IForm, { setSubmitting }: FormikHelpers<any>) => {

                console.log('values', values)

            }}
        >
            {({ errors, touched, setFieldValue, values, resetForm }) => {

                const options = [{
                    label: 'phone',
                    values: 'phone'
                }]




                const handleAddress = (value: string) => {
                    if (value === 'discount') {
                        setShowAddress({ ...showAddress, discount: !showAddress.discount })
                    } else if (value === 'expiry') {
                        setShowAddress({ ...showAddress, expiry: !showAddress.expiry })
                    }
                    else if (value === 'policy') {
                        setShowAddress({ ...showAddress, return: !showAddress.return })
                    }


                }
                return (
                    <Form >
                        <HeaderGeneral name={'Save as Draft'} title="New Inventory Item" icon={<Plus />} />
                        <div className="grid xs:grid-col lg:grid-cols-3 gap-4 py-2 h-full">
                            <div className="lg:col-span-2 bg-white rounded-md p-6">
                                <div className="grid xs:grid-col lg:grid-cols-2 gap-2">
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
                                                <SwitchControl handleClick={() => handleAddress('discount')} id={'Discount'} />
                                            </div>
                                        </div>
                                        {showAddress.discount && (<div className="grid grid-cols-2 gap-2">
                                            <CSelect
                                                placeholder="Order Type"
                                                id={"type"}
                                                name={"type"}
                                                errors={errors}
                                                touched={touched}
                                                options={options}
                                            />
                                            <Input
                                                id={"address"}
                                                name={"address"}
                                                errors={errors}
                                                touched={touched}
                                                placeholder={"Address"}

                                            />
                                        </div>)}
                                        <div className="flex justify-between">
                                            <p className={`${inter.className} xs:text-xs lg:text-lg text-black-300 mr-2 my-3`}>Expiry Date</p>
                                            <div className="flex items-center">
                                                <p className={`${inter.className} text-black-300 text-sm px-2`}>Add Expiry Date</p>
                                                <SwitchControl handleClick={() => handleAddress('expiry')} id={'Date'} />
                                            </div>

                                        </div>
                                        {showAddress.expiry && (<>
                                            <NoSSRDatePiker values={values} setFieldValue={setFieldValue} type='expiry' />


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
                                        <TextEditor desc={values.desc} setFieldValue={setFieldValue} />
                                        <div className="flex justify-between">
                                            <p className={`${inter.className} xs:text-xs lg:text-lg text-black-300 mr-2 my-3`}>Return Policy</p>
                                            <div className="flex items-center">
                                                <p className={`${inter.className} text-black-300 text-sm px-2`}>Add Discount</p>
                                                <SwitchControl handleClick={() => handleAddress('policy')} />
                                            </div>

                                        </div>
                                        {showAddress.return && (

                                            <Input
                                                id={"policy"}
                                                name={"policy"}
                                                type="number"
                                                errors={errors}
                                                touched={touched}
                                                placeholder={"policy"}

                                            />
                                        )}
                                        <div className="grid grid-cols-2 gap-2">
                                            <NoSSRDatePiker values={values} setFieldValue={setFieldValue} type='date' />
                                            <NoSSRTimePiker values={values} setFieldValue={setFieldValue} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="bg-white rounded-md p-6 ">

                                <AddImageProd setFieldValue={setFieldValue} img={values.image} />


                                <p className=" text-black-600 text-lg text-start">
                                    Additional Images
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {values.image === null ? (<>
                                        <div className="bg-main border border-grey-1 rounded-md px-4 py-10 flex justify-center">
                                            <PreviewIcon />
                                        </div>
                                    </>) :
                                        ((values.image as string[]).map((item: string, key: any) => (
                                            <img src={item} key={key}
                                                className="w-full h-auto object-cover  max-h-[167px]" />
                                        )))}
                                    <div className=" border border-grey-1 border-dashed rounded-md px-4 py-10 flex justify-center">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>

    )
};

export default FormInventory;
