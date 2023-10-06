'use client'
import { PreviewIcon, Upload } from "@/image/image";
import React, { useRef, useState } from "react"
import Button from "../Button";
import { inter } from "@/styles/fonts";

const AddImageProd = ({ setFieldValue, img }: any) => {
    console.log('img', img)

    const hiddenFileInput = useRef<HTMLInputElement | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('e', event)
        const fileInput = event.target;
        const file = event.target.files?.[0];

        if (file) {
            await setImage(URL.createObjectURL(file));
            if (img !== null) await setFieldValue('image', [URL.createObjectURL(file), ...img])
            else await setFieldValue('image', [URL.createObjectURL(file)])

        }
        fileInput.value = "";

    };
    const handleClick = (e: any) => {
        e.preventDefault();


        if (hiddenFileInput.current) {
            hiddenFileInput.current.click();
        }
    };
    return (
        <div className={`${inter.className} flex flex-col items-center py-12`}>
            <PreviewIcon />
            <label htmlFor="avatar" className="px-1"  >
                <input
                    onChange={handleChange}
                    ref={hiddenFileInput}
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    className="hidden" />
                <Button type="button" handleClick={handleClick} className="bg-transparent text-primary-0 rounded-xl p-1.5 hover:bg-transparent active:bg-transparent " icon={<Upload color={'#5570F1'} />} >
                    <p className="px-2"> Upload Image </p>
                </Button>
            </label>
            <p className=" text-black-300">
                Upload a cover image for your product.
            </p>
            <p className=" text-black-300 text-xs" >File Format <span className="text-black-900">jpeg, png  </span> Recommened Size <span className="text-black-900">600x600 (1:1)</span>  </p>
        </div>
    )
};

export default AddImageProd;
