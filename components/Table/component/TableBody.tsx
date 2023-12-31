import Checkbox from "@/components/CheckBox/Checkbox";
import React from "react";
import { TableBodyProps } from "./interfaces";
import { CopyIcon } from "@/image/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import OutlineSelect from "@/components/Select/outline";
import { options } from "../index.config";
import { inter } from "@/styles/fonts";
import Link from "next/link";

const TableBody: React.FC<TableBodyProps> = ({
  sortedRows,
  selectedRows,
  handleCheckboxChange,
  updateRowsInTable,
  setState,
  title, path
}) => {

  console.log('path', path)
  return (
    <tbody className={`overflow-y-auto `}>
      {sortedRows.map((item, keys) => {
        return (
          <tr key={keys} className={`${inter.className} h-12 text-black-400 text-sm`} >{
            title.map(({ key }, index) => {
              if (key === 'check') {
                return <td key={index}>
                  <Checkbox
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
              }
              if (key === 'email') {
                return <td key={index}> <span className=" cursor-pointer">{item.email}</span></td>
              }
              if (key === 'phone') {
                return <td key={index}> <span className="cursor-pointer">{item.phone}</span></td>
              }
              if (key === 'sum') {
                return <td key={index}> <span className=" cursor-pointer">{item.sum}</span></td>
              }
              if (key === 'name') {
                return <td key={index}><Link href={`${path}/${item.id} `}><span className="cursor-pointer">{item.name}</span> </Link> </td>
              }
              if (key === 'type') { return <td key={index}> <span className=" cursor-pointer">{item.type}</span></td> }
              if (key === 'date') {
                return <td key={index}> <span className=" cursor-pointer">{item.date}</span></td>
              }
              if (key === 'address') { return <td key={index}> <span className=" cursor-pointer">{item?.address?.city}</span></td> }

              if (key === 'status') {
                return <td key={index}>
                  {item.status === "Completed" ? (
                    <div>
                      <span className="text-success bg-[#32936F29] py-1 px-3 rounded-lg text-xs whitespace-nowrap">
                        {" "}
                        {item.status}
                      </span>{" "}
                    </div>
                  ) : item.status === "Pending" ? (
                    <div>
                      {" "}
                      <span className="text-black bg-secondary-300 py-1 px-3 rounded-lg text-xs whitespace-nowrap">
                        {item.status}{" "}
                      </span>
                    </div>
                  ) : item.status === "In-Progress" ? (
                    <div>
                      {" "}
                      <span className="text-primary-0 bg-primary-100 py-1 px-3 rounded-lg text-xs whitespace-nowrap">
                        {item.status}
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-danger bg-[#fcd8d6] py-1 px-3 rounded-lg text-xs whitespace-nowrap">
                        {" "}
                        {item.status}{" "}
                      </span>
                    </div>
                  )}
                </td>
              }
              if (key === 'action') {
                return <td key={index}>  <div className="bg-[#5E636614] rounded-lg text-xs px-2 py-1 whitespace-nowrap">
                  <OutlineSelect
                    name={item.action ?? ''}
                    handleChangeFc={updateRowsInTable}
                    options={options}
                    id={item.id}
                    className=""
                  />
                </div></td>
              }
              if (key === 'track') {
                return <td key={index}> <span className="flex items-center justify-center h-full">
                  {item.track}
                  <CopyToClipboard
                    text={item.track ?? ''}
                    onCopy={(e) => {
                      toast("Tracking ID Copied", { theme: "light" });
                      setState({ value: item.track ?? '', copied: true });
                    }}
                  >
                    <span className="cursor-pointer pl-2">
                      <CopyIcon />
                    </span>
                  </CopyToClipboard>
                </span></td>
              }
            })
          }
          </tr>
        )
      })}
    </tbody>

  );
};

export default TableBody;
