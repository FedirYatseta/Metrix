import Image from "next/image";
import React from "react"
import Profile from '@/image/profile 1.png'
import { Ring } from "@/image/image";
import { inter } from "@/app/fonts";

const Panel = () => {

    return (
        <div className="flex items-center">
            <select defaultValue={'value2'}
                name='shop'
                className={`${inter.className}  text-sm bg-secondary-200 px-3 py-2 rounded-xl  w-36`}>
                <option value="value1">Nanny’s Shop</option>
                <option value="value2" selected>Nanny’s Shop</option>
                <option value="value3">Nanny’s Shop</option>
            </select>
            <div className="px-4">    <Ring /> </div>

            <Image src={Profile} alt='profile' />
        </div>
    )
};

export default Panel;
