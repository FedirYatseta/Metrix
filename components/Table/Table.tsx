'use client'
import { inter } from "@/app/fonts";
import { Sort } from "@/image/image";
import React, { useState } from "react";
import Checkbox from "../CheckBox/Checkbox";


type Row = {
    id: number;
    name: string;
    date: string;
    type: string;
    track: string;
    sum: string;
    action: string;
    status: string;
};

const title = [
    { text: ' ', key: 'check' },
    { text: 'Customer Name', key: 'name' },
    { text: 'Order Date', key: 'date' },
    { text: 'Order Type', key: 'type' },
    { text: 'Tracking ID', key: 'track' },
    { text: 'Order Total', key: 'sum' },
    { text: 'Action', key: 'action' },
    { text: 'Status', key: 'status' },
];

const row: Row[] = [
    {
        id: 1,
        name: 'Janet Adebayo',
        date: '12 Aug 2022 - 12:25 am',
        type: 'Home Delivery',
        track: '9348fjr73',
        sum: '22,000.00',
        action: 'Completed',
        status: 'Completed'
    },
    {
        id: 2,
        name: 'Samuel Johnson',
        date: '12 Aug 2022 - 12:25 am',
        type: 'Pick Up',
        track: '9348fjr73',
        sum: '21,000.00',
        action: 'Completed',
        status: 'Completed'
    },
    {
        id: 3,
        name: 'Francis Doe',
        date: '12 Aug 2022 - 12:25 am',
        type: 'Pick Up',
        track: '9348fjr73',
        sum: '27,000.00',
        action: 'In-Progress',
        status: 'In-Progress'
    },
    {
        id: 4,
        name: 'Christian Dior',
        date: '12 Aug 2022 - 12:25 am',
        type: 'Home Delivery',
        track: '9348fjr73',
        sum: '26,000.00',
        action: 'Pending',
        status: 'Pending'
    },
    {
        id: 5,
        name: 'Christian Dior',
        date: '12 Aug 2022 - 12:25 am',
        type: 'Home Delivery',
        track: '9348fjr73',
        sum: '26,000.00',
        action: 'Pending',
        status: 'Pending'
    },
    {
        id: 6,
        name: 'Christian Dior',
        date: '12 Aug 2022 - 12:25 am',
        type: 'Home Delivery',
        track: '9348fjr73',
        sum: '26,000.00',
        action: 'Pending',
        status: 'Pending'
    },
    {
        id: 7,
        name: 'Christian Dior',
        date: '12 Aug 2022 - 12:25 am',
        type: 'Home Delivery',
        track: '9348fjr73',
        sum: '26,000.00',
        action: 'Pending',
        status: 'Pending'
    },
    {
        id: 8,
        name: 'Christian Dior',
        date: '12 Aug 2022 - 12:25 am',
        type: 'Home Delivery',
        track: '9348fjr73',
        sum: '26,000.00',
        action: 'Pending',
        status: 'Pending'
    },
    {
        id: 9,
        name: 'Christian Dior',
        date: '12 Aug 2022 - 12:25 am',
        type: 'Home Delivery',
        track: '9348fjr73',
        sum: '26,000.00',
        action: 'Pending',
        status: 'Pending'
    },
    {
        id: 10,
        name: 'Christian Dior',
        date: '12 Aug 2022 - 12:25 am',
        type: 'Home Delivery',
        track: '9348fjr73',
        sum: '26,000.00',
        action: 'Pending',
        status: 'Pending'
    },
    {
        id: 11,
        name: 'Christian Dior',
        date: '12 Aug 2022 - 12:25 am',
        type: 'Home Delivery',
        track: '9348fjr73',
        sum: '26,000.00',
        action: 'Pending',
        status: 'Pending'
    },

];

const Table = ({ height }: any) => {
    const [rows, setRows] = useState<Row[]>(row);
    const [checkAll, setCheckAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [sortColumn, setSortColumn] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const test = height.toString()
    console.log(test);

    const handleCheckboxChange = (id) => {
        const updatedSelectedRows = [...selectedRows];
        if (updatedSelectedRows.includes(id)) {
            updatedSelectedRows.splice(updatedSelectedRows.indexOf(id), 1);
        } else {
            updatedSelectedRows.push(id);
        }
        setSelectedRows(updatedSelectedRows);
    };

    const handleCheckboxChangeAll = () => {
        if (!checkAll) {
            const allIds = rows.map((row) => row.id);
            setSelectedRows(allIds);
        } else {
            setSelectedRows([]);
        }
        setCheckAll(!checkAll);
    };

    const handleSort = (columnKey: string) => {
        if (sortColumn === columnKey) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(columnKey);
            setSortDirection('asc');
        }
    };

    const sortedRows = [...rows].sort((a, b) => {
        const columnKey = sortColumn || 'id'; // Default to 'id' if sortColumn is null
        const valueA = (a[columnKey as keyof Row] || '').toString();
        const valueB = (b[columnKey as keyof Row] || '').toString();

        if (sortDirection === 'asc') {
            return valueA.localeCompare(valueB);
        } else {
            return valueB.localeCompare(valueA);
        }
    });


    return (
        < >
            <div className="pb-4 text-start">Customer Orders</div>
            <div className={`overflow-y-auto `} style={{ height: `${test}px` }}>
                <table className=" table-auto w-full border-collapse">
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
                    <tbody>
                        {sortedRows.map((item, key) => (
                            <tr key={key} className="h-12">
                                <td>
                                    <Checkbox
                                        checked={selectedRows.includes(item.id)}
                                        onChange={() => handleCheckboxChange(item.id)}
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.date}</td>
                                <td>{item.type}</td>
                                <td>{item.track}</td>
                                <td>{item.sum}</td>
                                <td>
                                    <select className="pr-8 pl-4 m-auto bg-black-200 opacity-50 rounded-lg"
                                        value={item.action}
                                        onChange={(e) => {
                                            const updatedRows = [...rows];
                                            updatedRows[key].action = e.target.value;
                                            setRows(updatedRows);
                                        }}
                                    >
                                        <option value="In-Progress">In-Progress</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Canceled">Canceled</option>
                                    </select>
                                </td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <div className={`${inter.className} border-t border-grey-1 w-full mt-1 py-2`}>
                <div className="flex items-center">
                    <select defaultValue={'10'} className="pr-7 pl-2 text-center p-1 bg-black-100 opacity-50 rounded-xl ">
                        <option className="mx-auto" value={'10'}>10</option>
                        <option className="mx-auto" value={'30'}>30</option>
                        <option className="mx-auto" value={'40'}>40</option>
                    </select>
                    <span className={`${inter.className} text-sm text text-black-200 mx-2`}> Items per page</span>
                    <span className="mx-2"> 1-10 of 200 items</span>
                </div>
            </div>
        </>
    );
};

export default Table;
