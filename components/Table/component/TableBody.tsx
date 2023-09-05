import Checkbox from "@/components/CheckBox/Checkbox";
import React from "react"
import { TableBodyProps } from "./interfaces";
import { CopyIcon } from "@/image/image";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from "react-toastify";
import OutlineSelect from "@/components/Select/outline";
import { options } from "../index.config";


const TableBody: React.FC<TableBodyProps> = ({ sortedRows, selectedRows, handleCheckboxChange, updateRowsInTable, setState }) => {
    return (
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
                    <td >
                        <span className="flex items-center justify-center h-full">
                            {item.track}
                            <CopyToClipboard text={item.track} onCopy={(e) => {
                                toast('Tracking ID Copied', { theme: 'light' })
                                setState({ value: item.track, copied: true })
                            }} >
                                <span className="cursor-pointer pl-2" >
                                    <CopyIcon />
                                </span>
                            </CopyToClipboard>
                        </span>
                    </td>
                    <td>{item.sum}</td>
                    <td>
                        <OutlineSelect
                            name={item.action}
                            handleChangeFc={updateRowsInTable}
                            options={options}
                            id={item.id}
                            className="bg-black-200  rounded-lg text-xs px-2 py-1" />

                    </td>
                    {item.status === 'Completed'
                        ? <td><span className="text-success bg-[#32936F29] py-1 px-3 rounded-lg text-xs"> {item.status}</span> </td> : item.status === 'Pending'
                            ? <td > <span className="text-black bg-secondary-300 py-1 px-3 rounded-lg text-xs">{item.status} </span></td> : item.status === 'In-Progress'
                                ? <td  > <span className="text-primary-0 bg-primary-100 py-1 px-3 rounded-lg text-xs">{item.status}</span></td>
                                : <td ><span className="text-danger bg-[#fcd8d6] py-1 px-3 rounded-lg text-xs"> {item.status} </span></td>}

                </tr>
            ))}
        </tbody>
    )
};

export default TableBody;
