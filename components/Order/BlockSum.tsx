import { inter } from "@/styles/fonts";
import { Order } from "@/image/image";
import React from "react"

const BlockSum = ({ item }: any) => {
    return (
        <div className="bg-white rounded-xl xs:px-2 lg:px-4 xs:py-1 lg:py-3">
            <div className='flex items-center justify-between'>
                <div className='p-2 bg-secondary-400 rounded-md'>
                    {<item.image isActive={false} />}
                </div>
                <select defaultValue={'value1'} name='filter1' className={`xs:px-2 lg:px-4  xs:w-20 lg:w-32 ${inter.className} text-sm opacity-40`}>
                    <option selected value={'value1'}>This week</option>
                </select></div>
            <div className={`grid ${item.completed ? 'grid-cols-3 ' : 'grid-cols-2'}  gap-4 xs:pt-2 lg:pt-8`}>
                <div className='flex flex-col text-start'><span className={` ${inter.className} ${item.completed ? 'text-black-300' : 'text-danger'} xs:text-sm lg:text-md`}>{item?.orders}</span>  <span className="xs:text-sm lg:text-xl font-medium">0</span></div>
                <div className='flex flex-col text-start'> <span className={` ${inter.className} xs:text-sm lg:text-md text-black-300`}>{item?.pending}</span> <span className="xs:text-sm lg:text-xl font-medium">0</span></div>
                {item.completed && (<div className='flex flex-col text-start'> <span className={` ${inter.className} xs:text-sm lg:text-md text-black-300`}>{item?.completed}</span> <span className="xs:text-sm lg:text-xl font-medium">0</span></div>)}
            </div>
        </div>
    )
};

export default BlockSum;
