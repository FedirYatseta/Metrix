import { inter } from "@/app/fonts";
import { Order } from "@/image/image";
import React from "react"

const BlockSum = () => {
    return (
        <div className="bg-white rounded-xl px-4 py-3">
            <div className='flex items-center justify-between'>
                <div className='p-2 bg-secondary-400 rounded-md'>
                    <Order isActive={false} />
                </div>
                <select defaultValue={'value1'} name='filter1' className={`px-4 w-32 ${inter.className} text-sm opacity-40`}>
                    <option selected value={'value1'}>This week</option>
                </select></div>
            <div className='grid grid-cols-3 gap-4 pt-8'>
                <div className='flex flex-col text-start'><span className={` ${inter.className} text-md text-black-300`}>All Orders</span>  <span>0</span></div>
                <div className='flex flex-col text-start'> <span className={` ${inter.className} text-md text-black-300`}>Pending</span> <span>0</span></div>
                <div className='flex flex-col text-start'> <span className={` ${inter.className} text-md text-black-300`}>Completed</span> <span>0</span></div>
            </div>
        </div>
    )
};

export default BlockSum;
