import React, { useState } from "react"

const SwitchControl = ({ handleClick, id }: any) => {

    const [checked, setChecked] = useState<boolean>(false);

    const switchHandler = () => {
        setChecked(!checked)
        handleClick(checked)
    }
    return (
        <label htmlFor={id} className="flex cursor-pointer select-none items-center">
            <div className="relative ">
                <input type="checkbox" id={id} className="sr-only" checked={checked} onChange={switchHandler} />
                <div className="block h-5 w-10 rounded-full bg-[#E5E7EB]"></div>
                <div className={`dot absolute  ${!checked ? 'left-1  bg-white top-1' : 'right-1  bg-primary-0 top-1'} top-1 h-3 w-3 rounded-full  duration-700 ease-in-out `}></div>
            </div>
        </label>

    )
};

export default SwitchControl;
