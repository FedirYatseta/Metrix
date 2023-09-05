'use client'
import { inter } from "@/app/fonts";
import { DateIcon, FilterIcon, SearchInput, ShareIcon, Sort } from "@/image/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Checkbox from "../CheckBox/Checkbox";
import OutlineBtn from "../Button/outline";
import { Row, Copy } from "./interface";
import { options, row, title } from "./index.config";
import TableHeader from "./component/TableHeader";
import TableBody from "./component/TableBody";
import OutlineSelect from "../Select/outline";


const Table = ({ height }: any) => {
    const [rows, setRows] = useState<Row[]>(row);
    const [state, setState] = useState<Copy>({ value: '', copied: false })


    const [checkAll, setCheckAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [sortColumn, setSortColumn] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const tableHeight = height.toString()


    const handleCheckboxChange = (id: any) => {
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

    const updateRowsInTable = (e: any, id: any) => {
        const updatedRows = [...rows];
        const indexToUpdate = updatedRows.findIndex((item) => item.id === id);

        if (indexToUpdate !== -1) {
            updatedRows[indexToUpdate].action = e.target.value;
            updatedRows[indexToUpdate].status = e.target.value;
        }

        setRows(updatedRows);
    }


    return (
        < >
            <div className="pb-4 text-start flex justify-between">
                <h6>Customer Orders </h6>
                <div className="flex text-xs">
                    <label className="relative block border-0">
                        <span className="absolute inset-0 left-2 flex items-center">
                            <SearchInput />
                        </span>
                        <input className="rounded-md block py-1.5 px-9 w-full text-xs focus-within:hover:bg-hov focus:outline-none border border-black-100 " placeholder="Search">
                        </input>
                    </label>
                    <OutlineBtn icon={<FilterIcon />} name={'Filter'} />
                    <OutlineBtn icon={<DateIcon />} name={'Date'} />
                    <OutlineBtn icon={<ShareIcon />} name={'Share'} />
                    <OutlineSelect handleChangeFc={() => { }} name={'Bulk Action'} options={options} className="flex items-center border border-black-500 rounded-md px-2 py-1 mx-2" />
                </div>
            </div>

            <div className={`overflow-y-auto `} style={{ height: `${tableHeight}px` }}>
                <table className=" table-auto w-full border-collapse">
                    <TableHeader title={title} handleSort={handleSort} checkAll={checkAll} handleCheckboxChangeAll={handleCheckboxChangeAll} />
                    <TableBody sortedRows={sortedRows} selectedRows={selectedRows} handleCheckboxChange={handleCheckboxChange} updateRowsInTable={updateRowsInTable} setState={setState} />
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
