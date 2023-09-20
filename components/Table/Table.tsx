"use client";
import { inter } from "@/styles/fonts";
import {
  ArrLeft,
  ArrRight,
  DateIcon,
  FilterIcon,
  SearchInput,
  ShareIcon,
  Sort,
} from "@/image/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Checkbox from "../CheckBox/Checkbox";
import OutlineBtn from "../Button/outline";
import { Row, Copy } from "./interface";
import { options, row, title } from "./index.config";
import TableHeader from "./component/TableHeader";
import TableBody from "./component/TableBody";
import OutlineSelect from "../Select/outline";

const Table = () => {
  const [rows, setRows] = useState<Row[]>(row);
  const [state, setState] = useState<Copy>({ value: "", copied: false });

  const [checkAll, setCheckAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");



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
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  const sortedRows = [...rows].sort((a, b) => {
    const columnKey = sortColumn || "id"; // Default to 'id' if sortColumn is null
    const valueA = (a[columnKey as keyof Row] || "").toString();
    const valueB = (b[columnKey as keyof Row] || "").toString();

    if (sortDirection === "asc") {
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
  };

  return (
    <>
      <div className="pb-4 text-start flex justify-between xs:flex-col lg:flex-row items-center ">
        <h6 className={`${inter.className} font-medium`}>Customer Orders </h6>
        <div className="grid xs:grid-cols lg:grid-cols-6  gap-2 text-xs  xs:w-full lg:w-8/12">
          <label className="relative block border-0 h-full col-span-2">
            <span className="absolute inset-0 left-2 flex items-center ">
              <SearchInput />
            </span>
            <input
              className=" h-full rounded-md block py-1.5 px-9 w-full text-xs focus-within:hover:bg-hov focus:outline-none border border-black-100 "
              placeholder="Search"
            ></input>
          </label>
          <OutlineBtn icon={<FilterIcon />} name={"Filter"} />
          <OutlineBtn icon={<DateIcon />} name={"Date"} />
          <OutlineBtn icon={<ShareIcon />} name={"Share"} />
          <OutlineSelect
            handleChangeFc={() => { }}
            name={"Bulk Action"}
            options={options}
            className="flex items-center justify-center text-center border border-black-500 rounded-md py-1  whitespace-nowrap"
          />
        </div>
      </div>

      <div className="max-h-[calc(100vh-482px)] overflow-auto h-full">
        <table className=" table-auto w-full border-collapse  ">
          <TableHeader
            title={title}
            handleSort={handleSort}
            checkAll={checkAll}
            handleCheckboxChangeAll={handleCheckboxChangeAll}
          />
          <TableBody
            sortedRows={sortedRows}
            selectedRows={selectedRows}
            handleCheckboxChange={handleCheckboxChange}
            updateRowsInTable={updateRowsInTable}
            setState={setState}
          />
        </table>
      </div>
      <div
        className={`${inter.className} border-t border-grey-1 w-full  pt-3 grid grid-cols-2 justify-between items-center`}
      >
        <div className="flex justify-start items-center" >
          <div className=" block text-center  bg-[#5E636614]  text-sm rounded-lg px-2 relative">
            <OutlineSelect
              handleChangeFc={() => ({})}
              name={"10"}
              options={[
                { value: "10", label: "10" },
                { value: "20", label: "20" },
                { value: "30", label: "30" },
              ]}
              className=" block  py-0.5  text-sm  "
            />
          </div>
          <span
            className={`${inter.className} text-sm text text-black-200 mx-2 whitespace-nowrap`}
          >
            {" "}
            Items per page
          </span>
          <span className="mx-2"> 1-10 of 200 items</span>
        </div>

        <div className="flex justify-end items-center">
          <div className=" px-2  text-center  bg-[#5E636614]  text-sm rounded-lg">
            <OutlineSelect
              handleChangeFc={() => ({})}
              name={"10"}
              options={[
                { value: "10", label: "10" },
                { value: "20", label: "20" },
                { value: "30", label: "30" },
              ]}
              className="text-center  text-sm py-0.5 "
            />
          </div>
          <span
            className={`${inter.className} text-sm text text-black-200 mx-2 whitespace-nowrap`}
          >
            of 44 pages
          </span>
          <button className="p-1 mr-2">
            <ArrLeft />
          </button>
          <button className="p-1">
            <ArrRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;
