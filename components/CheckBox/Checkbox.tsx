import React from "react";

const Checkbox = ({ checked, onChange }: any) => {
  return (
    <div className="relative ">
      <input
        type="checkbox"
        id="A3-yes"
        name="A3-confirmation"
        checked={checked}
        onChange={onChange}
        value="yes"
        className="opacity-0 absolute inset-0 h-6 w-6  m-auto"
      />
      <div className="bg-white m-auto border rounded-lg border-black-100 w-6 h-6 flex flex-shrink-0 justify-center items-center focus-within:border-primary-0">
        <div className=" bg-primary-0 hidden border rounded-lg border-white w-full h-full flex flex-shrink-0 justify-center items-center">
          <svg
            className="fill-current w-3 h-3 text-primary-0 pointer-events-none"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="fi:check">
              <path
                id="Vector"
                d="M10 3L4.5 8.5L2 6"
                stroke="#B0CAD9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
