'use client'
import Button from "@/components/Button";
import React, { useRef, useState } from "react";
import FormAccount from "./FormAccount";
import { Form, Formik, FormikHelpers } from "formik";
import { IValues } from "./interface";
import { SignupSchema } from "./config.validate";
import Profile from '@/image/man.jpg'
import Image from "next/image";
import { Delete, SaveIcon, Upload } from "@/image/image";
import { useSession } from "next-auth/react";
const Account = () => {
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const { data: session } = useSession();

  const [image, setImage] = useState<string | null>(null);
  console.log('image', image)
  const handleClick = (e: any) => {
    e.preventDefault();


    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e', event)
    const fileInput = event.target;
    const file = event.target.files?.[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
    fileInput.value = "";

  };
  const handleSubmit = (e: any) => {

    console.log(e);
  };

  const imageCurrent = image ? image : session?.user?.image

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        code: "",
        country: "",
        state: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values: IValues, { setSubmitting }: FormikHelpers<IValues>) => {
        handleSubmit(values);


      }}
    >
      {({ errors, touched, setFieldValue, values }) => {
        return (
          <Form>
            <div className="flex py-2 justify-between items-center">
              <h5 className=" xs:text-xs lg:text-xl font-medium"> Account Settings</h5>
              <Button icon={<SaveIcon />} name="Update" type='submit' className="xs:w-3/12 lg:w-[148px] xs:py-2 lg:py-3 rounded-xl text-white" />
            </div>
            <div className="grid gap-2 xs:grid-col lg:grid-cols-3">
              <div className="col-span-2">
                <div className="grid gap-2 xs:grid-col lg:grid-cols-3">
                  <div className="col-span-2 ">
                    <FormAccount errors={errors} touched={touched} setFieldValue={setFieldValue} values={values} />
                  </div>
                  <div className="w-full flex  justify-center">
                    <div className=" relative w-[172px] h-[172px] items-center ">
                      <Image priority={false} src={imageCurrent || Profile} alt="profile" width={172} height={172} className="rounded-xl " />
                      <div className="absolute top-2 right-2  flex">
                        <label htmlFor="avatar" className="px-1"  >
                          <input
                            onChange={handleChange}
                            ref={hiddenFileInput}
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/png, image/jpeg"
                            className="hidden " />
                          <Button type="button" handleClick={handleClick} className="bg-secondary-300 text-white rounded-xl p-1.5 hover:bg-secondary-200 active:bg-secondary-600 text-white" icon={<Upload />} />
                        </label>
                        <label className="px-1"  >

                          <Button type="button" handleClick={() => setImage(null)} className="bg-secondary-300 text-white rounded-xl p-1.5  hover:bg-secondary-200 active:bg-secondary-600 text-white" icon={<Delete />} />
                        </label>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div> </div>
            </div>
          </Form>)
      }}
    </Formik>
  );
};

export default Account;
