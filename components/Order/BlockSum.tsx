import { inter } from "@/styles/fonts";
import { Order } from "@/image/image";
import React from "react";
import OutlineSelect from "../Select/outline";

const BlockSum = ({ item, className }: any) => {


  return (
    <div className={`rounded-xl xs:px-2 lg:px-4 xs:py-2 lg:py-3  ${className?.bg || 'bg-white dark:bg-black-600'} `}>
      <div className="flex items-center justify-between">
        <div className={`p-2  ${className?.bgImage || 'bg-secondary-400 dark:bg-black-400'} rounded-md`}>
          {<item.image isActive={false} />}
        </div>
        {item?.select && <OutlineSelect
          handleChangeFc={() => ({})}
          name="Select week"
          options={[{ value: "Shop", label: "shop" }]}
          className={`${className?.color || 'text-black-200 bg-primary-300'}   text-sm`}
        />}

      </div>
      <div
        className={`grid ${item.completed ? "grid-cols-3 " : "grid-cols-2"
          }  gap-4 xs:pt-2 lg:pt-8`}
      >
        <div className="flex flex-col text-start">
          <span
            className={` ${inter.className} ${className?.titleColor} xs:text-sm lg:text-md dark:text-black-200`}
          >
            {item?.orders}
          </span>{" "}
          <span className={`xs:text-sm lg:text-xl font-medium ${className?.color}`}>{item?.sumCount || 0}</span>
        </div>
        <div className="flex flex-col text-start">
          {" "}
          <span
            className={` ${inter.className} ${className?.titleColor} xs:text-sm lg:text-md text-black-300 dark:text-black-200`}
          >
            {item?.pending}
          </span>{" "}
          <span className={`xs:text-sm lg:text-xl font-medium ${className?.color} `}>{item?.sumCount || 0}</span>
        </div>
        {item.completed && (
          <div className="flex flex-col text-start">
            {" "}
            <span
              className={` ${inter.className}  ${className?.titleColor} xs:text-sm lg:text-md text-black-300 dark:text-black-200`}
            >
              {item?.completed}
            </span>{" "}
            <span className={`${className?.color} xs:text-sm lg:text-xl font-medium`}>{item?.sumCount || 0}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlockSum;
