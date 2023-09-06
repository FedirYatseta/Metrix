"use client"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react"
import { Eye, Eyeoff, Lock, Message } from "@/image/image";
import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from 'yup';
import Link from "next/link";
import { inter } from "@/styles/fonts";


interface Values {
    email: string;
    password: string;
}
const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const Login = () => {

    const [show, setShow] = useState(true);

    const handleShowPass = (e: any) => {
        e.preventDefault();
        setShow(!show)
    }

    const router = useRouter()

    const handleSubmitLogin = async (e: any) => {
        console.log('eeeeeee', e);

        const res = await signIn('credentials', {
            email: e.email,
            password: e.password,
            redirect: false
        })
        if (res && !res.error) {
            router.push('/')
        } else {
            console.log(res?.error)
        }

    }
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',

            }}
            validationSchema={SignupSchema}
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
            ) => {

                const res = handleSubmitLogin(values)
                console.log('res', res)

            }}>{({ errors, touched }) => (
                <Form className="pt-14 flex flex-col max-w-lg w-full m-auto">
                    <label className="relative block w-96 my-4">
                        <span className="absolute inset-y-0 left-0 flex items-center px-4">
                            <Message color={""} opacity={0} />
                        </span>
                        <Field
                            id='email'
                            type="email"
                            name='email'
                            placeholder="Email Address"
                            className={`rounded-lg block py-3 px-12 w-full focus-within:hover:bg-hov focus:outline-none ${(touched.email && errors.email) ? 'bg-[#FCF3F2B2]' : 'bg-black-950'}   `}
                        />
                        {touched.email && errors.email && (
                            <p className="text-danger align-start absolute text-xs">{errors.email}</p>
                        )}
                    </label>
                    <label className="relative block w-96 my-4">
                        <span className="absolute inset-y-0 left-0 flex items-center px-4">
                            <Lock color={""} opacity={0} />
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer" onClick={handleShowPass}>
                            {show ? <Eyeoff color={""} opacity={0} /> : <Eye color={""} opacity={0} />}
                        </span>
                        <Field
                            id='password'
                            name='password'
                            placeholder="Password"
                            type={show ? "password" : 'text'}
                            className={`  rounded-lg block py-3 px-12 w-full focus-within:hover:bg-hov focus:outline-none ${(touched.password && errors.password) ? 'bg-[#FCF3F2B2]' : 'bg-black-950'}  `} />
                        {touched.password && errors.password && (
                            <p className="text-danger align-start absolute text-xs ">{errors.password}</p>
                        )}
                    </label>
                    <Link href="/#" className={`${inter.className} text-sm font-normal text-primary-0-0 text-right`}> Recover Password</Link>
                    <p className="text-sm font-normal my-12 text-black-300"> Don’t have an account? <Link href="/signin/register" className="text-primary-0">  Sign Up</Link></p>
                    <button type="submit" className="rounded-xl px-16 py-4 bg-primary-0 text-white max-w-min m-auto"> Login</button>
                </Form>)}
        </Formik>
    )
};

export default Login;
