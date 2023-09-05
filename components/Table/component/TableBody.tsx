import Checkbox from "@/components/CheckBox/Checkbox";
import React from "react"
import { TableBodyProps } from "./interfaces";
import { CopyIcon } from "@/image/image";
import { CopyToClipboard } from 'react-copy-to-clipboard'


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
                                console.log(e)
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
                        <select className="pr-8 pl-4 py-1 m-auto bg-black-200 opacity-50 rounded-lg text-xs"
                            value={item.action}
                            onChange={(e) => updateRowsInTable(e, item.id)}
                        >
                            <option value="In-Progress">In-Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                            <option value="Canceled">Canceled</option>
                        </select>
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
