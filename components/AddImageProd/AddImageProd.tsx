'use client'
import { Delete, PreviewIcon, Upload } from "@/image/image";
import React, { useRef, useState } from "react"
import Button from "../Button";
import { inter } from "@/styles/fonts";
import Image from "next/image";

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

    const handleDeleteImage = (e: any) => {
        e.preventDefault();
        if (img !== null) {
            const newImg = img.filter((item: any) => item !== image)
            setFieldValue('image', newImg)
        }
        setImage(null);
    }
    return (
        <>
            {image === null ? (
                <div className="my-2 rounded-md border-1  border-grey-1 bg-main px-4 py-12 flex flex-col items-center">
                    <div className={`${inter.className} flex flex-col items-center py-12 relative`}>
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
                </div>
            ) : (
                <div className="w-full h-full max-w-[372px] max-h-[302px] flex relative">
                    <Image fill={true} priority={false} src={image} alt="product" className="rounded-xl " />
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
                            <Button type="button" handleClick={handleDeleteImage} className="bg-secondary-300 text-white rounded-xl p-1.5  hover:bg-secondary-200 active:bg-secondary-600 text-white" icon={<Delete />} />
                        </label>

                    </div></div>
            )}
        </>
    )
};

export default AddImageProd;
