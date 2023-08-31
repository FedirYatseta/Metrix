import Image from "next/image";
import React from "react"
import Profile from '@/image/profile 1.png'

const Panel = () => {
    return (
        <div>
            <Image src={Profile} alt='profile' />
        </div>
    )
};

export default Panel;
