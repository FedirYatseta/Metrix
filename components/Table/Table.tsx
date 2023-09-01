'use client'
import { inter } from "@/app/fonts";
import { Sort } from "@/image/image";
import React, { useState } from "react"


const title = [
    '0', 'Customer Name', 'Order Date', 'Order Type', 'Tracking ID', 'Order Total', 'Action', 'Status'
]
const row = [{
    id: 1, name: 'Janet Adebayo', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', track: '9348fjr73', sum: '₦25,000.00', action: 'Completed', status: 'Completed'
},
{
    id: 2, name: 'Janet Adebayo', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', track: '9348fjr73', sum: '₦25,000.00', action: 'Completed', status: 'Completed'
},
{
    id: 3, name: 'Janet Adebayo', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', track: '9348fjr73', sum: '₦25,000.00', action: 'Completed', status: 'Completed'
}
]

const Table = () => {
    const [rows, setRows] = useState(row);
    const [selectedRows, setSelectedRows] = useState([]);
    console.log(selectedRows);

    const handleCheckboxChange = (index) => {
        const updatedSelectedRows = [...selectedRows];
        if (updatedSelectedRows.includes(index)) {
            updatedSelectedRows.splice(updatedSelectedRows.indexOf(index), 1);
        } else {
            updatedSelectedRows.push(index);
        }
        setSelectedRows(updatedSelectedRows);
    };
    return (
        <>
            <div className="pb-4 text-start">Customer Orders</div>
            <table className="table-auto w-full">
                <thead className="border-y-2 border-grey-1 h-4">
                    <tr>
                        {title.map((text, ind) => (
                            <th key={ind} className="h-12">
                                <span className={`${inter.className} text-sm text-black-900 font-normal flex items-center justify-center `}>
                                    {text}
                                    {ind !== 0 && (
                                        <div className="px-2">
                                            <Sort />
                                        </div>
                                    )}
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((item, key) => (
                        <tr key={key} className="h-12">
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedRows.includes(item.id)}
                                    onChange={() => handleCheckboxChange(item.id)}
                                />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.type}</td>
                            <td>{item.track}</td>
                            <td>{item.sum}</td>
                            <td>{item.action}</td>
                            <td>{item.status}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
};

export default Table;
