import { inter } from "@/app/fonts";
import Checkbox from "@/components/CheckBox/Checkbox";
import { Sort } from "@/image/image";
import React from "react"
import { TableHeaderProps } from "./interfaces";

const TableHeader: React.FC<TableHeaderProps> = ({ title, handleSort, checkAll, handleCheckboxChangeAll }) => {
    return (
        <thead className=" h-4 ">
            <tr className="sticky top-0 z-10 bg-white ">
                {title.map((column, ind) => (
                    <th
                        key={ind}
                        className="h-12 cursor-pointer border-0"
                        onClick={() => handleSort(column.key)}

                    >
                        <span className={`${inter.className} border-y-2 border-grey-1 text-sm text-black-900 font-normal flex items-center justify-center h-full w-full `}>
                            {column.key === 'check' ? (
                                <Checkbox
                                    checked={checkAll}
                                    onChange={() => handleCheckboxChangeAll()}
                                />

                            ) : (
                                <>{column.text}
                                    <div className="px-2">
                                        <Sort />
                                    </div>
                                </>

                            )}
                        </span>
                    </th>
                ))}
            </tr>
        </thead>
    )
};

export default TableHeader;
