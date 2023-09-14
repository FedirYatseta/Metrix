'use client'
import Input from "@/components/Input/Input";
import CountrySelect from "@/components/Select/country";
import { Location, Message, Profile } from "@/image/image";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react"
import * as Yup from 'yup';

interface Values {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    state: string;
    code: string;

}

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last Name is required'),
    phone: Yup.string().matches(/[0-9]{3}-[0-9]{3}-[0-9]{4}/, 'Invalid phone number format'),
});

const FormAccount = () => {

    const handleSubmit = async (e: any) => {

        console.log(e)

    }
    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                code: '',
                country: '',
                state: ''

            }}
            validationSchema={SignupSchema}
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
            ) => {
                handleSubmit(values)
            }}>{({ errors, touched, setFieldValue, values }) => (
                <Form className="grid grid-col gap-4 ">
                    <Input
                        id={'firstname'}
                        name={'firstname'}
                        label={'First Name'}
                        errors={errors}
                        touched={touched}
                        placeholder={'First Name'}
                        icon={<Profile color={""} opacity={0} />}
                    />
                    <Input
                        id={'lastname'}
                        name={'lastname'}
                        label={'Last Name'}
                        errors={errors}
                        touched={touched}
                        placeholder={'Last Name'}
                        icon={<Profile color={""} opacity={0} />}
                    />
                    <Input
                        id={'email'}
                        name={'email'}
                        label={'Email'}
                        errors={errors}
                        touched={touched}
                        placeholder={'Email'}
                        icon={<Message color={""} opacity={0} />}
                    />

                    <div className="flex items-center">
                        <CountrySelect
                            id={'code'}
                            name={'code'}
                            setFieldValue={setFieldValue}
                            errors={errors}
                            touched={touched}

                        />
                        <Input
                            id={'phone'}
                            name={'phone'}
                            type={'tel'}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <Input
                        id={'address'}
                        name={'address'}
                        label={'Address'}
                        errors={errors}
                        touched={touched}
                        placeholder={'Address'}
                        icon={<Location />}
                    />
                    <Input
                        id={'city'}
                        name={'city'}
                        label={'City'}
                        errors={errors}
                        touched={touched}
                        placeholder={'City'}
                    />
                    <button type="submit" className="rounded-xl px-16 py-4 bg-primary-0 text-white max-w-min m-auto"> Register</button>

                </Form>)}
        </Formik>
    )
};

export default FormAccount;
